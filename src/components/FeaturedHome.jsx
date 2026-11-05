import PriceReference from './PriceReference';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { VEHICLES, EXCHANGE_RATE } from '../data/vehicles';

export default function FeaturedHome({ onOpenVehicle, onNavigateCatalog, currency }) {
  const featured = VEHICLES.filter(v => v.featured).slice(0, 3);

  const formatPrice = (usd) => {
    if (currency === 'USD') return 'USD ' + usd.toLocaleString('es-AR');
    return '$ ' + (usd * EXCHANGE_RATE).toLocaleString('es-AR');
  };

  const handleOpenCar = (carId) => {
    if (onOpenVehicle) {
      onOpenVehicle(carId);
    } else {
      window.location.assign(`?vehiculo=${carId}`);
    }
  };

  return (
    <section className="whynot-pearl-bg studio-featured py-24 border-b border-zinc-200/60 select-none">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        
        {/* Encabezado Limpio con Gran Espaciado */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16">
          <div className="max-w-xl text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-600 block mb-2 font-tech">
              Selección Destacada
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black font-display">
              Vehículos destacados
            </h2>
          </div>
          
          <button
            onClick={onNavigateCatalog}
            className="mt-4 sm:mt-0 text-xs font-bold uppercase tracking-wider text-black hover:text-zinc-600 transition inline-flex items-center gap-2 group cursor-pointer"
          >
            <span>Explorar catálogo completo ({VEHICLES.length})</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        <PriceReference />
        {/* Grilla Limpia en Blanco y Negro SIN BORDES con Miniaturas PNG orientadas todas a 3/4 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featured.map((car) => (
            <article
              key={car.id}
              className="group bg-transparent hover:bg-white/80 p-8 rounded-3xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg flex flex-col justify-between "
              title={`Abrir ${car.brand} ${car.model}`}
            >
              <div>
                {/* Header de la tarjeta con Badge y Año */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-black/60 font-tech">
                    {car.brand}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 text-black text-[10px] font-bold uppercase tracking-wider font-tech">
                    {car.badge}
                  </span>
                </div>

                {/* Título */}
                <h3 className="text-2xl font-black text-black tracking-tight mb-2 font-display">
                  {car.model}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed line-clamp-2 mb-6 font-normal">
                  {car.description}
                </p>

                {/* Miniatura PNG con Sombra en el Piso (Orientación 3/4 Unificada hacia la Izquierda) */}
                <div className="w-full h-56 flex items-center justify-center my-4 relative overflow-visible">
                  {/* Wrapper estático de orientación horizontal permanente (previene rotaciones en hover) */}
                  <div className={`w-full h-full flex items-center justify-center ${car.flip ? 'scale-x-[-1]' : ''}`}>
                    {/* Contenedor interno que ejecuta el zoom suave exclusivamente */}
                    <div className="w-full h-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-106 group-hover:-translate-y-1">
                      <img
                        src={car.pngImage}
                        alt={`${car.brand} ${car.model}`}
                        style={{
                          transform: `scale(${car.scale || 1.0})`
                        }}
                        className="max-h-48 sm:max-h-52 w-auto max-w-[90%] object-contain relative z-10 select-none pointer-events-none"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>

                {/* Especificaciones Técnicas Rápidas en una sola línea */}
                <div className="pt-4 border-t border-zinc-200/50 flex items-center justify-between text-xs text-zinc-600 font-tech">
                  <span>{car.year}</span>
                  <span>•</span>
                  <span>{car.km === 0 ? '0 km' : `${car.km.toLocaleString('es-AR')} km`}</span>
                  <span>•</span>
                  <span>{car.transmission.split(' ')[0]}</span>
                  <span>•</span>
                  <span>{car.fuel}</span>
                </div>
              </div>

              {/* Precio y Botón Único de Acción */}
              <div className="pt-6 mt-6 border-t border-zinc-200/50 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-black/50 font-tech font-bold">Valor</span>
                  <span className="text-xl font-black text-black font-tech tabular-nums">
                    {formatPrice(car.priceUSD)}
                  </span>
                </div>
                
                <button type="button" onClick={() => handleOpenCar(car.id)} aria-label={`Conocer ${car.brand} ${car.model}`} className="featured-open rounded-full bg-black hover:bg-zinc-800 text-white inline-flex items-center gap-2 px-4 py-3 text-xs font-semibold cursor-pointer"><span>Ver ficha</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
