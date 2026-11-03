import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { VEHICLES, EXCHANGE_RATE } from '../data/vehicles';

export default function CatalogView({
  onOpenVehicle,
  currency,
  onToggleCurrency,
  initialCategory = 'all',
  initialBrand = 'all'
}) {
  const [filterCondition, setFilterCondition] = useState('all');
  const [filterBodyType, setFilterBodyType] = useState(initialCategory);
  const [filterBrand, setFilterBrand] = useState(initialBrand);
  const [filterFuel, setFilterFuel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const formatPrice = (usd) => {
    if (currency === 'USD') return 'USD ' + usd.toLocaleString('es-AR');
    return '$ ' + (usd * EXCHANGE_RATE).toLocaleString('es-AR');
  };

  const resetFilters = () => {
    setFilterCondition('all');
    setFilterBodyType('all');
    setFilterBrand('all');
    setFilterFuel('all');
    setSearchQuery('');
  };

  const bodyTypes = [
    { label: 'Todas las siluetas', value: 'all', count: VEHICLES.length },
    { label: 'Pick-up', value: 'Pick-up', count: VEHICLES.filter(v => v.bodyType === 'Pick-up').length },
    { label: 'SUV', value: 'SUV', count: VEHICLES.filter(v => v.bodyType === 'SUV').length },
    { label: 'Sedán', value: 'Sedán', count: VEHICLES.filter(v => v.bodyType === 'Sedán').length },
    { label: 'Coupé', value: 'Coupé', count: VEHICLES.filter(v => v.bodyType === 'Coupé').length },
    { label: 'Hatchback', value: 'Hatchback', count: VEHICLES.filter(v => v.bodyType === 'Hatchback').length },
  ];

  const brands = ['all', 'Audi', 'BMW', 'Ford', 'Hyundai', 'Porsche', 'Toyota', 'Volkswagen'];

  const filtered = useMemo(() => {
    return VEHICLES.filter(car => {
      const matchCond = filterCondition === 'all' || car.condition === filterCondition;
      const matchBody = filterBodyType === 'all' || car.bodyType === filterBodyType;
      const matchBrand = filterBrand === 'all' || car.brand === filterBrand;
      const matchFuel = filterFuel === 'all' || car.fuel === filterFuel;

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        car.brand.toLowerCase().includes(q) ||
        car.model.toLowerCase().includes(q) ||
        car.trim.toLowerCase().includes(q) ||
        car.year.toString().includes(q);

      return matchCond && matchBody && matchBrand && matchFuel && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceUSD - b.priceUSD;
      if (sortBy === 'price-desc') return b.priceUSD - a.priceUSD;
      if (sortBy === 'year-desc') return b.year - a.year;
      if (sortBy === 'km-asc') return a.km - b.km;
      return 0; // featured
    });
  }, [filterCondition, filterBodyType, filterBrand, filterFuel, searchQuery, sortBy]);

  const activeChips = [];
  if (filterCondition !== 'all') activeChips.push({ key: 'condition', label: filterCondition === '0km' ? '0 KM' : 'Usados' });
  if (filterBodyType !== 'all') activeChips.push({ key: 'bodyType', label: filterBodyType });
  if (filterBrand !== 'all') activeChips.push({ key: 'brand', label: filterBrand });
  if (filterFuel !== 'all') activeChips.push({ key: 'fuel', label: filterFuel });

  return (
    <section className="pt-20 min-h-screen">
      
      {/* Encabezado Limpio del Catálogo */}
      <div className="bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400 block mb-2 font-tech">
                Stock Físico Certificado
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-black font-display">
                Catálogo de Vehículos
              </h1>
            </div>

            {/* Buscador dentro del catálogo */}
            <div className="w-full md:w-80 relative">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Buscar marca, modelo o versión..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-zinc-200 rounded-full text-sm text-black placeholder-zinc-400 focus:outline-none focus:border-black transition"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Estructura del Catálogo: Sidebar Izquierdo + Grilla */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* SIDEBAR DE FILTROS */}
          <aside className="w-full lg:w-[270px] shrink-0">
            <div className="sticky top-28 space-y-7 bg-white border border-zinc-200 rounded-2xl p-6 shadow-xs">
              
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
                <span className="font-bold text-sm text-black font-display">Filtros</span>
                <button
                  onClick={resetFilters}
                  className="text-xs font-medium text-zinc-400 hover:text-black underline cursor-pointer"
                >
                  Limpiar
                </button>
              </div>

              {/* 1. Condición (0 KM / Usados) */}
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-3 font-tech">
                  Condición
                </span>
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-zinc-50 rounded-xl border border-zinc-200">
                  <button
                    onClick={() => setFilterCondition('all')}
                    className={`py-2 rounded-lg text-xs font-semibold transition ${
                      filterCondition === 'all' ? 'bg-black text-white font-bold shadow-xs' : 'text-zinc-600 hover:text-black'
                    }`}
                  >
                    Todos
                  </button>
                  <button
                    onClick={() => setFilterCondition('0km')}
                    className={`py-2 rounded-lg text-xs font-semibold transition ${
                      filterCondition === '0km' ? 'bg-black text-white font-bold shadow-xs' : 'text-zinc-600 hover:text-black'
                    }`}
                  >
                    0 KM
                  </button>
                  <button
                    onClick={() => setFilterCondition('usado')}
                    className={`py-2 rounded-lg text-xs font-semibold transition ${
                      filterCondition === 'usado' ? 'bg-black text-white font-bold shadow-xs' : 'text-zinc-600 hover:text-black'
                    }`}
                  >
                    Usados
                  </button>
                </div>
              </div>

              {/* 2. Carrocería */}
              <div className="pt-5 border-t border-zinc-100">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-3 font-tech">
                  Carrocería
                </span>
                <div className="space-y-1">
                  {bodyTypes.map(bt => (
                    <button
                      key={bt.value}
                      onClick={() => setFilterBodyType(bt.value)}
                      className={`w-full px-3 py-2 rounded-lg text-xs flex justify-between items-center transition cursor-pointer ${
                        filterBodyType === bt.value
                          ? 'bg-black text-white font-bold'
                          : 'text-zinc-700 hover:bg-zinc-100 font-medium'
                      }`}
                    >
                      <span>{bt.label}</span>
                      <span className={filterBodyType === bt.value ? 'text-zinc-300' : 'text-zinc-400'}>
                        {bt.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Marca */}
              <div className="pt-5 border-t border-zinc-100">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-2.5 font-tech">
                  Marca
                </label>
                <select
                  value={filterBrand}
                  onChange={e => setFilterBrand(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-semibold text-black focus:outline-none focus:border-black uppercase"
                >
                  <option value="all">Todas las marcas</option>
                  {brands.filter(b => b !== 'all').map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* 4. Motorización */}
              <div className="pt-5 border-t border-zinc-100">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-2.5 font-tech">
                  Motorización
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['all', 'Nafta', 'Diesel', 'Híbrido'].map(fuel => (
                    <button
                      key={fuel}
                      onClick={() => setFilterFuel(fuel)}
                      className={`px-3 py-1.5 rounded-lg text-xs transition cursor-pointer ${
                        filterFuel === fuel
                          ? 'bg-black text-white font-bold border border-black'
                          : 'bg-white text-zinc-700 border border-zinc-200 hover:border-black font-medium'
                      }`}
                    >
                      {fuel === 'all' ? 'Todos' : fuel}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* COLUMNA PRINCIPAL DEL CATÁLOGO */}
          <div className="flex-1 w-full">
            
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-zinc-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold text-black tabular-nums font-tech">
                  <span>{filtered.length}</span> vehículos disponibles
                </span>

                {/* Active Filter Chips */}
                {activeChips.map(chip => (
                  <span
                    key={chip.key}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-xs font-semibold text-black border border-zinc-200"
                  >
                    {chip.label}
                    <button
                      onClick={() => {
                        if (chip.key === 'condition') setFilterCondition('all');
                        if (chip.key === 'bodyType') setFilterBodyType('all');
                        if (chip.key === 'brand') setFilterBrand('all');
                        if (chip.key === 'fuel') setFilterFuel('all');
                      }}
                      className="text-zinc-400 hover:text-black"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 ml-auto">
                {/* Sorter */}
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="px-3.5 py-1.5 bg-white border border-zinc-200 rounded-lg text-xs font-semibold text-black focus:outline-none focus:border-black"
                >
                  <option value="featured">Destacados</option>
                  <option value="price-asc">Menor precio</option>
                  <option value="price-desc">Mayor precio</option>
                  <option value="year-desc">Más recientes</option>
                  <option value="km-asc">Menor kilometraje</option>
                </select>
              </div>
            </div>

            {/* Grid of Vehicles */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center bg-zinc-50 rounded-3xl border border-zinc-200 p-8">
                <h3 className="text-lg font-bold text-black mb-2 font-display">
                  No se encontraron vehículos con esos filtros
                </h3>
                <p className="text-xs text-zinc-500 mb-6">
                  Probá restableciendo los parámetros de búsqueda.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-5 py-2.5 bg-black text-white text-xs font-semibold rounded-full hover:bg-zinc-800 transition"
                >
                  Ver todo el catálogo
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                {filtered.map(car => {
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
            )}

          </div>

        </div>
      </div>

    </section>
  );
}
