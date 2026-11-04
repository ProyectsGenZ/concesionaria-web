# Contexto del Proyecto: Concesionaria Web (Arquitectura Unificada MONOLITH Studio)

**Última actualización:** 04/11/2026  
**Estado:** Servidor activo en `http://localhost:3000/`. Consolidación estética antislop: mayor transparencia translúcida de la cabecera en scroll, simplificación del menú de navegación a "Catálogo" y "Contacto", eliminación completa de módulos financieros/permuta de la ficha técnica de unidad, y homogenización de los 12 vehículos en ángulo 3/4 hacia la izquierda con fondos transparentes puros y escalas uniformes.

---

## 1. Ajustes y Mejoras Aplicadas en Esta Iteración

1. **Cabecera Translúcida y Navegación Minimalista (`Header.jsx`)**:
   - Mayor transparencia dinámica al bajar por la página (`bg-white/60 backdrop-blur-md border-b border-zinc-200/50 shadow-xs`), permitiendo que el contenido se trasluzca de forma limpia y moderna mientras se desliza.
   - Simplificación de los botones principales a **"Catálogo"** y **"Contacto"**.

2. **Homogeneización Absoluta de la Gama de 12 Vehículos (`vehicles.js`)**:
   - **Orientación 3/4 hacia la izquierda unificada**: Los 12 modelos (C4 Híbrido, Tucson, HB20, Creta, Santa Fe, C3, Basalt, Berlingo, Ranger Raptor, Porsche Macan, BMW X5 y Audi TT) miran uniformemente hacia la izquierda.
   - **Corrección de Berlingo Furgón**: Se eliminó el recuadro blanco opaco mediante procesamiento de canal alfa (`colorType: 6`), dejándolo 100% transparente sobre sombra de piso.
   - **Ajuste de Proporciones del Porsche**: Se eliminó el 75% de padding transparente vacío que reducía su tamaño, normalizándolo al tamaño de los demás vehículos.
   - **Pick-up en 3/4**: Se reemplazó la camioneta de perfil lateral plano de 90° por una toma en perspectiva 3/4 frontal.
   - **Audi TT**: Orientación corregida hacia la izquierda en ángulo deportivo.

3. **Depuración Definitiva de la Ficha de Vehículo (`VehicleDetailView.jsx`)**:
   - Se removió por completo la sección inferior de "Simular Cuotas para este Vehículo" y "Entregar mi Auto en Parte de Pago".
   - La vista de detalle queda enfocada exclusivamente en su propósito comercial: datos clave, galería bento editorial de partes y detalles ("EXPLORÁ CADA ÁNGULO"), y selector de versiones interactivas ("CONOCÉ SUS VERSIONES") con botón directo de contacto a WhatsApp.

---

## 2. Verificación de QA y Testing

- Servidor Vite en vivo: `http://localhost:3000/`.
- Compilación `npm run build`: Exitosa en 492ms sin advertencias (`dist/`).
- Tests de Orquestación `cmd /c npm test`: **5/5 tests aprobados (100%)**.
- Git: Preparado para commit atómico bajo estándar Conventional Commits.
