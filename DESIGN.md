# Sistema de Diseño: Porsche Studio & Gallery (Monocromático Quirúrgico)

Documento vivo de arquitectura visual, tokens y reglas de diseño para la plataforma web de la concesionaria.

---

## 1. Filosofía y Dirección Artística

- **Concepto**: *Silent Luxury & Surgical Precision*. La web funciona como una galería de arte automotriz contemporánea o un salón de exposiciones privado.
- **Protagonismo al Producto**: Los colores reales de los automóviles (metálicos, perlados, acabados mate y pinzas de freno) son los únicos acentos cromáticos. La interfaz se mantiene estrictamente neutral, pura y de altísimo contraste.
- **Antislop Mandate**:
  - Prohibido el uso de gradientes violetas o púrpuras genéricos.
  - Cero tarjetas bento decorativas sin información real de vehículos.
  - Prohibido el texto gris claro sobre blanco que dificulte la legibilidad (mínimo contraste 4.5:1 WCAG AA).
  - Tipografía con tracking intencional y jerarquía arquitectónica.

---

## 2. Paleta de Colores y Tokens Monocromáticos

```
┌─────────────────┬───────────┬────────────────────────────────────────┐
│ Token           │ Hex       │ Propósito                              │
├─────────────────┼───────────┼────────────────────────────────────────┤
│ --bg-primary    │ #FFFFFF   │ Lienzo principal luminoso de la galería│
│ --bg-surface    │ #FAFAFA   │ Superficie secundaria / tarjetas       │
│ --bg-contrast   │ #09090B   │ Cabecera, botones sólidos y modo noche │
│ --text-primary  │ #09090B   │ Títulos de vehículos y precios         │
│ --text-muted    │ #52525B   │ Datos técnicos y especificaciones      │
│ --text-subtle   │ #71717A   │ Etiquetas secundarias, año y km        │
│ --border-light  │ #E4E4E7   │ Bordes quirúrgicos de 1px en tarjetas  │
│ --border-dark   │ #27272A   │ Separadores en bloques oscuros         │
│ --accent-silver │ #D4D4D8   │ Acentos metálicos de suspensión/detalles│
└─────────────────┴───────────┴────────────────────────────────────────┘
```

---

## 3. Tipografía y Escala Jerárquica

* **Títulos de Exhibición (Display)**: *Outfit* / *Cabinet Grotesk* o *Plus Jakarta Sans* (Weight: 600/700, Letter-spacing: `-0.02em` en grandes, `+0.05em` en mayúsculas pequeñas).
* **Cuerpo y Navegación**: *Inter* o *Geist Sans* (Weight: 400/500).
* **Fichas Técnicas y Precios**: Tabular / Monospace para números de alta precisión (cilindrada, HP, 0-100 km/h, precios en USD y ARS).

---

## 4. Componentes Clave de la Experiencia

1. **Barra de Navegación Esbelta (Sticky Glass Header)**:
   - Fondo blanco traslúcido con desenfoque de fondo (*backdrop-blur* de 12px) y borde inferior de 1px en `#E4E4E7`.
   - Logotipo tipográfico en mayúsculas de corte germánico.
   - Acceso directo a *Colección*, *0km*, *Seleccionados*, *Financiación* y botón prioritario a WhatsApp Concierge.

2. **Hero Showcase (El Podio)**:
   - Presentación a pantalla completa del vehículo insignia.
   - Fotografía de estudio con iluminación cenital sobre ciclorama neutro.
   - Título sobrio (*"INGENIERÍA PURA. SELECCIÓN EXCLUSIVA."*), specs rápidas en cápsulas flotantes y botón de contorno fino (*Ghost Button*) para agendar un Test Drive privado.

3. **Filtros de Precisión (The Filter Bar)**:
   - Filtros rápidos por estado: `[ TODOS ]` | `[ 0 KM ]` | `[ SELECCIONADOS CERTIFICADOS ]`.
   - Selectores desplegables minimalistas de Marca, Carrocería (Coupé, SUV, Sedán, Cabriolet), Transmisión y Rango de Precio.
   - Vista en Grilla Amplia (16:9) o Lista Técnica.

4. **Tarjeta de Vehículo de Galería (Studio Card)**:
   - Relación de aspecto fotográfica 16:9 con encuadre de estudio.
   - Efecto de micro-zoom sutil al pasar el cursor (1.03x con transición de 400ms).
   - Datos estructurados en una única línea de alta densidad informativa:
     `[ 2024 ] • [ 450 HP ] • [ 0-100: 3.5s ] • [ 12.500 KM ] • [ PDK ]`
   - Precio destacado en negrita nítida con opción de ver cuota estimada.
   - Botón directo de consulta privada vía WhatsApp con mensaje pre-cargado con el modelo y código de unidad.

5. **Simulador de Financiación Privada**:
   - Selector tipo slider monocromático para anticipo y plazo de cuotas.
   - Desglose transparente de tasas estimadas y valor residual.

6. **Certificación y Garantía**:
   - Sello de inspección técnica en 180 puntos mecánicos y estructurales.
   - Entrega llave en mano y servicio de gestoría integral.
