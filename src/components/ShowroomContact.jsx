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

  // Sync if prefill changes
  React.useEffect(() => {
    if (prefilledVehicle) {
      setFormData(prev => ({ ...prev, vehicle: prefilledVehicle }));
    }
  }, [prefilledVehicle]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Solicitud de Contacto Web:
Nombre: ${formData.name}
Teléfono: ${formData.phone}
Sucursal: ${formData.branch}
Vehículo: ${formData.vehicle || 'Consulta General'}
Mensaje: ${formData.message}`;

    window.open(`https://wa.me/5491155550199?text=${encodeURIComponent(text)}`, '_blank');
    onShowToast('¡Solicitud enviada! Serás derivado a WhatsApp con un asesor.');
  };

  return (
    <section id="contacto-showroom" className="bg-zinc-50 border-t border-zinc-200 py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 text-left">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400 block mb-2 font-tech">
            Showroom & Contacto Directo
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-black leading-tight font-display">
            Visitá nuestro salón o comunicate con un asesor.
          </h2>
          <p className="text-zinc-600 text-base leading-relaxed mt-4 font-normal">
            Toda la atención comercial, pruebas de manejo y cotizaciones se realizan de forma personalizada. Encontranos en nuestras redes oficiales, por WhatsApp o en nuestro Showroom.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Column (7 cols): Canales, Ubicación, Horarios y Redes */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. Tarjetas Directas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="https://wa.me/5491155550199"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-white rounded-2xl border border-zinc-200 hover:border-black transition-all duration-300 flex flex-col justify-between shadow-xs"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 font-tech">
                    WhatsApp Oficial
                  </span>
                  <span className="text-xs font-bold text-black group-hover:translate-x-0.5 transition-transform">↗</span>
                </div>
                <div>
                  <span className="font-bold text-base text-black block tabular-nums font-tech">
                    +54 9 11 5555-0199
                  </span>
                  <span className="text-xs text-zinc-400 mt-1 block">Respuesta inmediata</span>
                </div>
              </a>

              <a
                href="tel:+541147908800"
                className="group p-6 bg-white rounded-2xl border border-zinc-200 hover:border-black transition-all duration-300 flex flex-col justify-between shadow-xs"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 font-tech">
                    Teléfono Salón
                  </span>
                  <span className="text-xs font-bold text-black group-hover:translate-x-0.5 transition-transform">↗</span>
                </div>
                <div>
                  <span className="font-bold text-base text-black block tabular-nums font-tech">
                    (011) 4790-8800
                  </span>
                  <span className="text-xs text-zinc-400 mt-1 block">Líneas rotativas</span>
                </div>
              </a>

              <a
                href="mailto:ventas@monolith.com.ar"
                className="group p-6 bg-white rounded-2xl border border-zinc-200 hover:border-black transition-all duration-300 flex flex-col justify-between shadow-xs"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 font-tech">
                    Correo Oficial
                  </span>
                  <span className="text-xs font-bold text-black group-hover:translate-x-0.5 transition-transform">↗</span>
                </div>
                <div>
                  <span className="font-bold text-sm text-black block truncate font-tech">
                    ventas@monolith.com.ar
                  </span>
                  <span className="text-xs text-zinc-400 mt-1 block">Atención corporativa</span>
                </div>
              </a>
            </div>

            {/* 2. Ubicación de los Salones + Horarios */}
            <div className="bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-xs">
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-7 p-7 sm:p-8 space-y-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1 font-tech">
                      Ubicación Principal
                    </span>
                    <h3 className="text-xl font-bold text-black font-display">
                      Showroom Av. del Libertador
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1">
                      Av. del Libertador 14200, Acassuso, Buenos Aires
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-100">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1 font-tech">
                      Sucursal Norte
                    </span>
                    <h4 className="text-base font-bold text-black font-display">
                      Hub Panamericana Pilar
                    </h4>
                    <p className="text-xs text-zinc-600 mt-0.5">
                      Panamericana Ramal Pilar Km 46.5, Pilar
                    </p>
                  </div>

                  {/* Horarios */}
                  <div className="pt-4 border-t border-zinc-100">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-2 font-tech">
                      Horarios de Atención
                    </span>
                    <div className="space-y-1.5 text-xs font-tech">
                      <div className="flex justify-between">
                        <span className="text-zinc-600">Lunes a Viernes:</span>
                        <span className="font-bold text-black tabular-nums">09:00 a 19:30 hs</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-600">Sábados:</span>
                        <span className="font-bold text-black tabular-nums">10:00 a 17:00 hs</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-600">Domingos y Feriados:</span>
                        <span className="font-medium text-zinc-400">Cerrado</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Showroom visual con enlace a Google Maps */}
                <div className="md:col-span-5 relative min-h-[240px] bg-black overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80"
                    alt="Showroom MONOLITH"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <span className="text-xs font-semibold text-white mb-2 font-tech">
                      Estacionamiento privado exclusivo
                    </span>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:bg-zinc-200 transition shadow-sm"
                    >
                      <span>Abrir en Google Maps</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* 3. Redes Sociales */}
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400 block mb-3 font-tech">
                Nuestras Redes Sociales Oficiales
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 font-tech">
                {[
                  { name: 'Instagram', handle: '@monolith.ar', url: 'https://instagram.com' },
                  { name: 'YouTube', handle: 'MONOLITH TV', url: 'https://youtube.com' },
                  { name: 'Facebook', handle: '/monolithauto', url: 'https://facebook.com' },
                  { name: 'TikTok', handle: '@monolith.ar', url: 'https://tiktok.com' },
                ].map(social => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white rounded-2xl border border-zinc-200 hover:border-black transition flex items-center justify-between group shadow-xs"
                  >
                    <div>
                      <span className="font-bold text-xs text-black block">{social.name}</span>
                      <span className="text-[11px] text-zinc-400">{social.handle}</span>
                    </div>
                    <span className="text-xs text-zinc-400 group-hover:text-black">↗</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Formulario Unificado */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-10 shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1 font-tech">
                Atención Personalizada
              </span>
              <h3 className="text-2xl font-bold text-black mb-2 font-display">
                Agendar visita o cotización
              </h3>
              <p className="text-xs text-zinc-500 mb-6 font-normal">
                Completá tus datos para coordinar una cita en el Showroom o recibir asesoramiento directo sobre una unidad.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-sm text-left">
                <div>
                  <label className="block text-xs font-semibold text-black mb-1.5 font-tech">
                    Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Martín Rodríguez"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm focus:outline-none focus:border-black transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-black mb-1.5 font-tech">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+54 9 11 ..."
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm focus:outline-none focus:border-black transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-black mb-1.5 font-tech">
                      Sucursal
                    </label>
                    <select
                      value={formData.branch}
                      onChange={e => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm focus:outline-none focus:border-black transition"
                    >
                      <option>Showroom Libertador</option>
                      <option>Hub Pilar (Km 46.5)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-black mb-1.5 font-tech">
                    Vehículo de interés
                  </label>
                  <input
                    type="text"
                    value={formData.vehicle}
                    onChange={e => setFormData({ ...formData, vehicle: e.target.value })}
                    placeholder="Consulta general / Todos los vehículos"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm font-medium text-black focus:outline-none focus:border-black transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-black mb-1.5 font-tech">
                    Mensaje o día de preferencia
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hola, me gustaría coordinar una visita para ver la unidad..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm focus:outline-none focus:border-black transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-black hover:bg-zinc-800 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg active:scale-95 cursor-pointer shadow-sm"
                >
                  Enviar solicitud de contacto
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
