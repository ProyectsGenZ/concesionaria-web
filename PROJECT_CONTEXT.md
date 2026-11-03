# Contexto del Proyecto: Concesionaria Web (STUDIO MOTORS)

**Última actualización:** 03/11/2026  
**Estado:** Rediseño luminoso blanco/perla con líneas sutiles y tarjetas automotrices reales activo en `http://localhost:3000/`.

---

## 1. Autocrítica Técnica y de Diseño Realizada

### ¿Qué estaba mal en la versión anterior?
1. **Fondo negro absoluto**: Resultaba chocante, pesado y cansaba la vista. Las webs de fabricantes y retailers líderes mundiales (Porsche, BMW, Mercedes-Benz, Kavak, Ford) emplean lienzos claros, luminosos y aireados donde el automóvil destaca naturalmente.
2. **Sobrecarga de métricas tipo "videojuego" en las tarjetas**:
   - Se habían incluido 4 bloques de datos sintéticos (`480 HP`, `3.3s 0-100`, `Rodado`, `Caja PDK`) dentro de cada tarjeta de la grilla.
   - Ninguna concesionaria real coloca bloques de telemetría invasivos en el catálogo principal; esto satura la lectura e interrumpe la decisión de compra.
3. **Falta de componentes de confianza e interacción real**:
   - Faltaban elementos como botón de favoritos (guardar vehículo), indicador de sucursal/ubicación, y diferenciación sutil entre 0km y usados.

### ¿Qué se cambió y se implementó?
1. **Lienzo Blanco Luminoso con Textura y Líneas Degradadas**:
   - Base en blanco perla (`#fcfcfd`) con degradado radial sutil hacia gris neutro.
   - Patrón de líneas arquitectónicas sutiles (`background-size: 48px 48px` con opacidad del 3%) y degradado lineal hacia los extremos, evitando el blanco plano clínico.
2. **Rediseño Completo de Tarjetas de Vehículos (Benchmark Porsche Finder + Kavak)**:
   - Tarjetas blancas limpias con bordes delgados de 1px (`#e4e4e7`) y sombra de elevación natural (`shadow-[0_12px_32px_rgba(0,0,0,0.06)]`).
   - Botón interactivo de favoritos (corazón con animación de guardado).
   - Pastillas sobrias de estado: `0 KM` o `CERTIFICADO`.
   - Jerarquía clara: Marca (`Porsche`), Modelo (`911 Carrera GTS`), y una sola línea horizontal legible de especificaciones: `2024 · 0 km · Automática PDK · Nafta`.
   - Ubicación: `Vicente López, Buenos Aires`.
   - Bloque de precio: `USD 245.000` en tipografía contundente y cuota mensual estimada debajo.
   - Botones funcionales: *"Ver Ficha"* y *"Cotizar por WhatsApp"*.
3. **Mantenimiento de Datos Técnicos Completos en el Modal**:
   - Todos los datos de motor, cilindrada, par motor (torque), tracción, velocidad máxima y equipamiento se preservaron y perfeccionaron exclusivamente en el modal de inspección detallada.
4. **Header y Secciones Ligeras**:
   - Cabecera en blanco traslúcido con efecto vidrio (*backdrop-blur*).
   - Bloques de Financiación, Tasación de Usados y Sellos de Confianza adaptados a la nueva estética luminosa.

---

## 2. Estado de Ejecución y Pruebas

- Servidor Vite en vivo: `http://localhost:3000/`.
- `npm run build`: Compilación en ~340ms sin errores.
- `cmd /c npm test`: 5/5 pruebas automáticas aprobadas.
