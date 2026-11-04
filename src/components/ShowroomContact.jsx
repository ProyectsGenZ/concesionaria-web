import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function ShowroomContact({ prefilledVehicle = '', onShowToast }) {
  const [activeBranch, setActiveBranch] = useState('libertador'); // 'libertador' | 'pilar'
  const [inquiryType, setInquiryType] = useState('compra'); // 'compra' | 'test-drive' | 'permuta'
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
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
    const branchName = activeBranch === 'libertador' ? 'Showroom Libertador (Acassuso)' : 'Hub Logístico Pilar';
    const typeLabel = inquiryType === 'compra' ? 'Compra / Cotización Formal' : inquiryType === 'test-drive' ? 'Prueba de Manejo (Test Drive)' : 'Tasación y Entrega de Usado';
    
    const text = `Solicitud de Atención Oficial:
Nombre: ${formData.name}
WhatsApp: ${formData.phone}
Tipo de trámite: ${typeLabel}
Sede de preferencia: ${branchName}
Unidad de interés: ${formData.vehicle || 'Consulta General'}
Comentario: ${formData.message || 'Sin mensaje adicional'}`;

    window.open(`https://wa.me/5491155550199?text=${encodeURIComponent(text)}`, '_blank');
    if (onShowToast) onShowToast('¡Solicitud enviada! Serás derivado a WhatsApp con un asesor oficial.');
  };

  return (
    <section id="contacto-showroom" className="whynot-pearl-bg pt-24 select-none">
      
      {/* 1. SECCIÓN PRINCIPAL: REDISEÑO TOTAL DE CONTACTO & SALÓN PRIVADO */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 pb-20 text-left">
        
        {/* Cabecera Editorial con Gran Jerarquía y Espacios Limpios */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-zinc-200/80">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 block mb-2 font-tech">
              Boutique Salón & Asesoramiento
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black leading-tight font-display">
              Atención Presencial & Canales Directos
            </h2>
          </div>
          <div className="flex items-center gap-2.5 text-xs font-semibold text-black font-tech">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Asesores disponibles en línea · Respuesta promedio &lt; 5 min</span>
          </div>
        </div>

        {/* Layout en 2 Bloques Armónicos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          
          {/* COLUMNA IZQUIERDA (7 cols): Sedes Showroom, Horarios y Canales Rápidos */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Selector de Sedes */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-black block mb-3 font-tech">
                Elegí la sede más cercana
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setActiveBranch('libertador')}
                  className={`p-6 rounded-2xl text-left transition-all cursor-pointer ${
                    activeBranch === 'libertador'
                      ? 'bg-black text-white shadow-lg'
                      : 'bg-white/80 hover:bg-white text-black'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-extrabold text-sm uppercase tracking-wide font-display">
                      Showroom Libertador
                    </span>
                    <MapPin className="w-4 h-4 opacity-70" />
                  </div>
                  <p className={`text-xs leading-relaxed ${activeBranch === 'libertador' ? 'text-zinc-300' : 'text-zinc-500'}`}>
                    Av. del Libertador 14200, Acassuso.<br />
                    Salón principal de exhibición y entregas VIP.
                  </p>
                  <div className={`mt-4 pt-3 border-t text-[11px] font-tech flex items-center justify-between ${
                    activeBranch === 'libertador' ? 'border-zinc-800 text-zinc-400' : 'border-zinc-100 text-zinc-400'
                  }`}>
                    <span>Lun a Vie 09:00 - 19:30</span>
                    <span>Sáb 10:00 - 14:00</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveBranch('pilar')}
                  className={`p-6 rounded-2xl text-left transition-all cursor-pointer ${
                    activeBranch === 'pilar'
                      ? 'bg-black text-white shadow-lg'
                      : 'bg-white/80 hover:bg-white text-black'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-extrabold text-sm uppercase tracking-wide font-display">
                      Hub Logístico Pilar
                    </span>
                    <MapPin className="w-4 h-4 opacity-70" />
                  </div>
                  <p className={`text-xs leading-relaxed ${activeBranch === 'pilar' ? 'text-zinc-300' : 'text-zinc-500'}`}>
                    Panamericana Km 46.5, Ramal Pilar.<br />
                    Centro de Alistamiento Técnico e Inspección.
                  </p>
                  <div className={`mt-4 pt-3 border-t text-[11px] font-tech flex items-center justify-between ${
                    activeBranch === 'pilar' ? 'border-zinc-800 text-zinc-400' : 'border-zinc-100 text-zinc-400'
                  }`}>
                    <span>Lun a Vie 08:30 - 18:00</span>
                    <span>Sáb con cita previa</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Accesos de Comunicación Directa */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/5491155550199"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-white/90 hover:bg-white rounded-2xl transition-all shadow-xs group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-black/60 font-tech">
                    WhatsApp Comercial
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div>
                  <span className="text-base font-black text-black tabular-nums font-tech">
                    +54 9 11 5555-0199
                  </span>
                  <span className="text-xs text-zinc-400 block mt-0.5">Asesoramiento en tiempo real</span>
                </div>
              </a>

              <a
                href="tel:+541147908800"
                className="p-6 bg-white/90 hover:bg-white rounded-2xl transition-all shadow-xs group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-black/60 font-tech">
                    Teléfono Central Salón
                  </span>
                  <Phone className="w-4 h-4 text-black" />
                </div>
                <div>
                  <span className="text-base font-black text-black tabular-nums font-tech">
                    (011) 4790-8800
                  </span>
                  <span className="text-xs text-zinc-400 block mt-0.5">Líneas rotativas comerciales</span>
                </div>
              </a>
            </div>

            {/* Garantía y Compromiso */}
            <div className="p-6 rounded-2xl bg-zinc-100/70 flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-black shrink-0 mt-0.5" />
              <div className="text-xs text-zinc-600 leading-relaxed font-normal">
                <span className="font-bold text-black block mb-0.5">Atención Transparente y Garantizada</span>
                Todas las operaciones se realizan bajo contratos oficiales con verificación de dominio, libre deuda y peritaje mecánico previo certificado.
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA (5 cols): Formulario Concierge de Alta Gama */}
          <div className="lg:col-span-5">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/60 block mb-1 font-tech">
                Formulario Oficial
              </span>
              <h3 className="text-2xl font-black text-black mb-2 font-display">
                Coordinar Visita o Cotización
              </h3>
              <p className="text-xs text-zinc-500 mb-6 font-normal">
                Completá tus datos para que un asesor especializado te contacte de forma personalizada.
              </p>

              {/* Selector de Tipo de Consulta */}
              <div className="mb-5">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-2 font-tech">
                  Motivo de contacto
                </label>
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-zinc-100 rounded-xl text-[11px] font-bold font-tech">
                  {[
                    { id: 'compra', label: 'Compra / Cotizar' },
                    { id: 'test-drive', label: 'Test Drive' },
                    { id: 'permuta', label: 'Permuta' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setInquiryType(tab.id)}
                      className={`py-2 rounded-lg transition-all cursor-pointer ${
                        inquiryType === tab.id
                          ? 'bg-black text-white shadow-xs'
                          : 'text-zinc-600 hover:text-black'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs text-left">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1.5 font-tech">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Martín Benítez"
                    className="w-full px-4 py-3.5 bg-zinc-50 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-black transition font-normal"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1.5 font-tech">
                    Número de WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Ej. +54 9 11 1234-5678"
                    className="w-full px-4 py-3.5 bg-zinc-50 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-black transition font-normal font-tech"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1.5 font-tech">
                    Vehículo de Interés
                  </label>
                  <input
                    type="text"
                    value={formData.vehicle}
                    onChange={e => setFormData({ ...formData, vehicle: e.target.value })}
                    placeholder="Ej. Nuevo C4 Híbrido / Nueva Tucson / Ranger Raptor"
                    className="w-full px-4 py-3.5 bg-zinc-50 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-black transition font-normal"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-3 py-4 bg-black hover:bg-zinc-800 text-white rounded-xl font-bold uppercase tracking-wider text-xs transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar Consulta Directa</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>

      {/* 2. APARTADO INDIVIDUAL "SEGUINOS EN NUESTRAS REDES SOCIALES" (De lado a lado / Full Width) */}
      <div className="w-full bg-white border-y border-zinc-200/90 py-16 px-6 lg:px-10">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 block mb-1 font-tech">
              Comunidad Oficial
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight font-display">
              Seguinos en nuestras Redes Sociales
            </h3>
            <p className="text-xs text-zinc-500 mt-1">
              Novedades, entregas inmediatas, lanzamientos exclusivos y contenido audiovisual de cada unidad.
            </p>
          </div>

          {/* Fila de Iconos SVG Monocromáticos en Gris/Negro (De lado a lado y centrada) */}
          <div className="flex items-center gap-8 text-zinc-400">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-all transform hover:scale-115 cursor-pointer"
              title="Facebook"
            >
              <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
                <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5C12 6.57 13.18 5.5 14.92 5.5c.83 0 1.54.06 1.75.09v2.03h-1.2c-.94 0-1.12.45-1.12 1.1V11h2.25l-.3 3h-1.95v7H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-all transform hover:scale-115 cursor-pointer"
              title="Instagram"
            >
              <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-all transform hover:scale-115 cursor-pointer"
              title="X (Twitter)"
            >
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-all transform hover:scale-115 cursor-pointer"
              title="YouTube"
            >
              <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-all transform hover:scale-115 cursor-pointer"
              title="LinkedIn"
            >
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
