# Contexto del Proyecto: Concesionaria Web (Arquitectura Unificada MONOLITH Studio)

**Última actualización:** 03/11/2026  
**Estado:** Servidor activo en `http://localhost:3000/`. Finalización del ciclo de depuración estética antislop: reducción del filtro oscuro del Hero principal, corrección definitiva del bug de rotación/vuelta en hover de miniaturas, homogenización de tamaño y orientación 3/4 hacia la izquierda de todos los vehículos, y eliminación de los bloques secundarios ("ESTÁNDAR DE SEGURIDAD MONOLITH" y "COMPRA Y PERMUTA").

---

## 1. Ajustes y Mejoras Aplicadas en Esta Iteración

1. **Aclarado Luminoso del Banner Principal (`HeroSlider.jsx`)**:
   - Imágenes al 100% de brillo y contraste natural.
   - Eliminados gradientes laterales opacos y reducido el overlay inferior a un sombreado sutil (`from-black/50 via-transparent to-transparent`) que asegura legibilidad perfecta con la máxima luminosidad.

2. **Resolución Definitiva del Bug de Rotación en Hover (`SilhouetteBar.jsx`, `FeaturedHome.jsx`, `CatalogView.jsx`)**:
   - Se aisló la inversión horizontal (`scale-x-[-1]`) en un contenedor wrapper estático padre.
   - El elemento hijo interno ejecuta de forma aislada el zoom suave (`group-hover:scale-105`), eliminando la sobreescritura de propiedades `transform` en Tailwind que provocaba el giro de 180° del vehículo.

3. **Homogeneización Visual y Orientación Unificada en 3/4**:
   - Los 12 modelos del catálogo apuntan de forma uniforme hacia la izquierda en ángulo 3/4 frontal (estándar oficial de marcas globales como Hyundai y Citroën).
   - Se introdujo una escala óptica calibrada (`scale`) por modelo para normalizar márgenes transparentes, garantizando idéntico tamaño visual en pantalla.

4. **Depuración de Secciones**:
   - Se removió el bloque `TrustBadges` ("ESTÁNDAR DE SEGURIDAD MONOLITH").
   - Se removió la sección `#financiacion-usados` ("COMPRA Y PERMUTA") de la home y su botón de acceso en `Header.jsx`.
   - Se mantuvo la herramienta de financiación y permuta contextualizada exclusivamente dentro de la ficha de detalle de cada unidad (`VehicleDetailView.jsx`).

5. **Banner de Redes Sociales de Lado a Lado**:
   - Mantenido como franja individual horizontal de ancho completo con iconos SVG monocromáticos limpios.

---

## 2. Verificación de QA y Testing

- Servidor Vite en vivo: `http://localhost:3000/`.
- Compilación `npm run build`: Exitosa en 334ms sin advertencias (`dist/`).
- Tests de Orquestación `cmd /c npm test`: **5/5 tests aprobados (100%)**.
- Git: Preparado para commit atómico bajo estándar Conventional Commits.
