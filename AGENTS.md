# Continuidad del Proyecto Concesionaria

- Al iniciar una sesión, leer `PROJECT_CONTEXT.md`. Es el resumen vivo del proyecto y la arquitectura.
- Comprobar `git status --short` antes de editar.
- **Regla de Orquestación Obligatoria**: Todo cambio debe someterse al flujo de orquestación (`agents/`) y pasar el 100% de los tests (`cmd /c npm test`).
- **Diseño Antislop & Modern UI/UX**: Prohibido usar patrones genéricos de IA (gradientes violeta/azul cliché, tipografía Inter sin jerarquía, tarjetas bento idénticas). Diseñar con identidad automotriz contundente, paletas ricas (Slate/Zinc con acentos deportivos o de alta gama), microinteracciones y contraste accesible (WCAG AA).
- Conversar siempre en español.
- Seguridad estricta: No guardar tokens, API keys ni credenciales en código fuente.
- Mantener actualizado `PROJECT_CONTEXT.md` al finalizar ciclos significativos.
