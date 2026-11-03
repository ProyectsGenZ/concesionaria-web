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
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col selection:bg-white selection:text-black">
      {/* Header */}
      <Header onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Main Content */}
      <main className="flex-1">
        <Hero
          onOpenWhatsApp={handleOpenWhatsApp}
        />
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

      {/* Vehicle Inspection Modal */}
      {selectedVehicle && (
        <VehicleModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
          onOpenWhatsApp={handleOpenWhatsApp}
        />
      )}

      {/* Floating Quick WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => handleOpenWhatsApp('Consulta Rápida General')}
          className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-zinc-300"
          title="Consultar por WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-current" />
        </button>
      </div>

      {/* Direct WhatsApp Confirmation Modal */}
      {whatsAppModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-950 border border-zinc-700 max-w-md w-full p-6 space-y-4 text-left shadow-2xl">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-tech text-white uppercase tracking-wider">
                  CONCIERGE WHATSAPP DIRECTO
                </span>
              </div>
              <button
                onClick={() => setWhatsAppModalOpen(false)}
                className="text-zinc-500 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <p className="text-xs text-zinc-300 font-light">
                Vas a iniciar una conversación con nuestro equipo comercial respecto a:
              </p>
              <div className="mt-2 p-3 bg-zinc-900 border border-zinc-800 text-xs font-tech text-white">
                {whatsAppQuery}
              </div>
              <p className="text-[11px] text-zinc-500 mt-2">
                Un asesor privado te enviará la ficha técnica completa en PDF, disponibilidad de turno para test drive o tasación.
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={handleConfirmWhatsApp}
                className="flex-1 py-3 bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> Continuar a WhatsApp
              </button>
              <button
                onClick={() => setWhatsAppModalOpen(false)}
                className="px-4 py-3 border border-zinc-800 text-zinc-400 text-xs uppercase hover:text-white hover:border-zinc-600"
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
