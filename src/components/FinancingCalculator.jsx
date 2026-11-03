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
    <section id="financiacion" className="py-20 bg-zinc-950 border-t border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Explanation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 border border-zinc-800 px-3.5 py-1 text-[11px] font-tech text-zinc-400 uppercase tracking-widest bg-zinc-900/60">
              <Calculator className="w-3.5 h-3.5 text-white" />
              SIMULADOR PRIVADO DE CRÉDITO
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase leading-tight">
              ESTRUCTURA FINANCIERA A MEDIDA.
            </h2>

            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              Diseñamos esquemas de financiación prendaria y leasing corporativo adaptados a tu flujo patrimonial. Tasa fija en dólares o esquemas estructurados con valor residual.
            </p>

            <div className="pt-4 border-t border-zinc-800/80 space-y-3 text-xs text-zinc-300 font-tech">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pre-aprobación crediticia en menos de 24 horas</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Posibilidad de cancelación anticipada sin penalidad</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tomamos tu vehículo actual como anticipo inicial</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Simulator Box */}
          <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800 p-8 sm:p-10 space-y-8 shadow-2xl">
            
            {/* Slider 1: Vehicle Price */}
            <div>
              <div className="flex justify-between items-baseline text-xs font-tech mb-3">
                <span className="text-zinc-400 uppercase tracking-wider">
                  Valor Estimado del Vehículo (USD)
                </span>
                <span className="text-xl font-bold text-white font-tech">
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
                className="w-full custom-range bg-zinc-800 h-2 appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-tech text-zinc-600 mt-1">
                <span>USD 40.000</span>
                <span>USD 350.000</span>
              </div>
            </div>

            {/* Slider 2: Down Payment % */}
            <div>
              <div className="flex justify-between items-baseline text-xs font-tech mb-3">
                <span className="text-zinc-400 uppercase tracking-wider">
                  Anticipo Inicial ({downpaymentPct}%)
                </span>
                <span className="text-lg font-bold text-white font-tech">
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
                className="w-full custom-range bg-zinc-800 h-2 appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-tech text-zinc-600 mt-1">
                <span>20% (Mínimo)</span>
                <span>70% (Máximo)</span>
              </div>
            </div>

            {/* Months Selector */}
            <div>
              <span className="block text-xs font-tech text-zinc-400 uppercase tracking-wider mb-3">
                Plazo de Financiación
              </span>
              <div className="grid grid-cols-4 gap-2.5">
                {[12, 24, 36, 48].map(m => (
                  <button
                    key={m}
                    onClick={() => setTermMonths(m)}
                    className={`py-3 text-xs font-tech uppercase font-bold transition-all ${
                      termMonths === m
                        ? 'bg-white text-black border border-white'
                        : 'border border-zinc-800 text-zinc-400 hover:border-zinc-600 bg-zinc-950'
                    }`}
                  >
                    {m} MESES
                  </button>
                ))}
              </div>
            </div>

            {/* Result Box */}
            <div className="bg-black border border-zinc-800 p-6 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div>
                <span className="text-[10px] uppercase font-tech text-zinc-500 tracking-widest block">
                  Cuota Mensual Estimada
                </span>
                <div className="text-3xl font-black text-white font-tech mt-0.5">
                  USD {Math.round(monthlyPayment).toLocaleString()}{' '}
                  <span className="text-xs font-normal text-zinc-500">/ mes</span>
                </div>
                <div className="text-[11px] text-zinc-500 font-tech mt-1">
                  Saldo neto a financiar: <span className="text-zinc-300">USD {Math.round(financed).toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleRequestProposal}
                className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-zinc-200 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shrink-0"
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
