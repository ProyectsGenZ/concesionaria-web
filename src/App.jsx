import React, { useState } from 'react';
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
  const [view, setView] = useState('home'); // 'home' | 'catalog' | 'detail'
  const [currency, setCurrency] = useState('USD'); // 'USD' | 'ARS'
  const [activeVehicleId, setActiveVehicleId] = useState('MNL-100');
  const [prefilledVehicle, setPrefilledVehicle] = useState('');
  const [selectedSilhouette, setSelectedSilhouette] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');

  // Lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxPhotos, setLightboxPhotos] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Toast
  const [toastMessage, setToastMessage] = useState('');

  const activeVehicle = VEHICLES.find(v => v.id === activeVehicleId) || VEHICLES[0];

  const handleNavigate = (newView) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenVehicle = (carId) => {
    setActiveVehicleId(carId);
    setView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <div className="min-h-screen bg-[#fcfcfd] text-zinc-900 flex flex-col selection:bg-black selection:text-white">
      
      {/* Header Fijo */}
      <Header
        currentView={view}
        onNavigate={handleNavigate}
        onScrollToContact={() => handleScrollToContact()}
        currency={currency}
        onToggleCurrency={setCurrency}
      />

      {/* Main View Router */}
      <main className="flex-1">
        
        {/* VISTA 1: INICIO */}
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

        {/* VISTA 2: CATÁLOGO */}
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

        {/* VISTA 3: DETALLE DEL VEHÍCULO (PÁGINA COMPLETA ESTILO FORD RAPTOR) */}
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

        {/* SECCIÓN UNIFICADA: SHOWROOM & CONTACTO (Siempre accesible al scrollear o desde cualquier botón) */}
        <ShowroomContact
          prefilledVehicle={prefilledVehicle}
          onShowToast={showToast}
        />

      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onScrollToContact={() => handleScrollToContact()}
      />

      {/* Visor Lightbox Pantalla Completa para Galería 4x2 */}
      {lightboxOpen && (
        <Lightbox
          photos={lightboxPhotos}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-black text-white px-6 py-3.5 rounded-full shadow-2xl text-xs font-semibold animate-bounce font-tech">
          {toastMessage}
        </div>
      )}

    </div>
  );
}
