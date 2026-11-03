import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, ExternalLink } from 'lucide-react';

export default function ShowroomContact({ prefilledVehicle = '', onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branch: 'Showroom Libertador',
    vehicle: prefilledVehicle,
    message: ''
  });

  React.useEffect(() => {
    if (prefilledVehicle) {
      setFormData(prev => ({ ...prev, vehicle: prefilledVehicle }));
    }
  }, [prefilledVehicle]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Solicitud Web Oficial:
Nombre: ${formData.name}
Teléfono: ${formData.phone}
Sucursal: ${formData.branch}
Unidad de interés: ${formData.vehicle || 'Consulta General'}
Mensaje: ${formData.message}`;

    window.open(`https://wa.me/5491155550199?text=${encodeURIComponent(text)}`, '_blank');
    onShowToast('¡Solicitud enviada! Serás derivado a WhatsApp con un asesor.');
  };

  return (
    <section id="contacto-showroom" className="whynot-pearl-bg border-t border-zinc-200/80 py-24 select-none">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        
        {/* Cabecera Limpia */}
        <div className="max-w-2xl mb-16 text-left">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 block mb-2 font-tech">
            Showroom & Salón Oficial
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight font-display">
            Atención personalizada y asesoramiento directo.
          </h2>
          <p className="text-zinc-600 text-sm leading-relaxed mt-4 font-normal">
            Coordiná tu visita presencial para pruebas de manejo, inspección técnica o cotización formal de tu unidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Columna Izquierda (7 cols): Canales, Sucursales y Redes Sociales */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Canales Directos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="https://wa.me/5491155550199"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-zinc-200/80 hover:border-black transition-all duration-300 flex flex-col justify-between shadow-xs group"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 font-tech mb-4 block">
                  WhatsApp Oficial
                </span>
                <div>
                  <span className="font-black text-sm text-black block tabular-nums font-tech">
                    +54 9 11 5555-0199
                  </span>
                  <span className="text-[11px] text-zinc-400 mt-0.5 block">Respuesta inmediata</span>
                </div>
              </a>

              <a
                href="tel:+541147908800"
                className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-zinc-200/80 hover:border-black transition-all duration-300 flex flex-col justify-between shadow-xs group"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 font-tech mb-4 block">
                  Teléfono Salón
                </span>
                <div>
                  <span className="font-black text-sm text-black block tabular-nums font-tech">
                    (011) 4790-8800
                  </span>
                  <span className="text-[11px] text-zinc-400 mt-0.5 block">Líneas rotativas</span>
                </div>
              </a>

              <a
                href="mailto:ventas@monolith.com.ar"
                className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-zinc-200/80 hover:border-black transition-all duration-300 flex flex-col justify-between shadow-xs group"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 font-tech mb-4 block">
                  Correo Electrónico
                </span>
                <div>
                  <span className="font-black text-xs text-black block truncate font-tech">
                    ventas@monolith.com.ar
                  </span>
                  <span className="text-[11px] text-zinc-400 mt-0.5 block">Ventas Corporativas</span>
                </div>
              </a>
            </div>

            {/* Sucursales */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-white/80 rounded-2xl border border-zinc-200/80 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-black block mb-1 font-tech">
                  Showroom Libertador
                </span>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Av. del Libertador 14200, Acassuso, Buenos Aires.<br />
                  Lunes a Viernes 09:00 a 19:30 · Sábados 10:00 a 14:00.
                </p>
              </div>

              <div className="p-6 bg-white/80 rounded-2xl border border-zinc-200/80 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-black block mb-1 font-tech">
                  Hub Logístico Pilar
                </span>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Panamericana Km 46.5, Ramal Pilar, Buenos Aires.<br />
                  Centro de Entregas y Taller de Alistamiento Oficial.
                </p>
              </div>
            </div>

            {/* SECCIÓN "SEGUINOS EN NUESTRAS REDES SOCIALES" (Inspirada exactamente en la Imagen 3 del Usuario) */}
            <div className="pt-6 border-t border-zinc-200/80">
              <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight mb-6 font-display">
                Seguinos en nuestras Redes Sociales
              </h3>
              
              <div className="flex items-center gap-7 text-zinc-400">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors transform hover:scale-110"
                  title="Facebook"
                >
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5C12 6.57 13.18 5.5 14.92 5.5c.83 0 1.54.06 1.75.09v2.03h-1.2c-.94 0-1.12.45-1.12 1.1V11h2.25l-.3 3h-1.95v7H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors transform hover:scale-110"
                  title="Instagram"
                >
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors transform hover:scale-110"
                  title="X (Twitter)"
                >
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors transform hover:scale-110"
                  title="YouTube"
                >
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors transform hover:scale-110"
                  title="LinkedIn"
                >
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Columna Derecha (5 cols): Formulario */}
          <div className="lg:col-span-5">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-zinc-200/80 p-8 sm:p-10 shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1 font-tech">
                Contacto Directo
              </span>
              <h3 className="text-2xl font-extrabold text-black mb-2 font-display">
                Solicitar Cotización o Visita
              </h3>
              <p className="text-xs text-zinc-500 mb-6 font-normal">
                Completá los datos y un asesor se comunicará contigo vía WhatsApp en pocos minutos.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs text-left">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1.5 font-tech">
                    Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Martín Benítez"
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:outline-none focus:border-black transition font-normal"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1.5 font-tech">
                    Teléfono Celular (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Ej. +54 9 11 1234-5678"
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:outline-none focus:border-black transition font-normal font-tech"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1.5 font-tech">
                    Unidad de Consulta
                  </label>
                  <input
                    type="text"
                    value={formData.vehicle}
                    onChange={e => setFormData({ ...formData, vehicle: e.target.value })}
                    placeholder="Ej. Nuevo C4 Híbrido / Ranger Raptor"
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:outline-none focus:border-black transition font-normal"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-4 bg-black hover:bg-zinc-800 text-white rounded-xl font-bold uppercase tracking-wider text-xs transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  Enviar Consulta a WhatsApp Oficial
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
