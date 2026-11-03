# Contexto del Proyecto: Concesionaria Web (Suite Multi-Diseño)

**Última actualización:** 03/11/2026  
**Estado:** Servidor activo en `http://localhost:3000/`. Segunda iteración de refinamiento completada: todas las miniaturas unificadas en 3/4 hacia la izquierda, tarjetas de vehículos sin bordes (abiertas y limpias), filtro de banner aclarado, cabecera con tipografía en negro sólido, rediseño total del apartado de Contacto y recuadro de Redes Sociales individual de lado a lado.

---

## 1. Ajustes de la Última Iteración (Feedback del Usuario)

1. **Orientación Homogénea de Miniaturas (3/4 Frontal a la Izquierda)**:
   - Se configuró la inversión horizontal (`flip: true` -> `-scale-x-100`) para los modelos de Hyundai, garantizando que el 100% de los vehículos del catálogo miren hacia la misma dirección en ángulo 3/4 frontal.

2. **Eliminación Total de Bordes en Vehículos**:
   - Se eliminaron los marcos grises y bordes perimetrales de las tarjetas en `FeaturedHome.jsx` y `CatalogView.jsx`. Los vehículos ahora flotan directamente sobre la textura perla suave, logrando un aspecto aireado, moderno y nada encapsulado.

3. **Banner Principal Aclarado (Menos Filtro Oscuro)**:
   - Se elevó la luminosidad de las fotos a `brightness-[0.96]` y se redujo drásticamente el gradiente oscuro a sólo un sombreado leve en la base (`from-black/75 via-black/20 to-transparent`), permitiendo apreciar la nitidez y colores de cada coche.

4. **Cabecera en Negro Sólido por Defecto**:
   - Todos los enlaces y elementos de `Header.jsx` ahora visten negro intenso (`text-black font-extrabold`) con fondo `bg-white/95 backdrop-blur-xl`, garantizando legibilidad inmediata y alto contraste en todo momento.

5. **Rediseño Total del Apartado de Contacto**:
   - `ShowroomContact.jsx` renovado integralmente como un Salón Concierge VIP: selector de sede (*Showroom Libertador* y *Hub Pilar*), badge de atención en tiempo real, canales directos (WhatsApp y Teléfono con botones destacados) y formulario con selector interactivo de motivo de consulta (*Compra*, *Test Drive*, *Permuta*).

6. **Bloque "Seguinos en nuestras Redes Sociales" Individual de Lado a Lado**:
   - Franja dedicada full-width (`w-full bg-white border-y border-zinc-200/90 py-16`) que cruza la pantalla de extremo a extremo, con título destacado e iconos SVG vectoriales monocromáticos (Facebook, Instagram, X, YouTube, LinkedIn) centrados y de escala generosa.

---

## 2. Verificación de QA y Testing

- Servidor Vite en vivo: `http://localhost:3000/`.
- Compilación `npm run build`: Exitosa en 332ms sin errores ni advertencias.
- Tests `cmd /c npm test`: **5/5 tests aprobados (100%)**.
- Git: Rama `master` limpia y commiteada con Conventional Commits.
