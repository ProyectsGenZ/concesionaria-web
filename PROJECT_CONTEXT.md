# Contexto del Proyecto: Concesionaria Web

**Última actualización:** 03/11/2026  
**Estado:** Inicializado con Sistema de Orquestación y Reglas Antislop

---

## 1. Arquitectura y Orquestación

- **Sistema de Orquestación Multi-Agente (`agents/`)**:
  - `MessageBus`: Bus de eventos con mensajería directa, consultas asíncronas `ask/reply` y trazabilidad de auditoría.
  - `WorkflowEngine`: Máquina de estados jerárquica con compuertas de calidad (`SUBMITTED` -> `PLANNING` -> `DISPATCHING` -> `IN_PROGRESS` -> `TESTING` -> `CODE_REVIEW` -> `APPROVED`).
  - **Roles**:
    - **Líder (`leader`)**: Arquitecto jefe y planificador estratégico.
    - **Sublíder (`subleader`)**: Desglose técnico y coordinación de tareas.
    - **Especialistas (`worker-frontend`, `worker-backend`)**: Ejecución operativa.
    - **QA Tester (`qa-tester`)**: Validador automático de pruebas unitarias y de integración.
    - **Gatekeeper (`gatekeeper`)**: Guardián de seguridad, Clean Code y estándares Antislop UI.
- **Suite de Pruebas**:
  - `tests/orchestrator.test.js`: 5/5 pruebas automáticas aprobadas (`cmd /c npm test`).

---

## 2. Reglas de Diseño Antislop y UI/UX Automotriz

- **Filosofía**: Evitar el aspecto genérico de IA ("AI slop").
- **Paleta de Colores**: Neutros profundos (Zinc / Slate carbón), acentos mecánicos o deportivos (ámbar ámbar cálido, carmín sobrio o cian metálico de precisión), tipografías con carácter e impacto (ej. *Cabinet Grotesk*, *Syne*, *Plus Jakarta Sans*, *Outfit* o *Geist*).
- **Componentes automotrices clave**:
  - Hero inmersivo con vehículo destacado, llamada a la acción clara y selector rápido de inventario.
  - Catálogo interactivo con filtros dinámicos (Marca, Modelo, Año, Combustible, Rango de Precio, Tipo de Carrocería, Transmisión, 0km / Usados).
  - Ficha técnica de detalle con galería fotográfica de alta resolución / lightbox y specs detalladas.
  - Simulador interactivo de cuotas y financiación.
  - Botón de conversión rápida a WhatsApp con mensaje precargado del vehículo de interés.
  - Formulario de cotización / test drive con validación estricta y feedback accesible.

---

## 3. Estado de Verificaciones

- `cmd /c npm test`: **5/5 tests aprobados** (0 errores).
- Git: Repositorio inicializado.

