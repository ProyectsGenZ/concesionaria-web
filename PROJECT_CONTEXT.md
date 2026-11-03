# Contexto del Proyecto: Concesionaria Web (MONOLITH® Automotive)

**Última actualización:** 03/11/2026  
**Estado:** Rediseño total implementado y operativo en `http://localhost:3000/` integrando la arquitectura de `22222.html`.

---

## 1. Arquitectura de 3 Vistas Integrada

1. **VISTA 1: INICIO (`view-home`)**:
   - `HeroSlider.jsx`: Showcase 100vh con diapositivas cinematográficas (`HERO_SLIDES`), tag de disponibilidad, titular de gran impacto, subtítulo técnico, controles de navegación y llamado directo a conocer la unidad o explorar catálogo.
   - `SilhouetteBar.jsx`: Selector de siluetas de carrocería (Pick-ups, SUVs, Sedán, Coupé, Hot Hatch) con contador dinámico por segmento y barra rápida de marcas (Ford, Porsche, BMW, Audi, Toyota, Volkswagen, Hyundai).
   - `FeaturedHome.jsx`: Grilla de unidades destacadas con tarjetas de formato 16:10, descripción breve y acceso directo a ficha.
2. **VISTA 2: CATÁLOGO COMPLETO (`view-catalog`)**:
   - `CatalogView.jsx`: Sidebar izquierdo de filtros reactivos:
     - Condición (`Todos`, `0 KM`, `Usados`).
     - Carrocería (`Todas las siluetas`, `Pick-up`, `SUV`, `Sedán`, `Coupé`, `Hatchback`).
     - Marca (Selector de 8 marcas líderes).
     - Motorización (`Nafta`, `Diesel`, `Híbrido`).
   - Barra superior con buscador predictivo, chips activos de filtros, selector de moneda **USD / ARS** con tipo de cambio oficial dinámico y sorter.
   - Grilla de tarjetas limpia inspirada en Porsche Finder y Kavak.
3. **VISTA 3: PÁGINA COMPLETA DE DETALLE (`view-detail`)**:
   - `VehicleDetailView.jsx`:
     - Sub-barra fija con retroceso rápido al catálogo y apertura en nueva pestaña.
     - Showcase del vehículo con foto 16:10 y miniaturas interactivas.
     - Descripción editorial, lista de 3 bullets destacados de equipamiento y bloque de precios dual (Precio sugerido de lista y Precio sin impuestos / USD).
     - Botón de cotización directa y botón a WhatsApp con mensaje contextualizado.
     - **Galería en Mosaico 4x2 de 8 fotos** con visor a pantalla completa (**Lightbox** con navegación por flechas y teclado).
     - Ficha técnica completa en 4 columnas (Motorización, Transmisión & Chasis, Estado & Historial, Estética & Ubicación).
4. **APARTADO UNIFICADO: SHOWROOM & CONTACTO (`#contacto-showroom`)**:
   - `ShowroomContact.jsx`: Siempre accesible por scroll o desde cualquier botón de la web.
   - Canales directos: WhatsApp (+54 9 11 5555-0199), Teléfono Salón y Correo.
   - Showroom Libertador (Acassuso) y Hub Pilar (Km 46.5) con horarios y enlace a Google Maps.
   - Redes sociales oficiales (Instagram, YouTube, Facebook, TikTok).
   - Formulario de contacto con prellenado automático del vehículo consultado.

---

## 2. Verificaciones y Estado de Ejecución

- Servidor Vite en vivo: `http://localhost:3000/`.
- `npm run build`: Compilación limpia en 650ms.
- `cmd /c npm test`: **5/5 tests aprobados (100%)**.
- Orquestador: Ciclo de orquestación ejecutado y aprobado con éxito.
