import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, MessageCircle, Check } from 'lucide-react';
import { EXCHANGE_RATE, getEightGalleryPhotos } from '../data/vehicles';

export default function VehicleDetailView({
  vehicle,
  onBack,
  onScrollToContact,
  currency,
  onOpenLightbox
}) {
  if (!vehicle) return null;

  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const galleryPhotos = getEightGalleryPhotos(vehicle);

  const priceARS = vehicle.priceUSD * EXCHANGE_RATE;
  const priceNoTaxARS = priceARS * 0.826; // approx sin IVA

  const formatPrice = (usd) => {
    if (currency === 'USD') return 'USD ' + usd.toLocaleString('es-AR');
    return '$ ' + (usd * EXCHANGE_RATE).toLocaleString('es-AR');
  };

  const handleOpenNewTab = () => {
    window.open(window.location.href, '_blank');
  };

  const handleWhatsApp = () => {
    const text = `Hola MONOLITH Automotive, estoy consultando desde la web por la unidad: ${vehicle.brand} ${vehicle.model} (${vehicle.year}) - Ref: ${vehicle.id}. Deseo recibir información y coordinar una visita.`;
    window.open(`https://wa.me/5491155550199?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="pt-20 min-h-screen bg-white">
      
      {/* Sub-barra Superior Fija */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold text-black hover:text-zinc-500 transition group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Volver al catálogo</span>
          </button>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-xs text-zinc-400 font-medium">
              {vehicle.brand} / {vehicle.model}
            </span>
            <button
              onClick={handleOpenNewTab}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-zinc-200 hover:border-black text-xs font-semibold text-black transition cursor-pointer"
              title="Abrir en nueva pestaña"
            >
              <span>Abrir en nueva pestaña</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 1. HERO SHOWCASE DEL VEHÍCULO */}
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10 pt-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Imagen Principal + Miniaturas */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-zinc-100 border border-zinc-200 relative group shadow-sm">
              <img
                src={galleryPhotos[activePhotoIndex]}
                alt={vehicle.model}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-black text-white text-[11px] font-bold uppercase tracking-wider shadow-xs">
                  {vehicle.badge}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-black border border-zinc-200 text-[11px] font-semibold">
                  {vehicle.bodyType}
                </span>
              </div>
            </div>

            {/* Miniaturas rápidas */}
            <div className="flex items-center justify-center gap-3 mt-4 overflow-x-auto py-1 max-w-full">
              {galleryPhotos.slice(0, 5).map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhotoIndex(idx)}
                  className={`w-16 h-11 rounded-lg overflow-hidden border transition cursor-pointer shrink-0 ${
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

          {/* Columna Derecha: Título, bullets, precios y botones */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-400 block mb-1 font-tech">
                {vehicle.brand}
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-black leading-[1.06] font-display">
                {vehicle.model}
              </h1>
            </div>

            <p className="text-sm text-zinc-600 leading-relaxed font-normal">
              {vehicle.description}
            </p>

            {/* Bullets clave */}
            <ul className="space-y-2.5 text-sm text-black font-medium pt-1">
              {vehicle.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Bloque de Precios Dual */}
            <div className="pt-4 border-t border-zinc-200 space-y-3">
              <div>
                <span className="block text-xs font-medium text-zinc-400 mb-0.5 font-tech">
                  Precio sugerido de lista
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-black tabular-nums tracking-tight font-tech">
                  $ {priceARS.toLocaleString('es-AR')},00
                </span>
              </div>

              <div>
                <span className="block text-xs text-zinc-400 font-tech">
                  Precio sin impuestos nacionales / Valor de referencia USD
                </span>
                <span className="text-sm font-semibold text-zinc-700 tabular-nums font-tech">
                  USD {vehicle.priceUSD.toLocaleString('es-AR')} · ($ {priceNoTaxARS.toLocaleString('es-AR', { maximumFractionDigits: 2 })} sin IVA)
                </span>
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onScrollToContact(`${vehicle.brand} ${vehicle.model} (${vehicle.year})`)}
                className="px-8 py-3.5 rounded-full bg-black hover:bg-zinc-800 text-white font-semibold text-sm transition-all duration-300 hover:shadow-xl active:scale-95 cursor-pointer"
              >
                Cotizar / Agendar Visita
              </button>
              <button
                onClick={handleWhatsApp}
                className="px-6 py-3.5 rounded-full border border-zinc-300 hover:border-black text-black font-semibold text-sm transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar por WhatsApp</span>
                <span>→</span>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* 2. SECCIÓN "GALERÍA" EN GRILLA 4x2 (8 FOTOS) */}
      <div className="pt-6 pb-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black font-display">
            Galería
          </h2>
          <p className="text-xs text-zinc-400 mt-1 font-tech">
            Hacé clic en cualquier fotografía para ampliarla a pantalla completa
          </p>
        </div>

        {/* Mosaico 4 columnas x 2 filas (8 fotos) */}
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 bg-zinc-200 border-y border-zinc-200">
          {galleryPhotos.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => onOpenLightbox(galleryPhotos, idx)}
              className="relative aspect-[16/10] bg-zinc-100 overflow-hidden cursor-pointer group"
            >
              <img
                src={photo}
                alt={`Foto ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-3 py-1.5 rounded-full bg-white/90 text-black text-xs font-bold shadow-md">
                  Ampliar foto ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. FICHA TÉCNICA Y ESPECIFICACIONES OFICIALES */}
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10 pb-24">
        <div className="bg-zinc-50 rounded-3xl border border-zinc-200 p-8 sm:p-12 shadow-xs">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-8 border-b border-zinc-200">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400 block mb-1 font-tech">
                Especificaciones Oficiales
              </span>
              <h3 className="text-2xl font-bold text-black font-display">
                Ficha Técnica y Equipamiento
              </h3>
            </div>
            <span className="text-xs font-semibold text-zinc-500 mt-2 sm:mt-0 tabular-nums font-tech">
              Código de Unidad: {vehicle.id}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm font-tech">
            
            {/* 1. Motorización */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">
                Motorización
              </span>
              <div className="py-2 border-b border-zinc-200 flex justify-between">
                <span className="text-zinc-500">Motor</span>
                <span className="font-bold text-black">{vehicle.engine}</span>
              </div>
              <div className="py-2 border-b border-zinc-200 flex justify-between">
                <span className="text-zinc-500">Potencia</span>
                <span className="font-bold text-black tabular-nums">{vehicle.power}</span>
              </div>
              <div className="py-2 border-b border-zinc-200 flex justify-between">
                <span className="text-zinc-500">Combustible</span>
                <span className="font-bold text-black">{vehicle.fuel}</span>
              </div>
            </div>

            {/* 2. Transmisión & Chasis */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">
                Transmisión & Chasis
              </span>
              <div className="py-2 border-b border-zinc-200 flex justify-between">
                <span className="text-zinc-500">Caja</span>
                <span className="font-bold text-black">{vehicle.transmission}</span>
              </div>
              <div className="py-2 border-b border-zinc-200 flex justify-between">
                <span className="text-zinc-500">Tracción</span>
                <span className="font-bold text-black">{vehicle.traction}</span>
              </div>
              <div className="py-2 border-b border-zinc-200 flex justify-between">
                <span className="text-zinc-500">Carrocería</span>
                <span className="font-bold text-black">{vehicle.bodyType}</span>
              </div>
            </div>

            {/* 3. Estado & Historial */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">
                Estado & Historial
              </span>
              <div className="py-2 border-b border-zinc-200 flex justify-between">
                <span className="text-zinc-500">Año Modelo</span>
                <span className="font-bold text-black tabular-nums">{vehicle.year}</span>
              </div>
              <div className="py-2 border-b border-zinc-200 flex justify-between">
                <span className="text-zinc-500">Kilometraje</span>
                <span className="font-bold text-black tabular-nums">
                  {vehicle.km === 0 ? '0 km' : `${vehicle.km.toLocaleString('es-AR')} km`}
                </span>
              </div>
              <div className="py-2 border-b border-zinc-200 flex justify-between">
                <span className="text-zinc-500">Condición</span>
                <span className="font-bold text-black uppercase">{vehicle.condition}</span>
              </div>
            </div>

            {/* 4. Estética & Ubicación */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">
                Estética & Ubicación
              </span>
              <div className="py-2 border-b border-zinc-200 flex justify-between">
                <span className="text-zinc-500">Color Exterior</span>
                <span className="font-bold text-black">{vehicle.paint}</span>
              </div>
              <div className="py-2 border-b border-zinc-200 flex justify-between">
                <span className="text-zinc-500">Salón</span>
                <span className="font-bold text-black">{vehicle.location}</span>
              </div>
              <div className="py-2 border-b border-zinc-200 flex justify-between">
                <span className="text-zinc-500">Disponibilidad</span>
                <span className="font-bold text-black">Entrega Inmediata</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

