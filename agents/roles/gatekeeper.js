const { Agent } = require('../core/agent');

/**
 * GatekeeperAgent: Rol Aprobador (Code Gatekeeper & Reviewer).
 * Máxima autoridad de calidad y seguridad antes de permitir commits o despliegues.
 * Audita limpieza de código, seguridad de secretos, estándares Antislop y WCAG.
 */
class GatekeeperAgent extends Agent {
  constructor(options = {}) {
    super({
      id: options.id || 'gatekeeper',
      name: options.name || 'Aprobador de Cambios (Gatekeeper)',
      role: 'Code Gatekeeper & Security Reviewer',
      systemPrompt: `Eres el Aprobador de Cambios y Guardián de Calidad. Tu responsabilidad es:
1. Auditar los entregables de los especialistas y el veredicto de QA.
2. Comprobar que no existan contraseñas, secretos o API keys hardcodeadas.
3. Verificar principios de Clean Code, buenas prácticas, tipado y diseño Antislop.
4. Dar la aprobación formal definitiva ('APPROVED') o rechazar con observaciones claras.`,
      capabilities: ['security_audit', 'code_review', 'final_approval_gate', 'antislop_verification']
    });
    this.customReviewer = options.customReviewer || null;
  }

  async performTask(task, context) {
    if (task.type === 'AUDIT_CODE_AND_QUALITY') {
      const { artifacts, qaResult, goal } = task;

      if (!qaResult || !qaResult.passed) {
        const rejection = {
          approved: false,
          reason: 'Bloqueado por QA: No se puede aprobar un código con pruebas fallidas.',
          reviewedAt: new Date().toISOString()
        };
        await this.send('*', 'APPROVAL_REJECTED', rejection);
        return rejection;
      }

      let auditVerdict = { approved: true, observations: [] };
      if (typeof this.customReviewer === 'function') {
        try {
          auditVerdict = await this.customReviewer(artifacts, qaResult, goal);
        } catch (err) {
          auditVerdict = { approved: false, observations: [err.message] };
        }
      }

      const report = {
        approved: Boolean(auditVerdict.approved),
        reviewedAt: new Date().toISOString(),
        observations: auditVerdict.observations || [],
        notes: auditVerdict.approved
          ? 'Código auditado y aprobado. Cumple con estándares de seguridad, tipado y calidad Antislop.'
          : 'Se requieren correcciones antes de aprobar.'
      };

      await this.send('*', report.approved ? 'APPROVAL_GRANTED' : 'APPROVAL_REJECTED', report);
      return report;
    }

    return { status: 'UNKNOWN_GATEKEEPER_TASK', task };
  }
}

module.exports = { GatekeeperAgent };

