import React from 'react';
import { MapPin, Clock, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Footer({ onOpenWhatsApp }) {
  return (
    <footer className="bg-black text-zinc-400 text-xs py-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-white text-black font-black flex items-center justify-center text-xs">
              SM
            </div>
            <span className="font-extrabold tracking-widest text-white uppercase text-sm">
              STUDIO MOTORS
            </span>
          </div>
          <p className="text-zinc-500 text-xs leading-relaxed font-light">
            Galería y salón privado de automóviles de alta gama y 0km. Certificación técnica exhaustiva y asesoramiento patrimonial personalizado.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenWhatsApp('Contacto directo desde pie de página')}
              className="inline-flex items-center gap-2 text-white border-b border-white pb-1 font-tech uppercase text-[11px] tracking-wider hover:text-zinc-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" /> Chatear con Asesor Privado
            </button>
          </div>
        </div>

        {/* Location & Showroom */}
        <div className="space-y-3">
          <h4 className="text-white font-tech uppercase tracking-wider text-xs mb-3 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" /> SHOWROOM PRIVADO
          </h4>
          <p className="text-zinc-400 text-xs leading-relaxed font-tech">
            Av. del Libertador 4850<br />
            Vicente López, Buenos Aires<br />
            Argentina
          </p>
          <p className="text-[11px] text-zinc-500">
            Estacionamiento privado y seguridad 24 hs para clientes.
          </p>
        </div>

        {/* Hours */}
        <div className="space-y-3">
          <h4 className="text-white font-tech uppercase tracking-wider text-xs mb-3 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-zinc-400" /> HORARIOS DE ATENCIÓN
          </h4>
          <ul className="space-y-1.5 text-zinc-400 text-xs font-tech">
            <li>Lunes a Viernes: 09:30 a 19:00 hs</li>
            <li>Sábados: 10:00 a 14:00 hs (con cita previa)</li>
            <li>Domingos y Feriados: Cerrado</li>
          </ul>
        </div>

        {/* Legal & Guarantee */}
        <div className="space-y-3">
          <h4 className="text-white font-tech uppercase tracking-wider text-xs mb-3">
            SEGURIDAD JURÍDICA
          </h4>
          <div className="border border-zinc-800 p-4 space-y-2 bg-zinc-950">
            <div className="flex items-center gap-2 text-white font-tech text-xs">
              <span className="w-1.5 h-1.5 bg-emerald-400"></span>
              DOCUMENTACIÓN 100% AUDITADA
            </div>
            <p className="text-[11px] text-zinc-500 leading-relaxed">
              Inscripciones y transferencias realizadas por gestores oficiales matriculados ante DNRPA.
            </p>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center text-[11px] text-zinc-600 font-tech">
        <div>
          © 2026 Studio Motors. Todos los derechos reservados. Diseño Monocromático Antislop.
        </div>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="#" className="hover:text-zinc-400 transition-colors">Términos y Condiciones</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Aviso de Privacidad</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Garantía Mecánica</a>
        </div>
      </div>
    </footer>
  );
}
