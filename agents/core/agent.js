/**
 * Agent: Clase base para entidades autónomas en el sistema de orquestación de la Concesionaria.
 */
class Agent {
  constructor({ id, name, role, systemPrompt, capabilities = [] }) {
    if (!id || !role) throw new Error('Un agente debe tener al menos id y rol.');
    this.id = id;
    this.name = name || id;
    this.role = role;
    this.systemPrompt = systemPrompt || '';
    this.capabilities = new Set(capabilities);
    this.bus = null;
    this.inbox = [];
    this.state = 'IDLE'; // IDLE, WORKING, WAITING, COMPLETED, ERROR
    this.taskHistory = [];
  }

  async send(to, type, payload) {
    if (!this.bus) throw new Error(`El agente ${this.id} no está conectado a ningún MessageBus.`);
    return this.bus.send(this.id, to, type, payload);
  }

  async ask(to, question, timeoutMs) {
    if (!this.bus) throw new Error(`El agente ${this.id} no está conectado a ningún MessageBus.`);
    return this.bus.ask(this.id, to, question, timeoutMs);
  }

  async reply(originalMessage, answer) {
    if (!this.bus) throw new Error(`El agente ${this.id} no está conectado a ningún MessageBus.`);
    return this.bus.reply(originalMessage, answer);
  }

  async receive(message) {
    this.inbox.push(message);

    // Consulta directa ask/reply
    if (message.type === 'INQUIRY') {
      const answer = await this.handleInquiry(message.payload.question, message);
      await this.reply(message, answer);
      return;
    }

    return this.onMessage(message);
  }

  async handleInquiry(question, message) {
    return `[${this.name} (${this.role})]: Recibí tu consulta: "${question}". Procesado correctamente.`;
  }

  async onMessage(message) {
    // Hook para mensajes entrantes
  }

  async executeTask(task, context = {}) {
    this.state = 'WORKING';
    try {
      const result = await this.performTask(task, context);
      this.taskHistory.push({ task, result, status: 'SUCCESS', timestamp: new Date().toISOString() });
      this.state = 'COMPLETED';
      return result;
    } catch (error) {
      this.taskHistory.push({ task, error: error.message, status: 'FAILED', timestamp: new Date().toISOString() });
      this.state = 'ERROR';
      throw error;
    }
  }

  async performTask(task, context) {
    throw new Error(`performTask debe ser implementado por el agente ${this.id}.`);
  }
}

module.exports = { Agent };
