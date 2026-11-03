import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import SilhouetteBar from './components/SilhouetteBar';
import FeaturedHome from './components/FeaturedHome';
import CatalogView from './components/CatalogView';
import VehicleDetailView from './components/VehicleDetailView';
import ShowroomContact from './components/ShowroomContact';
import Lightbox from './components/Lightbox';
import Footer from './components/Footer';
import AtelierDesign from './components/AtelierDesign';
import VeloceDesign from './components/VeloceDesign';
import DesignSwitcher from './components/DesignSwitcher';
import { VEHICLES } from './data/vehicles';

export default function App() {
  const [activeDesign, setActiveDesign] = useState('monolith'); // 'monolith' | 'atelier' | 'veloce'

  // MONOLITH State
  const [view, setView] = useState('home'); // 'home' | 'catalog' | 'detail'
  const [currency, setCurrency] = useState('USD'); // 'USD' | 'ARS'
  const [activeVehicleId, setActiveVehicleId] = useState('CIT-001');
  const [prefilledVehicle, setPrefilledVehicle] = useState('');
  const [selectedSilhouette, setSelectedSilhouette] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');

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
    // Abre en nueva pestaña mostrando la unidad, sus partes y características
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

  const handleOpenWhatsAppGeneral = (contextQuery) => {
    const text = `Hola, me comunico desde la web oficial. Consulta: ${contextQuery}`;
    window.open(`https://wa.me/5491155550199?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col whynot-pearl-bg">
      
      {/* SELECTOR FLOTANTE DE DISEÑO (Permite alternar en tiempo real entre los 3 enfoques) */}
      <DesignSwitcher
        activeDesign={activeDesign}
        onSelectDesign={(d) => {
          setActiveDesign(d);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* DISEÑO 1: MONOLITH STUDIO (Blanco y Negro Texturizado · Miniaturas PNG con Sombra · Partes & Versiones) */}
      {activeDesign === 'monolith' && (
        <div className="whynot-pearl-bg text-zinc-900 flex-1 flex flex-col selection:bg-black selection:text-white animate-fadeIn">
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
                <HeroSlider
                  onOpenVehicle={handleOpenVehicle}
                  onNavigateCatalog={() => handleNavigate('catalog')}
                />
                <SilhouetteBar
                  onSelectSilhouette={handleSelectSilhouette}
                  onSelectBrand={handleSelectBrand}
                  onNavigateCatalog={() => handleNavigate('catalog')}
                />
                <FeaturedHome
                  onOpenVehicle={handleOpenVehicle}
                  onNavigateCatalog={() => handleNavigate('catalog')}
                  currency={currency}
                />
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
        </div>
      )}

      {/* DISEÑO 2: ATELIER AUTOMOBILE (Editorial Haute Couture · Marfil y Oro · Pasarela Horizontal) */}
      {activeDesign === 'atelier' && (
        <div className="flex-1 animate-fadeIn">
          <AtelierDesign onOpenWhatsApp={handleOpenWhatsAppGeneral} />
        </div>
      )}

      {/* DISEÑO 3: VELOCE CORSA (Motorsport Precision · Telemetría Activa · Comparador Lado a Lado) */}
      {activeDesign === 'veloce' && (
        <div className="flex-1 animate-fadeIn">
          <VeloceDesign onOpenWhatsApp={handleOpenWhatsAppGeneral} />
        </div>
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
