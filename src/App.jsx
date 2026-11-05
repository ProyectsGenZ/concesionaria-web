import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import SilhouetteBar from './components/SilhouetteBar';
import FeaturedHome from './components/FeaturedHome';
import CatalogView from './components/CatalogView';
import VehicleDetailView from './components/VehicleDetailView';
import ShowroomContact from './components/ShowroomContact';
import Footer from './components/Footer';
import { VEHICLES } from './data/vehicles';

export default function App() {
  const readRoute = () => {
    const params = new URLSearchParams(window.location.search);
    const vehicle = VEHICLES.find(v => v.id.toLowerCase() === (params.get('vehiculo') || '').toLowerCase());
    return { view: vehicle ? 'detail' : params.get('vista') === 'catalogo' ? 'catalog' : 'home', vehicleId: vehicle?.id || VEHICLES[0].id,
      catalog: { filterCondition: params.get('condicion') || 'all', filterBodyType: params.get('carroceria') || 'all', filterBrand: params.get('marca') || 'all', filterFuel: params.get('combustible') || 'all', searchQuery: params.get('q') || '', sortBy: params.get('orden') || 'featured' } };
  };
  const [route, setRoute] = useState(readRoute);
  const { view, catalog: catalogState } = route;
  const [currency, setCurrency] = useState('USD');
  const [prefilledVehicle, setPrefilledVehicle] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const catalogScroll = useRef(0);
  const activeVehicle = VEHICLES.find(v => v.id === route.vehicleId) || VEHICLES[0];

  useEffect(() => {
    const restore = () => {
      setRoute(readRoute());
      requestAnimationFrame(() => window.scrollTo({ top: window.history.state?.scrollY || 0, behavior: 'instant' }));
    };
    window.addEventListener('popstate', restore);
    return () => window.removeEventListener('popstate', restore);
  }, []);

  const commitRoute = (next, { replace = false, top = 0 } = {}) => {
    const url = new URL(window.location.href);
    ['vista', 'vehiculo', 'condicion', 'carroceria', 'marca', 'combustible', 'q', 'orden'].forEach(key => url.searchParams.delete(key));
    if (next.view === 'catalog') url.searchParams.set('vista', 'catalogo');
    if (next.view === 'detail') url.searchParams.set('vehiculo', next.vehicleId);
    const keys = { filterCondition: 'condicion', filterBodyType: 'carroceria', filterBrand: 'marca', filterFuel: 'combustible', searchQuery: 'q', sortBy: 'orden' };
    Object.entries(keys).forEach(([key, param]) => {
      const value = next.catalog[key];
      if (value && value !== 'all' && value !== 'featured') url.searchParams.set(param, value);
    });
    if (!replace) window.history.replaceState({ ...window.history.state, scrollY: window.scrollY }, '', window.location.href);
    window.history[replace ? 'replaceState' : 'pushState']({ scrollY: top, fromCatalog: next.view === 'detail' && view === 'catalog' }, '', url);
    setRoute(next);
    if (!replace) requestAnimationFrame(() => window.scrollTo({ top, behavior: 'instant' }));
  };
  const handleNavigate = newView => commitRoute({ ...route, view: newView });
  const handleOpenVehicle = carId => {
    if (view === 'catalog') catalogScroll.current = window.scrollY;
    commitRoute({ ...route, view: 'detail', vehicleId: carId });
  };
  const handleBackToCatalog = () => {
    if (window.history.state?.fromCatalog) window.history.back();
    else commitRoute({ ...route, view: 'catalog' }, { top: catalogScroll.current });
  };
  const updateCatalog = next => commitRoute({ ...route, catalog: next }, { replace: true, top: window.scrollY });

  const handleScrollToContact = (vehicleName = '') => {
    if (typeof vehicleName === 'string' && vehicleName) {
      setPrefilledVehicle(vehicleName);
    }
    const target = document.getElementById('contacto-showroom');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
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
              onNavigateCatalog={() => handleNavigate('catalog')}
              onOpenVehicle={handleOpenVehicle}
            />

            {/* 3. Unidades Destacadas sin Bordes */}
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
              state={catalogState}
              onStateChange={updateCatalog}
              onOpenVehicle={handleOpenVehicle}
              currency={currency}
              onToggleCurrency={setCurrency}
            />
          </div>
        )}

        {view === 'detail' && (
          <div className="animate-fadeIn">
            <VehicleDetailView
              key={activeVehicle.id}
              vehicle={activeVehicle}
              onBack={handleBackToCatalog}
              onToggleCurrency={setCurrency}
              currency={currency}
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

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 right-6 z-50 bg-black text-white px-6 py-3 rounded-full shadow-2xl text-xs font-semibold animate-bounce font-tech">
          {toastMessage}
        </div>
      )}

    </div>
  );
}
