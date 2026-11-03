import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FinancingCalculator({ onOpenWhatsApp }) {
  const [vehicleValue, setVehicleValue] = useState(120000);
  const [downpaymentPct, setDownpaymentPct] = useState(40);
  const [termMonths, setTermMonths] = useState(24);

  const downpayment = vehicleValue * (downpaymentPct / 100);
  const financed = vehicleValue - downpayment;

  // Approx interest rate ~8.5% annual
  const monthlyRate = 0.085 / 12;
  const monthlyPayment =
    financed * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -termMonths)));

  const handleRequestProposal = () => {
    onOpenWhatsApp(
      `Plan Financiación Simulado: Valor USD ${vehicleValue.toLocaleString()}, Anticipo ${downpaymentPct}% (USD ${Math.round(downpayment).toLocaleString()}), Plazo ${termMonths} meses, Cuota aprox USD ${Math.round(monthlyPayment).toLocaleString()}/mes`
    );
  };

  return (
    <section id="financiacion" className="py-20 bg-zinc-50/70 border-t border-b border-zinc-200 subtle-fade-lines">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Explanation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 border border-zinc-300 px-3.5 py-1 text-[11px] font-tech text-zinc-600 uppercase tracking-widest bg-white shadow-xs rounded-xs">
              <Calculator className="w-3.5 h-3.5 text-black" />
              SIMULADOR DE FINANCIACIÓN PRIVADA
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight uppercase leading-tight font-display">
              PLAN DE PAGO A TU MEDIDA.
            </h2>

            <p className="text-sm text-zinc-600 leading-relaxed font-normal">
              Estructuramos planes prendarios con tasa preferencial fija en dólares o esquemas con valor residual adaptados a particulares y empresas.
            </p>

            <div className="pt-4 border-t border-zinc-200 space-y-3 text-xs text-zinc-700 font-tech">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pre-calificación crediticia en menos de 24 horas</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Cancelación anticipada total o parcial sin penalidad</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Aceptamos tu vehículo usado como parte del anticipo</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Simulator Box */}
          <div className="lg:col-span-7 bg-white border border-zinc-200 p-8 sm:p-10 space-y-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] rounded-xs">
            
            {/* Slider 1: Vehicle Price */}
            <div>
              <div className="flex justify-between items-baseline text-xs font-tech mb-3">
                <span className="text-zinc-600 uppercase tracking-wider font-semibold">
                  Valor del Vehículo (USD)
                </span>
                <span className="text-xl font-bold text-black font-tech">
                  USD {vehicleValue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="40000"
                max="350000"
                step="5000"
                value={vehicleValue}
                onChange={e => setVehicleValue(Number(e.target.value))}
                className="w-full custom-range bg-zinc-200 h-2 appearance-none cursor-pointer rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-tech text-zinc-400 mt-1">
                <span>USD 40.000</span>
                <span>USD 350.000</span>
              </div>
            </div>

            {/* Slider 2: Down Payment % */}
            <div>
              <div className="flex justify-between items-baseline text-xs font-tech mb-3">
                <span className="text-zinc-600 uppercase tracking-wider font-semibold">
                  Anticipo Inicial ({downpaymentPct}%)
                </span>
                <span className="text-lg font-bold text-black font-tech">
                  USD {Math.round(downpayment).toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="70"
                step="5"
                value={downpaymentPct}
                onChange={e => setDownpaymentPct(Number(e.target.value))}
                className="w-full custom-range bg-zinc-200 h-2 appearance-none cursor-pointer rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-tech text-zinc-400 mt-1">
                <span>20% (Mínimo)</span>
                <span>70% (Máximo)</span>
              </div>
            </div>

            {/* Months Selector */}
            <div>
              <span className="block text-xs font-tech text-zinc-600 uppercase tracking-wider mb-3 font-semibold">
                Plazo en Cuotas Mensuales
              </span>
              <div className="grid grid-cols-4 gap-2.5">
                {[12, 24, 36, 48].map(m => (
                  <button
                    key={m}
                    onClick={() => setTermMonths(m)}
                    className={`py-3 text-xs font-tech uppercase font-bold transition-all rounded-xs ${
                      termMonths === m
                        ? 'bg-black text-white shadow-xs'
                        : 'border border-zinc-200 text-zinc-600 hover:border-black bg-white'
                    }`}
                  >
                    {m} MESES
                  </button>
                ))}
              </div>
            </div>

            {/* Result Box */}
            <div className="bg-zinc-900 text-white p-6 sm:p-7 flex flex-col sm:flex-row justify-between items-center gap-6 rounded-xs">
              <div>
                <span className="text-[10px] uppercase font-tech text-zinc-400 tracking-widest block">
                  Cuota Mensual Estimada
                </span>
                <div className="text-3xl font-black text-white font-tech mt-0.5">
                  USD {Math.round(monthlyPayment).toLocaleString()}{' '}
                  <span className="text-xs font-normal text-zinc-400">/ mes</span>
                </div>
                <div className="text-[11px] text-zinc-400 font-tech mt-1">
                  Saldo a financiar: <span className="text-white font-medium">USD {Math.round(financed).toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleRequestProposal}
                className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-zinc-200 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shrink-0 rounded-xs"
              >
                Solicitar Propuesta <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
