import React, { useState } from 'react';
import { RefreshCw, ArrowRight, ShieldAlert } from 'lucide-react';

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
    <section id="tasacion" className="py-20 bg-black border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border border-zinc-800 bg-zinc-950 p-8 sm:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Info */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 border border-zinc-800 px-3 py-1 text-[11px] font-tech text-zinc-400 uppercase tracking-widest bg-zinc-900/40">
                <RefreshCw className="w-3.5 h-3.5 text-white" />
                PERMUTAS & TOMA DE USADOS
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase leading-tight">
                ENTREGÁ TU VEHÍCULO LLAVE CONTRA LLAVE.
              </h2>

              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Tasamos tu vehículo con la cotización de mercado más transparente y justa. Gestión integral de transferencia y peritaje mecánico en el acto sin que te quedes a pie ni un solo día.
              </p>

              <div className="pt-2 text-xs text-zinc-500 font-tech">
                Aceptamos vehículos nacionales e importados de todas las marcas con documentación al día.
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 bg-zinc-900 border border-zinc-800 p-6 sm:p-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-tech text-zinc-400 uppercase mb-1.5">
                    Marca del Vehículo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. BMW, Porsche, Audi, Mercedes..."
                    value={formData.brand}
                    onChange={e => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 px-3.5 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-tech text-zinc-400 uppercase mb-1.5">
                    Modelo y Versión *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. M2 Coupe, Macan S, A4 2.0T..."
                    value={formData.model}
                    onChange={e => setFormData({ ...formData, model: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 px-3.5 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-tech text-zinc-400 uppercase mb-1.5">
                    Año de Fabricación
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. 2021"
                    value={formData.year}
                    onChange={e => setFormData({ ...formData, year: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 px-3.5 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-tech text-zinc-400 uppercase mb-1.5">
                    Kilometraje Aproximado
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. 35.000 km"
                    value={formData.km}
                    onChange={e => setFormData({ ...formData, km: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 px-3.5 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-tech text-zinc-400 uppercase mb-1.5">
                    Estado General
                  </label>
                  <select
                    value={formData.condition}
                    onChange={e => setFormData({ ...formData, condition: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 px-3 py-3 text-xs text-white focus:outline-none focus:border-white"
                  >
                    <option value="Excelente / Como nuevo">Excelente / Como nuevo</option>
                    <option value="Muy Bueno con detalles leves">Muy Bueno</option>
                    <option value="Bueno a revisar">Bueno a revisar</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                >
                  Solicitar Tasación Inmediata por WhatsApp <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
