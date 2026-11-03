import React from 'react';
import { ShieldCheck, Award, FileText, Sparkles } from 'lucide-react';

export default function TrustBadges() {
  const points = [
    {
      icon: ShieldCheck,
      title: 'AUDITORÍA EN 180 PUNTOS',
      desc: 'Inspección computarizada de motor, chasis, tren delantero, caja de cambios y estructura libre de golpes.'
    },
    {
      icon: FileText,
      title: 'HISTORIAL & DOMINIO CERTIFICADO',
      desc: 'Libre deudas verificado, informe de dominio histórico y peritaje legal ante escribano público.'
    },
    {
      icon: Award,
      title: 'GARANTÍA MECÁNICA OFICIAL',
      desc: 'Cobertura extendida de motor y transmisión con auxilio mecánico 24/7 en todo el país.'
    },
    {
      icon: Sparkles,
      title: 'ENTREGA LLAVE EN MANO',
      desc: 'Detallado estético profesional, tratamiento cerámico y gestión integral de gestoría y patentamiento.'
    }
  ];

  return (
    <section className="py-20 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div key={i} className="border border-zinc-800/90 bg-black p-8 space-y-4 hover:border-zinc-500 transition-colors">
                <div className="w-10 h-10 border border-zinc-700 bg-zinc-900 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-tech">
                  {pt.title}
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
