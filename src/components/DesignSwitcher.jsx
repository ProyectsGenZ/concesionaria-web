import React from 'react';
import { Layers, Sparkles, Flame, Check } from 'lucide-react';

export default function DesignSwitcher({ activeDesign, onSelectDesign }) {
  const designs = [
    {
      id: 'monolith',
      name: '1. MONOLITH Studio',
      badge: 'Blanco Perla · 3 Vistas',
      icon: Layers
    },
    {
      id: 'atelier',
      name: '2. ATELIER Luxury',
      badge: 'Haute Couture · Marfil Serif',
      icon: Sparkles
    },
    {
      id: 'veloce',
      name: '3. VELOCE Performance',
      badge: 'Motorsport · Telemetría',
      icon: Flame
    }
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50 select-none">
      <div className="bg-black/90 backdrop-blur-md border border-zinc-700 p-1.5 rounded-2xl shadow-2xl flex items-center gap-1.5">
        <span className="text-[10px] uppercase font-tech text-zinc-400 font-bold px-3 hidden sm:inline">
          DISEÑOS:
        </span>
        
        {designs.map(d => {
          const Icon = d.icon;
          const isActive = activeDesign === d.id;
          return (
            <button
              key={d.id}
              onClick={() => onSelectDesign(d.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                isActive
                  ? 'bg-white text-black font-bold shadow-md scale-102'
                  : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-zinc-400'}`} />
              <span className="hidden sm:inline">{d.name}</span>
              <span className="sm:hidden">{d.id.toUpperCase()}</span>
              {isActive && <Check className="w-3 h-3 text-emerald-600 hidden md:inline" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

