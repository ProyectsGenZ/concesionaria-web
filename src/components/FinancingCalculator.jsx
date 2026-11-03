import React, { useState } from 'react';
import { Calculator, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { EXCHANGE_RATE } from '../data/vehicles';

export default function FinancingCalculator({ initialPriceUSD = 50000, currency = 'USD' }) {
  const [vehicleValueUSD, setVehicleValueUSD] = useState(initialPriceUSD);
  const [downpaymentPct, setDownpaymentPct] = useState(40);
  const [termMonths, setTermMonths] = useState(24);

  // Conversión según moneda
  const multiplier = currency === 'ARS' ? EXCHANGE_RATE : 1;
  const currencySymbol = currency === 'ARS' ? '$ ' : 'USD ';

  const currentVehicleValue = vehicleValueUSD * multiplier;
  const downpayment = currentVehicleValue * (downpaymentPct / 100);
  const financed = currentVehicleValue - downpayment;

  // Tasa preferencial estimada fija ~8.5% anual
  const monthlyRate = 0.085 / 12;
  const monthlyPayment = financed * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -termMonths)));

  const handleRequestPlan = () => {
    const text = `Simulación de Financiación Web:
Valor de referencia: ${currencySymbol}${Math.round(currentVehicleValue).toLocaleString('es-AR')}
Anticipo propuesto (${downpaymentPct}%): ${currencySymbol}${Math.round(downpayment).toLocaleString('es-AR')}
Saldo a financiar: ${currencySymbol}${Math.round(financed).toLocaleString('es-AR')}
Plazo solicitado: ${termMonths} cuotas fijas de aprox. ${currencySymbol}${Math.round(monthlyPayment).toLocaleString('es-AR')}/mes.
Deseo conocer los requisitos y pre-calificación.`;

    window.open(`https://wa.me/5491155550199?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-sm text-left">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Columna Izquierda: Información y Ventajas */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 font-tech">
            <Calculator className="w-3.5 h-3.5 text-black" />
            <span>Planes Prendarios & UVAs</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black text-black tracking-tight leading-tight font-display">
            Financiación a tu Medida
          </h3>

          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
            Calculá al instante el anticipo y la cuota fija estimada para cualquier unidad del catálogo. Estructuramos planes a medida tanto para particulares como para empresas con entrega de usados en parte de pago.
          </p>

          <div className="space-y-3 pt-2 text-xs text-black font-semibold font-tech">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Pre-aprobación crediticia en menos de 24 horas</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Cancelación anticipada total o parcial sin penalización</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Aceptamos tu auto usado para cubrir el anticipo inicial</span>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Controles del Simulador */}
        <div className="lg:col-span-7 bg-zinc-50/70 p-6 sm:p-8 rounded-2xl space-y-7">
          
          {/* 1. Selector de Anticipo */}
          <div>
            <div className="flex justify-between items-baseline text-xs mb-2 font-tech">
              <span className="font-bold text-black uppercase tracking-wider">
                Anticipo Inicial ({downpaymentPct}%)
              </span>
              <span className="text-base font-black text-black tabular-nums">
                {currencySymbol}{Math.round(downpayment).toLocaleString('es-AR')}
              </span>
            </div>
            <input
              type="range"
              min="20"
              max="70"
              step="5"
              value={downpaymentPct}
              onChange={e => setDownpaymentPct(Number(e.target.value))}
              className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-black"
            />
            <div className="flex justify-between text-[10px] text-zinc-400 mt-1 font-tech">
              <span>Mínimo (20%)</span>
              <span>Recomendado (40%)</span>
              <span>Máximo (70%)</span>
            </div>
          </div>

          {/* 2. Selector de Plazo en Cuotas */}
          <div>
            <span className="block text-xs font-bold text-black uppercase tracking-wider mb-2 font-tech">
              Plazo de Financiación
            </span>
            <div className="grid grid-cols-4 gap-2">
              {[12, 24, 36, 48].map(m => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setTermMonths(m)}
                  className={`py-3 rounded-xl text-xs font-black transition-all cursor-pointer font-tech ${
                    termMonths === m
                      ? 'bg-black text-white shadow-xs'
                      : 'bg-white text-zinc-700 hover:bg-zinc-200'
                  }`}
                >
                  {m} Cuotas
                </button>
              ))}
            </div>
          </div>

          {/* 3. Resultado de la Cuota y CTA */}
          <div className="pt-6 border-t border-zinc-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 font-tech">
                Cuota Mensual Estimada
              </span>
              <span className="text-2xl sm:text-3xl font-black text-black font-tech tabular-nums">
                {currencySymbol}{Math.round(monthlyPayment).toLocaleString('es-AR')}
                <span className="text-xs font-medium text-zinc-500 font-normal"> / mes</span>
              </span>
              <span className="block text-[10px] text-zinc-400 font-tech mt-0.5">
                Saldo a financiar: {currencySymbol}{Math.round(financed).toLocaleString('es-AR')}
              </span>
            </div>

            <button
              onClick={handleRequestPlan}
              className="px-7 py-4 rounded-full bg-black hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:shadow-lg active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2 shrink-0 font-tech"
            >
              <span>Solicitar Plan a Medida</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
