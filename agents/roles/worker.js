const { Agent } = require('../core/agent');

/**
 * WorkerAgent: Especialistas operativos (Frontend, Backend, etc.).
 * Capaz de consultar a otros especialistas mientras trabaja.
 */
class WorkerAgent extends Agent {
  constructor({ id, name, role, systemPrompt, capabilities, taskHandler }) {
    super({ id, name, role, systemPrompt, capabilities });
    this.taskHandler = taskHandler || null;
  }

  async performTask(task, context) {
    if (typeof this.taskHandler === 'function') {
      return this.taskHandler(task, context, this);
    }

    return {
      worker: this.id,
      task: task.name,
      status: 'DONE',
      timestamp: new Date().toISOString(),
      summary: `Tarea "${task.name}" completada por ${this.name} (${this.role}).`
    };
  }
}

function createFrontendWorker(options = {}) {
  return new WorkerAgent({
    id: options.id || 'worker-frontend',
    name: options.name || 'Especialista Frontend & Antislop UI',
    role: 'Frontend & UI-UX Engineer',
    systemPrompt: `Eres el Especialista Frontend y UI/UX de la Concesionaria. Tu responsabilidad es:
1. Diseñar y maquetar interfaces según la identidad automotriz: catálogo con filtros avanzados, fichas técnicas, cotizador y simulador de cuotas.
2. Aplicar principios Antislop: paletas de color con carácter, tipografía intencional, ritmo visual rico y microinteracciones de alta fidelidad.
3. Garantizar diseño responsive mobile-first, accesibilidad WCAG AA y rendimiento CWV óptimo.
4. Consultar con Backend contratos de datos y APIs.`,
    capabilities: ['ui_design', 'antislop_styling', 'html_css', 'responsive_layout', 'a11y'],
    taskHandler: options.taskHandler
  });
}

function createBackendWorker(options = {}) {
  return new WorkerAgent({
    id: options.id || 'worker-backend',
    name: options.name || 'Especialista Backend & Catálogo',
    role: 'Backend & Data Systems Engineer',
    systemPrompt: `Eres el Especialista Backend y de Datos de la Concesionaria. Tu responsabilidad es:
1. Desarrollar el modelo de datos de vehículos (marca, modelo, año, kilometraje, combustible, transmisión, precio, galería, equipamiento).
2. Implementar endpoints, lógica de cotización, persistencia en Firestore o SQLite/JSON desacoplado.
3. Garantizar seguridad en reglas de acceso y proveer contratos claros al frontend.`,
    capabilities: ['backend_apis', 'database_modeling', 'firestore', 'security_rules'],
    taskHandler: options.taskHandler
  });
}

module.exports = { WorkerAgent, createFrontendWorker, createBackendWorker };

