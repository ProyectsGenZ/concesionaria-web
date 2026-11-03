import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function Header({ onOpenWhatsApp }) {
  return (
    <>
      {/* Top Bar Announcement */}
      <div className="border-b border-zinc-200/80 bg-zinc-50/90 text-xs py-2 px-6 flex justify-between items-center text-zinc-600">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-medium text-zinc-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Showroom & Asesoramiento Oficial en Línea
          </span>
          <span className="hidden md:inline text-zinc-300">|</span>
          <span className="hidden md:inline text-zinc-500">Unidades 0km y Seleccionadas con Garantía</span>
        </div>
        <div className="flex items-center gap-4 font-tech text-[11px] text-zinc-600">
          <a href="tel:+5491123456789" className="hover:text-black transition-colors flex items-center gap-1.5 font-medium">
            <Phone className="w-3 h-3 text-zinc-500" />
            +54 9 11 2345-6789
          </a>
          <span className="text-zinc-300">|</span>
          <span className="text-zinc-500">BUENOS AIRES</span>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-zinc-200 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-black flex items-center justify-center font-black text-white text-sm tracking-tighter group-hover:bg-zinc-800 transition-colors">
                SM
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black tracking-[0.22em] uppercase text-black leading-none font-display">
                  STUDIO MOTORS
                </span>
                <span className="text-[9px] tracking-[0.32em] text-zinc-400 uppercase mt-1">
                  SELECCIÓN OFICIAL
                </span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-wider text-zinc-600">
              <a href="#catalogo" className="hover:text-black transition-colors">CATÁLOGO</a>
              <a href="#catalogo" className="hover:text-black transition-colors">0 KM</a>
              <a href="#catalogo" className="hover:text-black transition-colors">USADOS SELECCIONADOS</a>
              <a href="#financiacion" className="hover:text-black transition-colors">FINANCIACIÓN</a>
              <a href="#tasacion" className="hover:text-black transition-colors">COTIZAR MI USADO</a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenWhatsApp('Consulta General desde Cabecera')}
              className="inline-flex items-center gap-2 bg-black hover:bg-zinc-800 text-white px-5 py-2.5 text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Contactar Asesor</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
