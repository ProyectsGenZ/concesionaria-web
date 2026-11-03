import React, { useState } from 'react';
import { Gauge, Zap, Flame, ArrowRight, ShieldCheck, Check, GitCompare, X, Volume2 } from 'lucide-react';
import { VEHICLES } from '../data/vehicles';

export default function VeloceDesign({ onOpenWhatsApp }) {
  const [driveMode, setDriveMode] = useState('SPORT+'); // 'STREET' | 'SPORT+' | 'TRACK'
  const [compareList, setCompareList] = useState([VEHICLES[0], VEHICLES[1]]);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [rpmValue, setRpmValue] = useState(6800);

  const toggleCompare = (car, e) => {
    e.stopPropagation();
    setCompareList(prev => {
      const exists = prev.find(c => c.id === car.id);
      if (exists) {
        return prev.filter(c => c.id !== car.id);
      }
      if (prev.length >= 2) {
        return [prev[1], car];
      }
      return [...prev, car];
    });
  };

  const heroCar = VEHICLES[0]; // Ranger Raptor / Performance

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen selection:bg-[#DC2626] selection:text-white">
      
      {/* Top Telemetry Strip */}
      <div className="bg-[#0F172A] text-white text-[11px] font-tech py-2 px-6 flex justify-between items-center border-b border-zinc-800">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-red-500 font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            VELOCE TELEMETRY LIVE
          </span>
          <span className="hidden md:inline text-zinc-500">|</span>
          <span className="hidden md:inline text-zinc-400">Pista & Banco de Pruebas · Showroom Acassuso</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-zinc-400">Modo Activo: <strong className="text-red-400 font-bold">{driveMode}</strong></span>
          <span className="text-zinc-400">Comparador: <strong className="text-white">{compareList.length}/2 listos</strong></span>
        </div>
      </div>

      {/* Header Angular */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-[#0F172A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0F172A] text-white flex items-center justify-center font-black text-base italic tracking-tighter skew-x-[-10deg]">
              <span className="skew-x-[10deg] text-red-500">V</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold tracking-tight text-xl text-[#0F172A] font-display uppercase italic">
                VELOCE <span className="text-red-600">CORSA</span>
              </span>
              <span className="text-[9px] tracking-[0.25em] font-tech uppercase text-zinc-400">
                Precision Motorsport & High Performance
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-xs font-tech font-bold uppercase tracking-wider text-zinc-600">
            <a href="#cockpit" className="hover:text-red-600 transition">Telemetría</a>
            <a href="#pista" className="hover:text-red-600 transition">Inventario de Pista</a>
            <button onClick={() => setShowCompareModal(true)} className="hover:text-red-600 transition flex items-center gap-1.5 cursor-pointer">
              <GitCompare className="w-3.5 h-3.5" />
              <span>Comparador ({compareList.length})</span>
            </button>
          </nav>

          <button
            onClick={() => onOpenWhatsApp('Quiero agendar un Launch Control / Test de Manejo de Pista')}
            className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-tech font-bold text-xs uppercase tracking-wider skew-x-[-8deg] transition-all duration-200 shadow-md cursor-pointer"
          >
            <span className="skew-x-[8deg] block">Test Drive de Pista</span>
          </button>
        </div>
      </header>

      {/* HERO SECTION: TELEMETRY COCKPIT */}
      <section id="cockpit" className="relative pt-12 pb-20 px-6 lg:px-10 max-w-[1440px] mx-auto border-b border-zinc-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Drive Mode Switcher */}
            <div className="inline-flex items-center gap-1 bg-zinc-200 p-1 rounded-sm border border-zinc-300 font-tech text-xs">
              {['STREET', 'SPORT+', 'TRACK'].map(m => (
                <button
                  key={m}
                  onClick={() => {
                    setDriveMode(m);
                    setRpmValue(m === 'TRACK' ? 7400 : m === 'SPORT+' ? 6800 : 4500);
                  }}
                  className={`px-3 py-1 font-bold tracking-wider uppercase transition cursor-pointer ${
                    driveMode === m
                      ? 'bg-[#0F172A] text-white shadow-xs'
                      : 'text-zinc-600 hover:text-black'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0F172A] uppercase italic leading-[1.02] font-display">
              INGENIERÍA SIN <span className="text-red-600 underline decoration-4">COMPROMISOS.</span>
            </h1>

            <p className="text-zinc-600 text-sm leading-relaxed max-w-lg font-normal">
              Potencia calibrada en banco de pruebas. Vehículos con suspensión deportiva adaptativa, diferenciales autoblocantes y telemetría de rendimiento certificada.
            </p>

            {/* Live Telemetry Display */}
            <div className="grid grid-cols-3 gap-4 p-5 bg-[#0F172A] text-white rounded-sm border-l-4 border-red-600 font-tech">
              <div>
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block">Potencia Neta</span>
                <span className="text-2xl sm:text-3xl font-black text-white">{heroCar.power}</span>
                <span className="text-[9px] text-red-400 block mt-0.5">Bi-Turbo V6</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block">Régimen Máx</span>
                <span className="text-2xl sm:text-3xl font-black text-amber-400">{rpmValue} <span className="text-xs">RPM</span></span>
                <span className="text-[9px] text-zinc-400 block mt-0.5">Corte Live Valve</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block">0-100 KM/H</span>
                <span className="text-2xl sm:text-3xl font-black text-white">4.2 <span className="text-xs">SEG</span></span>
                <span className="text-[9px] text-emerald-400 block mt-0.5">Launch Control</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#pista"
                className="px-8 py-3.5 bg-[#0F172A] hover:bg-black text-white font-tech font-bold text-xs uppercase tracking-widest transition"
              >
                Explorar Pista
              </a>
              <button
                onClick={() => setShowCompareModal(true)}
                className="px-6 py-3.5 border-2 border-[#0F172A] hover:border-red-600 text-[#0F172A] font-tech font-bold text-xs uppercase tracking-widest transition flex items-center gap-2 cursor-pointer"
              >
                <GitCompare className="w-4 h-4 text-red-600" />
                <span>Comparar Unidades</span>
              </button>
            </div>
          </div>

          {/* Right Hero: Car with aerodynamic HUD lines */}
          <div className="lg:col-span-6 relative">
            <div className="relative bg-white border-2 border-zinc-200 p-4 shadow-xl">
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src={heroCar.photos[0]}
                  alt={heroCar.model}
                  className="w-full h-full object-cover object-center brightness-95"
                />
                
                {/* HUD Overlay */}
                <div className="absolute top-4 left-4 bg-red-600 text-white font-tech text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                  TRACK SPEC · 0 KM
                </div>
                
                <div className="absolute bottom-4 right-4 bg-[#0F172A]/90 text-white font-tech text-xs px-3 py-1.5 border border-zinc-700">
                  {heroCar.brand} {heroCar.model} · <strong className="text-red-400">USD {heroCar.priceUSD.toLocaleString('es-AR')}</strong>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECCIÓN 2: CATÁLOGO DE PISTA CON BARRAS DE RENDIMIENTO */}
      <section id="pista" className="py-20 max-w-[1440px] mx-auto px-6 lg:px-10">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b-2 border-zinc-200 pb-6">
          <div className="text-left">
            <span className="text-xs font-tech font-bold uppercase tracking-widest text-red-600 block mb-1">
              Catálogo de Rendimiento
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] uppercase italic font-display">
              Unidades de Circuito & Salón
            </h2>
          </div>
          <button
            onClick={() => setShowCompareModal(true)}
            className="mt-4 sm:mt-0 px-4 py-2 bg-zinc-200 hover:bg-zinc-300 text-xs font-tech font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
          >
            <GitCompare className="w-4 h-4" />
            <span>Ver Comparativa Activa ({compareList.length}/2)</span>
          </button>
        </div>

        {/* Grid de Tarjetas Motorsport */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {VEHICLES.map((car) => {
            const inCompare = compareList.some(c => c.id === car.id);
            return (
              <article
                key={car.id}
                className={`group bg-white border-2 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm ${
                  inCompare ? 'border-red-600 ring-2 ring-red-600' : 'border-zinc-200 hover:border-[#0F172A]'
                }`}
              >
                <div>
                  <div className="relative aspect-[16/10] bg-zinc-100 overflow-hidden">
                    <img
                      src={car.photos[0]}
                      alt={car.model}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0F172A] text-white font-tech text-[10px] font-bold px-2.5 py-1 uppercase">
                      {car.power}
                    </div>

                    <button
                      onClick={(e) => toggleCompare(car, e)}
                      className={`absolute top-3 right-3 px-2.5 py-1 rounded-sm text-[10px] font-tech font-bold uppercase transition flex items-center gap-1 cursor-pointer ${
                        inCompare
                          ? 'bg-red-600 text-white'
                          : 'bg-white/90 text-zinc-800 hover:bg-black hover:text-white'
                      }`}
                    >
                      <GitCompare className="w-3 h-3" />
                      {inCompare ? 'Comparando' : '+ Comparar'}
                    </button>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-zinc-400 block">
                        {car.brand} · {car.year}
                      </span>
                      <h3 className="text-xl font-black text-[#0F172A] tracking-tight uppercase italic font-display">
                        {car.model}
                      </h3>
                      <p className="text-xs text-zinc-500 font-tech mt-1 line-clamp-2">
                        {car.description}
                      </p>
                    </div>

                    {/* Telemetry Gauge Strip */}
                    <div className="space-y-2 pt-2 border-t border-zinc-100 text-xs font-tech">
                      <div className="flex justify-between">
                        <span className="text-zinc-500">Tracción / Caja:</span>
                        <span className="font-bold text-[#0F172A]">{car.traction} · {car.transmission.split(' ')[0]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-500">Motor:</span>
                        <span className="font-bold text-[#0F172A]">{car.engine}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-zinc-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-tech text-zinc-400 uppercase block">Precio</span>
                    <span className="text-xl font-black text-[#0F172A] font-tech">
                      USD {car.priceUSD.toLocaleString('es-AR')}
                    </span>
                  </div>
                  <button
                    onClick={() => onOpenWhatsApp(`Telemetría y Prueba de Pista para: ${car.brand} ${car.model}`)}
                    className="px-4 py-2.5 bg-[#0F172A] hover:bg-red-600 text-white text-xs font-tech font-bold uppercase tracking-wider transition cursor-pointer"
                  >
                    Cotizar Pista
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* MODAL COMPARADOR LADO A LADO (SIDE BY SIDE SPECS) */}
      {showCompareModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
          <div className="bg-white border-4 border-[#0F172A] max-w-4xl w-full p-6 sm:p-10 text-left shadow-2xl relative">
            <button
              onClick={() => setShowCompareModal(false)}
              className="absolute top-4 right-4 p-2 bg-zinc-100 hover:bg-black hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-tech font-bold text-red-600 uppercase tracking-widest">
                HERRAMIENTA DE TELEMETRÍA
              </span>
              <h3 className="text-2xl font-black text-[#0F172A] uppercase italic font-display">
                Comparativa Lado a Lado
              </h3>
            </div>

            {compareList.length < 2 ? (
              <p className="py-12 text-center text-sm font-tech text-zinc-500">
                Seleccioná al menos 2 vehículos en el catálogo para ver la telemetría comparada.
              </p>
            ) : (
              <div className="grid grid-cols-2 gap-6 font-tech">
                {compareList.slice(0, 2).map((c, i) => (
                  <div key={c.id} className="border-2 border-zinc-200 p-4 space-y-4">
                    <img src={c.photos[0]} alt={c.model} className="aspect-[16/10] object-cover w-full" />
                    <div>
                      <span className="text-[10px] text-zinc-400 uppercase font-bold">{c.brand}</span>
                      <h4 className="text-lg font-black text-[#0F172A] uppercase">{c.model}</h4>
                    </div>
                    <div className="space-y-2 text-xs border-t border-zinc-200 pt-3">
                      <div className="flex justify-between">
                        <span className="text-zinc-500">Potencia:</span>
                        <strong className="text-red-600">{c.power}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-500">Motor:</span>
                        <strong>{c.engine}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-500">Tracción:</span>
                        <strong>{c.traction}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-500">Año / Km:</span>
                        <strong>{c.year} · {c.km} km</strong>
                      </div>
                      <div className="flex justify-between border-t border-zinc-200 pt-2 text-sm">
                        <span className="text-zinc-500">Precio:</span>
                        <strong className="text-black">USD {c.priceUSD.toLocaleString('es-AR')}</strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-zinc-200 flex justify-end">
              <button
                onClick={() => setShowCompareModal(false)}
                className="px-6 py-2.5 bg-[#0F172A] text-white font-tech font-bold text-xs uppercase"
              >
                Cerrar Comparativa
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER MOTORSPORT */}
      <footer className="bg-[#0F172A] text-white py-16 px-6 lg:px-10 text-left border-t-4 border-red-600 font-tech">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-xl font-black italic tracking-tight uppercase">VELOCE CORSA MOTORSPORT</span>
            <span className="text-xs text-zinc-400 block mt-1">División de Vehículos de Alta Potencia & Competición</span>
          </div>
          <div className="text-xs text-zinc-400">
            Av. del Libertador 14200 · Acassuso · Telemetría en Vivo 24/7
          </div>
        </div>
      </footer>

    </div>
  );
}

