/**
 * WorkflowState: Estados válidos en el ciclo de vida de una tarea orquestada.
 */
const WorkflowState = {
  SUBMITTED: 'SUBMITTED',       // Requerimiento inicial recibido
  PLANNING: 'PLANNING',         // Líder diseñando arquitectura y alcance
  DISPATCHING: 'DISPATCHING',   // Sublíder dividiendo y asignando a especialistas
  IN_PROGRESS: 'IN_PROGRESS',   // Especialistas desarrollando los cambios
  TESTING: 'TESTING',           // QA Tester ejecutando suites de pruebas
  CODE_REVIEW: 'CODE_REVIEW',   // Aprobador auditando calidad y seguridad
  APPROVED: 'APPROVED',         // Aprobado formalmente
  REJECTED: 'REJECTED',         // Rechazado (vuelve a etapa previa con feedback)
  COMPLETED: 'COMPLETED'        // Entregado con éxito
};

class WorkflowEngine {
  constructor({ bus, agents = {} }) {
    this.bus = bus;
    this.agents = agents; // { leader, subleader, qa, gatekeeper, workers: [] }
    this.currentCycle = null;
    this.history = [];
  }

  async run({ goal, requirements = {}, maxIterations = 3 }) {
    const cycleId = 'cycle_' + Date.now().toString(36);
    const cycle = {
      id: cycleId,
      goal,
      requirements,
      state: WorkflowState.SUBMITTED,
      iteration: 1,
      maxIterations,
      plan: null,
      tasks: [],
      artifacts: [],
      qaReports: [],
      reviewReports: [],
      approved: false,
      startTime: new Date().toISOString(),
      endTime: null
    };

    this.currentCycle = cycle;
    this.history.push(cycle);

    // 1. Etapa de Planificación (Líder)
    cycle.state = WorkflowState.PLANNING;
    this.bus.emit('workflow:state', { state: cycle.state, cycleId });
    cycle.plan = await this.agents.leader.executeTask({ type: 'ARCHITECT_PLAN', goal, requirements });

    // 2. Etapa de Despacho y Ejecución
    while (cycle.iteration <= cycle.maxIterations && !cycle.approved) {
      cycle.state = WorkflowState.DISPATCHING;
      this.bus.emit('workflow:state', { state: cycle.state, cycleId, iteration: cycle.iteration });
      
      const dispatchPlan = await this.agents.subleader.executeTask({
        type: 'DISPATCH_TASKS',
        plan: cycle.plan,
        iteration: cycle.iteration,
        previousFeedback: cycle.reviewReports[cycle.reviewReports.length - 1] || null
      });

      cycle.state = WorkflowState.IN_PROGRESS;
      this.bus.emit('workflow:state', { state: cycle.state, cycleId });

      // Ejecutar tareas de los especialistas
      const executionOutputs = [];
      for (const item of dispatchPlan.tasks) {
        const worker = this.agents.workers.find(w => w.id === item.assignee || w.role === item.role);
        if (!worker) throw new Error(`No se encontró un especialista para la tarea: ${item.name} (${item.assignee || item.role})`);
        
        const output = await worker.executeTask(item, { goal, plan: cycle.plan });
        executionOutputs.push({ task: item, worker: worker.id, output });
      }
      cycle.artifacts.push(...executionOutputs);

      // 3. Etapa de Pruebas (QA Tester)
      cycle.state = WorkflowState.TESTING;
      this.bus.emit('workflow:state', { state: cycle.state, cycleId });
      
      const qaResult = await this.agents.qa.executeTask({
        type: 'EXECUTE_TESTS',
        artifacts: executionOutputs,
        goal
      });
      cycle.qaReports.push(qaResult);

      if (!qaResult.passed) {
        // Falló QA: notificar y reintentar si no superó iteraciones
        cycle.state = WorkflowState.REJECTED;
        this.bus.emit('workflow:rejected_qa', { qaResult, iteration: cycle.iteration });
        cycle.iteration++;
        continue;
      }

      // 4. Etapa de Auditoría y Aprobación (Gatekeeper)
      cycle.state = WorkflowState.CODE_REVIEW;
      this.bus.emit('workflow:state', { state: cycle.state, cycleId });

      const reviewResult = await this.agents.gatekeeper.executeTask({
        type: 'AUDIT_CODE_AND_QUALITY',
        artifacts: executionOutputs,
        qaResult,
        goal
      });
      cycle.reviewReports.push(reviewResult);

      if (reviewResult.approved) {
        cycle.state = WorkflowState.APPROVED;
        cycle.approved = true;
        this.bus.emit('workflow:approved', { reviewResult });
        break;
      } else {
        cycle.state = WorkflowState.REJECTED;
        this.bus.emit('workflow:rejected_gatekeeper', { reviewResult, iteration: cycle.iteration });
        cycle.iteration++;
      }
    }

    cycle.endTime = new Date().toISOString();
    if (cycle.approved) {
      cycle.state = WorkflowState.COMPLETED;
    } else {
      throw new Error(`El flujo de agentes no pudo ser aprobado tras ${cycle.maxIterations} iteraciones.`);
    }

    return cycle;
  }
}

module.exports = { WorkflowState, WorkflowEngine };
