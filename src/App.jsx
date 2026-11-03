import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import VehicleModal from './components/VehicleModal';
import FinancingCalculator from './components/FinancingCalculator';
import TradeInForm from './components/TradeInForm';
import TrustBadges from './components/TrustBadges';
import Footer from './components/Footer';
import { MessageCircle, X } from 'lucide-react';

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);
  const [whatsAppQuery, setWhatsAppQuery] = useState('');

  const handleOpenWhatsApp = (queryContext) => {
    setWhatsAppQuery(queryContext);
    setWhatsAppModalOpen(true);
  };

  const handleConfirmWhatsApp = () => {
    const text = `Hola Studio Motors, me comunico desde la web oficial. Consulta: ${whatsAppQuery}`;
    const url = `https://wa.me/5491123456789?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setWhatsAppModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] text-zinc-900 flex flex-col selection:bg-black selection:text-white">
      {/* Header */}
      <Header onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Main Content */}
      <main className="flex-1">
        <Hero onOpenWhatsApp={handleOpenWhatsApp} />
        <Catalog
          onSelectVehicle={setSelectedVehicle}
          onOpenWhatsApp={handleOpenWhatsApp}
        />
        <TrustBadges />
        <FinancingCalculator onOpenWhatsApp={handleOpenWhatsApp} />
        <TradeInForm onOpenWhatsApp={handleOpenWhatsApp} />
      </main>

      {/* Footer */}
      <Footer onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Vehicle Detailed Inspection Modal */}
      {selectedVehicle && (
        <VehicleModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
          onOpenWhatsApp={handleOpenWhatsApp}
        />
      )}

      {/* Floating WhatsApp Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => handleOpenWhatsApp('Consulta Rápida General')}
          className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 border border-zinc-700 hover:bg-zinc-800"
          title="Consultar por WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
        </button>
      </div>

      {/* Direct WhatsApp Confirmation Modal */}
      {whatsAppModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-zinc-200 max-w-md w-full p-6 space-y-4 text-left shadow-2xl rounded-xs">
            <div className="flex justify-between items-center border-b border-zinc-200 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-tech text-black uppercase tracking-wider font-bold">
                  CONCIERGE WHATSAPP DIRECTO
                </span>
              </div>
              <button
                onClick={() => setWhatsAppModalOpen(false)}
                className="text-zinc-400 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <p className="text-xs text-zinc-600 font-normal">
                Estás por iniciar una conversación directa con un asesor comercial respecto a:
              </p>
              <div className="mt-2.5 p-3.5 bg-zinc-50 border border-zinc-200 text-xs font-tech text-black font-semibold rounded-xs">
                {whatsAppQuery}
              </div>
              <p className="text-[11px] text-zinc-500 mt-2.5">
                Te responderemos al instante con la ficha técnica completa en PDF, historial peritado o turno para test drive.
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={handleConfirmWhatsApp}
                className="flex-1 py-3 bg-black text-white font-bold text-xs uppercase tracking-wider hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 rounded-xs shadow-xs"
              >
                <MessageCircle className="w-4 h-4" /> Continuar a WhatsApp
              </button>
              <button
                onClick={() => setWhatsAppModalOpen(false)}
                className="px-4 py-3 border border-zinc-300 text-zinc-700 text-xs uppercase hover:border-black rounded-xs"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
