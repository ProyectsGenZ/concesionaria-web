import React from 'react';
import { ShieldCheck, FileCheck, Award, KeyRound } from 'lucide-react';

export default function TrustBadges() {
  const points = [
    {
      icon: ShieldCheck,
      title: 'Peritaje en 180 Puntos',
      desc: 'Inspección técnica computarizada de motor, chasis, frenos, electrónica y alineación sin siniestros.'
    },
    {
      icon: FileCheck,
      title: 'Kilometraje & Dominio Certificado',
      desc: 'Historial notarial verificado, libre de deudas al día y kilometraje real garantizado por contrato.'
    },
    {
      icon: Award,
      title: 'Garantía Mecánica Escrita',
      desc: 'Respaldo oficial de postventa y asistencia en ruta durante 12 meses en todo el territorio nacional.'
    },
    {
      icon: KeyRound,
      title: 'Entrega Inmediata Llave en Mano',
      desc: 'Gestoría integral propia, tratamiento cerámico bonificado y entrega lista para rodar sin trámites.'
    }
  ];

  return (
    <section className="whynot-pearl-bg py-20 border-b border-zinc-200/80 select-none">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        
        {/* Cabecera Discreta */}
        <div className="max-w-2xl mb-14 text-left">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 block mb-2 font-tech">
            Estándar de Seguridad MONOLITH
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black font-display">
            Transparencia y Garantía en Cada Operación
          </h2>
        </div>

        {/* 4 Pilares Sin Bordes Pesados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div
                key={i}
                className="group bg-transparent hover:bg-white/80 p-6 rounded-3xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-xs">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="text-base font-black text-black tracking-tight mb-2 font-display">
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
