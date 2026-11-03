import React from 'react';
import { ArrowRight, ShieldCheck, Search } from 'lucide-react';

export default function Hero({ onOpenWhatsApp }) {
  const brandLogos = ['Porsche', 'BMW', 'Mercedes-Benz', 'Audi', 'Ford'];

  return (
    <section className="relative pt-12 pb-20 border-b border-zinc-200/90 luminous-bg architectural-lines overflow-hidden">
      
      {/* Soft atmospheric gradient behind car */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-zinc-200/50 via-zinc-100/60 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Editorial Headline & Value Proposition */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 border border-zinc-300 bg-white/80 backdrop-blur-sm px-3.5 py-1 text-[11px] font-tech text-zinc-600 uppercase tracking-widest shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-800" />
              CONCESIONARIA OFICIAL & SELECCIONADOS CERTIFICADOS
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.06] text-black font-display">
              TRANSPARENCIA TOTAL EN CADA KILÓMETRO.
            </h1>

            <p className="text-base text-zinc-600 font-normal leading-relaxed max-w-xl">
              Accedé a un catálogo exclusivo de vehículos 0km y usados garantizados. Cada unidad cuenta con peritaje mecánico en 180 puntos, documentación al día y entrega inmediata.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#catalogo"
                className="px-8 py-4 bg-black text-white font-bold text-xs tracking-widest uppercase hover:bg-zinc-800 transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                Ver Catálogo Disponible <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => onOpenWhatsApp('Quiero consultar por un vehículo o agendar una visita')}
                className="px-8 py-4 border border-zinc-300 hover:border-black text-black font-bold text-xs tracking-widest uppercase bg-white/70 hover:bg-white transition-all shadow-xs"
              >
                Agendar Visita al Salón
              </button>
            </div>

            {/* Brand Trust Strip (Like AutoNation & Kavak) */}
            <div className="pt-6 border-t border-zinc-200/80">
              <span className="text-[11px] font-tech text-zinc-400 uppercase tracking-wider block mb-3">
                Unidades oficiales y seleccionadas multimarca:
              </span>
              <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                {brandLogos.map(b => (
                  <span key={b} className="hover:text-black transition-colors cursor-pointer">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Featured Car on Clean Studio Canvas */}
          <div className="lg:col-span-6 w-full">
            <div className="relative group bg-white border border-zinc-200 p-3 shadow-[0_10px_35px_rgba(0,0,0,0.05)] transition-all">
              
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                <img
                  src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85"
                  alt="Porsche 911 Carrera GTS"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                
                {/* Clean Status Pill */}
                <div className="absolute top-4 left-4 bg-white/95 border border-zinc-200 px-3 py-1 text-xs font-tech text-black uppercase tracking-wider font-semibold shadow-xs">
                  0 KM • ENTREGA INMEDIATA
                </div>
              </div>

              {/* Minimal caption strip */}
              <div className="p-4 bg-white flex justify-between items-baseline text-xs">
                <div>
                  <h3 className="font-bold text-zinc-900 text-sm">Porsche 911 Carrera GTS</h3>
                  <p className="text-zinc-500 text-[11px] font-tech mt-0.5">2024 · Nafta · Agate Grey</p>
                </div>
                <div className="text-right">
                  <span className="text-zinc-900 font-black text-base font-tech">USD 245.000</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
