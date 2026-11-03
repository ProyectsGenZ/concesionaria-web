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
import { VEHICLES } from './data/vehicles';

export default function App() {
  // Navigation & View State
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
