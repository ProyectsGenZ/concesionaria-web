import React, { useState, useEffect, useRef } from 'react';

export default function Header({ currentView, onNavigate, onScrollToContact, currency, onToggleCurrency }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const closeMenu = () => setMenuOpen(false);
  useEffect(() => {
    if (!menuOpen) return;
    const dismiss = event => {
      if (event.type === 'keydown' && event.key === 'Escape') { closeMenu(); menuButtonRef.current?.focus(); }
      if (event.type === 'pointerdown' && !menuRef.current?.contains(event.target) && !menuButtonRef.current?.contains(event.target)) closeMenu();
    };
    document.addEventListener('keydown', dismiss); document.addEventListener('pointerdown', dismiss);
    const media = window.matchMedia('(min-width: 768px)');
    media.addEventListener('change', closeMenu);
    return () => { document.removeEventListener('keydown', dismiss); document.removeEventListener('pointerdown', dismiss); media.removeEventListener('change', closeMenu); };
  }, [menuOpen]);
  const navigate = target => { closeMenu(); onNavigate(target); };
  const contact = () => { closeMenu(); onScrollToContact(); };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/60 backdrop-blur-md border-b border-zinc-200/50 shadow-xs'
          : 'py-4 bg-white/95 backdrop-blur-xl border-b border-zinc-200/90'
      }`}
    >
      <div className="header-inner max-w-[1440px] mx-auto px-6 lg:px-10 flex items-center justify-between relative">
        
        {/* Logotipo Minimalista Monocromático */}
        <button
          onClick={() => navigate('home')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-lg font-black text-xs tracking-tighter group-hover:scale-105 transition-transform duration-300 shadow-xs">
            M
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-[-0.04em] text-base leading-none text-black font-display">
              MONOLITH
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/70 mt-0.5 font-tech">
              Automotive
            </span>
          </div>
        </button>

        {/* Navegación Central Ubicada EXACTAMENTE en la Mitad de la Pantalla */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-wider text-black font-tech absolute left-1/2 -translate-x-1/2">
          <button
            onClick={() => navigate('home')}
            className={`transition relative py-1 cursor-pointer ${
              currentView === 'home'
                ? 'text-black font-black border-b-2 border-black'
                : 'text-black hover:opacity-60'
            }`}
          >
            Inicio
          </button>
          <button
            onClick={() => navigate('catalog')}
            className={`transition relative py-1 cursor-pointer ${
              currentView === 'catalog'
                ? 'text-black font-black border-b-2 border-black'
                : 'text-black hover:opacity-60'
            }`}
          >
            Catálogo
          </button>
          <button
            onClick={contact}
            className="text-black hover:opacity-60 transition py-1 cursor-pointer"
          >
            Contacto
          </button>
        </nav>

        {/* Switcher USD/ARS & CTA Directo */}
        <div className="flex items-center gap-3">
          {/* Selector de Moneda USD/ARS */}
          <div className="hidden md:inline-flex p-0.5 rounded-full bg-zinc-100 border border-zinc-300/80 text-[11px] font-bold tabular-nums font-tech">
            <button
              onClick={() => onToggleCurrency('USD')}
              className={`px-3 py-1 rounded-full transition cursor-pointer ${
                currency === 'USD' ? 'bg-black text-white font-black shadow-xs' : 'text-black hover:bg-zinc-200'
              }`}
            >
              USD
            </button>
            <button
              onClick={() => onToggleCurrency('ARS')}
              className={`px-3 py-1 rounded-full transition cursor-pointer ${
                currency === 'ARS' ? 'bg-black text-white font-black shadow-xs' : 'text-black hover:bg-zinc-200'
              }`}
            >
              ARS
            </button>
          </div>

          {/* Botón de Contacto Directo */}
          <button
            onClick={contact}
            className="px-5 py-2 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-bold tracking-wide transition-all duration-300 hover:shadow-md active:scale-95 cursor-pointer uppercase font-tech"
          >
            Contacto
          </button>

          <button ref={menuButtonRef} type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen(value => !value)} className="mobile-menu-toggle md:hidden">
            <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span><span className="sr-only">Menú</span>
          </button>
        </div>

      </div>
      {menuOpen && <nav ref={menuRef} id="mobile-navigation" aria-label="Navegación móvil" className="mobile-navigation md:hidden">
        <button type="button" aria-current={currentView === 'home' ? 'page' : undefined} onClick={() => navigate('home')}>Inicio <span aria-hidden="true">↗</span></button>
        <button type="button" aria-current={currentView === 'catalog' ? 'page' : undefined} onClick={() => navigate('catalog')}>Catálogo <span aria-hidden="true">↗</span></button>
        <button type="button" onClick={contact}>Contacto <span aria-hidden="true">↗</span></button>
        <div className="mobile-currency"><span>Moneda de los precios</span><div role="group" aria-label="Moneda">{['USD','ARS'].map(value => <button key={value} type="button" aria-pressed={currency === value} onClick={() => onToggleCurrency(value)}>{value}</button>)}</div></div>
      </nav>}
    </header>
  );
}
