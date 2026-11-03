/**
 * MessageBus: Bus de comunicación asíncrono para agentes.
 * Soporta mensajería directa, consultas bidireccionales (ask/reply), eventos y registro de auditoría.
 */
class MessageBus {
  constructor() {
    this.agents = new Map();
    this.history = [];
    this.listeners = new Map();
    this.pendingQuestions = new Map();
  }

  registerAgent(agent) {
    if (!agent || !agent.id) throw new Error('El agente debe tener un id válido.');
    this.agents.set(agent.id, agent);
    agent.bus = this;
  }

  unregisterAgent(agentId) {
    this.agents.delete(agentId);
  }

  getAgent(agentId) {
    return this.agents.get(agentId);
  }

  on(event, handler) {
    if (!this.listeners.has(event)) this.listeners.set(event, new Set());
    this.listeners.get(event).add(handler);
    return () => this.listeners.get(event)?.delete(handler);
  }

  emit(event, data) {
    const handlers = this.listeners.get(event);
    if (handlers) {
      for (const handler of handlers) {
        try { handler(data); } catch (err) { console.error(`Error en listener de evento ${event}:`, err); }
      }
    }
  }

  async send(from, to, type, payload = {}) {
    const message = {
      id: 'msg_' + Math.random().toString(36).slice(2, 10),
      from,
      to,
      type,
      payload,
      timestamp: new Date().toISOString()
    };

    this.history.push(message);
    this.emit('message', message);

    if (to === '*' || to === 'all') {
      const promises = [];
      for (const [id, agent] of this.agents.entries()) {
        if (id !== from) promises.push(agent.receive(message));
      }
      await Promise.all(promises);
      return message;
    }

    const recipient = this.agents.get(to);
    if (!recipient) {
      throw new Error(`Destinatario no encontrado: ${to}`);
    }

    await recipient.receive(message);
    return message;
  }

  async ask(from, to, question, timeoutMs = 15000) {
    const correlationId = 'req_' + Math.random().toString(36).slice(2, 10);
    const promise = new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pendingQuestions.delete(correlationId);
        reject(new Error(`Tiempo de espera agotado (${timeoutMs}ms) esperando respuesta de ${to}`));
      }, timeoutMs);

      this.pendingQuestions.set(correlationId, { resolve, reject, timer });
    });

    await this.send(from, to, 'INQUIRY', { question, correlationId });
    return promise;
  }

  async reply(originalMessage, answer) {
    const correlationId = originalMessage.payload?.correlationId;
    if (correlationId && this.pendingQuestions.has(correlationId)) {
      const pending = this.pendingQuestions.get(correlationId);
      clearTimeout(pending.timer);
      this.pendingQuestions.delete(correlationId);
      pending.resolve(answer);
    }

    return this.send(originalMessage.to, originalMessage.from, 'ANSWER', {
      replyTo: originalMessage.id,
      correlationId,
      answer
    });
  }

  getAuditTrail(filter = {}) {
    return this.history.filter(msg => {
      if (filter.from && msg.from !== filter.from) return false;
      if (filter.to && msg.to !== filter.to) return false;
      if (filter.type && msg.type !== filter.type) return false;
      return true;
    });
  }
}

module.exports = { MessageBus };
