import React from 'react';
import { ShieldCheck, Award, FileText, Sparkles } from 'lucide-react';

export default function TrustBadges() {
  const points = [
    {
      icon: ShieldCheck,
      title: 'AUDITORÍA EN 180 PUNTOS',
      desc: 'Inspección computarizada de motor, chasis, tren delantero, caja de cambios y estructura libre de siniestros.'
    },
    {
      icon: FileText,
      title: 'DOMINIO 100% CERTIFICADO',
      desc: 'Libre deudas verificado, informe de dominio histórico y peritaje legal ante escribano público.'
    },
    {
      icon: Award,
      title: 'GARANTÍA MECÁNICA ESCRITA',
      desc: 'Cobertura oficial con respaldo de postventa y asistencia en ruta las 24 horas en todo el país.'
    },
    {
      icon: Sparkles,
      title: 'ENTREGA LLAVE EN MANO',
      desc: 'Detallado estético premium, tratamiento cerámico y gestoría integral para que solo te preocupes por disfrutar.'
    }
  ];

  return (
    <section className="py-16 bg-[#fbfbfd] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div
                key={i}
                className="border border-zinc-200 bg-white p-8 space-y-3.5 hover:border-zinc-400 hover:shadow-[0_8px_25px_rgba(0,0,0,0.04)] transition-all rounded-xs"
              >
                <div className="w-10 h-10 border border-zinc-200 bg-zinc-50 flex items-center justify-center text-black">
                  <Icon className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-sm font-bold text-black uppercase tracking-wider font-tech">
                  {pt.title}
                </h3>
                <p className="text-xs text-zinc-500 font-normal leading-relaxed">
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
