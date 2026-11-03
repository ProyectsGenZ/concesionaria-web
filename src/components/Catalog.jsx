import React, { useState, useMemo } from 'react';
import { Search, Heart, MessageCircle, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { VEHICLES } from '../data/cars';

export default function Catalog({ onSelectVehicle, onOpenWhatsApp }) {
  const [filterCondition, setFilterCondition] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterBrand, setFilterBrand] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

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
        car.year.toString().includes(q);

      return matchCondition && matchCategory && matchBrand && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceUsd - b.priceUsd;
      if (sortBy === 'price-desc') return b.priceUsd - a.priceUsd;
      if (sortBy === 'km-asc') return parseInt(a.mileage) - parseInt(b.mileage);
      return 0; // featured
    });
  }, [filterCondition, filterCategory, filterBrand, searchQuery, sortBy]);

  return (
    <section id="catalogo" className="py-16 bg-[#fcfcfd] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200">
          <div>
            <span className="text-[11px] font-tech text-zinc-500 uppercase tracking-widest block mb-1.5 font-semibold">
              INVENTARIO VERIFICADO EN SALÓN
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight uppercase font-display">
              EXPLORÁ NUESTROS VEHÍCULOS
            </h2>
          </div>
          <div className="text-xs font-tech text-zinc-500">
            Mostrando <span className="text-black font-bold">{filteredVehicles.length}</span> unidades disponibles
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="py-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            
            {/* Condition Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilterCondition('all')}
                className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all rounded-xs ${
                  filterCondition === 'all'
                    ? 'bg-black text-white shadow-xs'
                    : 'border border-zinc-300 text-zinc-600 hover:text-black hover:border-zinc-400 bg-white'
                }`}
              >
                Todos ({VEHICLES.length})
              </button>
              <button
                onClick={() => setFilterCondition('0km')}
                className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all rounded-xs ${
                  filterCondition === '0km'
                    ? 'bg-black text-white shadow-xs'
                    : 'border border-zinc-300 text-zinc-600 hover:text-black hover:border-zinc-400 bg-white'
                }`}
              >
                0 KM ({VEHICLES.filter(v => v.condition === '0km').length})
              </button>
              <button
                onClick={() => setFilterCondition('used')}
                className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all rounded-xs ${
                  filterCondition === 'used'
                    ? 'bg-black text-white shadow-xs'
                    : 'border border-zinc-300 text-zinc-600 hover:text-black hover:border-zinc-400 bg-white'
                }`}
              >
                Usados Garantizados ({VEHICLES.filter(v => v.condition === 'used').length})
              </button>
            </div>

            {/* Category Segmented Buttons */}
            <div className="flex items-center gap-1 bg-zinc-100 p-1 rounded-sm border border-zinc-200">
              <button
                onClick={() => setFilterCategory('all')}
                className={`px-3 py-1.5 text-xs font-semibold uppercase transition-all ${
                  filterCategory === 'all'
                    ? 'bg-white text-black shadow-xs font-bold'
                    : 'text-zinc-600 hover:text-black'
                }`}
              >
                Todas las Carrocerías
              </button>
              <button
                onClick={() => setFilterCategory('coupe')}
                className={`px-3 py-1.5 text-xs font-semibold uppercase transition-all ${
                  filterCategory === 'coupe'
                    ? 'bg-white text-black shadow-xs font-bold'
                    : 'text-zinc-600 hover:text-black'
                }`}
              >
                Coupé / Sport
              </button>
              <button
                onClick={() => setFilterCategory('suv')}
                className={`px-3 py-1.5 text-xs font-semibold uppercase transition-all ${
                  filterCategory === 'suv'
                    ? 'bg-white text-black shadow-xs font-bold'
                    : 'text-zinc-600 hover:text-black'
                }`}
              >
                SUV & 4x4
              </button>
            </div>

          </div>

          {/* Search Input & Sorters */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pt-2">
            <div className="md:col-span-8 relative">
              <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Buscar por marca, modelo o año (ej. Porsche, BMW, G63, 2024)..."
                className="w-full bg-white border border-zinc-300 px-4 py-3.5 pl-11 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-black transition-colors rounded-xs shadow-2xs"
              />
            </div>

            <div className="md:col-span-4 flex gap-2">
              <select
                value={filterBrand}
                onChange={e => setFilterBrand(e.target.value)}
                className="w-1/2 bg-white border border-zinc-300 px-3 py-3.5 text-xs font-tech text-zinc-800 focus:outline-none focus:border-black uppercase rounded-xs"
              >
                {brands.map(b => (
                  <option key={b} value={b}>
                    {b === 'all' ? 'Todas las Marcas' : b}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="w-1/2 bg-white border border-zinc-300 px-3 py-3.5 text-xs font-tech text-zinc-800 focus:outline-none focus:border-black uppercase rounded-xs"
              >
                <option value="featured">Destacados</option>
                <option value="price-desc">Mayor Precio</option>
                <option value="price-asc">Menor Precio</option>
                <option value="km-asc">Menor Kilometraje</option>
              </select>
            </div>
          </div>
        </div>

        {/* Vehicles Grid - Redesigned to Match Porsche Finder & Kavak Clean Standards */}
        {filteredVehicles.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-zinc-300 bg-white p-8 space-y-4">
            <p className="text-zinc-500 font-tech text-xs uppercase tracking-wider">
              No se encontraron vehículos que coincidan con la búsqueda.
            </p>
            <button
              onClick={() => {
                setFilterCondition('all');
                setFilterCategory('all');
                setFilterBrand('all');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 bg-black text-white text-xs uppercase font-bold tracking-wider hover:bg-zinc-800 transition-colors"
            >
              Restablecer Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {filteredVehicles.map(car => {
              const isFav = favorites.has(car.id);
              return (
                <div
                  key={car.id}
                  onClick={() => onSelectVehicle(car)}
                  className="group bg-white border border-zinc-200/90 flex flex-col justify-between hover:border-zinc-400 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-300 cursor-pointer overflow-hidden rounded-xs"
                >
                  <div>
                    {/* Vehicle Photo Container */}
                    <div className="relative aspect-[16/10] bg-zinc-100 overflow-hidden">
                      <img
                        src={car.images[0]}
                        alt={`${car.brand} ${car.model}`}
                        className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-600 ease-out"
                        loading="lazy"
                      />

                      {/* Clean Badge Pill */}
                      <div className="absolute top-3 left-3 bg-white/95 border border-zinc-200 px-2.5 py-1 text-[11px] font-tech text-black uppercase tracking-wider font-semibold shadow-xs">
                        {car.condition === '0km' ? '0 KM' : 'CERTIFICADO'}
                      </div>

                      {/* Favorite Button */}
                      <button
                        onClick={(e) => toggleFavorite(car.id, e)}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-red-500 transition-colors shadow-xs"
                        title="Guardar en favoritos"
                      >
                        <Heart className={`w-4 h-4 ${isFav ? 'fill-red-500 text-red-500' : ''}`} />
                      </button>
                    </div>

                    {/* Card Content - Clean Real-World Dealership Format */}
                    <div className="p-6 space-y-3">
                      <div>
                        <span className="text-[11px] font-tech uppercase tracking-wider text-zinc-500 block mb-0.5">
                          {car.brand}
                        </span>
                        <h3 className="text-lg font-bold text-black tracking-tight leading-snug group-hover:text-zinc-700 transition-colors">
                          {car.model}
                        </h3>
                      </div>

                      {/* Clean Single Meta Line (Year · Km · Transmission · Fuel) */}
                      <div className="text-xs text-zinc-600 font-tech flex items-center gap-2 pt-1 border-t border-zinc-100">
                        <span>{car.year}</span>
                        <span className="text-zinc-300">•</span>
                        <span>{car.mileage}</span>
                        <span className="text-zinc-300">•</span>
                        <span>{car.transmission.split(' ')[0]}</span>
                        <span className="text-zinc-300">•</span>
                        <span>{car.fuel.split(' ')[0]}</span>
                      </div>

                      {/* Location indicator */}
                      <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 font-tech">
                        <MapPin className="w-3 h-3 text-zinc-400" />
                        <span>Vicente López, Buenos Aires</span>
                      </div>

                      {/* Pricing Block */}
                      <div className="pt-2 border-t border-zinc-100 flex items-baseline justify-between">
                        <div>
                          <div className="text-2xl font-black text-black font-tech">
                            USD {car.priceUsd.toLocaleString()}
                          </div>
                          <span className="text-[11px] text-zinc-500 font-tech">
                            o financiado desde USD {car.monthlyUsd.toLocaleString()} / mes
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Clean Bottom Action Buttons */}
                  <div className="p-6 pt-0 grid grid-cols-2 gap-3 border-t border-zinc-100/80 bg-zinc-50/60 mt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectVehicle(car);
                      }}
                      className="py-2.5 text-xs font-bold uppercase tracking-wider text-black border border-zinc-300 hover:border-black bg-white hover:bg-zinc-100 transition-colors rounded-xs"
                    >
                      Ver Ficha
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenWhatsApp(`${car.brand} ${car.model} (${car.year})`);
                      }}
                      className="py-2.5 bg-black hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors rounded-xs shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" /> Cotizar
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
