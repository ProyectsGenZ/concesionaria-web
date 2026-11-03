const { Agent } = require('../core/agent');

/**
 * SubleaderAgent: Rol Sublíder (Tech Lead / Task Dispatcher).
 * Responsable de la coordinación táctica, división en tareas atómicas y resolución de bloqueos.
 */
class SubleaderAgent extends Agent {
  constructor(options = {}) {
    super({
      id: options.id || 'subleader',
      name: options.name || 'Coordinador Técnico (Tech Lead)',
      role: 'Tech Lead & Task Dispatcher',
      systemPrompt: `Eres el Sublíder Técnico del equipo de la Concesionaria. Tu responsabilidad es:
1. Tomar el plan estratégico del Líder y desglosarlo en tareas atómicas.
2. Asignar cada tarea al especialista correspondiente (Frontend, Backend, etc.).
3. Facilitar la comunicación y resolver dudas técnicas entre agentes.
4. Si QA o el Aprobador rechazan un cambio, reformular las tareas con el feedback recibido.`,
      capabilities: ['task_decomposition', 'workload_dispatch', 'agent_coordination']
    });
  }

  async performTask(task, context) {
    if (task.type === 'DISPATCH_TASKS') {
      const { plan, iteration, previousFeedback } = task;
      
      const tasks = [
        {
          id: `task_fe_${iteration}`,
          name: 'Implementación UI / Interacción Concesionaria',
          role: 'Frontend Specialist',
          assignee: 'worker-frontend',
          instructions: `Desarrollar vistas y componentes según el objetivo: ${plan.goal}` + (previousFeedback ? ` Atender feedback previo: ${JSON.stringify(previousFeedback)}` : '')
        },
        {
          id: `task_be_${iteration}`,
          name: 'Lógica de Datos y Catálogo',
          role: 'Backend Specialist',
          assignee: 'worker-backend',
          instructions: `Desarrollar servicios, catálogo de vehículos y APIs para: ${plan.goal}` + (previousFeedback ? ` Atender feedback previo: ${JSON.stringify(previousFeedback)}` : '')
        }
      ];

      await this.send('*', 'TASKS_DISPATCHED', { iteration, taskCount: tasks.length });
      return { iteration, tasks };
    }

    return { status: 'UNKNOWN_SUBLEADER_TASK', task };
  }
}

module.exports = { SubleaderAgent };

