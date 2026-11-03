# Contexto del Proyecto: Concesionaria Web (STUDIO MOTORS)

**Última actualización:** 03/11/2026  
**Estado:** Frontend React + Vite + Tailwind CSS v4 operativo en `http://localhost:3000/`.

---

## 1. Arquitectura y Stack Tecnológico

- **Frontend**: React 19 + Vite 8 + Tailwind CSS v4 + Lucide React.
- **Estilo**: Opción A ("Porsche Studio & Gallery") monocromático de alto impacto y contraste (B&W + Zinc/Slate).
- **Sistema de Orquestación Multi-Agente (`agents/`)**:
  - `MessageBus`, `WorkflowEngine`, `AgentOrchestrator`.
  - Roles: `leader`, `subleader`, `worker-frontend`, `worker-backend`, `qa-tester`, `gatekeeper`.
  - Verificación: 5/5 tests aprobados (`cmd /c npm test`).

---

## 2. Componentes Implementados

1. **`Header.jsx`**:
   - Barra superior con estado de Concierge en vivo y teléfono directo.
   - Navegación fija traslúcida (*backdrop-blur*) con logotipo tipográfico y botón prioritario a WhatsApp.
2. **`Hero.jsx`**:
   - Presentación de vehículo insignia (Porsche 911 Carrera GTS 2024).
   - Telemetría visual de rendimiento (480 HP, 3.3s 0-100, 100% inspeccionado).
   - Botón directo de reserva y exploración de inventario.
3. **`Catalog.jsx`**:
   - Filtros dinámicos por estado (`Todos`, `0 KM`, `Seleccionados`) y carrocería (`Coupé & Sport`, `SUV`).
   - Buscador predictivo en tiempo real y selector por marcas y ordenamiento.
   - Tarjetas 16:9 con fotografía de estudio, tira técnica (HP, 0-100, Km, Caja), precio contado y cuota mensual estimada.
4. **`VehicleModal.jsx`**:
   - Drawer/Modal de inspección técnica en profundidad con selector de galería, ficha técnica de motorización, lista de equipamiento de serie y opcionales, y botón de visita/cotización.
5. **`FinancingCalculator.jsx`**:
   - Simulador privado con sliders de valor del vehículo y anticipo (20% a 70%), selector de cuotas (12, 24, 36, 48 meses) y cálculo reactivo en tiempo real.
6. **`TradeInForm.jsx`**:
   - Formulario de tasación de usados "llave contra llave" conectado a WhatsApp.
7. **`TrustBadges.jsx`**:
   - Sellos de inspección en 180 puntos, dominio verificado ante escribano, garantía mecánica y entrega llave en mano.
8. **`Footer.jsx`**:
   - Datos del showroom en Vicente López (Av. del Libertador), horarios, canales de atención y seguridad jurídica.

---

## 3. Verificaciones y Estado de Ejecución

- `npm run build`: Compilación limpia en ~300ms sin advertencias.
- `cmd /c npm test`: 5/5 pruebas unitarias y de orquestación aprobadas.
- Servidor de desarrollo local activo: `http://localhost:3000/`.
