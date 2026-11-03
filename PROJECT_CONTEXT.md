# Contexto del Proyecto: Concesionaria Web (Suite Multi-Diseño)

**Última actualización:** 03/11/2026  
**Estado:** Servidor activo en `http://localhost:3000/`. Se implementaron y validaron 3 conceptos de diseño independientes con un selector interactivo en tiempo real (`DesignSwitcher.jsx`).

---

## 1. Los 3 Diseños Implementados y Activos

El usuario puede alternar instantáneamente entre los 3 diseños con el flotante en la esquina inferior derecha:

1. **DISEÑO 1: MONOLITH STUDIO (Arquitectónico & Funcional)**:
   - Enfoque: Minimalismo sobrio con fondo perla texturizado (`#FCFCFD`), grilla estricta, líneas de cota técnicas. Inspirado en Porsche Finder, Ford Performance y Kavak.
   - Vistas: Home con `HeroSlider` 100vh, `SilhouetteBar` interactivo, Catálogo completo con sidebar de filtros dinámicos, selector dual de moneda USD / ARS, y Detalle de Unidad estilo Ford Raptor con mosaico 4x2 y Lightbox.

2. **DISEÑO 2: ATELIER AUTOMOBILE (Haute Horlogerie & Curaduría de Lujo)**:
   - Archivo: `src/components/AtelierDesign.jsx`
   - Enfoque: Estética editorial de alta costura, fondo marfil cálido (`#FAF8F5`), tipografía serif refinada (*Playfair Display* / *Cormorant Garamond*), acentos dorados champán.
   - Funcionalidades diferenciales:
     - Pasarela horizontal de piezas de colección (Horizontal Runway Showcase).
     - Simulador acústico de escape/motor (Cold Start & Revs) con barras ecualizadoras animadas.
     - Sección de Auditoría y Certificación Notarial de procedencia.
     - Modal de reserva privada con cita en salón VIP.

3. **DISEÑO 3: VELOCE CORSA (Motorsport & Telemetría High-Performance)**:
   - Archivo: `src/components/VeloceDesign.jsx`
   - Enfoque: Estética de paddock y competición, acentos Rosso Corsa y fibra de carbono sutil sobre blanco titanio pulido.
   - Funcionalidades diferenciales:
     - Selector interactivo de modos de conducción (**STREET**, **SPORT+**, **TRACK**) que altera las métricas de respuesta de acelerador, RPM idle y suspensión adaptativa en vivo.
     - **Comparador Lado a Lado** (`GitCompare`): Comparación técnica instantánea de 2 vehículos (potencia, torque, aceleración 0-100 km/h, tracción, relación peso-potencia).
     - Telemetría de pista y cards con cortes angulares.

---

## 2. Arquitectura de Datos y Componentes

- **Dataset**: `src/data/vehicles.js` con 10 vehículos reales, especificaciones técnicas completas, precios duales (USD / ARS tipo de cambio oficial $1.180), y pool de 8 fotografías por unidad.
- **Selector Global**: `src/components/DesignSwitcher.jsx` montado en `src/App.jsx`.
- **Orquestación y Pruebas**: Suite de agentes en `agents/` y tests unitarios en `tests/orchestrator.test.js` (**5/5 tests aprobados, 100% de éxito**).

---

## 3. Estado de Ejecución

- Servidor Vite en vivo: `http://localhost:3000/`.
- Compilación `npm run build`: Exitosa en ~340ms sin advertencias.
- Tests `cmd /c npm test`: 5/5 aprobados.
