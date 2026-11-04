export const EXCHANGE_RATE = 1180;

// Slides para el Hero principal (Imágenes cinematográficas con animación de zoom lento)
export const HERO_SLIDES = [
  {
    carId: "CIT-001",
    tag: "Lanzamiento Exclusivo · Híbrido 48V",
    title: "Nuevo Citroën C4 Híbrido",
    subtitle: "Silueta aerodinámica Crossover Coupé · Motor híbrido de alta eficiencia y máximo confort con suspensión de topes hidráulicos progresivos.",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=2000&q=85",
    pngImage: "https://www.citroen.com.ar/content/dam/citroen/argentina/home/bbc/c4/hibrido/bbc-c4-hibrido.png"
  },
  {
    carId: "HYU-001",
    tag: "Nueva Generación · Entrega Inmediata",
    title: "Hyundai Nueva Tucson",
    subtitle: "Diseño paramétrico revolucionario · Propulsión híbrida inteligente · Doble pantalla curva integrada de 12.3\" con tecnología SmartSense.",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=2000&q=85",
    pngImage: "https://hyundai.com.ar/publicfiles/model_pics/3b6c5c86cadb3ab52c3767e17d599321.png"
  },
  {
    carId: "MNL-100",
    tag: "Ford Performance · En Showroom",
    title: "Ford Ranger Raptor",
    subtitle: "Motor Naftero EcoBoost 3.0L V6 Bi-Turbo de 397 CV · Amortiguadores FOX Racing SHOX Live Valve de 2.5\" de calibración activa.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=2000&q=85",
    pngImage: "https://pngimg.com/d/pickup_truck_PNG16335.png"
  },
  {
    carId: "MNL-101",
    tag: "Porsche Exclusive · Seleccionado",
    title: "Porsche Macan T",
    subtitle: "265 CV Turbo PDK AWD · Paquete Sport Chrono de serie · Suspensión adaptativa PASM rebajada 15 mm en Gris Vulcano.",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=2000&q=85",
    pngImage: "https://pngimg.com/d/porsche_PNG10613.png"
  }
];

