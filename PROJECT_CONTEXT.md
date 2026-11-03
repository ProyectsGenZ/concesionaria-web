# Contexto del Proyecto: Concesionaria Web (Suite Multi-Diseño)

**Última actualización:** 03/11/2026  
**Estado:** Servidor activo en `http://localhost:3000/`. Implementadas todas las directivas de las 5 imágenes del usuario: estética blanco y negro texturizada estilo WHY NOT, miniaturas PNG con sombra de suelo, apertura en nueva pestaña, zoom Ken Burns en hero, mosaico editorial de partes "Explorá cada ángulo", selector "Conocé sus versiones" y redes sociales SVG monocromáticas.

---

## 1. Implementación de Requerimientos y Capturas del Usuario

1. **Estética Blanco & Negro y Fondo Texturizado (Estilo WHY NOT)**:
   - Fondo perla con gradientes radiales ultra sutiles (`whynot-pearl-bg`) y cuadrícula arquitectónica sutil. Máxima amplitud de espacios en blanco y legibilidad sin elementos chocantes a la vista.

2. **Miniaturas PNG con Sombra de Suelo (Imágenes 1 y 2 - Hyundai & Citroën)**:
   - Grilla de modelos (`SilhouetteBar.jsx`, `FeaturedHome.jsx` y `CatalogView.jsx`) con vehículos oficiales de Hyundai (Nueva Tucson, HB20, Nueva Creta, Santa Fe) y Citroën (Nuevo C4 Híbrido, C3, Basalt, Berlingo) recortados en PNG transparente con sombra elíptica hiperrealista de contacto en el piso (`car-platform-shadow`).

3. **Banner Principal con Zoom Lento (Ken Burns Effect)**:
   - `HeroSlider.jsx`: Animación cinematográfica continua suave (`animate-kenburns`) en las imágenes de fondo, con botones depurados y un único llamado de acción transparente.

4. **Cabecera Dinámica Traslúcida**:
   - `Header.jsx`: Detecta el desplazamiento (`scrollY > 25`). Al inicio es ultra traslúcida y al deslizarse se difumina con efecto vidrio esmerilado (`bg-white/80 backdrop-blur-xl border-zinc-200/70`), mezclándose elegantemente con el contenido que pasa por debajo.

5. **Apertura de Vehículo en Nueva Pestaña**:
   - Al hacer click en cualquier vehículo del Hero, Gama o Catálogo, se abre automáticamente una **nueva pestaña** (`?vehiculo=ID`).
   - `App.jsx` lee el parámetro de la URL y arranca directamente en la vista completa de detalle del vehículo (`view-detail`).

6. **Mosaico Editorial "Explorá Cada Ángulo" (Imagen 4 - Citroën C4)**:
   - Sección en `VehicleDetailView.jsx` que desglosa fotográficamente las partes clave del auto: carrocería 3/4 frontal, pantalla multimedia y cámaras 360°, cockpit y volante de cuero, instrumental digital, butacas ergonómicas, ópticas LED, techo solar y remate posterior.

7. **Sección "Conocé Sus Versiones" (Imagen 5)**:
   - En `VehicleDetailView.jsx`: Pestañas interactivas de versiones (`MAX` | `PLUS`), visualización PNG con sombra de contacto, 3 características destacadas con barritas de acento y botón único `CONTACTAR ASESOR`.

8. **Redes Sociales SVG Monocromáticas (Imagen 3)**:
   - En `ShowroomContact.jsx` y `Footer.jsx`: Encabezado `Seguinos en nuestras Redes Sociales` con iconos vectoriales SVG en gris neutro (`Facebook`, `Instagram`, `X / Twitter`, `YouTube`, `LinkedIn`).

---

## 2. Verificación de QA y Testing

- Servidor Vite en vivo: `http://localhost:3000/`.
- Compilación `npm run build`: Exitosa en 326ms sin errores.
- Tests `cmd /c npm test`: **5/5 tests aprobados (100%)**.
- Git: Rama `master` limpia y commiteada con Conventional Commits.
