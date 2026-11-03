const { MessageBus } = require('./core/message-bus');
const { WorkflowEngine } = require('./core/workflow');
const { LeaderAgent } = require('./roles/leader');
const { SubleaderAgent } = require('./roles/subleader');
const { QATesterAgent } = require('./roles/qa-tester');
const { GatekeeperAgent } = require('./roles/gatekeeper');
const { createFrontendWorker, createBackendWorker } = require('./roles/worker');

/**
 * AgentOrchestrator: Fachada principal del sistema de orquestación de la Concesionaria.
 * Inicializa la red de agentes, el bus de mensajería y la máquina de estados.
 */
class AgentOrchestrator {
  constructor(options = {}) {
    this.bus = new MessageBus();

    this.leader = new LeaderAgent(options.leader);
    this.subleader = new SubleaderAgent(options.subleader);
    this.qa = new QATesterAgent(options.qa);
    this.gatekeeper = new GatekeeperAgent(options.gatekeeper);

    this.frontendWorker = options.frontendWorker || createFrontendWorker();
    this.backendWorker = options.backendWorker || createBackendWorker();

    this.workers = options.customWorkers || [this.frontendWorker, this.backendWorker];

    // Registrar todos los agentes en el bus
    [this.leader, this.subleader, this.qa, this.gatekeeper, ...this.workers].forEach(agent => {
      this.bus.registerAgent(agent);
    });

    this.workflow = new WorkflowEngine({
      bus: this.bus,
      agents: {
        leader: this.leader,
        subleader: this.subleader,
        qa: this.qa,
        gatekeeper: this.gatekeeper,
        workers: this.workers
      }
    });
  }

  on(event, handler) {
    return this.bus.on(event, handler);
  }

  async runGoal(goal, requirements = {}) {
    return this.workflow.run({ goal, requirements });
  }

  getAuditTrail(filter) {
    return this.bus.getAuditTrail(filter);
  }

  getAgents() {
    return {
      leader: this.leader,
      subleader: this.subleader,
      qa: this.qa,
      gatekeeper: this.gatekeeper,
      workers: this.workers
    };
  }
}

module.exports = { AgentOrchestrator };

