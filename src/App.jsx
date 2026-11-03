import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import SilhouetteBar from './components/SilhouetteBar';
import FeaturedHome from './components/FeaturedHome';
import TrustBadges from './components/TrustBadges';
import FinancingCalculator from './components/FinancingCalculator';
import TradeInForm from './components/TradeInForm';
import CatalogView from './components/CatalogView';
import VehicleDetailView from './components/VehicleDetailView';
import ShowroomContact from './components/ShowroomContact';
import Lightbox from './components/Lightbox';
import Footer from './components/Footer';
import { Calculator, RefreshCw } from 'lucide-react';
import { VEHICLES } from './data/vehicles';

export default function App() {
  // Navigation & View State
  const [view, setView] = useState('home'); // 'home' | 'catalog' | 'detail'
  const [currency, setCurrency] = useState('USD'); // 'USD' | 'ARS'
  const [activeVehicleId, setActiveVehicleId] = useState('CIT-001');
  const [prefilledVehicle, setPrefilledVehicle] = useState('');
  const [selectedSilhouette, setSelectedSilhouette] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [homeServicesTab, setHomeServicesTab] = useState('financing'); // 'financing' | 'tradein'

  // Lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxPhotos, setLightboxPhotos] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Toast
  const [toastMessage, setToastMessage] = useState('');

  // DETECCIÓN DE APERTURA EN NUEVA PESTAÑA (?vehiculo=ID)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const targetVehiculoId = params.get('vehiculo');
    if (targetVehiculoId) {
      const found = VEHICLES.find(v => v.id.toLowerCase() === targetVehiculoId.toLowerCase());
      if (found) {
        setActiveVehicleId(found.id);
        setView('detail');
      }
    }
  }, []);

  const activeVehicle = VEHICLES.find(v => v.id === activeVehicleId) || VEHICLES[0];

  const handleNavigate = (newView) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenVehicle = (carId) => {
    window.open(`?vehiculo=${carId}`, '_blank');
  };

  const handleSelectSilhouette = (silhouette) => {
    setSelectedSilhouette(silhouette);
    setSelectedBrand('all');
    setView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBrand = (brand) => {
    setSelectedBrand(brand);
    setSelectedSilhouette('all');
    setView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToContact = (vehicleName = '') => {
    if (typeof vehicleName === 'string' && vehicleName) {
      setPrefilledVehicle(vehicleName);
    }
    const target = document.getElementById('contacto-showroom');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLightbox = (photos, idx = 0) => {
    setLightboxPhotos(photos);
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  return (
    <div className="min-h-screen flex flex-col whynot-pearl-bg text-zinc-900 selection:bg-black selection:text-white">
      
      {/* Cabecera Principal */}
      <Header
        currentView={view}
        onNavigate={handleNavigate}
        onScrollToContact={() => handleScrollToContact()}
        currency={currency}
        onToggleCurrency={setCurrency}
      />

      <main className="flex-1">
        {view === 'home' && (
          <div className="animate-fadeIn">
            {/* 1. Banner Principal */}
            <HeroSlider
              onOpenVehicle={handleOpenVehicle}
              onNavigateCatalog={() => handleNavigate('catalog')}
            />

            {/* 2. Gama de Siluetas y Modelos en 3/4 */}
            <SilhouetteBar
              onSelectSilhouette={handleSelectSilhouette}
              onSelectBrand={handleSelectBrand}
              onNavigateCatalog={() => handleNavigate('catalog')}
            />

            {/* 3. Unidades Destacadas sin Bordes */}
            <FeaturedHome
              onOpenVehicle={handleOpenVehicle}
              onNavigateCatalog={() => handleNavigate('catalog')}
              currency={currency}
            />

            {/* 4. Barra de Garantías & Certificación 180 Puntos (Carlos - Perfil 3) */}
            <TrustBadges />

            {/* 5. Servicios Financieros & Tasación de Usados en Parte de Pago (Hernán & Lucas - Perfiles 1 y 4) */}
            <section id="financiacion-usados" className="py-24 border-b border-zinc-200/80 whynot-pearl-bg select-none">
              <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
                
                <div className="flex flex-col items-center justify-center text-center mb-12">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 block mb-2 font-tech">
                    Herramientas de Adquisición
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black font-display mb-8">
                    Facilidades de Compra & Permuta
                  </h2>

                  {/* Tabs: Financiación vs. Tasá tu Usado */}
                  <div className="inline-flex p-1.5 rounded-2xl bg-zinc-100 font-tech text-xs font-bold gap-2">
                    <button
                      onClick={() => setHomeServicesTab('financing')}
                      className={`px-6 py-3 rounded-xl transition-all cursor-pointer inline-flex items-center gap-2 ${
                        homeServicesTab === 'financing'
                          ? 'bg-black text-white shadow-xs'
                          : 'text-zinc-600 hover:text-black'
                      }`}
                    >
                      <Calculator className="w-4 h-4" />
                      <span>Simulador de Financiación</span>
                    </button>
                    
                    <button
                      onClick={() => setHomeServicesTab('tradein')}
                      className={`px-6 py-3 rounded-xl transition-all cursor-pointer inline-flex items-center gap-2 ${
                        homeServicesTab === 'tradein'
                          ? 'bg-black text-white shadow-xs'
                          : 'text-zinc-600 hover:text-black'
                      }`}
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>Tasá tu Usado (Permuta)</span>
                    </button>
                  </div>
                </div>

                {homeServicesTab === 'financing' ? (
                  <FinancingCalculator
                    initialPriceUSD={55000}
                    currency={currency}
                  />
                ) : (
                  <TradeInForm />
                )}

              </div>
            </section>
          </div>
        )}

        {view === 'catalog' && (
          <div className="animate-fadeIn">
            <CatalogView
              onOpenVehicle={handleOpenVehicle}
              currency={currency}
              onToggleCurrency={setCurrency}
              initialCategory={selectedSilhouette}
              initialBrand={selectedBrand}
            />
          </div>
        )}

        {view === 'detail' && (
          <div className="animate-fadeIn">
            <VehicleDetailView
              vehicle={activeVehicle}
              onBack={() => setView('catalog')}
              onScrollToContact={handleScrollToContact}
              currency={currency}
              onOpenLightbox={handleOpenLightbox}
            />
          </div>
        )}

        {/* Showroom & Contacto con Rediseño Total y Banner de Redes Sociales De Lado a Lado */}
        <ShowroomContact
          prefilledVehicle={prefilledVehicle}
          onShowToast={showToast}
        />
      </main>

      <Footer
        onNavigate={handleNavigate}
        onScrollToContact={() => handleScrollToContact()}
      />

      {lightboxOpen && (
        <Lightbox
          photos={lightboxPhotos}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 right-6 z-50 bg-black text-white px-6 py-3 rounded-full shadow-2xl text-xs font-semibold animate-bounce font-tech">
          {toastMessage}
        </div>
      )}

    </div>
  );
}
