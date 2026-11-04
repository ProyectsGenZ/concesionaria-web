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
