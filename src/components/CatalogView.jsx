import React, { useState, useMemo } from 'react';
import { Search, X, ArrowUpRight } from 'lucide-react';
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
    { label: 'SUV & Crossover', value: 'SUV', count: VEHICLES.filter(v => v.bodyType === 'SUV').length },
    { label: 'Hatchback', value: 'Hatchback', count: VEHICLES.filter(v => v.bodyType === 'Hatchback').length },
    { label: 'Pick-up', value: 'Pick-up', count: VEHICLES.filter(v => v.bodyType === 'Pick-up').length },
    { label: 'Sedán', value: 'Sedán', count: VEHICLES.filter(v => v.bodyType === 'Sedán').length },
    { label: 'Coupé Sport', value: 'Coupé', count: VEHICLES.filter(v => v.bodyType === 'Coupé').length },
    { label: 'Utilitarios', value: 'Utilitario', count: VEHICLES.filter(v => v.bodyType === 'Utilitario').length },
  ];

  const brands = ['all', 'Citroën', 'Hyundai', 'Ford', 'Porsche', 'BMW', 'Audi'];

  const filtered = useMemo(() => {
    return VEHICLES.filter(car => {
      const matchCond = filterCondition === 'all' || car.condition === filterCondition;
      const matchBody = filterBodyType === 'all' || car.bodyType === filterBodyType;
      const matchBrand = filterBrand === 'all' || car.brand.toLowerCase() === filterBrand.toLowerCase();
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

  const handleOpenCar = (carId) => {
    window.open(`?vehiculo=${carId}`, '_blank');
  };

  return (
    <section className="whynot-pearl-bg pt-20 min-h-screen">
      
      {/* Encabezado Limpio del Catálogo */}
      <div className="bg-white/60 backdrop-blur-md border-b border-zinc-200/80">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 block mb-2 font-tech">
                Gama Oficial Certificada
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black font-display">
                Catálogo de Unidades
              </h1>
            </div>

            {/* Buscador dentro del catálogo */}
            <div className="w-full md:w-80 relative">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Buscar Citroën, Hyundai, Ford..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-zinc-200 rounded-full text-xs text-black placeholder-zinc-400 focus:outline-none focus:border-black transition shadow-xs"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout: Filtros Laterales + Grilla */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* SIDEBAR DE FILTROS IZQUIERDO */}
          <aside className="w-full lg:w-64 bg-white/80 backdrop-blur-md rounded-3xl border border-zinc-200/80 p-6 space-y-7 shrink-0 text-left shadow-xs">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-black font-tech">Filtros</span>
              {activeChips.length > 0 && (
                <button
                  onClick={resetFilters}
                  className="text-[11px] font-semibold text-zinc-400 hover:text-black transition"
                >
                  Limpiar todo
                </button>
              )}
            </div>

            {/* Filtro 1: Condición */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-3 font-tech">
                Condición
              </label>
              <div className="flex gap-2">
                {[
                  { label: 'Todos', value: 'all' },
                  { label: '0 KM', value: '0km' },
                  { label: 'Usados', value: 'usado' },
                ].map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setFilterCondition(opt.value)}
                    className={`flex-1 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                      filterCondition === opt.value
                        ? 'bg-black text-white shadow-xs'
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Filtro 2: Silueta */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-3 font-tech">
                Carrocería
              </label>
              <div className="space-y-1.5">
                {bodyTypes.map(type => (
                  <button
                    key={type.value}
                    onClick={() => setFilterBodyType(type.value)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center justify-between cursor-pointer ${
                      filterBodyType === type.value
                        ? 'bg-black text-white'
                        : 'text-zinc-600 hover:bg-zinc-100'
                    }`}
                  >
                    <span>{type.label}</span>
                    <span className={`text-[10px] tabular-nums ${filterBodyType === type.value ? 'text-zinc-300' : 'text-zinc-400'}`}>
                      {type.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Filtro 3: Marcas */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-3 font-tech">
                Marca
              </label>
              <div className="flex flex-wrap gap-1.5">
                {brands.map(brand => (
                  <button
                    key={brand}
                    onClick={() => setFilterBrand(brand)}
                    className={`px-3 py-1 rounded-full text-[11px] font-semibold transition cursor-pointer ${
                      filterBrand.toLowerCase() === brand.toLowerCase()
                        ? 'bg-black text-white'
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    }`}
                  >
                    {brand === 'all' ? 'Todas' : brand}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* COLUMNA PRINCIPAL DEL CATÁLOGO */}
          <div className="flex-1 w-full text-left">
            
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-zinc-200/80">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-black uppercase tracking-wider font-tech">
                  {filtered.length} unidades disponibles
                </span>

                {/* Chips de filtros activos */}
                {activeChips.map(chip => (
                  <span
                    key={chip.key}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs font-semibold text-black border border-zinc-200 shadow-xs"
                  >
                    {chip.label}
                    <button
                      onClick={() => {
                        if (chip.key === 'condition') setFilterCondition('all');
                        if (chip.key === 'bodyType') setFilterBodyType('all');
                        if (chip.key === 'brand') setFilterBrand('all');
                        if (chip.key === 'fuel') setFilterFuel('all');
                      }}
                      className="text-zinc-400 hover:text-black cursor-pointer"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>

              {/* Sorter */}
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="px-3 py-1.5 bg-white border border-zinc-200 rounded-full text-xs font-semibold text-black focus:outline-none focus:border-black shadow-xs cursor-pointer"
              >
                <option value="featured">Destacados</option>
                <option value="price-asc">Menor precio</option>
                <option value="price-desc">Mayor precio</option>
                <option value="year-desc">Más recientes</option>
              </select>
            </div>

            {/* Grilla de Autos con Miniaturas PNG y Sombra de Piso (Imagen 1 y 2) */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center bg-white/60 rounded-3xl border border-zinc-200 p-8">
                <h3 className="text-lg font-bold text-black mb-2 font-display">
                  No se encontraron unidades con los filtros seleccionados
                </h3>
                <p className="text-xs text-zinc-500 mb-6">
                  Probá restableciendo los parámetros de búsqueda.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-black text-white text-xs font-semibold rounded-full hover:bg-zinc-800 transition cursor-pointer"
                >
                  Restablecer filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filtered.map(car => (
                  <article
                    key={car.id}
                    onClick={() => handleOpenCar(car.id)}
                    className="group bg-white/90 backdrop-blur-sm rounded-3xl border border-zinc-200/80 hover:border-black p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between cursor-pointer"
                    title={`Abrir ${car.brand} ${car.model} en nueva pestaña`}
                  >
                    <div>
                      {/* Badge y Marca */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 font-tech">
                          {car.brand}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-black text-[10px] font-bold uppercase tracking-wider border border-zinc-200/60 font-tech">
                          {car.badge}
                        </span>
                      </div>

                      {/* Título */}
                      <h3 className="text-xl font-extrabold text-black tracking-tight leading-snug mb-1 font-display">
                        {car.model}
                      </h3>
                      <p className="text-[11px] text-zinc-500 leading-relaxed line-clamp-1 mb-4 font-normal">
                        {car.trim}
                      </p>

                      {/* Miniatura PNG con Sombra de Piso */}
                      <div className="car-platform-shadow w-full h-40 flex items-center justify-center my-3 relative">
                        <img
                          src={car.pngImage}
                          alt={`${car.brand} ${car.model}`}
                          className="max-h-full max-w-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1"
                          loading="lazy"
                        />
                      </div>

                      {/* Ficha técnica ultra limpia en 1 sola línea */}
                      <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500 font-tech">
                        <span>{car.year}</span>
                        <span>•</span>
                        <span>{car.km === 0 ? '0 km' : `${car.km.toLocaleString('es-AR')} km`}</span>
                        <span>•</span>
                        <span>{car.fuel}</span>
                      </div>
                    </div>

                    {/* Precio y Acción */}
                    <div className="pt-5 mt-5 border-t border-zinc-100 flex items-center justify-between">
                      <div>
                        <span className="block text-[9px] uppercase tracking-wider text-zinc-400 font-tech">Precio</span>
                        <span className="text-lg font-black text-black font-tech tabular-nums">
                          {formatPrice(car.priceUSD)}
                        </span>
                      </div>
                      <span className="w-9 h-9 rounded-full bg-black group-hover:bg-zinc-800 text-white flex items-center justify-center transition shadow-xs">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
