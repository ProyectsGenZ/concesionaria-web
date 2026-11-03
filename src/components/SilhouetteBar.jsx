import React, { useState } from 'react';
import { VEHICLES } from '../data/vehicles';

export default function SilhouetteBar({ onSelectSilhouette, onSelectBrand, onNavigateCatalog }) {
  const [activeTab, setActiveTab] = useState('TODOS'); // 'TODOS' | 'PARTICULARES' | 'UTILITARIOS'

  const filteredVehicles = VEHICLES.filter(v => {
    if (activeTab === 'TODOS') return true;
    if (activeTab === 'UTILITARIOS') return v.categoryTab === 'UTILITARIOS' || v.bodyType === 'Pick-up';
    return v.categoryTab === 'PARTICULARES' || v.bodyType !== 'Utilitario';
  });

  const handleOpenCar = (carId) => {
    window.open(`?vehiculo=${carId}`, '_blank');
  };

  return (
    <section className="whynot-pearl-bg py-20 border-b border-zinc-200/60 select-none">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        
        {/* Cabecera Limpia con Tabs Superiores (Inspirado exactamente en la Imagen 2 de Citroën) */}
        <div className="flex flex-col items-center justify-center text-center mb-14">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 block mb-3 font-tech">
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
                    : 'text-zinc-400 hover:text-black font-semibold'
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
          {filteredVehicles.map((car) => (
            <div
              key={car.id}
              onClick={() => handleOpenCar(car.id)}
              className="group flex flex-col items-center text-center cursor-pointer p-4 rounded-2xl hover:bg-white/60 transition-all duration-300"
              title={`Abrir ${car.brand} ${car.model} en nueva pestaña`}
            >
              {/* Contenedor del Vehículo PNG con Sombra en el Piso */}
              <div className="car-platform-shadow w-full h-36 sm:h-44 flex items-center justify-center mb-4 relative">
                <img
                  src={car.pngImage}
                  alt={`${car.brand} ${car.model}`}
                  className="max-h-full max-w-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1"
                  loading="lazy"
                />
              </div>

              {/* Nombre del Modelo Limpio en Mayúsculas */}
              <div className="mt-1">
                <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest block font-tech mb-0.5">
                  {car.brand}
                </span>
                <h3 className="text-sm sm:text-base font-extrabold text-black uppercase tracking-tight group-hover:text-neutral-700 transition font-display">
                  {car.model}
                </h3>
                <span className="text-[11px] text-zinc-400 font-tech mt-1 block">
                  {car.trim.split('·')[0]}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
