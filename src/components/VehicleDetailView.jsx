import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, Check, ArrowUpRight, Calculator, RefreshCw } from 'lucide-react';
import { EXCHANGE_RATE, getEightGalleryPhotos } from '../data/vehicles';
import FinancingCalculator from './FinancingCalculator';
import TradeInForm from './TradeInForm';

export default function VehicleDetailView({
  vehicle,
  onBack,
  onScrollToContact,
  currency,
  onOpenLightbox
}) {
  if (!vehicle) return null;

  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [selectedVersionIdx, setSelectedVersionIdx] = useState(0);
  const [activeAngleCategory, setActiveAngleCategory] = useState('ALL'); // 'ALL' | 'EXTERIOR' | 'INTERIOR' | 'TECNICA'
  const [activeServiceTab, setActiveServiceTab] = useState('financing'); // 'financing' | 'tradein'

  const galleryPhotos = getEightGalleryPhotos(vehicle);

  const priceARS = vehicle.priceUSD * EXCHANGE_RATE;
  const priceNoTaxARS = priceARS * 0.826;

  const formatPrice = (usd) => {
    if (currency === 'USD') return 'USD ' + usd.toLocaleString('es-AR');
    return '$ ' + (usd * EXCHANGE_RATE).toLocaleString('es-AR');
  };

  const handleWhatsApp = () => {
    const text = `Hola, me comunico desde la web oficial por la unidad: ${vehicle.brand} ${vehicle.model} (${vehicle.year}) - Ref: ${vehicle.id}. Deseo recibir asesoramiento y cotización formal.`;
    window.open(`https://wa.me/5491155550199?text=${encodeURIComponent(text)}`, '_blank');
  };

  // Versiones por defecto si no están especificadas
  const versionsList = vehicle.versions || [
    {
      name: "MAX / TOURING",
      highlight: `Equipamiento tope de gama y máxima dotación tecnológica para ${vehicle.model}.`,
      features: [
        "Tapizados en cuero seleccionado y butacas eléctricas",
        "Paquete avanzado de asistencias a la conducción (ADAS)",
        "Techo vidriado panorámico y llantas de aleación diamantadas"
      ],
      colors: `Disponible en paleta oficial ${vehicle.brand}`,
      png: vehicle.pngImage
    },
    {
      name: "PLUS / COMFORT",
      highlight: `Equilibrio perfecto entre rendimiento, conectividad y confort diario.`,
      features: [
        "Pantalla táctil de alta definición con conectividad inalámbrica",
        "Climatizador automático bi-zona y acceso manos libres",
        "Control de crucero adaptativo y frenado autónomo"
      ],
      colors: "Disponible en tonos perla, grafito y plata metalizado",
      png: vehicle.pngImage
    }
  ];

  const currentVersion = versionsList[selectedVersionIdx] || versionsList[0];

  const allAnglePhotos = vehicle.anglePhotos || [
    {
      title: "Vista 3/4 Frontal",
      part: "Carrocería & Aerodinámica",
      type: "EXTERIOR",
      url: galleryPhotos[0],
      span: "col-span-1 lg:col-span-2 row-span-2"
    },
    {
      title: "Infotainment & Pantalla Digital",
      part: "Cámaras 360° y Asistencias",
      type: "INTERIOR",
      url: galleryPhotos[1],
      span: "col-span-1"
    },
    {
      title: "Cockpit y Puesto de Conducción",
      part: "Volante Multifunción en Cuero",
      type: "INTERIOR",
      url: galleryPhotos[2],
      span: "col-span-1"
    },
    {
      title: "Instrumental Digital Full HD",
      part: "Telemetría y Modos de Manejo",
      type: "TECNICA",
      url: galleryPhotos[3],
      span: "col-span-1"
    },
    {
      title: "Butacas Deportivas Ergonómicas",
      part: "Tapizado en Cuero Microperforado",
      type: "INTERIOR",
      url: galleryPhotos[4],
      span: "col-span-1"
    },
    {
      title: "Remate Posterior y Ópticas LED",
      part: "Firma Lumínica de Alta Visibilidad",
      type: "EXTERIOR",
      url: galleryPhotos[5],
      span: "col-span-1 lg:col-span-2"
    },
    {
      title: "Techo Panorámico Vidriado",
      part: "Iluminación Natural con Apertura",
      type: "EXTERIOR",
      url: galleryPhotos[6],
      span: "col-span-1"
    },
    {
      title: "Llantas Diamantadas y Frenos",
      part: "Chasis y Puesta a Punto",
      type: "TECNICA",
      url: galleryPhotos[7],
      span: "col-span-1"
    }
  ];

  const filteredAngles = allAnglePhotos.filter(angle => {
    if (activeAngleCategory === 'ALL') return true;
    return angle.type === activeAngleCategory;
  });

  return (
    <section className="whynot-pearl-bg pt-20 min-h-screen text-zinc-900 select-none">
      
      {/* Sub-barra Superior Fija con Retroceso Rápido */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-zinc-200/90 shadow-xs">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-black text-black hover:opacity-60 transition group cursor-pointer font-tech uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Volver al catálogo</span>
          </button>

          <div className="flex items-center gap-4">
            <span className="text-xs text-black font-extrabold font-tech">
              {vehicle.brand} · {vehicle.model} ({vehicle.year})
            </span>
            <button
              onClick={() => window.open(window.location.href, '_blank')}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-300 hover:border-black text-[11px] font-bold text-black transition bg-white cursor-pointer font-tech"
              title="Abrir copia en nueva pestaña"
            >
              <span>Nueva Pestaña</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 1. HERO SHOWCASE DEL VEHÍCULO */}
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10 pt-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Showcase con Miniatura PNG o Foto Principal */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-white/90 relative group flex items-center justify-center p-6 shadow-xs">
              {activePhotoIndex === 0 && vehicle.pngImage ? (
                <div className="car-platform-shadow w-full h-full flex items-center justify-center">
                  <img
                    src={vehicle.pngImage}
                    alt={vehicle.model}
                    className={`max-h-full max-w-full object-contain relative z-10 transition-transform duration-700 group-hover:scale-105 ${
                      vehicle.flip ? '-scale-x-100' : ''
                    }`}
                  />
                </div>
              ) : (
                <img
                  src={galleryPhotos[activePhotoIndex]}
                  alt={vehicle.model}
                  className="w-full h-full object-cover rounded-2xl transition-all duration-700"
                />
              )}

              <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
                <span className="px-3 py-1 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-wider font-tech shadow-xs">
                  {vehicle.badge}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/95 text-black border border-zinc-200 text-[10px] font-semibold font-tech">
                  {vehicle.bodyType}
                </span>
              </div>
            </div>

            {/* Miniaturas de selección rápida */}
            <div className="flex items-center justify-center gap-2.5 mt-4 overflow-x-auto py-1 max-w-full">
              {galleryPhotos.slice(0, 6).map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhotoIndex(idx)}
                  className={`w-14 h-10 rounded-lg overflow-hidden border transition cursor-pointer shrink-0 ${
                    activePhotoIndex === idx
                      ? 'border-black ring-2 ring-black'
                      : 'border-zinc-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={photo} alt="Miniatura" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Título, bullets, precios y botones depurados */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-black/60 block mb-1 font-tech">
                {vehicle.brand}
              </span>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-black leading-tight font-display">
                {vehicle.model}
              </h1>
              <span className="text-xs text-zinc-600 font-tech mt-1 block">
                {vehicle.trim}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
              {vehicle.description}
            </p>

            {/* Bullets clave */}
            <ul className="space-y-2.5 text-xs sm:text-sm text-black font-medium pt-1">
              {vehicle.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Precios Duales */}
            <div className="pt-4 border-t border-zinc-200/80 space-y-2">
              <div>
                <span className="block text-[11px] font-bold text-black/60 font-tech uppercase">
                  Precio sugerido de lista
                </span>
                <span className="text-3xl sm:text-4xl font-black text-black tabular-nums tracking-tight font-tech">
                  $ {priceARS.toLocaleString('es-AR')},00
                </span>
              </div>

              <div>
                <span className="text-xs font-bold text-zinc-700 tabular-nums font-tech">
                  USD {vehicle.priceUSD.toLocaleString('es-AR')} · ($ {priceNoTaxARS.toLocaleString('es-AR', { maximumFractionDigits: 0 })} sin impuestos)
                </span>
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={handleWhatsApp}
                className="px-8 py-3.5 rounded-full bg-black hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:shadow-xl inline-flex items-center gap-2.5 cursor-pointer font-tech"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contactar Asesor Oficial</span>
              </button>

              <button
                onClick={() => onScrollToContact(`${vehicle.brand} ${vehicle.model} (${vehicle.year})`)}
                className="px-6 py-3.5 rounded-full border border-zinc-300 hover:border-black text-black font-bold text-xs uppercase tracking-wider transition-all duration-300 bg-white/80 cursor-pointer font-tech"
              >
                Agendar Visita
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* 2. SECCIÓN "EXPLORÁ CADA ÁNGULO" Con Filtro de Categorías (Valeria - Perfil 2) */}
      <div className="py-20 border-t border-zinc-200/80 bg-white/50 backdrop-blur-xs">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-left">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black font-display">
                EXPLORÁ CADA ÁNGULO DEL {vehicle.brand.toUpperCase()} {vehicle.model.toUpperCase()}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 mt-2 font-normal">
                Mirá las imágenes que revelan la esencia del nuevo {vehicle.model}.
              </p>
            </div>

            {/* Filtro Rápido de Ángulos */}
            <div className="flex items-center gap-1.5 p-1 bg-zinc-100 rounded-xl text-xs font-bold font-tech">
              {[
                { id: 'ALL', label: 'Todos' },
                { id: 'EXTERIOR', label: 'Exterior' },
                { id: 'INTERIOR', label: 'Interior' },
                { id: 'TECNICA', label: 'Detalles' }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setActiveAngleCategory(f.id)}
                  className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                    activeAngleCategory === f.id
                      ? 'bg-black text-white shadow-xs'
                      : 'text-zinc-600 hover:text-black'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mosaico Editorial */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredAngles.map((angle, idx) => (
              <div
                key={idx}
                onClick={() => onOpenLightbox(galleryPhotos, idx % galleryPhotos.length)}
                className={`group relative rounded-2xl overflow-hidden bg-zinc-100 cursor-pointer shadow-xs ${angle.span || 'col-span-1'}`}
              >
                <div className="w-full h-full min-h-[220px] aspect-[4/3] overflow-hidden">
                  <img
                    src={angle.url}
                    alt={angle.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity flex flex-col justify-end p-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300 font-tech">
                    {angle.part}
                  </span>
                  <h4 className="text-sm font-bold text-white tracking-tight font-display">
                    {angle.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 3. SECCIÓN "CONOCÉ SUS VERSIONES" (Imagen 5) */}
      <div className="py-20 border-t border-zinc-200/80 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 text-center">
          
          <div className="max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black font-display">
              CONOCÉ SUS VERSIONES
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-2">
              Descubrí el {vehicle.model} pensado para tu forma de moverte.
            </p>

            {/* Pestañas de Versiones (MAX | PLUS) */}
            <div className="flex items-center justify-center gap-8 mt-6 border-b border-zinc-200 pb-2">
              {versionsList.map((ver, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedVersionIdx(idx)}
                  className={`pb-2 relative text-xs sm:text-sm font-extrabold tracking-widest uppercase transition-colors cursor-pointer ${
                    selectedVersionIdx === idx ? 'text-red-600 font-black' : 'text-black hover:text-red-600'
                  }`}
                >
                  <span>{ver.name}</span>
                  {selectedVersionIdx === idx && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Visualización del Auto PNG con Sombra sobre Base Minimalista */}
          <div className="max-w-3xl mx-auto my-10">
            <div className="car-platform-shadow w-full h-64 sm:h-80 flex items-center justify-center relative overflow-visible">
              <div className={`w-full h-full flex items-center justify-center ${vehicle.flip ? 'scale-x-[-1]' : ''}`}>
                <img
                  src={currentVersion.png || vehicle.pngImage}
                  alt={currentVersion.name}
                  style={{
                    transform: `scale(${vehicle.scale || 1.0})`
                  }}
                  className="max-h-56 sm:max-h-72 w-auto max-w-[92%] object-contain relative z-10 select-none pointer-events-none transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Características Clave con Barritas Rojas y Botón CONTACTAR ASESOR */}
          <div className="max-w-4xl mx-auto pt-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-zinc-100 pt-8">
              
              <div className="md:col-span-7 space-y-4">
                <span className="text-xl font-black text-black font-display uppercase block">
                  {currentVersion.name}
                </span>
                <p className="text-xs text-zinc-500 font-normal">
                  {currentVersion.highlight}
                </p>

                {/* 3 Viñetas con Barrita Roja */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {currentVersion.features.map((feat, idx) => (
                    <div key={idx} className="border-t-2 border-red-600 pt-2 text-left">
                      <span className="text-xs font-semibold text-black leading-snug block">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-[11px] text-zinc-400 font-tech pt-2">
                  {currentVersion.colors}
                </p>
              </div>

              {/* Único botón de llamada a la acción */}
              <div className="md:col-span-5 flex justify-start md:justify-end">
                <button
                  onClick={handleWhatsApp}
                  className="px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer font-tech"
                >
                  CONTACTAR ASESOR
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 4. SECCIÓN FINANCIACIÓN & PERMUTA CONTEXTUALIZADA PARA ESTA UNIDAD */}
      <div className="py-20 border-t border-zinc-200/80 whynot-pearl-bg">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          
          <div className="flex items-center justify-center gap-4 mb-10">
            <button
              onClick={() => setActiveServiceTab('financing')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer font-tech inline-flex items-center gap-2 ${
                activeServiceTab === 'financing'
                  ? 'bg-black text-white shadow-xs'
                  : 'bg-white text-zinc-600 hover:text-black border border-zinc-200'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Simular Cuotas para este Vehículo</span>
            </button>

            <button
              onClick={() => setActiveServiceTab('tradein')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer font-tech inline-flex items-center gap-2 ${
                activeServiceTab === 'tradein'
                  ? 'bg-black text-white shadow-xs'
                  : 'bg-white text-zinc-600 hover:text-black border border-zinc-200'
              }`}
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Entregar mi Auto en Parte de Pago</span>
            </button>
          </div>

          {activeServiceTab === 'financing' && (
            <FinancingCalculator
              initialPriceUSD={vehicle.priceUSD}
              currency={currency}
            />
          )}

          {activeServiceTab === 'tradein' && (
            <TradeInForm
              targetVehicle={`${vehicle.brand} ${vehicle.model} (${vehicle.year})`}
            />
          )}

        </div>
      </div>

    </section>
  );
}
