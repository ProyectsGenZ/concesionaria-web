import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/vehicles';

export default function HeroSlider({ onOpenVehicle, onNavigateCatalog }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[activeIndex];

  const handlePrev = () => {
    setActiveIndex(prev => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % HERO_SLIDES.length);
  };

  const handleOpenSlideVehicle = () => {
    window.open(`?vehiculo=${currentSlide.carId}`, '_blank');
  };

  return (
    <section className="relative w-full h-screen min-h-[640px] bg-black text-white overflow-hidden select-none">
      
      {/* Background Slides con Efecto Zoom Lento (Ken Burns) */}
      <div className="absolute inset-0 w-full h-full">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={slide.carId}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover object-center brightness-[0.96] contrast-[1.02] ${
                  isActive ? 'animate-kenburns' : ''
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Gradientes atmosféricos suaves y sutiles (filtro aclarado según requerimiento) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Content Overlay */}
      <div className="relative z-20 h-full max-w-[1440px] mx-auto px-6 lg:px-10 pt-28 pb-14 sm:pb-16 flex flex-col justify-end">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          
          {/* Titular y llamado a la acción único */}
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-semibold uppercase tracking-widest text-white border border-white/20 font-tech">
                {currentSlide.tag}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black tracking-[-0.03em] leading-[1.02] mb-4 text-white font-display">
              {currentSlide.title}
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base font-normal leading-relaxed mb-8 max-w-xl">
              {currentSlide.subtitle}
            </p>

            {/* Pocos botones con función específica */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleOpenSlideVehicle}
                className="px-7 py-3.5 rounded-full bg-white text-black hover:bg-zinc-200 font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] inline-flex items-center gap-2.5 shadow-xl cursor-pointer"
              >
                <span>Ver Ficha en Nueva Pestaña</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onNavigateCatalog}
                className="text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white transition px-4 py-2 border-b border-transparent hover:border-white cursor-pointer"
              >
                Explorar Toda la Gama
              </button>
            </div>
          </div>

          {/* Controles de Diapositiva Minimalistas */}
          <div className="flex flex-col items-start lg:items-end gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/20 hover:border-white bg-black/40 backdrop-blur-md text-white flex items-center justify-center transition hover:scale-105 cursor-pointer"
                title="Anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/20 hover:border-white bg-black/40 backdrop-blur-md text-white flex items-center justify-center transition hover:scale-105 cursor-pointer"
                title="Siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Indicador de barra de progreso */}
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1 rounded-full transition-all duration-500 cursor-pointer ${
                    idx === activeIndex ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
