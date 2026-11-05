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


## 5. Contacto integrado (04/11/2026)
- Owner visual y tokens: `src/index.css`, selectores `.showroom-contact` y `.contact-*`; componente canónico `ShowroomContact.jsx` en todas las vistas.
- Planos diagonales blanco / zinc perla (#f0f1f2), textura SVG mate estática a opacidad 0.035. Reservar esta firma para contacto, sin aplicar textura a formularios o vehículos.
- Formulario blanco, borde zinc y sombra tenue; Outfit para títulos y Plus Jakarta Sans para cuerpo (fuentes actuales de runtime).
- Sedes con botones nativos `aria-pressed`, mapa Google Maps por dirección y enlace de navegación como alternativa. Mantener la ubicación precargada al consultar un vehículo.
- Form: validación inline propiedad de ShowroomContact; nombre requerido y teléfono con al menos siete dígitos; mensaje y vehículo opcionales. WhatsApp prepara mensaje y el usuario confirma envío; nunca afirmar que ya fue enviado.
- Select/Listbox: el ordenamiento de CatalogView mantiene select nativo; se acepta geometría y comportamiento del sistema operativo.

## 6. Acabado compartido de fondos
- `--studio-grain` en src/index.css es la única textura SVG mate, repetida a 180px y opacidad 0.035. `.whynot-pearl-bg` la aplica a los fondos compartidos del sitio; `.studio-models` usa zinc #f0f1f2 y `.studio-featured` blanco suave #fafafa.
- La portada conserva fotografía limpia; overlays negros reducidos a 40% inferior / 15% lateral, con sombra localizada en texto para sostener lectura.
- Nuestros Modelos: hover transparente, conserva elevación/zoom de la miniatura sin recuadro blanco.

- Sombras de vehículos: conservar únicamente las incluidas en los PNG. No agregar elipses CSS al contenedor: se desalinean al variar escala, proporción o posición del vehículo. Regla compartida por modelos, destacados, catálogo y detalle.

## 7. Plantilla comercial de demostración
- Portada: recortes locales coincidentes con el modelo en escenario grafito de estudio; distribución vertical en móvil. No usar fotografías genéricas de otros autos.
- FeaturedHome: máximo tres primeros vehículos marcados featured, imágenes mayores y botón nativo Ver ficha. Gama completa permanece en Nuestros Modelos y catálogo.
- ServicesStrip: bloque configurable de ejemplo para financiación, permuta, garantía e inspección; sin promesas de cobertura ni condiciones inventadas. Contenido orientado al comprador, identificado como ejemplo para la demostración.
- Datos y enlaces existentes permanecen como demostración por pedido del usuario. Tipografía secundaria en modelos: zinc 600, tamaños 11/12px para legibilidad.

## 8. Portadas en paisajes (sustituye escenario de estudio)
- HeroSlider utiliza fotografías completas locales en public/images/hero, sin superponer PNG recortados; C4 en ruta rural, Tucson en montaña, Raptor en dunas y Macan en paso alpino. Encuadre cover adaptable.
- Eliminados ServicesStrip, su integración y sus estilos por pedido del usuario.
- Fuentes visuales de demostración: C4 ADAC (foto de prensa); Tucson Hyundai México; Raptor Westvaal Ford / Netdirector; Macan Caricos. No se afirma licencia comercial de estos materiales.

- Footer compacto: dos filas en escritorio, padding vertical 24px, separadores 16px; sin párrafo comercial repetido. Conservar datos de demostración existentes. Foto Macan de portada corregida, fuente Goodwood (reemplaza Caricos).

## 9. Ficha integrada
- VehicleDetailView.jsx y su CSS encapsulado son la implementación compartida aprobada; galería/precio en columnas, selector monetario conectado al estado global, consulta WhatsApp única, datos esenciales y versiones con imágenes.
- Galerías curadas en src/data/vehicle-gallery.js: no utilizar EXTRA_GALLERY_POOL ni fotografías de otros modelos. Mostrar estado vacío cuando falte una categoría. Imágenes de versiones ilustrativas, no diferencias visuales verificadas.
- Ampliación mediante dialog nativo, foco/escape del navegador. Reutiliza tokens de textura, Outfit y Jakarta Sans.

- Galerías ampliadas: gallery-assets.json es el mapa curado por vehículo/categoría; los archivos son locales y SOURCES.json registra procedencia. No insertar fotografías por búsqueda genérica sin comprobar modelo/carrocería. Fotos ilustrativas con variaciones de color/mercado/equipamiento. Cada nuevo archivo debe pasar tests de formato real, tamaño y fuente en gallery-assets.test.js.

- Ampliación: dialog.vehicle-image-viewer usa pantalla completa (100dvh), fondo negro, imagen contain, cierre visible con safe areas y bloqueo de scroll. Owner de estilos compartidos: public/styles/vehicle-image-viewer.css, también en vista previa.

- Actualización de visor: sustituir fondo negro por backdrop blanco al 88% con blur 8px; diálogo transparente, cierre blanco y texto/foco grafito.

- Visor navegable: flechas y contador en zona inferior/lateral según viewport, teclado ArrowLeft/ArrowRight, mantener tamaño natural para no pixelar. Recorte Tucson actualizado a mayor resolución (fuente Kelley Blue Book).

## Navegación e identidad de escritorio (05/11/2026)
- Marca única MONOLITH Automotive en cabecera, footer, metadatos y favicon.
- App.jsx es el owner de navegación (History API, popstate) y filtros serializados en URL; CatalogView consume estado controlado. Abrir fichas conserva filtros y búsqueda; volver restaura posición del catálogo, Atrás/Adelante nativos operativos.
- Nuestros Modelos muestra hasta ocho resultados (dos filas de cuatro en escritorio); Ver todos los modelos abre catálogo. Se conservan destacados y pestañas de categorías.
- Modelos y tarjetas de catálogo usan enlaces nativos, con apertura habitual por Ctrl/Cmd. Búsqueda tiene nombre accesible y limpieza con foco restaurado. Orden destacados prioriza featured.
- PriceReference.jsx centraliza la referencia de conversión de demostración; la fecha es de configuración, no de cotización de mercado. No se prometen certificaciones sin respaldo en metadatos/cabecera del catálogo.
- Foco visible y reduced-motion compartidos en index.css. Composición móvil pendiente por instrucción del usuario.


## Adaptación móvil aprobada (05/11/2026)
- Mantener composición de escritorio. Owners: Header.jsx para menú disclosure (Escape, clic exterior, cierre al navegar y al pasar a escritorio); CatalogView.jsx para filtros plegables con contador y CatalogSort nativo compartido; VehicleDetailView.jsx para consulta inferior contextual.
- Header móvil: marca + Contacto + menú; USD/ARS dentro del menú con aria-pressed. Controles principales de 44px.
- Hero a <=640px: fotografía en banda de altura fluida (220–290px) y contenido sobre grafito, evitando recorte vertical extremo del vehículo. Sin mínimo forzado de 800px; encuadre configurable por slide.
- Modelos: ocho unidades, dos columnas en móvil, separaciones compactas y autos mayores. Destacados: una columna, espaciado reducido y separadores discretos. Tokens/overrides móviles centralizados en src/index.css.
- Catálogo a <1024px: filtros cerrados inicialmente, control Filtrar con contador y ordenar visibles antes de resultados. Aplicación inmediata, botón Ver N vehículos cierra y devuelve foco. Escritorio mantiene aside y selector de orden propios usando el mismo CatalogSort.
- Consulta inferior solo en móvil <=700px, tras superar el CTA original, se oculta al acercarse al contacto y mientras el visor está abierto. Actualización de posición mediante scroll pasivo y requestAnimationFrame, limpieza al desmontar; safe area inferior.
- Contacto: formulario primero en DOM y en móvil, sedes después; desktop mantiene columnas con grid. Inputs/textarea a 16px en móvil, íconos sociales con targets de 44px y separación adaptable.


## Banner móvil continuo (05/11/2026)
- Sustituye la banda fotográfica con bloque grafito de la adaptación móvil: el paisaje ahora cubre toda la portada detrás del texto.
- HeroSlider utiliza picture/source a <=640px con versiones verticales *-mobile.jpg generadas por outpainting descendente de las fotos originales, conservando vehículo completo y prolongando asfalto/arena. Referencias registradas en public/images/hero/MOBILE-SOURCES.json. Fotografías de escritorio originales conservadas.
- CSS móvil: background ocupa toda la altura debajo del header; object-fit cover, posición superior y overlay progresivo translúcido para contraste, sin corte sólido negro. No deformar la imagen para rellenar.
