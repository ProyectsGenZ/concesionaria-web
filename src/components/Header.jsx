import React, { useState, useEffect } from 'react';

export default function Header({ currentView, onNavigate, onScrollToContact, currency, onToggleCurrency }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/60 backdrop-blur-md border-b border-zinc-200/50 shadow-xs'
          : 'py-4 bg-white/95 backdrop-blur-xl border-b border-zinc-200/90'
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
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/70 mt-0.5 font-tech">
              Automotive
            </span>
          </div>
        </button>

        {/* Navegación Central en Negro por Defecto (Máxima Legibilidad) */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-wider text-black font-tech">
          <button
            onClick={() => onNavigate('home')}
            className={`transition relative py-1 cursor-pointer ${
              currentView === 'home'
                ? 'text-black font-black border-b-2 border-black'
                : 'text-black hover:opacity-60'
            }`}
          >
            Inicio
          </button>
          <button
            onClick={() => onNavigate('catalog')}
            className={`transition relative py-1 cursor-pointer ${
              currentView === 'catalog'
                ? 'text-black font-black border-b-2 border-black'
                : 'text-black hover:opacity-60'
            }`}
          >
            Catálogo
          </button>
          <button
            onClick={onScrollToContact}
            className="text-black hover:opacity-60 transition py-1 cursor-pointer"
          >
            Contacto
          </button>
        </nav>

        {/* Switcher USD/ARS & CTA Directo */}
        <div className="flex items-center gap-3">
          {/* Selector de Moneda USD/ARS */}
          <div className="inline-flex p-0.5 rounded-full bg-zinc-100 border border-zinc-300/80 text-[11px] font-bold tabular-nums font-tech">
            <button
              onClick={() => onToggleCurrency('USD')}
              className={`px-3 py-1 rounded-full transition cursor-pointer ${
                currency === 'USD' ? 'bg-black text-white font-black shadow-xs' : 'text-black hover:bg-zinc-200'
              }`}
            >
              USD
            </button>
            <button
              onClick={() => onToggleCurrency('ARS')}
              className={`px-3 py-1 rounded-full transition cursor-pointer ${
                currency === 'ARS' ? 'bg-black text-white font-black shadow-xs' : 'text-black hover:bg-zinc-200'
              }`}
            >
              ARS
            </button>
          </div>

          {/* Botón de Contacto Directo */}
          <button
            onClick={onScrollToContact}
            className="px-5 py-2 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-bold tracking-wide transition-all duration-300 hover:shadow-md active:scale-95 cursor-pointer uppercase font-tech"
          >
            Contacto
          </button>

          {/* Menú Mobile */}
          <button
            onClick={() => onNavigate(currentView === 'catalog' ? 'home' : 'catalog')}
            className="md:hidden px-3.5 py-1.5 rounded-full border border-zinc-300 text-xs font-bold text-black bg-zinc-50 font-tech"
          >
            {currentView === 'catalog' ? 'Inicio' : 'Modelos'}
          </button>
        </div>

      </div>
    </header>
  );
}
