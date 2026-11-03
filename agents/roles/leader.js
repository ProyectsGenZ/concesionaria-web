const { Agent } = require('../core/agent');

/**
 * LeaderAgent: Rol Líder (Director / Chief Architect).
 * Responsable de la visión estratégica, diseño de arquitectura y especificación global para la Concesionaria.
 */
class LeaderAgent extends Agent {
  constructor(options = {}) {
    super({
      id: options.id || 'leader',
      name: options.name || 'Arquitecto Líder (Concesionaria)',
      role: 'Chief Architect & Director',
      systemPrompt: `Eres el Arquitecto Líder del proyecto de la Concesionaria. Tu responsabilidad es:
1. Analizar el requerimiento comercial o técnico.
2. Definir una arquitectura limpia, modular, de carga ultrarrápida y libre de regresiones.
3. Formular un plan de acción estratégico desglosado por áreas funcionales (UI, Catálogo, Filtros, Financiación, Integraciones).
4. Asegurar que la solución final cumpla con los estándares visuales Antislop y no-regresión.`,
      capabilities: ['architecture_design', 'strategic_planning', 'scope_definition', 'antislop_guidance']
    });
  }

  async performTask(task, context) {
    if (task.type === 'ARCHITECT_PLAN') {
      const plan = {
        title: `Plan Estratégico Concesionaria: ${task.goal}`,
        goal: task.goal,
        timestamp: new Date().toISOString(),
        architectureOverview: `Estrategia modular para cumplir con: ${task.goal}. Cumpliendo estándares de clean code, Antislop UI y no-regresión.`,
        phases: [
          { phase: 1, name: 'Desarrollo Frontend / Backend', description: 'Implementación de componentes, catálogo o servicios.' },
          { phase: 2, name: 'Verificación QA', description: 'Ejecución de pruebas unitarias, de integración y rendimiento.' },
          { phase: 3, name: 'Compuerta de Aprobación', description: 'Auditoría de seguridad, accesibilidad y calidad antes de entrega.' }
        ]
      };

      await this.send('*', 'PLAN_PUBLISHED', { plan });
      return plan;
    }

    return { status: 'UNKNOWN_LEADER_TASK', task };
  }
}

module.exports = { LeaderAgent };
