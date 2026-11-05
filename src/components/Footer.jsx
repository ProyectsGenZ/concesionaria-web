import React from 'react';

export default function Footer({ onNavigate, onScrollToContact }) {
  return (
    <footer className="bg-black text-white border-t border-zinc-900 select-none">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-6 text-left">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-lg font-black text-xs tracking-tighter">
                M
              </div>
              <span className="font-extrabold tracking-tight text-base font-display">
                MONOLITH® AUTOMOTIVE
              </span>
            </div>

          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-zinc-300">
            <button
              onClick={() => onNavigate('home')}
              className="min-h-10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white transition cursor-pointer"
            >
              Inicio
            </button>
            <button
              onClick={() => onNavigate('catalog')}
              className="min-h-10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white transition cursor-pointer"
            >
              Catálogo
            </button>
            <button
              onClick={onScrollToContact}
              className="min-h-10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white transition cursor-pointer"
            >
              Showroom & Contacto
            </button>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4 font-tech">
          <p>© 2026 MONOLITH Automotive S.A. Todos los derechos reservados.</p>
          <p>Av. del Libertador 14200 · WhatsApp Oficial: +54 9 11 5555-0199</p>
        </div>

      </div>
    </footer>
  );
}
