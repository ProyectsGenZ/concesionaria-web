import React, { useState, useMemo } from 'react';
import { Search, Eye, MessageCircle, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { VEHICLES } from '../data/cars';

export default function Catalog({ onSelectVehicle, onOpenWhatsApp }) {
  const [filterCondition, setFilterCondition] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterBrand, setFilterBrand] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const brands = useMemo(() => {
    return ['all', ...Array.from(new Set(VEHICLES.map(v => v.brand)))];
  }, []);

  const filteredVehicles = useMemo(() => {
    return VEHICLES.filter(car => {
      const matchCondition =
        filterCondition === 'all' || car.condition === filterCondition;
      const matchCategory =
        filterCategory === 'all' || car.category === filterCategory;
      const matchBrand =
        filterBrand === 'all' || car.brand === filterBrand;

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        car.brand.toLowerCase().includes(q) ||
        car.model.toLowerCase().includes(q) ||
        car.engine.toLowerCase().includes(q) ||
        car.power.toLowerCase().includes(q);

      return matchCondition && matchCategory && matchBrand && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceUsd - b.priceUsd;
      if (sortBy === 'price-desc') return b.priceUsd - a.priceUsd;
      if (sortBy === 'power-desc') return parseInt(b.power) - parseInt(a.power);
      return 0; // featured
    });
  }, [filterCondition, filterCategory, filterBrand, searchQuery, sortBy]);

  return (
    <section id="catalogo" class="py-16 bg-black border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-800/80">
          <div>
            <div className="text-xs font-tech text-zinc-500 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white"></span>
              INVENTARIO EXCLUSIVO DISPONIBLE
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              COLECCIÓN DE SALÓN
            </h2>
          </div>
          <div className="text-xs font-tech text-zinc-400">
            Mostrando <span className="text-white font-bold">{filteredVehicles.length}</span> de {VEHICLES.length} unidades certificadas
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="py-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            
            {/* Condition Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilterCondition('all')}
                className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-colors ${
                  filterCondition === 'all'
                    ? 'bg-white text-black'
                    : 'border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 bg-zinc-950'
                }`}
              >
                Todos ({VEHICLES.length})
              </button>
              <button
                onClick={() => setFilterCondition('0km')}
                className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-colors ${
                  filterCondition === '0km'
                    ? 'bg-white text-black'
                    : 'border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 bg-zinc-950'
                }`}
              >
                0 KM ({VEHICLES.filter(v => v.condition === '0km').length})
              </button>
              <button
                onClick={() => setFilterCondition('used')}
                className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-colors ${
                  filterCondition === 'used'
                    ? 'bg-white text-black'
                    : 'border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 bg-zinc-950'
                }`}
              >
                Seleccionados ({VEHICLES.filter(v => v.condition === 'used').length})
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilterCategory('all')}
                className={`px-3.5 py-1.5 text-xs font-tech uppercase transition-colors ${
                  filterCategory === 'all'
                    ? 'text-white border-b-2 border-white font-bold'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                Todas Carrocerías
              </button>
              <button
                onClick={() => setFilterCategory('coupe')}
                className={`px-3.5 py-1.5 text-xs font-tech uppercase transition-colors ${
                  filterCategory === 'coupe'
                    ? 'text-white border-b-2 border-white font-bold'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                Coupé & Sport
              </button>
              <button
                onClick={() => setFilterCategory('suv')}
                className={`px-3.5 py-1.5 text-xs font-tech uppercase transition-colors ${
                  filterCategory === 'suv'
                    ? 'text-white border-b-2 border-white font-bold'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                SUV & Todo Terreno
              </button>
            </div>

          </div>

          {/* Search Bar & Sorter */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-8 relative">
              <Search className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Buscar por marca, modelo, motorización (ej. Porsche, M4, V8, 585 HP)..."
                className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3.5 pl-11 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div className="md:col-span-4 flex gap-2">
              {/* Brand Select */}
              <select
                value={filterBrand}
                onChange={e => setFilterBrand(e.target.value)}
                className="w-1/2 bg-zinc-950 border border-zinc-800 px-3 py-3.5 text-xs font-tech text-zinc-300 focus:outline-none focus:border-white uppercase"
              >
                {brands.map(b => (
                  <option key={b} value={b}>
                    {b === 'all' ? 'Todas las Marcas' : b}
                  </option>
                ))}
              </select>

              {/* Sorter */}
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="w-1/2 bg-zinc-950 border border-zinc-800 px-3 py-3.5 text-xs font-tech text-zinc-300 focus:outline-none focus:border-white uppercase"
              >
                <option value="featured">Destacados</option>
                <option value="price-desc">Mayor Precio</option>
                <option value="price-asc">Menor Precio</option>
                <option value="power-desc">Mayor Potencia</option>
              </select>
            </div>
          </div>
        </div>

        {/* Vehicles Grid */}
        {filteredVehicles.length === 0 ? (
          <div className="py-24 text-center border border-dashed border-zinc-800 bg-zinc-950/50 p-8 space-y-4">
            <p className="text-zinc-400 font-tech text-sm uppercase tracking-wider">
              No se encontraron vehículos que coincidan con la búsqueda.
            </p>
            <button
              onClick={() => {
                setFilterCondition('all');
                setFilterCategory('all');
                setFilterBrand('all');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 bg-white text-black text-xs uppercase font-bold tracking-wider hover:bg-zinc-200 transition-colors"
            >
              Restablecer Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {filteredVehicles.map(car => (
              <div
                key={car.id}
                className="group border border-zinc-800 bg-zinc-950 flex flex-col justify-between hover:border-zinc-500 transition-all duration-300 shadow-lg"
              >
                <div>
                  {/* Image Container 16:9 Studio Ratio */}
                  <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden cursor-pointer" onClick={() => onSelectVehicle(car)}>
                    <img
                      src={car.images[0]}
                      alt={`${car.brand} ${car.model}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-95"
                      loading="lazy"
                    />

                    {/* Badge Condition & Year */}
                    <div className="absolute top-3 left-3 bg-black/90 border border-zinc-700 px-2.5 py-1 text-[10px] font-tech text-white uppercase tracking-wider backdrop-blur-sm">
                      {car.condition === '0km' ? `0 KM • ${car.year}` : `SELECCIONADO • ${car.year}`}
                    </div>

                    <div className="absolute top-3 right-3 bg-black/70 px-2 py-1 text-[10px] font-tech text-zinc-400">
                      {car.bodyType}
                    </div>

                    {/* Quick view button overlay on hover */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <span className="px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                        <Eye className="w-3.5 h-3.5" /> Ficha Completa
                      </span>
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-[10px] font-tech uppercase tracking-widest text-zinc-500 block mb-0.5">
                        {car.brand}
                      </span>
                      <h3
                        onClick={() => onSelectVehicle(car)}
                        className="text-lg font-bold text-white tracking-tight leading-snug cursor-pointer hover:underline"
                      >
                        {car.model}
                      </h3>
                    </div>

                    {/* Technical Specs Strip */}
                    <div className="grid grid-cols-4 gap-2 py-3 border-y border-zinc-800/80 font-tech text-center text-xs">
                      <div>
                        <div className="font-bold text-white">{car.power}</div>
                        <div className="text-[9px] uppercase text-zinc-500 mt-0.5">Potencia</div>
                      </div>
                      <div>
                        <div className="font-bold text-white">{car.acceleration}</div>
                        <div className="text-[9px] uppercase text-zinc-500 mt-0.5">0-100</div>
                      </div>
                      <div>
                        <div className="font-bold text-white">{car.mileage}</div>
                        <div className="text-[9px] uppercase text-zinc-500 mt-0.5">Kilómetros</div>
                      </div>
                      <div>
                        <div className="font-bold text-white truncate px-1">{car.transmission.split(' ')[0]}</div>
                        <div className="text-[9px] uppercase text-zinc-500 mt-0.5">Caja</div>
                      </div>
                    </div>

                    {/* Price Block */}
                    <div className="flex items-baseline justify-between pt-1">
                      <div>
                        <span className="text-[10px] font-tech text-zinc-500 uppercase block">
                          Precio Contado
                        </span>
                        <div className="text-2xl font-black text-white font-tech">
                          USD {car.priceUsd.toLocaleString()}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-tech text-zinc-500 uppercase block">
                          Financiado desde
                        </span>
                        <div className="text-xs font-bold text-zinc-300 font-tech">
                          USD {car.monthlyUsd.toLocaleString()}{' '}
                          <span className="text-[10px] font-normal text-zinc-500">/mes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => onSelectVehicle(car)}
                    className="py-3 border border-zinc-700 hover:border-white text-zinc-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Ver Detalles
                  </button>
                  <button
                    onClick={() => onOpenWhatsApp(`${car.brand} ${car.model} (${car.year})`)}
                    className="py-3 bg-white text-black hover:bg-zinc-200 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> Cotizar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