export const VEHICLES = [
  // 1. CITROËN C4 HÍBRIDO (Referencia directa de las imágenes 4 y 5 del usuario)
  {
    id: "CIT-001",
    brand: "Citroën",
    model: "Nuevo C4 Híbrido",
    trim: "1.2 PureTech Hybrid 136 CV ë-DCS6 · MAX",
    description: "Crossover coupé vanguardista que combina propulsión híbrida de 48V, suspensión Citroën Advanced Comfort® y un diseño aerodinámico distintivo.",
    bullets: [
      "Motor Híbrido 48V con caja automática de doble embrague ë-DCS6.",
      "Suspensión con amortiguadores de Topes Hidráulicos Progresivos®.",
      "Asientos Citroën Advanced Comfort® con tapizado en cuero bi-tono."
    ],
    condition: "0km",
    badge: "0 KM · HÍBRIDO",
    year: 2026,
    km: 0,
    transmission: "Automática ë-DCS6",
    fuel: "Híbrido",
    traction: "FWD",
    bodyType: "SUV",
    categoryTab: "PARTICULARES",
    priceUSD: 36900,
    power: "136 CV",
    engine: "1.2 Turbo Hybrid 48V",
    paint: "Verde Manhattan",
    location: "Showroom Libertador",
    featured: true,
    scale: 1.0,
    pngImage: "https://www.citroen.com.ar/content/dam/citroen/argentina/home/bbc/c4/hibrido/bbc-c4-hibrido.png",
    // Versiones como en la Imagen 5
    versions: [
      {
        name: "MAX",
        highlight: "Cuando buscas más, buscas el MAX.",
        features: [
          "Tapizados full cuero",
          "Ayudas a la conducción (ADAS)",
          "Techo vidriado estilo 'Spoiler'"
        ],
        colors: "Disponible en colores Verde Manhattan, Gris Mercury, Blanco Okenita, Negro Perla, Rojo Elixir y Azul Eclipse",
        png: "https://www.citroen.com.ar/content/dam/citroen/argentina/home/bbc/c4/hibrido/bbc-c4-hibrido.png"
      },
      {
        name: "PLUS",
        highlight: "Equilibrio ideal en confort urbano y eficiencia híbrida.",
        features: [
          "Pantalla táctil de 10\" con Mirror Screen inalámbrico",
          "Frenado autónomo de emergencia y detector de fatiga",
          "Llantas de aleación diamantadas de 18 pulgadas"
        ],
        colors: "Disponible en Gris Mercury, Blanco Okenita y Negro Perla",
        png: "https://www.citroen.com.ar/content/dam/citroen/argentina/home/bbc/c4/hibrido/bbc-c4-hibrido.png"
      }
    ],
    // Mosaico Editorial de 12 fotos de partes y ángulos (Como en la Imagen 4)
    anglePhotos: [
      {
        title: "Vista 3/4 Frontal Crossover Coupé",
        part: "Carrocería & Diseño Exterior",
        url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=85",
        span: "col-span-1 md:col-span-2 row-span-2"
      },
      {
        title: "Cámara de Reversa 360° & Guías Activas",
        part: "Pantalla Multimedia Touch 10\"",
        url: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=800&q=80",
        span: "col-span-1 row-span-1"
      },
      {
        title: "Puesto de Conducción y Volante de Cuero",
        part: "Cockpit Ergonómico",
        url: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80",
        span: "col-span-1 row-span-1"
      },
      {
        title: "Cuadro de Instrumentos Digital Full HD",
        part: "Telemetría & Flujo Híbrido",
        url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
        span: "col-span-1 row-span-1"
      },
      {
        title: "Asientos Traseros Advanced Comfort®",
        part: "Tapizado en Cuero con Costuras Chevron",
        url: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80",
        span: "col-span-1 row-span-1"
      },
      {
        title: "Remate Posterior Aerodinámico",
        part: "Ópticas LED en V y Alerón Integrado",
        url: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80",
        span: "col-span-1 row-span-1"
      },
      {
        title: "Techo Panorámico Vidriado",
        part: "Iluminación Solar y Persianas",
        url: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80",
        span: "col-span-1 row-span-1"
      },
      {
        title: "Faros Delanteros Citroën LED Vision",
        part: "Firma Lumínica Doble Chevron",
        url: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
        span: "col-span-1 md:col-span-2 row-span-1"
      }
    ],
    photos: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  // 2. HYUNDAI NUEVA TUCSON (Imagen 1 del usuario)
  {
    id: "HYU-001",
    brand: "Hyundai",
    model: "Nueva Tucson",
    trim: "1.6 Turbo HTRAC AWD · Híbrida",
    description: "La cumbre del diseño paramétrico con luces ocultas de joya, tracción total activa HTRAC y paquete de seguridad Hyundai SmartSense.",
    bullets: [
      "Plataforma híbrida inteligente con 230 CV y transmisión Shift-by-Wire.",
      "Pantalla curva integrada con doble display de 12.3\" con Apple CarPlay y Android Auto.",
      "Tracción integral permanente HTRAC con selector de terrenos (Barro, Arena, Nieve)."
    ],
    condition: "0km",
    badge: "0 KM · ENTREGA INMEDIATA",
    year: 2026,
    km: 0,
    transmission: "Automática 6 Vel",
    fuel: "Híbrido",
    traction: "4WD",
    bodyType: "SUV",
    categoryTab: "PARTICULARES",
    priceUSD: 54900,
    power: "230 CV",
    engine: "1.6L Turbo Hybrid",
    paint: "Gris Titanio",
    location: "Showroom Libertador",
    featured: true,
    flip: true,
    scale: 1.0,
    pngImage: "https://hyundai.com.ar/publicfiles/model_pics/3b6c5c86cadb3ab52c3767e17d599321.png",
    versions: [
      {
        name: "LIMITED 4WD",
        highlight: "La máxima expresión de tecnología, diseño y tracción total.",
        features: [
          "Techo solar panorámico con apertura eléctrica",
          "Audio Premium Bose con 8 parlantes y subwoofer",
          "Monitor de punto ciego en tablero digital (BVM)"
        ],
        colors: "Titan Grey, Phantom Black, White Cream, Amazon Grey",
        png: "https://hyundai.com.ar/publicfiles/model_pics/3b6c5c86cadb3ab52c3767e17d599321.png"
      },
      {
        name: "GLS 2WD",
        highlight: "Eficiencia, confort y habitabilidad superior para la familia.",
        features: [
          "Pantalla táctil central de 10.25\" con cargador inalámbrico",
          "Climatizador bi-zona con difusión de aire indirecta",
          "Faros delanteros Parametric Hidden Lights Full LED"
        ],
        colors: "Phantom Black, White Cream, Shimmering Silver",
        png: "https://hyundai.com.ar/publicfiles/model_pics/3b6c5c86cadb3ab52c3767e17d599321.png"
      }
    ],
    anglePhotos: [
      {
        title: "Frente Paramétrico con Luces Joya Ocultas",
        part: "Ópticas Parametric Hidden Lights",
        url: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=85",
        span: "col-span-1 md:col-span-2 row-span-2"
      },
      {
        title: "Doble Display Curvo Panorámico de 12.3\"",
        part: "Cockpit Digital & SmartSense",
        url: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80",
        span: "col-span-1 row-span-1"
      },
      {
        title: "Selector Shift-by-Wire de Botones",
        part: "Consola Central Flotante",
        url: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=800&q=80",
        span: "col-span-1 row-span-1"
      },
      {
        title: "Butacas de Cuero Perforado Climatizadas",
        part: "Ventilación y Calefacción Eléctrica",
        url: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80",
        span: "col-span-1 row-span-1"
      },
      {
        title: "Llantas Diamantadas R19 Bicolor",
        part: "Neumáticos de Alto Agarre",
        url: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80",
        span: "col-span-1 row-span-1"
      }
    ],
    photos: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  // 3. HYUNDAI HB20 (Imagen 1 del usuario)
  {
    id: "HYU-002",
    brand: "Hyundai",
    model: "HB20",
    trim: "1.6 Gamma DOHC 16V 123 CV · Platinum Safety",
    description: "Hatchback urbano ágil y refinado, líder en seguridad con 6 airbags de serie y asistencias avanzadas a la conducción.",
    bullets: [
      "Motor 1.6L 16V de 123 CV con transmisión automática de 6 velocidades.",
      "6 Airbags de serie, control de estabilidad (ESP) y asistente de arranque en pendiente.",
      "Pantalla multimedia de 8\" con conectividad inalámbrica para smartphones."
    ],
    condition: "0km",
    badge: "0 KM",
    year: 2026,
    km: 0,
    transmission: "Automática",
    fuel: "Nafta",
    traction: "FWD",
    bodyType: "Hatchback",
    categoryTab: "PARTICULARES",
    priceUSD: 23800,
    power: "123 CV",
    engine: "1.6L 16V",
    paint: "Plata Brisk",
    location: "Hub Pilar",
    featured: false,
    flip: true,
    scale: 1.18,
    pngImage: "https://hyundai.com.ar/publicfiles/model_pics/341b3771bdf7f5b082f93cedaded714f.png",
    photos: [
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  // 4. HYUNDAI NUEVA CRETA (Imagen 1 del usuario)
  {
    id: "HYU-003",
    brand: "Hyundai",
    model: "Nueva Creta",
    trim: "1.5 Smartstream CVT · Safety Plus",
    description: "SUV compacto de líneas audaces con techo solar panorámico, cargador inalámbrico y cámara de visión 360°.",
    bullets: [
      "Motor Smartstream 1.5L eficiente acoplado a transmisión automática IVT.",
      "Frenos a disco en las 4 ruedas con sistema de monitoreo de presión TPMS.",
      "Tablero digital de 7 pulgadas con computadora de a bordo y modos de conducción."
    ],
    condition: "0km",
    badge: "0 KM",
    year: 2026,
    km: 0,
    transmission: "Automática IVT",
    fuel: "Nafta",
    traction: "FWD",
    bodyType: "SUV",
    categoryTab: "PARTICULARES",
    priceUSD: 33500,
    power: "115 CV",
    engine: "1.5L Smartstream",
    paint: "Gris Magnético",
    location: "Showroom Libertador",
    featured: false,
    flip: true,
    scale: 1.05,
    pngImage: "https://hyundai.com.ar/publicfiles/model_pics/e7e5e083d6af4a1de84b59c48979a117.png",
    photos: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  // 5. HYUNDAI SANTA FE (Imagen 1 del usuario)
  {
    id: "HYU-004",
    brand: "Hyundai",
    model: "Santa Fe",
    trim: "2.5 Turbo HTRAC AWD · 7 Asientos",
    description: "SUV familiar de gran tamaño con 3 filas de asientos, diseño cúbico imponente y portón trasero de apertura extendida.",
    bullets: [
      "Motor 2.5L Turbo de 281 CV con caja de doble embrague húmedo de 8 velocidades.",
      "Configuración espaciosa para 7 pasajeros con butacas abatibles eléctricamente.",
      "Puertas traseras de apertura extra amplia ideales para acceso familiar y equipaje."
    ],
    condition: "0km",
    badge: "0 KM",
    year: 2026,
    km: 0,
    transmission: "Automática 8 Vel",
    fuel: "Nafta",
    traction: "4WD",
    bodyType: "SUV",
    categoryTab: "PARTICULARES",
    priceUSD: 72000,
    power: "281 CV",
    engine: "2.5L Turbo",
    paint: "Terracotta Brown",
    location: "Showroom Libertador",
    featured: false,
    flip: true,
    scale: 1.05,
    pngImage: "https://hyundai.com.ar/publicfiles/model_pics/56683bbba1a48c2e15d0ac237dfece23.png",
    photos: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  // 6. CITROËN C3 (Imagen 2 del usuario)
  {
    id: "CIT-002",
    brand: "Citroën",
    model: "C3",
    trim: "1.6 VTi 115 CV Feel Pack Automático",
    description: "Hatchback con actitud SUV, mayor despeje del suelo (18 cm), gran confort de marcha y pantalla táctil de 10 pulgadas.",
    bullets: [
      "Motor 1.6L 16V de 115 CV con transmisión automática de 6 velocidades.",
      "Pantalla táctil Citroën Connect de 10\" con Mirror Screen inalámbrico.",
      "Barras de techo longitudinales y protectores Airbump laterales."
    ],
    condition: "0km",
    badge: "0 KM",
    year: 2026,
    km: 0,
    transmission: "Automática",
    fuel: "Nafta",
    traction: "FWD",
    bodyType: "Hatchback",
    categoryTab: "PARTICULARES",
    priceUSD: 21900,
    power: "115 CV",
    engine: "1.6L VTi",
    paint: "Gris Artense",
    location: "Hub Pilar",
    featured: false,
    scale: 1.15,
    pngImage: "https://www.citroen.com.ar/content/dam/citroen/argentina/home/bbc/bbc-c3-you2.png",
    photos: [
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  // 7. CITROËN BASALT (Imagen 2 del usuario)
  {
    id: "CIT-003",
    brand: "Citroën",
    model: "Basalt",
    trim: "Turbo 200 120 CV CVT · Shine",
    description: "Inédito SUV Coupé que combina la robustez y despeje de una camioneta con la silueta deportiva y estilizada de una coupé.",
    bullets: [
      "Motor Turbo 200 de 120 CV y 200 Nm acoplado a caja automática CVT de 7 marchas simuladas.",
      "Baúl de 490 litros con boca de carga extra grande y piso plano.",
      "Climatizador digital automático y tapizados bitono exclusivos."
    ],
    condition: "0km",
    badge: "0 KM · NOVEDAD",
    year: 2026,
    km: 0,
    transmission: "Automática CVT",
    fuel: "Nafta",
    traction: "FWD",
    bodyType: "SUV",
    categoryTab: "PARTICULARES",
    priceUSD: 28900,
    power: "120 CV",
    engine: "1.0L Turbo",
    paint: "Gris Grafito",
    location: "Showroom Libertador",
    featured: true,
    scale: 1.02,
    pngImage: "https://www.citroen.com.ar/content/dam/citroen/argentina/home/bbc/basalt/bbc-basalt.png",
    photos: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  // 8. CITROËN BERLINGO (Utilitario - Imagen 2 del usuario)
  {
    id: "CIT-004",
    brand: "Citroën",
    model: "Berlingo Furgón",
    trim: "1.6 HDi 92 CV · Confort",
    description: "Líder indiscutido en logística y utilitarios comerciales, con bajísimo consumo de combustible y capacidad de carga de 800 kg.",
    bullets: [
      "Motor 1.6L HDi Turbodiésel con autonomía superior a 900 km por tanque.",
      "Capacidad volumétrica de carga de 3.000 litros y doble puerta trasera batiente.",
      "Dirección asistida progresiva y aire acondicionado de alta capacidad."
    ],
    condition: "0km",
    badge: "0 KM · UTILITARIO",
    year: 2026,
    km: 0,
    transmission: "Manual 5 Vel",
    fuel: "Diesel",
    traction: "FWD",
    bodyType: "Utilitario",
    categoryTab: "UTILITARIOS",
    priceUSD: 22400,
    power: "92 CV",
    engine: "1.6L HDi",
    paint: "Blanco Banquise",
    location: "Hub Pilar",
    featured: false,
    scale: 1.0,
    pngImage: "/images/cars/berlingo-clean.png",
    photos: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  // 9. FORD RANGER RAPTOR (Pick-up Performance)
  {
    id: "MNL-100",
    brand: "Ford",
    model: "Ranger Raptor",
    trim: "3.0L V6 EcoBoost Bi-Turbo 4WD · FOX Racing",
    description: "Pick-up deportiva desarrollada por Ford Performance con chasis reforzado, amortiguadores FOX Live Valve y 397 CV.",
    bullets: [
      "Motor Naftero EcoBoost 3.0L V6 Bi-Turbo (397 CV / 583 Nm).",
      "Pantalla Multitáctil vertical de 12\" con SYNC 4 y Audio B&O.",
      "Amortiguadores FOX Racing SHOX de 2.5\" con tecnología Live Valve de bypass electrónico."
    ],
    condition: "0km",
    badge: "0 KM",
    year: 2026,
    km: 0,
    transmission: "Automática 10 Vel",
    fuel: "Nafta",
    traction: "4WD",
    bodyType: "Pick-up",
    categoryTab: "PARTICULARES",
    priceUSD: 99800,
    power: "397 CV",
    engine: "3.0L V6 EcoBoost",
    paint: "Naranja Código",
    location: "Showroom Libertador",
    featured: true,
    scale: 1.0,
    pngImage: "/images/cars/pickup-93.png",
    photos: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=85"
    ]
  },

  // 10. PORSCHE MACAN T (Gama de Alta Selección)
  {
    id: "MNL-101",
    brand: "Porsche",
    model: "Macan T",
    trim: "2.0 Turbo PDK AWD · Paquete Sport Chrono",
    description: "SUV deportivo compacto con puesta a punto dinámica Touring, suspensión PASM rebajada y tracción integral inteligente.",
    bullets: [
      "Motor 2.0L Turbo de 265 CV con caja de doble embrague PDK de 7 marchas.",
      "Paquete Sport Chrono con selector de modos en el volante y Launch Control.",
      "Interior tapizado en cuero negro con costuras contrastantes en Gris Ágata."
    ],
    condition: "usado",
    badge: "USADO SELECCIONADO",
    year: 2024,
    km: 11500,
    transmission: "Automática PDK",
    fuel: "Nafta",
    traction: "AWD",
    bodyType: "SUV",
    categoryTab: "PARTICULARES",
    priceUSD: 118000,
    power: "265 CV",
    engine: "2.0L Turbo",
    paint: "Gris Vulcano Metalizado",
    location: "Showroom Libertador",
    featured: true,
    scale: 1.0,
    pngImage: "/images/cars/porsche-macan-clean.png",
    photos: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  // 11. BMW 330i M SPORT
  {
    id: "MNL-103",
    brand: "BMW",
    model: "X5 M Sport",
    trim: "3.0 TwinPower Turbo Steptronic 8 Vel AWD",
    description: "La referencia en SUVs deportivos de alto rendimiento, con tracción xDrive inteligente y paquete estético M Sport completo.",
    bullets: [
      "Motor 3.0L TwinPower Turbo de 340 CV con tracción total xDrive.",
      "Cockpit digital curvado con conectividad inalámbrica y navegación integrada.",
      "Paquete M Sport Pro con llantas de 20\" y suspensión neumática adaptativa."
    ],
    condition: "usado",
    badge: "USADO SELECCIONADO",
    year: 2024,
    km: 14200,
    transmission: "Automática Steptronic",
    fuel: "Nafta",
    traction: "AWD",
    bodyType: "SUV",
    categoryTab: "PARTICULARES",
    priceUSD: 89500,
    power: "340 CV",
    engine: "3.0L Turbo",
    paint: "Negro Zafiro Metalizado",
    location: "Showroom Libertador",
    featured: true,
    scale: 1.0,
    pngImage: "/images/cars/bmw-x5-clean.png",
    photos: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  // 12. AUDI TT RS COUPÉ
  {
    id: "MNL-108",
    brand: "Audi",
    model: "TT RS Coupé Quattro",
    trim: "2.5L TFSI 5 Cilindros S-Tronic 400 CV · Escape RS",
    description: "Deportivo emblemático impulsado por el motor 5 cilindros de 400 CV con aceleración de 0 a 100 km/h en 3,7 segundos.",
    bullets: [
      "Motor 2.5L TFSI de 5 cilindros galardonado (400 CV / 480 Nm).",
      "Tracción integral permanente Quattro con Launch Control.",
      "Escape deportivo RS con salidas ovaladas en negro brillante."
    ],
    condition: "usado",
    badge: "USADO SELECCIONADO",
    year: 2023,
    km: 9200,
    transmission: "Automática S-Tronic",
    fuel: "Nafta",
    traction: "Quattro",
    bodyType: "Coupé",
    categoryTab: "PARTICULARES",
    priceUSD: 105000,
    power: "400 CV",
    engine: "2.5L 5 Cilindros",
    paint: "Rojo Misano",
    location: "Showroom Libertador",
    featured: false,
    scale: 1.0,
    pngImage: "/images/cars/audi-tt-clean.png",
    photos: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];

export const EXTRA_GALLERY_POOL = [
  "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1000&q=80"
];

export function getEightGalleryPhotos(car) {
  const combined = car.photos ? [...car.photos] : [];
  let i = 0;
  while (combined.length < 8) {
    combined.push(EXTRA_GALLERY_POOL[i % EXTRA_GALLERY_POOL.length]);
    i++;
  }
  return combined.slice(0, 8);
}
