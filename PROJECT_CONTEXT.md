# Contexto del Proyecto: Concesionaria Web (Arquitectura Unificada MONOLITH Studio)

**Última actualización:** 04/11/2026  
**Estado:** Servidor activo en `http://localhost:3000/`. Consolidación estética antislop: navegación central ubicada en la mitad matemática exacta de la pantalla, todos los 12 vehículos físicamente orientados hacia la izquierda en ángulo 3/4 frontal sin dependencia de transformaciones CSS, y sección "CONOCÉ SUS VERSIONES" condicionada exclusivamente a vehículos con múltiples versiones reales.

---

## 1. Ajustes y Mejoras Aplicadas en Esta Iteración

1. **Centrado Matemático Absoluto de Navegación (`Header.jsx`)**:
   - Se aplicó posicionamiento centrado absoluto (`absolute left-1/2 -translate-x-1/2`) en el `<nav>` de "Inicio", "Catálogo" y "Contacto", ubicándolo en el 50% geométrico exacto del viewport, sin desviación por asimetría entre el logotipo y los controles de moneda/contacto.

2. **Gama Completa de 12 Vehículos Físicamente Orientados a la Izquierda (`vehicles.js`)**:
   - Se procesaron e invirtieron los 4 modelos de Hyundai (Tucson, HB20, Creta y Santa Fe) a archivos locales en `public/images/cars/` (`hyundai-*.png`), de modo que el 100% de los 12 autos miran de forma nativa e inalterable en ángulo 3/4 hacia la izquierda.
   - Se eliminaron las clases de rotación virtual `scale-x-[-1]`, asegurando compatibilidad total y consistente en cualquier navegador y dispositivo.

3. **Condición Estricta para "CONOCÉ SUS VERSIONES" (`VehicleDetailView.jsx`)**:
   - Se eliminó la generación de versiones ficticias ("MAX/PLUS" por defecto).
   - El bloque solo se renderiza si el modelo tiene un arreglo real con más de una versión (ej. Nuevo C4 Híbrido o Nueva Tucson). En vehículos con versiones únicas o usados seleccionados (Porsche, BMW, Audi, Ranger Raptor), la sección no se muestra, manteniendo la ficha técnica honesta y concisa.

---

## 2. Verificación de QA y Testing

- Servidor Vite en vivo: `http://localhost:3000/`.
- Compilación `npm run build`: Exitosa en 336ms sin advertencias (`dist/`).
- Tests de Orquestación `cmd /c npm test`: **5/5 tests aprobados (100%)**.
- Git: Preparado para commit atómico bajo estándar Conventional Commits.
