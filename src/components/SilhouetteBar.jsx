import React, { useState } from 'react';
import { VEHICLES } from '../data/vehicles';

export default function SilhouetteBar({ onOpenVehicle, onNavigateCatalog }) {
  const [activeTab, setActiveTab] = useState('TODOS'); // 'TODOS' | 'PARTICULARES' | 'UTILITARIOS'

  const filteredVehicles = VEHICLES.filter(v => {
    if (activeTab === 'TODOS') return true;
    if (activeTab === 'UTILITARIOS') return v.categoryTab === 'UTILITARIOS' || v.bodyType === 'Pick-up';
    return v.categoryTab === 'PARTICULARES' || v.bodyType !== 'Utilitario';
  });

  const handleOpenCar = (carId) => {
    if (onOpenVehicle) {
      onOpenVehicle(carId);
    } else {
      window.location.assign(`?vehiculo=${carId}`);
    }
  };

  return (
    <section className="whynot-pearl-bg studio-models py-20 border-b border-zinc-200/60 select-none">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        
        {/* Cabecera Limpia con Tabs Superiores (Inspirado exactamente en la Imagen 2 de Citroën) */}
        <div className="flex flex-col items-center justify-center text-center mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-600 block mb-3 font-tech">
            Gama de Vehículos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black font-display mb-8">
            Nuestros Modelos
          </h2>

          {/* Tabs Limpios: TODOS | PARTICULARES | UTILITARIOS */}
          <div className="flex items-center gap-8 border-b border-zinc-200 pb-2 text-xs sm:text-sm font-bold tracking-wider">
            {['TODOS', 'PARTICULARES', 'UTILITARIOS'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 relative uppercase transition-colors cursor-pointer ${
                  activeTab === tab
                    ? 'text-black font-black'
                    : 'text-zinc-600 hover:text-black font-semibold'
                }`}
              >
                <span>{tab}</span>
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 transition-all duration-300" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Grilla de Miniaturas PNG con Sombra de Piso (Inspirado exactamente en Imagen 1 de Hyundai y 2 de Citroën) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {filteredVehicles.slice(0, 8).map((car) => (
            <a
              href={`?vehiculo=${car.id}`}
              key={car.id}
              onClick={event => { if (!event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) { event.preventDefault(); handleOpenCar(car.id); } }}
              className="group flex flex-col items-center text-center cursor-pointer p-4 rounded-2xl bg-transparent transition-all duration-300"
              title={`Abrir ${car.brand} ${car.model} `}
            >
              {/* Contenedor del Vehículo PNG con Sombra en el Piso */}
              <div className="w-full h-36 sm:h-44 flex items-center justify-center mb-4 relative overflow-visible">
                {/* Wrapper estático de orientación horizontal permanente (previene rotaciones en hover) */}
                <div className={`w-full h-full flex items-center justify-center ${car.flip ? 'scale-x-[-1]' : ''}`}>
                  {/* Contenedor interno que ejecuta el zoom suave exclusivamente */}
                  <div className="w-full h-full flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-1">
                    <img
                      src={car.pngImage}
                      alt={`${car.brand} ${car.model}`}
                      style={{
                        transform: `scale(${car.scale || 1.0})`
                      }}
                      className="max-h-28 sm:max-h-32 w-auto max-w-[88%] object-contain relative z-10 select-none pointer-events-none"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>

              {/* Nombre del Modelo Limpio en Mayúsculas */}
              <div className="mt-1">
                <span className="text-[11px] font-semibold text-zinc-600 uppercase tracking-widest block font-tech mb-0.5">
                  {car.brand}
                </span>
                <h3 className="text-sm sm:text-base font-extrabold text-black uppercase tracking-tight group-hover:text-neutral-700 transition font-display">
                  {car.model}
                </h3>
                <span className="text-xs text-zinc-600 font-tech mt-1 block">
                  {car.trim.split('·')[0]}
                </span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12 text-center"><button type="button" onClick={onNavigateCatalog} className="inline-flex items-center gap-3 rounded-full bg-black px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-zinc-800 transition cursor-pointer">Ver todos los modelos <span aria-hidden="true">→</span></button></div>

      </div>
    </section>
  );
}
