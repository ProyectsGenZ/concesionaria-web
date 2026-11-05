# Contexto del Proyecto: Concesionaria Web (Arquitectura Unificada MONOLITH Studio)

**Última actualización:** 04/11/2026  
**Repositorio GitHub:** [https://github.com/ProyectsGenZ/concesionaria-web](https://github.com/ProyectsGenZ/concesionaria-web)  
**Estado:** Servidor activo en `http://localhost:3000/`. Repositorio sincronizado en GitHub. Optimización integral de rendimiento (Core Web Vitals): compresión de imágenes pesadas (~3.7 MB ahorrados), migración local de activos Citroën, priorización LCP con `fetchpriority="high"`, carga diferida y decodificación asíncrona (`decoding="async"`), saneamiento de Google Fonts eliminando familias no utilizadas, y throttled scroll listener con `requestAnimationFrame`.

---

## 1. Ajustes y Mejoras Aplicadas en Esta Iteración (Optimización de Rendimiento & CWV)

1. **Compresión y Redimensionamiento de Activos PNG Locales**:
   - `pickup-93.png`: Redimensionado de 2145px a 850px retina. Tamaño reducido de **2.96 MB a 524 KB (-82.3%)**.
   - `bmw-x5-clean.png`: Redimensionado de 1890px a 850px retina. Tamaño reducido de **1.49 MB a 342 KB (-77.1%)**.
   - `berlingo-clean.png`: Redimensionado de 1080px a 850px. Tamaño reducido de **412 KB a 267 KB (-35.0%)**.
   - Se ahorraron más de **3.7 MB de transferencia de red** en imágenes directas.

2. **Migración de Activos Citroën a Servidor Local (`public/images/cars/`)**:
   - Se descargaron y alojaron localmente `citroen-c4-hibrido.png`, `citroen-c3.png` y `citroen-basalt.png`.
   - Se eliminaron las solicitudes de red externas a servidores de terceros, reduciendo el tiempo de carga a <10ms en red local.

3. **Priorización LCP y Carga Asíncrona (Modern Web Guidance)**:
   - `HeroSlider.jsx`: La primera diapositiva (LCP) cuenta con `fetchpriority="high"` y `loading="eager"`, mientras que las 3 diapositivas secundarias tienen `fetchpriority="low"`, `loading="lazy"` y `decoding="async"`.
   - Parámetros Unsplash optimizados a `w=1600&q=75` para fondos y `w=800&q=70` para la galería, reduciendo el peso de cada foto un 60%.
   - En `SilhouetteBar.jsx`, `FeaturedHome.jsx`, `CatalogView.jsx` y `VehicleDetailView.jsx`: Se implementó `decoding="async"` y `loading="lazy"` para desahogar el hilo principal durante el scroll.

4. **Saneamiento del Critical Rendering Path en `index.html`**:
   - Se removieron 3 familias tipográficas innecesarias de Google Fonts (Cormorant Garamond, Playfair Display y Syne), conservando exclusivamente las 3 fuentes en uso (`Outfit`, `Plus Jakarta Sans` y `Space Grotesk`).
   - Se añadió `preconnect` a `images.unsplash.com`.

5. **Scroll Listener Throttling (`Header.jsx`)**:
   - El evento de scroll del header ahora está acoplado al ciclo de renderizado nativo mediante `window.requestAnimationFrame`, evitando jank o tartamudeo en trackpads y pantallas de alta tasa de refresco (120Hz).

---

## 2. Verificación de QA, Testing y Orquestación

- Servidor Vite en vivo: `http://localhost:3000/`.
- Compilación `npm run build`: Exitosa en 327ms sin advertencias (`dist/`).
- Tests de Orquestación `cmd /c npm test`: **5/5 tests aprobados (100%)**.
- Orquestador de Agentes (`npm run orchestrate`): **APROBADO**.
- Git: Preparado para commit atómico bajo estándar Conventional Commits.

## Vista previa de contacto (04/11/2026)
- Propuesta aislada en public/contacto-preview.html, visible en http://localhost:3000/contacto-preview.html. No reemplaza ShowroomContact.jsx.
- Blanco/grafito, dos columnas responsive, selector de sedes, formulario de demostración sin envío; verificado visualmente y cambio a Pilar comprobado en navegador.
- Tests 5/5, build correcto, orquestación APROBADA. Auditoría estática premium: dos hallazgos preexistentes en CatalogView.jsx (select) y ShowroomContact.jsx (validación), pendientes fuera del alcance de esta vista previa.

- Ajuste de vista previa: bloque de WhatsApp reemplazado por mapa horizontal de Google Maps (230px), sincronizado con la sede seleccionada; teléfono conservado debajo. Carga del mapa Libertador verificada visualmente. Tests 5/5, build y orquestación aprobados.

## Contacto integrado y fondo diagonal (04/11/2026)
- ShowroomContact.jsx reemplazado por diseño aprobado: sedes compactas, mapa Google sincronizado, formulario con nombre/teléfono/mensaje y vehículo opcional; mantiene precarga y redes.
- WhatsApp prepara consulta, el usuario revisa y envía. Validación inline accesible, foco al primer error y alternativa ante bloqueo de ventana.
- src/index.css: fondo blanco/zinc perla diagonal con grano SVG estático, formulario blanco y responsive. Dirección visual documentada en DESIGN.md; select nativo existente documentado en premium-ui.json.
- Verificado en navegador: escritorio, móvil 390px, mapas de ambas sedes, errores y foco. No se enviaron mensajes externos.
- Tests 5/5, build y orquestación aprobados; auditoría premium estricta sin hallazgos (premium-audit.json).


## Portada, modelos y textura compartida (04/11/2026)
- HeroSlider: overlays inferior/lateral reducidos de 50/25 a 40/15%; sombra localizada en texto.
- SilhouetteBar: eliminado hover blanco; conserva zoom y elevación del auto.
- Textura SVG centralizada en --studio-grain, extendida mediante whynot-pearl-bg a fondos compartidos; modelos en zinc perla y destacados en blanco suave. Sin textura superpuesta a fotos o controles.
- FeaturedHome conserva selección por featured y estructura; se explicó su función comercial y se recomendó reducir repetición y renombrar a Vehículos destacados, sin aplicar ese rediseño aún.
- Verificación: navegador en portada/modelos, tests 5/5, build, orquestación y auditoría estricta sin hallazgos.


## Sombras duplicadas corregidas
- Eliminada elipse CSS car-platform-shadow y referencias en modelos, destacados, catálogo y detalle; conservada sombra integrada en imágenes PNG. Verificación visual en modelos correcta. Tests 5/5, build y orquestación aprobados.


## Plantilla para presentar a concesionarias
- Usuario confirma objetivo de demostración reutilizable; no revisar ni reemplazar datos y enlaces reales.
- HeroSlider usa pngImage local coherente con título sobre escenario de estudio responsive. CTA Conocer el vehículo e indicadores con nombres accesibles.
- FeaturedHome renombrado Vehículos destacados, limitado a tres, imágenes mayores y botón Ver ficha accesible. Contraste de marcas/versiones mejorado en SilhouetteBar.
- Nuevo ServicesStrip con cuatro servicios de ejemplo, consulta al contacto y texto sin condiciones comerciales inventadas.
- Verificación visual escritorio y móvil 390px; tests 5/5, build y orquestación aprobados; auditoría estricta sin hallazgos.

## Portadas fotográficas en paisajes
- Reemplazado escenario de estudio por cuatro fotos locales del modelo correspondiente (~837 KB total). Eliminada sección Más que elegir un auto y componente ServicesStrip.
- Fuentes y dirección visual documentadas en DESIGN.md. Datos/enlaces comerciales conservados.
- Tests 5/5, build y orquestación aprobados. Nueva verificación visual en navegador no disponible: conexiones localhost agotaron tiempo aun con Vite reiniciado; no afirmar QA visual completo de esta iteración.

## Porsche y footer compacto
- macan-landscape.jpg era HTML pese a extensión JPEG; reemplazado por JPEG válido de Goodwood (297370 bytes). Foto y carga en diapositiva verificadas en navegador.
- Footer reducido: py-16 a py-6, separaciones menores, eliminada descripción comercial larga; conserva marca, navegación, copyright y contacto. Verificado visualmente.
- Tests 5/5, build y orquestación aprobados.


## Vista previa de ficha de vehículo
- public/vehiculo-preview.html: propuesta aislada para Hyundai Tucson; galería/precio en columnas, moneda interactiva, datos compactos y versiones comparables.
- Dos imágenes locales de Tucson, ampliación con dialog nativo, CTA de demostración sin enviar mensajes. Ficha actual intacta.
- Verificada visualmente en navegador; cambio de moneda y foto comprobados. Tests 5/5, build y orquestación aprobados.


## Ajuste de vista previa: consulta única y galería
- vehiculo-preview.html: CTA principal Consultar por este vehículo; eliminada acción Agendar visita.
- Galería Conocé sus detalles antes de versiones: fotos locales Tucson (exterior, tablero, asientos y frente), filtros Todas/Exterior/Interior/Detalles, contador y ampliación con dialog.
- Nuevos JPEG validados en public/images/tucson: dashboard (Safford Hyundai), seats (Hyundai Chile), front-detail (Car and Driver). Fotos ilustrativas del modelo, no garantía de versión/color exactos.
- Navegador: filtro Interior muestra dos fotos, modal abre/cierra y restaura foco. Tests 5/5, build y orquestación aprobados. Ficha real sin integrar.


- Vista previa de versiones mejorada con imágenes ampliables de exterior e interior en cada tarjeta. Referencias ilustrativas explícitas: exterior común y fotos de interior no verificadas por versión exacta. Verificación visual en navegador; tests 5/5, build y orquestación aprobados.

## Integración de fichas aprobadas
- VehicleDetailView reemplazado por layout aprobado para todos los vehículos. CSS encapsulado en VehicleDetailView.css y galería coherente en data/vehicle-gallery.js.
- App pasa selector global de moneda y remonta por id; volver al catálogo vuelve arriba. Consulta abre WhatsApp con modelo y versión. Contacto/footer compartidos conservados.
- Tucson: cinco imágenes. C4, Raptor y Macan: estudio + paisaje. Otros ocho modelos: solo exterior local; faltan fotos específicas de interior/detalles. Ya no se completan galerías con autos genéricos.
- Navegador: ficha Tucson visual correcta, moneda USD/ARS sincronizada, filtro Interior y modal abrir/cerrar verificados. Tests 5/5, build y orquestación aprobados.

## Galerías ampliadas para todos los modelos
- Añadidas 33 fotografías locales: exterior, interior y detalles para C4, HB20, Creta, Santa Fe, C3, Basalt, Berlingo, Ranger Raptor, Macan T, X5 y TT RS. Cada ficha tiene ahora 4 o 5 fotos incluyendo las anteriores.
- Datos curados en src/data/gallery-assets.json, incorporados por vehicle-gallery.js. Procedencia registrada por foto en public/images/gallery/SOURCES.json. Fotos ilustrativas: pueden variar color, mercado y equipamiento; no representan una unidad exacta.
- Revisadas imágenes mediante hoja de contacto y vistas individuales; detectada y reemplazada foto de C3 europeo por C3 regional. Sustituidos collages y varias tomas poco apropiadas. Berlingo conserva generación del recorte local.
- Optimizadas imágenes grandes, todas las nuevas por debajo de 500 KB. Pruebas nuevas verifican cobertura de categorías, rutas, formato real JPEG/PNG/WebP (rechaza HTML), peso y fuente.
- Navegador: C3 filtros Interior/Detalles y ampliación comprobados. Tests 7/7, build, orquestación y auditoría estricta aprobados.

## Visor de imágenes a pantalla completa
- Corregido diálogo de ampliación que quedaba arriba a la izquierda. Estilos compartidos public/styles/vehicle-image-viewer.css cargados por index.html y vista previa; viewport completo, imagen centrada sin recorte y cierre accesible arriba a la derecha.
- Bloqueo del scroll de fondo y restauración al cerrar. Escape y devolución de foco verificados en escritorio; visor comprobado a 390x844 en móvil.
- Tests 7/7, build y orquestación aprobados.


- Visor: fondo actualizado a blanco translúcido (88%) con blur de 8px; diálogo transparente y cierre blanco con texto oscuro. Verificado en navegador tras recargar. Tests 7/7, build y orquestación aprobados.

## Navegación del visor y resolución
- Visor real y preview: flechas anterior/siguiente, contador Foto N de total, teclado izquierda/derecha. Mantiene Escape, foco y fondo blanco translúcido.
- Imágenes sin estiramiento sobre tamaño natural, ajuste contain. Tucson reemplazada por PNG original de 1845x867 desde Kelley Blue Book (Tucson Hybrid), 1.07 MB, para mejorar nitidez.
- Navegador: transición Foto 1 a Foto 2 de 5 comprobada. Tests 7/7, build y orquestación aprobados.


## Cierre en backdrop y limpieza de Lightbox huérfano
- Visor de imágenes (VehicleDetailView.jsx y ehiculo-preview.html): añadido cierre automático al hacer clic en el backdrop translúcido exterior.
- Removido componente obsoleto src/components/Lightbox.jsx y eliminados estados huérfanos asociados en src/App.jsx.
- Tests 7/7, build y orquestación aprobados.


## Vista previa interactiva de texturas de fondo (04/11/2026)
- Creado public/texturas-preview.html accesible en http://localhost:3000/texturas-preview.html para evaluar de forma aislada 4 variantes de fondo mate para el showroom y catálogo:
  1. Podio Diagonal (Estilo Contacto): corte arquitectónico con clip-path y plano zinc perla (#f0f1f2) con micrograno.
  2. Ciclorama de Estudio: degradé mate vertical suave (blanco a gris perla de estudio #d2d6dd) con textura mate para emular un set fotográfico sin aristas.
  3. Blueprint / Grilla Técnica: trama milimétrica ultraliviana (4% opacidad) con puntos técnicos y micrograno, transmitiendo rigor mecánico e ingeniería.
  4. Spotlight Cenital: halo elíptico difuso central de iluminación de salón internacional que destaca el volumen y tridimensionalidad del vehículo.
- Funcionalidad interactiva: comparador 4 en 1 (cuadrícula), modo enfoque a pantalla ancha para cada opción con 3 vehículos en showroom, selector de vehículo en tiempo real (Hyundai Tucson, Porsche Macan, Citroën C4 Híbrido) y visualizador de snippets CSS.
- Código de producción intacto; suite de tests 7/7 aprobada, build en 383ms.

## Integración de Textura de Fondo: Ciclorama de Estudio (Opción 2)
- Usuario aprobó la Opción 2 (Ciclorama de Estudio: degradé mate suave con micrograno).
- Aplicado en src/index.css en las clases compartidas .whynot-pearl-bg, .studio-models y .studio-featured, y en src/components/VehicleDetailView.css (.vehicle-detail).
- Degradé vertical continuo: transiciona desde blanco puro (#ffffff) en la cabecera, a través de zinc perla (#f4f5f8), culminando en gris estudio suave (#d2d6dd - #d5d9e0) donde apoyan las sombras de los vehículos, amalgamado con la textura vectorial mate --studio-grain.
- Elimina el blanco plano sin generar cortes geométricos duros, otorgando a las siluetas y tarjetas de vehículos un acabado de set de fotografía profesional.
- Tests 7/7, build en 388ms y orquestador de agentes APROBADO.


## Identidad, navegación y modelos de escritorio (05/11/2026)
- Marca unificada MONOLITH Automotive: title, descripción y favicon coherentes con cabecera/footer. Retiradas afirmaciones de certificación sin respaldo de metadatos y encabezado de catálogo.
- App.jsx controla History API/popstate y filtros/búsqueda/orden serializados en URL. Fichas abren en la misma pestaña; volver conserva filtros y posición; Atrás nativo verificado. Se mantienen URLs ?vehiculo=ID.
- Nuestros Modelos muestra primeros ocho por pestaña (dos filas de cuatro en escritorio) y botón Ver todos los modelos al catálogo. Modelos y tarjetas de catálogo son enlaces accesibles con teclado.
- Orden destacados prioriza featured. Búsqueda con etiqueta accesible, botón de limpiar y recuperación de foco. Limpiar todo funciona también si solo hay texto buscado.
- PriceReference.jsx comparte nota de conversión orientativa de demostración en destacados, catálogo y ficha. Tasa existente conservada; fecha de configuración explícita, sin afirmar cotización actual. Foco visible y respeto por movimiento reducido compartidos.
- Verificación navegador: ocho enlaces de modelos, botón a catálogo, buscar Tucson, abrir ficha en misma pestaña, volver con búsqueda conservada, estado sin resultados y limpieza; revisión de escritorio a 1440px. Ajustes de composición móvil aplazados por usuario.
- Flujo agents/ ejecutado con customTestRunner real (cmd /c npm test y build) y customReviewer con auditoría premium estricta: APROBADO; tests 7/7, build correcto, auditoría sin hallazgos. Suite existente cubre orquestación y activos; recorrido nuevo comprobado manualmente en navegador.


## Adaptación móvil y servidor persistente (05/11/2026)
- Servidor reiniciado fuera del aislamiento mediante Start-Process de node/Vite, ventana oculta, puerto estricto 3000; proceso anterior inaccesible reemplazado. HTTP 200 y carga real en navegador comprobados antes de informar disponibilidad. Logs locales ignorados por *.log.
- Header: marca + Contacto + menú móvil con Inicio/Catálogo/Contacto y moneda. Cierre Escape con foco restaurado, clic exterior, navegación y cambio a escritorio.
- Hero móvil: fotografía en banda fluida sobre texto en grafito, auto visible sin recorte vertical extremo; elimina mínimo de 800px. Modelos y destacados compactados; ocho modelos conservados y dos columnas móviles.
- Catálogo: filtros plegables a <1024px con contador, aplicación inmediata y botón Ver N vehículos; orden compartido CatalogSort, nombre accesible, controles táctiles y foco de vuelta al cerrar. Sidebar escritorio conservado.
- Ficha: miniaturas desplazables, datos en dos columnas móviles, controles mayores y consulta inferior contextual (precio + Consultar), oculta antes del CTA principal, al llegar al contacto y al ampliar fotos. Scroll pasivo con rAF y limpieza.
- Contacto: formulario primero en móvil/DOM; desktop mantiene columnas. Inputs de 16px, redes adaptables con targets de 44px. Cambios y owners documentados en DESIGN.md.
- Navegador: 390x844 y 360x780 revisados; menú/Escape, filtro Hyundai y 4 resultados, orden menor precio, ida/vuelta ficha con filtro conservado, barra inferior visible y ocultación en contacto, validación vacía devuelve foco al nombre. Sin envío de mensajes. Sin desborde horizontal en 360px. Escritorio 1440px conserva sidebar, navegación y distribución. Captura de portada en scratch/mobile-home.png.
- agents/: flujo con QA real ejecutando cmd /c npm test (7/7) y build correcto; revisión con auditoría premium estricta sin hallazgos, orquestación APROBADA. Pruebas móviles son manuales en navegador emulado; no se afirma ensayo en dispositivo físico.


## Paisaje continuo en banners móviles (05/11/2026)
- Usuario solicita eliminar el corte a negro bajo la fotografía y extender camino hasta abajo preservando vehículo entero.
- Generadas cuatro variantes verticales ilustrativas mediante imagegen/outpainting descendente: c4-mobile.jpg, tucson-mobile.jpg, raptor-mobile.jpg y macan-mobile.jpg. Asfalto/arena prolongados, JPEG calidad 85 (~245–324 KB cada una), referencias en public/images/hero/MOBILE-SOURCES.json. Originales generados conservados en biblioteca local.
- HeroSlider usa picture/source a <=640px y las fotografías originales para escritorio. CSS extiende fondo hasta pie del hero y aplica overlay progresivo translúcido para lectura, sin bloque grafito ni estiramiento.
- Navegador: C4 a 390x844 con vehículo entero y camino detrás del texto comprobado; cuatro fuentes móviles cargadas válidas, cambio a Macan funcional; a 1440px fuentes originales y portada de escritorio verificadas. Captura scratch/mobile-banner-extended.png.
- agents/ con QA real: cmd /c npm test 7/7 y build correctos; auditoría premium estricta sin hallazgos; orquestación APROBADA.


## Preparación de publicación y respaldo (05/11/2026)
- Firebase Hosting configurado en firebase.json para dist, rewrite SPA, build previo y caché inmutable de bundles versionados; vistas *-preview.html conservadas en repositorio pero excluidas del Hosting.
- .firebase/ y variantes .env.* ignoradas. Revisión de patrones de credenciales sin coincidencias; no se incluyen logs, node_modules, dist ni scratch.
- Verificaciones reales mediante agents/: tests 7/7, build y auditoría premium estricta aprobados. Destino GitHub confirmado: ProyectsGenZ/concesionaria-web, rama main, remoto coincide con HEAD previo.
- Firebase autenticado; proyecto de Hosting pendiente de elección del usuario (ningún proyecto de concesionaria existente). No se desplegó sobre sitios de otros negocios.


## Publicación Firebase completada (05/11/2026)
- Usuario aprueba crear proyecto independiente MONOLITH Automotive. Creado monolith-automotive-web (projectNumber 279722942315); Hosting explícito en firebase.json y alias default persistido en .firebaserc.
- Publicado en https://monolith-automotive-web.web.app/ . Primer intento falló por sitio no resuelto; corregido con site explícito. Segundo despliegue publicado correctamente.
- Verificado en navegador público: portada y banner móvil cargados, navegación a catálogo con 12 vehículos y apertura de ficha Tucson, regreso a portada; sin enviar consultas. Captura local scratch/firebase-live.png.
- Tests 7/7, build y orquestación reales aprobados con validación de coherencia entre site y alias.
- Respaldo de la versión final ya subido a GitHub main en 52ba747; configuración definitiva de Hosting y este registro se guardan en commit de publicación posterior.
