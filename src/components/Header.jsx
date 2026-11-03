import React from 'react';

export default function Header({ currentView, onNavigate, onScrollToContact, currency, onToggleCurrency }) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/90 backdrop-blur-md border-b border-zinc-200/90 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        
        {/* Logotipo Minimalista */}
        <button onClick={() => onNavigate('home')} className="flex items-center gap-3 group text-left">
          <div className="w-9 h-9 bg-black text-white flex items-center justify-center rounded-lg font-extrabold text-sm tracking-tighter group-hover:scale-105 transition-transform duration-300">
            M
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-[-0.04em] text-lg leading-none text-black font-display">
              MONOLITH
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-zinc-400 mt-0.5">
              Automotive
            </span>
          </div>
        </button>

        {/* Navegación Central */}
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium">
          <button
            onClick={() => onNavigate('home')}
            className={`transition relative py-1 ${
              currentView === 'home'
                ? 'text-black font-bold border-b-2 border-black'
                : 'text-zinc-500 hover:text-black'
            }`}
          >
            Inicio
          </button>
          <button
            onClick={() => onNavigate('catalog')}
            className={`transition relative py-1 ${
              currentView === 'catalog'
                ? 'text-black font-bold border-b-2 border-black'
                : 'text-zinc-500 hover:text-black'
            }`}
          >
            Catálogo
          </button>
          <button
            onClick={onScrollToContact}
            className="text-zinc-500 hover:text-black transition py-1"
          >
            Showroom & Contacto
          </button>
        </nav>

        {/* Currency Switcher & CTA */}
        <div className="flex items-center gap-3">
          {/* Selector de Moneda USD/ARS */}
          <div className="inline-flex p-0.5 rounded-lg bg-zinc-100 border border-zinc-200 text-xs font-semibold tabular-nums">
            <button
              onClick={() => onToggleCurrency('USD')}
              className={`px-2.5 py-1 rounded-md transition ${
                currency === 'USD' ? 'bg-black text-white font-bold' : 'text-zinc-500 hover:text-black'
              }`}
            >
              USD
            </button>
            <button
              onClick={() => onToggleCurrency('ARS')}
              className={`px-2.5 py-1 rounded-md transition ${
                currency === 'ARS' ? 'bg-black text-white font-bold' : 'text-zinc-500 hover:text-black'
              }`}
            >
              ARS
            </button>
          </div>

          <button
            onClick={onScrollToContact}
            className="px-5 py-2.5 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-semibold tracking-wide transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            Contactar
          </button>

          {/* Menú Mobile */}
          <button
            onClick={() => onNavigate(currentView === 'catalog' ? 'home' : 'catalog')}
            className="md:hidden px-3.5 py-2 rounded-full border border-zinc-200 text-xs font-semibold text-black"
          >
            {currentView === 'catalog' ? 'Inicio' : 'Catálogo'}
          </button>
        </div>

      </div>
    </header>
  );
}
