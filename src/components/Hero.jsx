import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Gauge } from 'lucide-react';

export default function Hero({ onOpenWhatsApp, onExploreCatalog }) {
  return (
    <section className="relative pt-12 pb-24 border-b border-zinc-800 studio-grid overflow-hidden">
      {/* Cinematic Studio Lighting Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Manifesto & Telemetry */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 border border-zinc-700 bg-zinc-950/80 px-3.5 py-1 text-[11px] font-tech text-zinc-300 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-white"></span>
              INGENIERÍA PURA & SELECCIÓN AUDITADA
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.04] text-white">
              LA FORMA EXACTA DEL DESEMPEÑO.
            </h1>

            <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-xl">
              Cada unidad de nuestra colección pasa por una rigurosa auditoría técnica certificada de 180 puntos. Historial transparente, peritaje ante escribano y entrega inmediata en nuestro showroom privado.
            </p>

            {/* Telemetry Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-zinc-800/80 font-tech">
              <div>
                <div className="text-3xl font-bold text-white flex items-baseline gap-1">
                  480 <span className="text-xs font-normal text-zinc-500">HP</span>
                </div>
                <div className="text-[10px] uppercase text-zinc-500 tracking-wider mt-1 flex items-center gap-1">
                  <Zap className="w-3 h-3 text-zinc-400" /> Potencia Biturbo
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold text-white flex items-baseline gap-1">
                  3.3 <span className="text-xs font-normal text-zinc-500">SEG</span>
                </div>
                <div className="text-[10px] uppercase text-zinc-500 tracking-wider mt-1 flex items-center gap-1">
                  <Gauge className="w-3 h-3 text-zinc-400" /> 0-100 KM/H
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-[10px] uppercase text-zinc-500 tracking-wider mt-1 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" /> Auditoría 180 Pts
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#catalogo"
                className="px-8 py-4 bg-white text-black font-bold text-xs tracking-widest uppercase hover:bg-zinc-200 transition-colors inline-flex items-center gap-2"
              >
                Explorar Colección <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => onOpenWhatsApp('Porsche 911 Carrera GTS (Unidad Destacada)')}
                className="px-8 py-4 border border-zinc-700 hover:border-white text-white font-semibold text-xs tracking-widest uppercase transition-all"
              >
                Agendar Test Drive Privado
              </button>
            </div>
          </div>

          {/* Right Column: Hero Vehicle Studio Spotlight Photography */}
          <div className="lg:col-span-6 w-full">
            <div className="relative group border border-zinc-800 bg-zinc-950 p-2 overflow-hidden shadow-2xl">
              {/* Image with Aspect Ratio and Studio Lighting */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85"
                  alt="Porsche 911 Carrera GTS"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-95 contrast-105"
                  loading="eager"
                />
                
                {/* Subtle vignette gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 bg-black/90 border border-zinc-700 px-3 py-1.5 text-xs font-tech text-white uppercase tracking-wider backdrop-blur-sm">
                  PORSCHE 911 CARRERA GTS • 2024 (0 KM)
                </div>

                <div className="absolute bottom-4 right-4 bg-white text-black px-3 py-1 font-tech text-xs font-bold uppercase tracking-wider">
                  DISPONIBLE EN SALÓN
                </div>
              </div>

              {/* Bottom detail strip */}
              <div className="p-4 bg-zinc-950 flex justify-between items-center text-xs font-tech text-zinc-400">
                <span>Color: Agate Grey Metallic • Interior Cuero Negro</span>
                <span className="text-white font-bold">USD 245.000</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
