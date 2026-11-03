const test = require('node:test');
const assert = require('node:assert/strict');
const {
  AgentOrchestrator,
  MessageBus,
  Agent,
  createFrontendWorker,
  createBackendWorker
} = require('../agents/index');

test('MessageBus: permite registro, mensajes directos y broadcast', async () => {
  const bus = new MessageBus();
  const logs = [];

  class SimpleAgent extends Agent {
    async onMessage(msg) { logs.push(`${this.id}:${msg.type}`); }
  }

  const a1 = new SimpleAgent({ id: 'a1', role: 'Tester' });
  const a2 = new SimpleAgent({ id: 'a2', role: 'Developer' });

  bus.registerAgent(a1);
  bus.registerAgent(a2);

  await bus.send('a1', 'a2', 'HELLO', { text: 'Hola a2' });
  assert.equal(logs.length, 1);
  assert.equal(logs[0], 'a2:HELLO');

  await bus.send('a1', '*', 'ANNOUNCEMENT', {});
  assert.equal(logs.length, 2);
  assert.equal(logs[1], 'a2:ANNOUNCEMENT');

  const history = bus.getAuditTrail();
  assert.equal(history.length, 2);
  assert.equal(history[0].from, 'a1');
  assert.equal(history[0].to, 'a2');
});

test('MessageBus: soporte de preguntas y respuestas asíncronas entre agentes (ask/reply)', async () => {
  const bus = new MessageBus();

  class SmartAgent extends Agent {
    async handleInquiry(question) {
      if (question.includes('color primario')) return '#0f172a';
      return 'desconocido';
    }
  }

  const agent1 = new Agent({ id: 'frontend', role: 'UI' });
  const agent2 = new SmartAgent({ id: 'brand', role: 'Branding' });

  bus.registerAgent(agent1);
  bus.registerAgent(agent2);

  const answer = await agent1.ask('brand', '¿Cuál es el color primario de la concesionaria?');
  assert.equal(answer, '#0f172a');
});

test('Orchestrator: flujo completo con Líder, Sublíder, Especialistas, QA y Aprobador', async () => {
  const events = [];
  const orchestrator = new AgentOrchestrator();

  orchestrator.on('workflow:state', data => events.push(data.state));
  orchestrator.on('workflow:approved', () => events.push('EVENT_APPROVED'));

  const result = await orchestrator.runGoal('Implementar módulo de catálogo de vehículos');

  assert.equal(result.approved, true);
  assert.equal(result.state, 'COMPLETED');
  assert.equal(result.qaReports.length, 1);
  assert.equal(result.qaReports[0].passed, true);
  assert.equal(result.reviewReports.length, 1);
  assert.equal(result.reviewReports[0].approved, true);

  assert.ok(events.includes('PLANNING'));
  assert.ok(events.includes('DISPATCHING'));
  assert.ok(events.includes('IN_PROGRESS'));
  assert.ok(events.includes('TESTING'));
  assert.ok(events.includes('CODE_REVIEW'));
  assert.ok(events.includes('EVENT_APPROVED'));
});

test('Quality Gate: QA rechaza en iteración 1 y aprueba en iteración 2 tras corrección', async () => {
  let attempt = 0;
  const orchestrator = new AgentOrchestrator({
    qa: {
      customTestRunner: async () => {
        attempt++;
        if (attempt === 1) {
          return { passed: false, error: 'Falla simulada: filtro de precios no actualiza grilla' };
        }
        return { passed: true, details: 'Corrección validada: filtro reactivo funcionando' };
      }
    }
  });

  const states = [];
  orchestrator.on('workflow:state', data => states.push(data.state));
  orchestrator.on('workflow:rejected_qa', () => states.push('QA_REJECTED'));

  const result = await orchestrator.runGoal('Implementar filtro dinámico de precios');

  assert.equal(result.approved, true);
  assert.equal(result.iteration, 2);
  assert.equal(result.qaReports.length, 2);
  assert.equal(result.qaReports[0].passed, false);
  assert.equal(result.qaReports[1].passed, true);
  assert.ok(states.includes('QA_REJECTED'));
});

test('Gatekeeper Gate: Gatekeeper rechaza por falta de seguridad y aprueba tras corrección', async () => {
  let attempt = 0;
  const orchestrator = new AgentOrchestrator({
    gatekeeper: {
      customReviewer: async () => {
        attempt++;
        if (attempt === 1) {
          return { approved: false, observations: ['Detectada API key en frontend sin variable de entorno'] };
        }
        return { approved: true, observations: [] };
      }
    }
  });

  const states = [];
  orchestrator.on('workflow:state', data => states.push(data.state));
  orchestrator.on('workflow:rejected_gatekeeper', () => states.push('GATEKEEPER_REJECTED'));

  const result = await orchestrator.runGoal('Verificar integración de formulario con WhatsApp');

  assert.equal(result.approved, true);
  assert.equal(result.iteration, 2);
  assert.equal(result.reviewReports[0].approved, false);
  assert.equal(result.reviewReports[1].approved, true);
  assert.ok(states.includes('GATEKEEPER_REJECTED'));
});
