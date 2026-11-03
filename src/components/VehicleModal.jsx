import React, { useState } from 'react';
import { X, MessageCircle, ShieldCheck, Zap, Gauge, Check, Calendar, MapPin } from 'lucide-react';

export default function VehicleModal({ vehicle, onClose, onOpenWhatsApp }) {
  if (!vehicle) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative bg-zinc-950 border border-zinc-800 max-w-4xl w-full my-8 text-left shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/80 border border-zinc-700 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 border-b border-zinc-800">
          <div className="flex flex-wrap items-center gap-3 mb-1 text-xs font-tech text-zinc-400">
            <span className="uppercase text-white font-bold">{vehicle.brand}</span>
            <span>•</span>
            <span>{vehicle.bodyType}</span>
            <span>•</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> 180 Puntos Auditados
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
            {vehicle.model}
          </h2>
        </div>

        {/* Main Gallery Display */}
        <div className="relative aspect-[16/9] bg-zinc-900 border-b border-zinc-800">
          <img
            src={vehicle.images[activeImageIndex]}
            alt={vehicle.model}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1 text-xs font-tech text-white border border-zinc-700">
            Color Oficial: {vehicle.color}
          </div>
        </div>

        {/* Thumbnails Row if multiple images */}
        {vehicle.images.length > 1 && (
          <div className="p-4 bg-zinc-900/60 border-b border-zinc-800 flex gap-3 overflow-x-auto">
            {vehicle.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-24 h-16 border overflow-hidden shrink-0 transition-all ${
                  activeImageIndex === idx ? 'border-white ring-1 ring-white' : 'border-zinc-800 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="Miniatura" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Specifications & Equipment Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Key Quick Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-zinc-900 border border-zinc-800 font-tech text-center">
            <div>
              <div className="text-xs text-zinc-500 uppercase">Potencia</div>
              <div className="text-lg font-bold text-white mt-1">{vehicle.power}</div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 uppercase">0-100 KM/H</div>
              <div className="text-lg font-bold text-white mt-1">{vehicle.acceleration}</div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 uppercase">Vel. Máxima</div>
              <div className="text-lg font-bold text-white mt-1">{vehicle.topSpeed}</div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 uppercase">Kilometraje</div>
              <div className="text-lg font-bold text-white mt-1">{vehicle.mileage}</div>
            </div>
          </div>

          {/* Full Technical Specs Grid */}
          <div>
            <h4 className="text-xs font-tech uppercase tracking-widest text-zinc-400 mb-3 pb-1 border-b border-zinc-800">
              FICHA TÉCNICA Y TREN MOTRIZ
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-8 text-xs font-tech">
              <div className="flex justify-between py-1.5 border-b border-zinc-900">
                <span className="text-zinc-500">Motorización:</span>
                <span className="text-white font-medium text-right">{vehicle.engine}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-zinc-900">
                <span className="text-zinc-500">Par Motor (Torque):</span>
                <span className="text-white font-medium">{vehicle.torque}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-zinc-900">
                <span className="text-zinc-500">Transmisión:</span>
                <span className="text-white font-medium text-right">{vehicle.transmission}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-zinc-900">
                <span className="text-zinc-500">Tracción:</span>
                <span className="text-white font-medium text-right">{vehicle.drivetrain}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-zinc-900">
                <span className="text-zinc-500">Combustible:</span>
                <span className="text-white font-medium">{vehicle.fuel}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-zinc-900">
                <span className="text-zinc-500">Tapizado Interior:</span>
                <span className="text-white font-medium text-right">{vehicle.interiorColor}</span>
              </div>
            </div>
          </div>

          {/* Premium Equipment */}
          <div>
            <h4 className="text-xs font-tech uppercase tracking-widest text-zinc-400 mb-3 pb-1 border-b border-zinc-800">
              EQUIPAMIENTO DESTACADO DE SERIE & OPCIONALES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {vehicle.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Audit & Legal Guarantee */}
          <div className="p-4 bg-zinc-900/60 border border-zinc-800 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <p className="text-xs text-zinc-400">
              <strong className="text-white">Certificación y Garantía:</strong> {vehicle.certification}
            </p>
          </div>

          {/* Pricing & Reservation Footer */}
          <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <span className="text-[10px] font-tech text-zinc-500 uppercase block">
                Precio de Venta Contado
              </span>
              <div className="text-3xl font-black text-white font-tech">
                USD {vehicle.priceUsd.toLocaleString()}
              </div>
              <span className="text-xs text-zinc-400 font-tech">
                Financiación estimada: USD {vehicle.monthlyUsd.toLocaleString()} / mes
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onOpenWhatsApp(`Reserva / Visita para: ${vehicle.brand} ${vehicle.model} (USD ${vehicle.priceUsd.toLocaleString()})`);
                }}
                className="px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> Solicitar Visita / Cotización
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
