import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/vehicles';

export default function HeroSlider({ onOpenVehicle, onNavigateCatalog }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[activeIndex];

  const handlePrev = () => {
    setActiveIndex(prev => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section className="relative w-full h-screen min-h-[660px] bg-zinc-950 text-white overflow-hidden select-none">
      
      {/* Background Slides */}
      <div className="absolute inset-0 w-full h-full">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.carId}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-out ${
              idx === activeIndex
                ? 'opacity-100 scale-100 z-10'
                : 'opacity-0 scale-105 pointer-events-none z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center brightness-90 contrast-105"
            />
          </div>
        ))}
      </div>

      {/* Atmospheric Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 z-10 pointer-events-none" />

      {/* Content Overlay */}
      <div className="relative z-20 h-full max-w-[1440px] mx-auto px-6 lg:px-10 pt-24 pb-14 sm:pb-16 flex flex-col justify-end">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          
          {/* Headline & CTAs */}
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-semibold uppercase tracking-widest text-white border border-white/20">
                {currentSlide.tag}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black tracking-[-0.03em] leading-[1.02] mb-4 text-white font-display">
              {currentSlide.title}
            </h1>

            <p className="text-zinc-300 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-xl">
              {currentSlide.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenVehicle(currentSlide.carId)}
                className="px-7 py-4 rounded-full bg-white text-black hover:bg-zinc-200 font-bold text-sm transition-all duration-300 hover:scale-[1.02] inline-flex items-center gap-3 shadow-lg"
              >
                <span>Conocer unidad</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onNavigateCatalog}
                className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-semibold text-sm transition-all duration-300"
              >
                Explorar todo el catálogo
              </button>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-start lg:items-end gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full border border-white/25 hover:border-white bg-black/40 backdrop-blur-md text-white flex items-center justify-center transition hover:scale-105"
                title="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full border border-white/25 hover:border-white bg-black/40 backdrop-blur-md text-white flex items-center justify-center transition hover:scale-105"
                title="Siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2.5">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === activeIndex ? 'w-10 bg-white' : 'w-3 bg-white/35 hover:bg-white/60'
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

