import React, { useState } from 'react';
import { RefreshCw, ArrowUpRight, ShieldCheck, Car } from 'lucide-react';

export default function TradeInForm({ targetVehicle = '' }) {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    km: '',
    condition: 'Excelente'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.brand || !formData.model) return;

    const targetText = targetVehicle ? `para adquirir la unidad ${targetVehicle}` : 'para adquirir un vehículo del catálogo';
    const text = `Solicitud de Tasación de Usado en Parte de Pago:
Vehículo que entrego: ${formData.brand} ${formData.model} (${formData.year || 'Año no especificado'})
Kilometraje: ${formData.km || 'No especificado'} km
Estado general: ${formData.condition}
Destino: ${targetText}.
Deseo recibir una cotización aproximada y coordinar peritaje sin cargo.`;

    window.open(`https://wa.me/5491155550199?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-sm text-left">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Columna Izquierda: Información */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 font-tech">
            <RefreshCw className="w-3.5 h-3.5 text-black" />
            <span>Sistema Llave Contra Llave</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black text-black tracking-tight leading-tight font-display">
            Entregá tu Auto en Parte de Pago
          </h3>

          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
            Cotizamos tu unidad usada a valor de mercado transparente. Tomamos tu vehículo el mismo día que retirás tu nueva unidad para que no te quedes sin movilidad durante la transferencia.
          </p>

          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/60 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-black shrink-0 mt-0.5" />
            <p className="text-xs text-zinc-600 leading-relaxed">
              <strong className="text-black block mb-0.5 font-bold">Peritaje Mecánico y Notarial Gratuito</strong>
              Revisamos la documentación, historial de patentes e inspección física sin ningún tipo de compromiso.
            </p>
          </div>
        </div>

        {/* Columna Derecha: Formulario Rápido de 4 Campos */}
        <div className="lg:col-span-7 bg-zinc-50/70 p-6 sm:p-8 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1.5 font-tech">
                  Marca de tu Vehículo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Ford, Volkswagen, Toyota, BMW..."
                  value={formData.brand}
                  onChange={e => setFormData({ ...formData, brand: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition font-normal"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1.5 font-tech">
                  Modelo y Versión *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Focus 2.0 Titanium / Amarok V6..."
                  value={formData.model}
                  onChange={e => setFormData({ ...formData, model: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition font-normal"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1.5 font-tech">
                  Año de Fabricación
                </label>
                <input
                  type="text"
                  placeholder="Ej. 2021"
                  value={formData.year}
                  onChange={e => setFormData({ ...formData, year: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition font-normal font-tech"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1.5 font-tech">
                  Kilometraje Actual
                </label>
                <input
                  type="text"
                  placeholder="Ej. 45.000 km"
                  value={formData.km}
                  onChange={e => setFormData({ ...formData, km: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition font-normal font-tech"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1.5 font-tech">
                  Estado General
                </label>
                <select
                  value={formData.condition}
                  onChange={e => setFormData({ ...formData, condition: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition font-bold"
                >
                  <option value="Impecable">Impecable / Sin detalles</option>
                  <option value="Muy Bueno">Muy bueno (uso normal)</option>
                  <option value="Bueno">Bueno con detalles menores</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-4 bg-black hover:bg-zinc-800 text-white rounded-xl font-bold uppercase tracking-wider text-xs transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2 font-tech"
            >
              <span>Recibir Pre-Tasación en WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
