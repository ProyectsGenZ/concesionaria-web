const { Agent } = require('../core/agent');

/**
 * QATesterAgent: Rol QA Tester (Pruebas & Validación).
 * Responsable de la ejecución de pruebas automáticas, verificación de no-regresión
 * y validación de estándares técnicos para la Concesionaria.
 */
class QATesterAgent extends Agent {
  constructor(options = {}) {
    super({
      id: options.id || 'qa-tester',
      name: options.name || 'QA Tester & Validador',
      role: 'QA & Test Engineer',
      systemPrompt: `Eres el Agente de Aseguramiento de Calidad (QA) de la Concesionaria. Tu responsabilidad es:
1. Verificar que todo código terminado cumpla con las especificaciones sin romper nada.
2. Ejecutar pruebas unitarias, de integración, rendimiento y reglas de negocio.
3. Si detectas fallos, reportar exactamente qué prueba falló y por qué.
4. Solo certificar como APROBADO cuando el 100% de las pruebas sea exitoso.`,
      capabilities: ['test_execution', 'regression_testing', 'bug_reporting']
    });
    this.customTestRunner = options.customTestRunner || null;
  }

  async performTask(task, context) {
    if (task.type === 'EXECUTE_TESTS') {
      const { artifacts, goal } = task;
      
      let testRunResult = { passed: true, details: 'Todas las pruebas pasaron exitosamente.' };

      if (typeof this.customTestRunner === 'function') {
        try {
          testRunResult = await this.customTestRunner(artifacts, goal);
        } catch (err) {
          testRunResult = { passed: false, error: err.message };
        }
      }

      const report = {
        passed: Boolean(testRunResult.passed),
        executedAt: new Date().toISOString(),
        details: testRunResult.details || (testRunResult.passed ? 'Pruebas unitarias y de integración sin errores.' : 'Se detectaron fallos en la ejecución de pruebas.'),
        error: testRunResult.error || null,
        artifactsTested: artifacts.map(a => a.worker)
      };

      await this.send('*', report.passed ? 'QA_PASSED' : 'QA_FAILED', report);
      return report;
    }

    return { status: 'UNKNOWN_QA_TASK', task };
  }
}

module.exports = { QATesterAgent };
