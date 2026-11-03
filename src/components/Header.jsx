import React, { useState, useEffect } from 'react';

export default function Header({ currentView, onNavigate, onScrollToContact, currency, onToggleCurrency }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-zinc-200/70 shadow-xs py-3'
          : 'bg-white/30 backdrop-blur-md border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex items-center justify-between">
        
        {/* Logotipo Minimalista Monocromático */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-lg font-black text-xs tracking-tighter group-hover:scale-105 transition-transform duration-300 shadow-xs">
            M
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-[-0.04em] text-base leading-none text-black font-display">
              MONOLITH
            </span>
            <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-zinc-400 mt-0.5">
              Automotive
            </span>
          </div>
        </button>

        {/* Navegación Central Limpia */}
        <nav className="hidden md:flex items-center space-x-10 text-xs font-semibold uppercase tracking-wider">
          <button
            onClick={() => onNavigate('home')}
            className={`transition relative py-1 cursor-pointer ${
              currentView === 'home'
                ? 'text-black font-bold border-b-2 border-black'
                : 'text-zinc-500 hover:text-black'
            }`}
          >
            Inicio
          </button>
          <button
            onClick={() => onNavigate('catalog')}
            className={`transition relative py-1 cursor-pointer ${
              currentView === 'catalog'
                ? 'text-black font-bold border-b-2 border-black'
                : 'text-zinc-500 hover:text-black'
            }`}
          >
            Gama & Catálogo
          </button>
          <button
            onClick={onScrollToContact}
            className="text-zinc-500 hover:text-black transition py-1 cursor-pointer"
          >
            Showroom & Contacto
          </button>
        </nav>

        {/* Switcher USD/ARS & CTA Directo */}
        <div className="flex items-center gap-3">
          {/* Selector de Moneda USD/ARS */}
          <div className="inline-flex p-0.5 rounded-full bg-zinc-100/90 border border-zinc-200/80 text-[11px] font-semibold tabular-nums font-tech">
            <button
              onClick={() => onToggleCurrency('USD')}
              className={`px-3 py-1 rounded-full transition cursor-pointer ${
                currency === 'USD' ? 'bg-black text-white font-bold shadow-xs' : 'text-zinc-500 hover:text-black'
              }`}
            >
              USD
            </button>
            <button
              onClick={() => onToggleCurrency('ARS')}
              className={`px-3 py-1 rounded-full transition cursor-pointer ${
                currency === 'ARS' ? 'bg-black text-white font-bold shadow-xs' : 'text-zinc-500 hover:text-black'
              }`}
            >
              ARS
            </button>
          </div>

          {/* Único botón de contacto directo */}
          <button
            onClick={onScrollToContact}
            className="px-5 py-2 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-semibold tracking-wide transition-all duration-300 hover:shadow-md active:scale-95 cursor-pointer"
          >
            Contacto
          </button>

          {/* Selector rápido mobile */}
          <button
            onClick={() => onNavigate(currentView === 'catalog' ? 'home' : 'catalog')}
            className="md:hidden px-3.5 py-1.5 rounded-full border border-zinc-200 text-xs font-semibold text-black bg-white/70"
          >
            {currentView === 'catalog' ? 'Inicio' : 'Modelos'}
          </button>
        </div>

      </div>
    </header>
  );
}
