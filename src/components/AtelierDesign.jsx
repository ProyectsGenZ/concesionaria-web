import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Phone, Mail, Award, Volume2 } from 'lucide-react';
import { VEHICLES } from '../data/vehicles';

export default function AtelierDesign({ onOpenWhatsApp }) {
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [playingAudioId, setPlayingAudioId] = useState(null);

  const atelierVehicles = VEHICLES.slice(0, 6);

  const handlePlaySound = (id, e) => {
    e.stopPropagation();
    setPlayingAudioId(prev => (prev === id ? null : id));
  };

  return (
    <div className="bg-[#FAF8F5] text-[#1C1917] min-h-screen selection:bg-[#C5A880] selection:text-white">
      
      {/* Top Banner de Cortesía */}
      <div className="border-b border-[#E7E2D9] bg-[#F4F0E8] text-[11px] py-2.5 px-6 flex justify-between items-center text-[#78716C] tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
          <span>Salon Privé & Curatoría Automotriz — Acceso Exclusivo con Reserva</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>Acassuso · Buenos Aires</span>
          <span>Concierge: +54 9 11 5555-0199</span>
        </div>
      </div>

      {/* Header Editorial */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E7E2D9]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-[#C5A880] flex items-center justify-center font-serif text-xl italic font-bold text-[#1C1917]">
              A
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif text-xl font-bold tracking-tight text-[#1C1917]">
                ATELIER AUTOMOBILE
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#A8A29E] mt-0.5">
                Manufactura & Selección Notariada
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-12 text-xs uppercase tracking-widest text-[#78716C] font-medium">
            <a href="#pasarela" className="hover:text-[#1C1917] transition">La Colección</a>
            <a href="#artesania" className="hover:text-[#1C1917] transition">Artesanía & Certificación</a>
            <a href="#audiencia" className="hover:text-[#1C1917] transition">El Salón</a>
          </nav>

          <button
            onClick={() => onOpenWhatsApp('Solicitud de Audiencia Privada')}
            className="px-6 py-3 border border-[#1C1917] hover:bg-[#1C1917] hover:text-white text-xs uppercase tracking-widest font-semibold transition-all duration-300"
          >
            Solicitar Audiencia
          </button>
        </div>
      </header>

      {/* HERO SECTION: PORTADA DE REVISTA EDITORIAL ASIMÉTRICA */}
      <section className="relative pt-16 pb-28 px-8 lg:px-16 max-w-[1440px] mx-auto border-b border-[#E7E2D9]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 border-b border-[#C5A880] pb-1 text-xs tracking-widest uppercase text-[#78716C]">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              Edición Limitada · Invierno 2026
            </div>

            <h1 className="font-serif text-5xl sm:text-7xl font-normal leading-[1.05] tracking-tight text-[#1C1917]">
              Esculturas en <span className="italic font-light">movimiento.</span>
            </h1>

            <p className="text-[#57534E] text-base leading-relaxed font-light max-w-lg">
              Una curatoría de vehículos que trascienden el transporte para convertirse en testimonios de alta ingeniería, materiales nobles y preservación histórica.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <a
                href="#pasarela"
                className="px-8 py-4 bg-[#1C1917] text-white hover:bg-[#C5A880] text-xs uppercase tracking-widest font-semibold transition-colors inline-flex items-center gap-3 shadow-md"
              >
                <span>Descubrir la Galería</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="text-xs text-[#78716C] italic font-serif">
                Piezas con peritaje individualizado ante escribano público.
              </div>
            </div>
          </div>

          {/* Hero Feature Visual: Auto Flotante con Iluminación Cálida */}
          <div className="lg:col-span-6 relative">
            <div className="relative bg-white border border-[#E7E2D9] p-4 shadow-[0_20px_50px_rgba(28,25,23,0.06)]">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F2EB]">
                <img
                  src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85"
                  alt="Porsche Macan T"
                  className="w-full h-full object-cover object-center brightness-95 contrast-105"
                />
                <div className="absolute top-4 left-4 bg-[#1C1917] text-[#FAF8F5] px-3.5 py-1 text-[10px] uppercase tracking-widest font-serif">
                  PIÈCE N° 01/10
                </div>
              </div>

              <div className="p-6 bg-white flex justify-between items-baseline border-t border-[#F5F2EB]">
                <div className="text-left">
                  <span className="text-[10px] uppercase tracking-widest text-[#A8A29E] block">Curatoría Destacada</span>
                  <h3 className="font-serif text-2xl font-bold text-[#1C1917]">Porsche Macan T Touring</h3>
                </div>
                <div className="text-right">
                  <span className="font-serif text-xl font-bold text-[#C5A880]">USD 118.000</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECCIÓN 2: PASARELA EDITORIAL (RUNWAY CARDS HORIZONTALES) */}
      <section id="pasarela" className="py-24 max-w-[1440px] mx-auto px-8 lg:px-16">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-2">
            La Colección
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1917] font-normal leading-tight">
            Pasarela de Ejemplares Disponibles
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-4"></div>
        </div>

        {/* Horizontal Cards Runway */}
        <div className="space-y-12">
          {atelierVehicles.map((car, idx) => (
            <article
              key={car.id}
              onClick={() => setSelectedPiece(car)}
              className="group bg-white border border-[#E7E2D9] hover:border-[#C5A880] transition-all duration-500 p-8 sm:p-10 shadow-[0_10px_35px_rgba(28,25,23,0.03)] cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left">
                
                {/* Photo 16:10 */}
                <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden bg-[#F5F2EB]">
                  <img
                    src={car.photos[0]}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 text-[10px] uppercase tracking-widest text-[#1C1917] font-serif shadow-xs">
                    {car.badge}
                  </div>
                </div>

                {/* Editorial Content */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="flex items-center justify-between border-b border-[#F5F2EB] pb-3">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-[#A8A29E]">
                      {car.brand} · Año {car.year}
                    </span>
                    <span className="text-xs font-serif text-[#C5A880] italic">
                      Ref. {car.id}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-normal leading-tight group-hover:text-[#C5A880] transition-colors">
                    {car.model}
                  </h3>

                  <p className="text-sm text-[#57534E] leading-relaxed font-light">
                    {car.description}
                  </p>

                  {/* Highlights Bar */}
                  <div className="grid grid-cols-3 gap-4 py-3 border-y border-[#F5F2EB] text-xs">
                    <div>
                      <span className="block text-[10px] uppercase text-[#A8A29E] tracking-wider">Potencia</span>
                      <span className="font-serif text-base font-bold text-[#1C1917]">{car.power}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-[#A8A29E] tracking-wider">Recorrido</span>
                      <span className="font-serif text-base font-bold text-[#1C1917]">{car.km === 0 ? '0 km' : `${car.km.toLocaleString('es-AR')} km`}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-[#A8A29E] tracking-wider">Propulsión</span>
                      <span className="font-serif text-base font-bold text-[#1C1917]">{car.fuel}</span>
                    </div>
                  </div>

                  {/* Price & Acoustic Note */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-[#A8A29E]">Valor de Adquisición</span>
                      <span className="font-serif text-3xl font-bold text-[#1C1917]">
                        USD {car.priceUSD.toLocaleString('es-AR')}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => handlePlaySound(car.id, e)}
                        className={`p-3 rounded-full border transition cursor-pointer ${
                          playingAudioId === car.id
                            ? 'bg-[#C5A880] text-white border-[#C5A880]'
                            : 'border-[#E7E2D9] text-[#78716C] hover:border-[#1C1917]'
                        }`}
                        title="Simular nota acústica de escape"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenWhatsApp(`Audiencia Privada para: ${car.brand} ${car.model}`);
                        }}
                        className="px-6 py-3 bg-[#1C1917] hover:bg-[#C5A880] text-white text-xs uppercase tracking-widest font-semibold transition-colors"
                      >
                        Solicitar Audiencia
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </article>
          ))}
        </div>

      </section>

      {/* SECCIÓN 3: EL MANIFIESTO Y AUDITORÍA NOTARIAL */}
      <section id="artesania" className="py-24 bg-[#F4F0E8] border-t border-b border-[#E7E2D9]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
                Garantía Inmutable
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#1C1917] font-normal leading-tight">
                El protocolo de certificación notariada.
              </h2>
              <p className="text-sm text-[#57534E] leading-relaxed font-light">
                Cada unidad comercializada por ATELIER es sometida a una doble verificación: peritaje mecánico de compresión e integridad estructural, y una auditoría documental completa protocolizada ante escribano público con folio de seguridad.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-[#FAF8F5] p-8 border border-[#E7E2D9] space-y-3">
                <Award className="w-6 h-6 text-[#C5A880]" />
                <h4 className="font-serif text-lg font-bold text-[#1C1917]">Certificado de Origen</h4>
                <p className="text-xs text-[#78716C] leading-relaxed font-light">
                  Trazabilidad integral de dueños anteriores, historial de mantenimiento oficial y lectura computarizada de kilometraje real.
                </p>
              </div>

              <div className="bg-[#FAF8F5] p-8 border border-[#E7E2D9] space-y-3">
                <ShieldCheck className="w-6 h-6 text-[#C5A880]" />
                <h4 className="font-serif text-lg font-bold text-[#1C1917]">Cobertura Integral 24 Meses</h4>
                <p className="text-xs text-[#78716C] leading-relaxed font-light">
                  Garantía mecánica escrita sobre motor, transmisión y componentes electrónicos de gestión con asistencia privada exclusiva.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MODAL DETALLE DE PIEZA */}
      {selectedPiece && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-6 overflow-y-auto">
          <div className="bg-[#FAF8F5] border border-[#C5A880] max-w-3xl w-full p-8 sm:p-12 text-left space-y-6 shadow-2xl relative">
            <button
              onClick={() => setSelectedPiece(null)}
              className="absolute top-6 right-6 font-serif text-2xl text-[#78716C] hover:text-[#1C1917]"
            >
              ✕
            </button>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-serif block mb-1">
                {selectedPiece.brand} · Ficha de Preservación
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
                {selectedPiece.model}
              </h3>
            </div>

            <div className="aspect-[16/10] bg-[#F5F2EB] overflow-hidden border border-[#E7E2D9]">
              <img src={selectedPiece.photos[0]} alt={selectedPiece.model} className="w-full h-full object-cover" />
            </div>

            <p className="text-sm text-[#57534E] leading-relaxed font-light">
              {selectedPiece.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#F4F0E8] border border-[#E7E2D9] text-xs font-serif">
              <div>
                <span className="text-[#A8A29E] block">Potencia</span>
                <span className="font-bold text-[#1C1917]">{selectedPiece.power}</span>
              </div>
              <div>
                <span className="text-[#A8A29E] block">Motor</span>
                <span className="font-bold text-[#1C1917]">{selectedPiece.engine}</span>
              </div>
              <div>
                <span className="text-[#A8A29E] block">Kilometraje</span>
                <span className="font-bold text-[#1C1917]">{selectedPiece.km} km</span>
              </div>
              <div>
                <span className="text-[#A8A29E] block">Pintura</span>
                <span className="font-bold text-[#1C1917]">{selectedPiece.paint}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E7E2D9] flex justify-between items-center">
              <div>
                <span className="text-xs text-[#A8A29E] block">Valor de Adquisición</span>
                <span className="font-serif text-2xl font-bold text-[#1C1917]">USD {selectedPiece.priceUSD.toLocaleString('es-AR')}</span>
              </div>
              <button
                onClick={() => {
                  const unit = `${selectedPiece.brand} ${selectedPiece.model}`;
                  setSelectedPiece(null);
                  onOpenWhatsApp(`Audiencia Privada para la pieza: ${unit}`);
                }}
                className="px-8 py-3.5 bg-[#1C1917] text-white hover:bg-[#C5A880] text-xs uppercase tracking-widest font-semibold transition-colors"
              >
                Solicitar Audiencia Privada
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER ATELIER */}
      <footer id="audiencia" className="bg-[#1C1917] text-[#FAF8F5] py-20 px-8 lg:px-16 text-left">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-[#292524]">
          <div>
            <span className="font-serif text-2xl font-bold tracking-tight block">ATELIER AUTOMOBILE</span>
            <span className="text-xs text-[#A8A29E] tracking-widest uppercase mt-1 block">Curatoría & Escribanía Automotriz S.A.</span>
          </div>
          <div className="text-xs text-[#A8A29E] font-light space-y-1">
            <p>Salón Privé: Av. del Libertador 14200, Acassuso, Buenos Aires</p>
            <p>Atención únicamente con cita previa confirmada por Concierge.</p>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto pt-8 text-[11px] text-[#78716C] flex justify-between">
          <span>© 2026 ATELIER Automobile. Todos los derechos reservados.</span>
          <span>Protocolo Notarial Folio 104/A</span>
        </div>
      </footer>

    </div>
  );
}

