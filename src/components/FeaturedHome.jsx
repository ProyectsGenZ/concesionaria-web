import React from 'react';
import { ArrowRight } from 'lucide-react';
import { VEHICLES, EXCHANGE_RATE } from '../data/vehicles';

export default function FeaturedHome({ onOpenVehicle, onNavigateCatalog, currency }) {
  const featured = VEHICLES.filter(v => v.featured);

  const formatPrice = (usd) => {
    if (currency === 'USD') return 'USD ' + usd.toLocaleString('es-AR');
    return '$ ' + (usd * EXCHANGE_RATE).toLocaleString('es-AR');
  };

  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16 border-t border-zinc-200">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400 block mb-2 font-tech">
            Selección MONOLITH
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-black font-display">
            Unidades destacadas
          </h2>
        </div>
        <button
          onClick={onNavigateCatalog}
          className="mt-4 sm:mt-0 px-6 py-3 rounded-full border border-black text-xs font-semibold text-black hover:bg-black hover:text-white transition-all duration-300"
        >
          Abrir catálogo completo ({VEHICLES.length})
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featured.map((car) => {
          const badgeStyle = car.condition === '0km'
            ? 'bg-black text-white border-black'
            : 'bg-white/95 text-black border-zinc-200 backdrop-blur-md';

          return (
            <article
              key={car.id}
              onClick={() => onOpenVehicle(car.id)}
              className="group bg-white rounded-2xl border border-zinc-200 hover:border-black transition-all duration-500 hover:-translate-y-1 hover:shadow-xl overflow-hidden flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* 16:10 Photo */}
                <div className="relative aspect-[16/10] bg-zinc-100 overflow-hidden">
                  <img
                    src={car.photos[0]}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-3.5 left-3.5">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border shadow-xs ${badgeStyle}`}>
                      {car.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1 font-tech">
                    {car.brand}
                  </span>
                  <h3 className="text-xl font-bold text-black tracking-tight leading-snug mb-2 font-display">
                    {car.model}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2 mb-4 font-normal">
                    {car.description}
                  </p>

                  <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-600 font-tech">
                    <span>{car.year}</span>
                    <span>•</span>
                    <span>{car.km === 0 ? '0 km' : `${car.km.toLocaleString('es-AR')} km`}</span>
                    <span>•</span>
                    <span>{car.transmission}</span>
                    <span>•</span>
                    <span>{car.fuel}</span>
                  </div>
                </div>
              </div>

              {/* Price and Action */}
              <div className="p-6 pt-0 border-t border-zinc-100/80 bg-zinc-50/50 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] font-medium text-zinc-400 uppercase font-tech">Precio</span>
                  <span className="text-xl font-bold text-black font-tech tabular-nums">
                    {formatPrice(car.priceUSD)}
                  </span>
                </div>
                <span className="px-4 py-2 rounded-full bg-black text-white text-xs font-semibold group-hover:bg-zinc-800 transition">
                  Ver ficha →
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
