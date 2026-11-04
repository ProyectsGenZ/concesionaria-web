# Contexto del Proyecto: Concesionaria Web (Arquitectura Unificada MONOLITH Studio)

**Última actualización:** 04/11/2026  
**Repositorio GitHub:** [https://github.com/ProyectsGenZ/concesionaria-web](https://github.com/ProyectsGenZ/concesionaria-web)  
**Estado:** Servidor activo en `http://localhost:3000/`. Repositorio sincronizado en GitHub. Orientación unificada al 100%: los 12 vehículos de la plataforma miran físicamente y de forma nativa hacia la izquierda en ángulo 3/4 frontal sin depender de transformaciones CSS. Código saneado y bundle optimizado.

---

## 1. Ajustes y Mejoras Aplicadas en Esta Iteración

1. **Unificación Geométrica de Orientación a la Izquierda (12 de 12 Vehículos)**:
   - Se detectó que 5 modelos (`hyundai-tucson.png`, `hyundai-hb20.png`, `hyundai-creta.png`, `hyundai-santafe.png` y `audi-tt-clean.png`) habían sido invertidos en iteraciones pasadas, dejándolos orientados hacia la derecha en discrepancia con la línea Citroën, Porsche, BMW y Ford Raptor.
   - Se re-procesaron e invirtieron horizontalmente de forma definitiva en sus archivos PNG de alta resolución en `public/images/cars/`.
   - Ahora, el 100% de los 12 autos del catálogo miran hacia la izquierda en ángulo 3/4 frontal de forma nativa e inalterable.

2. **Purga Previa de Código y Optimización de Bundle**:
   - Eliminados 6 archivos de componentes y mockups huérfanos (1.148 líneas de código muerto).
   - Estilos CSS depurados y reducción del bundle compilado a 47.62 kB.

---

## 2. Verificación de QA, Testing y Orquestación

- Servidor Vite en vivo: `http://localhost:3000/`.
- Compilación `npm run build`: Exitosa en 340ms sin advertencias (`dist/`).
- Tests de Orquestación `cmd /c npm test`: **5/5 tests aprobados (100%)**.
- Orquestador de Agentes (`npm run orchestrate`): **APROBADO**.
- Git: Preparado para commit atómico bajo estándar Conventional Commits.
