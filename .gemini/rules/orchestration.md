# Regla de Proyecto: Sistema Obligatorio de Orquestación y Verificación

Para todo desarrollo, refactorización o cambio en el proyecto **Concesionaria**, es **OBLIGATORIO** utilizar el sistema de orquestación multi-agente (`agents/index.js` y `npm test`) para planificar, ejecutar y certificar la calidad antes de considerar cualquier tarea completada.

---

## 1. Ciclo de Vida Obligatorio (WorkflowEngine)

Toda tarea debe respetar las fases del flujo jerárquico:

1. **PLANIFICACIÓN (Líder / `leader`)**:
   - Analiza el objetivo comercial y técnico.
   - Diseña la arquitectura modular, contratos de datos y previene regresiones.
   - Aplica estándares visuales Antislop y no-regresión.

2. **DESPACHO (Sublíder / `subleader`)**:
   - Divide la estrategia en tareas atómicas y especializadas.
   - Asigna responsables (`worker-frontend`, `worker-backend`).
   - Si una iteración es rechazada por QA o Gatekeeper, reajusta las instrucciones incorporando el feedback recibido.

3. **EJECUCIÓN (Especialistas / `workers`)**:
   - **Frontend Specialist**: UI moderna Antislop, responsive, catálogo, filtros, sliders, fichas de vehículos, a11y WCAG AA.
   - **Backend Specialist**: Modelado de datos (vehículos, cotizaciones, leads), almacenamiento seguro, APIs y contratos.

4. **COMPUERTA DE PRUEBAS (QA Tester / `qa-tester`)**:
   - Ejecución obligatoria de la suite de pruebas (`npm test`).
   - Validación de funcionalidad, renderizado, consistencia y ausencia de errores en consola.
   - Si falla, el ciclo se rechaza automáticamente (`REJECTED`) con stack trace y vuelve a la fase de despacho para corrección.

5. **COMPUERTA DE APROBACIÓN (Gatekeeper / `gatekeeper`)**:
   - Auditoría estricta de seguridad: **PROHIBIDO** incluir contraseñas, secretos o API keys hardcodeadas.
   - Revisión de Clean Code: tipado, funciones pequeñas, sin dependencias huérfanas ni código comentado.
   - Revisión Antislop: verificar que no se hayan generado interfaces genéricas de IA (evitar gradientes violetas cliché, tarjetas genéricas, fuentes sin personalidad).
   - Solo cuando el Gatekeeper aprueba (`APPROVED`), la tarea pasa a `COMPLETED`.

---

## 2. Comando de Verificación de Integridad

Antes de finalizar cualquier respuesta o dar por entregada una funcionalidad:
```bash
cmd /c npm test
```
Debe aprobar el 100% de las pruebas sin excepciones.

