import React, { useState } from 'react';
import { RefreshCw, ArrowRight, ShieldCheck } from 'lucide-react';

export default function TradeInForm({ onOpenWhatsApp }) {
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
    const msg = `Tasación de Usado: ${formData.brand} ${formData.model} (${formData.year}), ${formData.km} km, Estado: ${formData.condition}. Deseo recibir cotización formal.`;
    onOpenWhatsApp(msg);
  };

  return (
    <section id="tasacion" className="py-20 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border border-zinc-200 bg-[#fbfbfd] p-8 sm:p-14 rounded-xs shadow-[0_4px_25px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Info */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 border border-zinc-300 px-3 py-1 text-[11px] font-tech text-zinc-600 uppercase tracking-widest bg-white rounded-xs shadow-2xs">
                <RefreshCw className="w-3.5 h-3.5 text-black" />
                TASACIÓN Y PERMUTAS
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight uppercase leading-tight font-display">
                ENTREGÁ TU VEHÍCULO COMO PARTE DE PAGO.
              </h2>

              <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                Tasamos tu auto con valores reales de mercado. Tomamos tu unidad llave contra llave para que no te quedes sin movilidad durante el proceso de transferencia.
              </p>

              <div className="pt-2 text-xs text-zinc-500 font-tech flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Peritaje mecánico y legal sin costo ni compromiso.</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 bg-white border border-zinc-200 p-6 sm:p-8 space-y-4 rounded-xs shadow-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-tech text-zinc-600 uppercase mb-1.5 font-semibold">
                    Marca del Vehículo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. BMW, Porsche, Audi, Ford, VW..."
                    value={formData.brand}
                    onChange={e => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full bg-white border border-zinc-300 px-3.5 py-3 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-black rounded-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-tech text-zinc-600 uppercase mb-1.5 font-semibold">
                    Modelo y Versión *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Macan 2.0T, M240i, Amarok V6..."
                    value={formData.model}
                    onChange={e => setFormData({ ...formData, model: e.target.value })}
                    className="w-full bg-white border border-zinc-300 px-3.5 py-3 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-black rounded-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-tech text-zinc-600 uppercase mb-1.5 font-semibold">
                    Año de Fabricación
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. 2022"
                    value={formData.year}
                    onChange={e => setFormData({ ...formData, year: e.target.value })}
                    className="w-full bg-white border border-zinc-300 px-3.5 py-3 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-black rounded-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-tech text-zinc-600 uppercase mb-1.5 font-semibold">
                    Kilometraje
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. 42.000 km"
                    value={formData.km}
                    onChange={e => setFormData({ ...formData, km: e.target.value })}
                    className="w-full bg-white border border-zinc-300 px-3.5 py-3 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-black rounded-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-tech text-zinc-600 uppercase mb-1.5 font-semibold">
                    Estado General
                  </label>
                  <select
                    value={formData.condition}
                    onChange={e => setFormData({ ...formData, condition: e.target.value })}
                    className="w-full bg-white border border-zinc-300 px-3 py-3 text-xs text-zinc-800 focus:outline-none focus:border-black rounded-xs"
                  >
                    <option value="Excelente / Inmaculado">Excelente / Inmaculado</option>
                    <option value="Muy Bueno">Muy Bueno</option>
                    <option value="Bueno a revisar">Bueno a revisar</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-black hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 rounded-xs shadow-xs"
                >
                  Solicitar Cotización Inmediata por WhatsApp <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
