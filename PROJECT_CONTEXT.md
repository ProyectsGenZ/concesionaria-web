# Contexto del Proyecto: Concesionaria Web (Arquitectura Unificada MONOLITH Studio)

**Última actualización:** 03/11/2026  
**Estado:** Servidor activo en `http://localhost:3000/`. Implementación integral de las mejoras derivadas de la autocrítica multi-perfil: consolidado en Diseño 1 (eliminadas opciones 2 y 3), eliminadas animaciones involuntarias/giros, integrados sellos de confianza (Peritaje 180 puntos), simulador de financiación interactivo USD/ARS, tasador de usados (Permuta) y filtros por categoría de ángulos.

---

## 1. Módulos Implementados en Esta Iteración

1. **Simulador de Financiación Interactivo (`FinancingCalculator.jsx`)**:
   - Selector dual de moneda (**USD / ARS** con tipo de cambio oficial $1.180).
   - Control deslizante táctil de anticipo inicial (20% al 70%).
   - Selector rápido de plazo en cuotas fijas (12, 24, 36 o 48 meses).
   - Desglose en vivo de cuota mensual estimada y saldo financiado con botón de pre-calificación en WhatsApp.
   - Disponible en la home y contextualizado dentro de la ficha de cada unidad.

2. **Tasador Rápido de Usado en Parte de Pago (`TradeInForm.jsx`)**:
   - Formulario de permuta (Marca, Modelo, Año, Kilometraje y Estado).
   - Permite al comprador cotizar su vehículo actual "llave contra llave" y derivar la pre-tasación directamente a WhatsApp con asesor.

3. **Barra de Garantías & Certificación en 180 Puntos (`TrustBadges.jsx`)**:
   - Ubicada en la página principal:
     - *Peritaje en 180 Puntos* (inspección técnica computarizada).
     - *Kilometraje & Dominio Certificado* (historial notarial y libre deuda).
     - *Garantía Mecánica Escrita de 12 Meses*.
     - *Entrega Inmediata Llave en Mano*.

4. **Filtro de Ángulos en Ficha de Unidad (`VehicleDetailView.jsx`)**:
   - Pestañas rápidas en "EXPLORÁ CADA ÁNGULO": `Todos`, `Exterior`, `Interior`, `Detalles`.

5. **Consolidación en Diseño Único**:
   - Eliminados `AtelierDesign.jsx`, `VeloceDesign.jsx` y `DesignSwitcher.jsx`.
   - Eliminadas animaciones de rotación automática y zoom kenburns: imágenes de calidad fija y control manual exclusivo del usuario.

---

## 2. Verificación de QA y Testing

- Servidor Vite en vivo: `http://localhost:3000/`.
- Compilación `npm run build`: Exitosa en 344ms sin errores ni advertencias (`dist/`).
- Tests de Orquestación `cmd /c npm test`: **5/5 tests aprobados (100%)**.
- Git: Rama `master` limpia y commiteada con Conventional Commits.
