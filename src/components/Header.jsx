import React from 'react';
import { Phone, ShieldCheck, MessageCircle } from 'lucide-react';

export default function Header({ onOpenWhatsApp }) {
  return (
    <>
      {/* Top Bar Status */}
      <div className="border-b border-zinc-800/80 bg-zinc-950/90 text-xs py-2 px-6 flex justify-between items-center text-zinc-400">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Showroom & Concierge en línea
          </span>
          <span className="hidden md:inline text-zinc-700">|</span>
          <span className="hidden md:inline text-zinc-500">Atención personalizada con cita previa</span>
        </div>
        <div className="flex items-center gap-4 font-tech text-[11px]">
          <a href="tel:+5491123456789" className="hover:text-white transition-colors flex items-center gap-1.5">
            <Phone className="w-3 h-3 text-zinc-400" />
            +54 9 11 2345-6789
          </a>
          <span className="text-zinc-700">|</span>
          <span className="text-zinc-500">BUENOS AIRES, ARG</span>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-black/85 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-white flex items-center justify-center font-black text-black text-sm tracking-tighter group-hover:bg-zinc-200 transition-colors">
                SM
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black tracking-[0.25em] uppercase text-white leading-none">
                  STUDIO MOTORS
                </span>
                <span className="text-[9px] tracking-[0.35em] text-zinc-500 uppercase mt-1">
                  EXECUTIVE SELECTION
                </span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-widest text-zinc-400">
              <a href="#catalogo" className="hover:text-white transition-colors">COLECCIÓN</a>
              <a href="#catalogo" className="hover:text-white transition-colors">0 KM</a>
              <a href="#catalogo" className="hover:text-white transition-colors">SELECCIONADOS</a>
              <a href="#financiacion" className="hover:text-white transition-colors">FINANCIACIÓN</a>
              <a href="#tasacion" className="hover:text-white transition-colors">TASACIÓN</a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenWhatsApp('Consulta General Concierge')}
              className="inline-flex items-center gap-2 border border-zinc-700 hover:border-white px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Concierge</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
