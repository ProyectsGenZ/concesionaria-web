import React from 'react';
import { ArrowRight } from 'lucide-react';
import { VEHICLES } from '../data/vehicles';

export default function SilhouetteBar({ onSelectSilhouette, onSelectBrand, onNavigateCatalog }) {
  const categories = [
    {
      name: 'Pick-ups',
      filterValue: 'Pick-up',
      subtitle: 'Ranger Raptor · V6 · Amarok',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80',
      count: VEHICLES.filter(v => v.bodyType === 'Pick-up').length
    },
    {
      name: 'SUVs',
      filterValue: 'SUV',
      subtitle: 'Macan T · SW4 · Q5 · Tucson',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
      count: VEHICLES.filter(v => v.bodyType === 'SUV').length
    },
    {
      name: 'Sedán Ejecutivo',
      filterValue: 'Sedán',
      subtitle: 'BMW Serie 3 M Sport',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80',
      count: VEHICLES.filter(v => v.bodyType === 'Sedán').length
    },
    {
      name: 'Coupé & Sport',
      filterValue: 'Coupé',
      subtitle: 'Audi TT RS Quattro',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=600&q=80',
      count: VEHICLES.filter(v => v.bodyType === 'Coupé').length
    },
    {
      name: 'Hot Hatch',
      filterValue: 'Hatchback',
      subtitle: 'Volkswagen Golf GTI Mk8',
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80',
      count: VEHICLES.filter(v => v.bodyType === 'Hatchback').length
    }
  ];

  const brands = ['Ford', 'Porsche', 'BMW', 'Audi', 'Toyota', 'Volkswagen', 'Hyundai'];

  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-10 pt-20 pb-16">
      
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400 block mb-2 font-tech">
            Segmentos & Siluetas
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-black font-display">
            Explorá por tipo de vehículo
          </h2>
        </div>
        <button
          onClick={onNavigateCatalog}
          className="mt-4 sm:mt-0 text-sm font-semibold text-black hover:text-zinc-600 transition inline-flex items-center gap-2 group"
        >
          <span>Ver inventario completo</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      {/* Grid of 5 Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {categories.map((cat) => (
          <button
            key={cat.filterValue}
            onClick={() => onSelectSilhouette(cat.filterValue)}
            className="group relative rounded-2xl border border-zinc-200 hover:border-black bg-zinc-50/70 hover:bg-white p-5 transition-all duration-500 text-left flex flex-col justify-between h-64 overflow-hidden hover:shadow-xl cursor-pointer"
          >
            <div className="flex items-center justify-between w-full z-10">
              <span className="px-2.5 py-1 rounded-full bg-white border border-zinc-200 text-[10px] font-bold uppercase tracking-wider text-black">
                {cat.count} {cat.count === 1 ? 'Unidad' : 'Unidades'}
              </span>
              <span className="w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-xs text-black group-hover:bg-black group-hover:text-white transition-colors">
                →
              </span>
            </div>

            <div className="my-auto py-2 flex items-center justify-center">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-28 object-cover rounded-xl shadow-xs group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="z-10 pt-2">
              <span className="font-bold text-lg text-black block leading-tight font-display">
                {cat.name}
              </span>
              <span className="text-xs text-zinc-500 font-tech">
                {cat.subtitle}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Brand Filter Strip */}
      <div className="mt-8 pt-8 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 font-tech">
          Filtrar por marca:
        </span>
        <div className="flex flex-wrap items-center gap-2">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => onSelectBrand(brand)}
              className="px-4 py-2 rounded-full border border-zinc-200 hover:border-black hover:bg-black hover:text-white text-xs font-semibold text-zinc-800 transition-all cursor-pointer"
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

    </section>
  );
}

