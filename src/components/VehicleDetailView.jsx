import PriceReference from './PriceReference';
import React, { useEffect, useRef, useState } from 'react';
import { EXCHANGE_RATE } from '../data/vehicles';
import { getVehicleGallery } from '../data/vehicle-gallery';
import './VehicleDetailView.css';

export default function VehicleDetailView({ vehicle, onBack, currency, onToggleCurrency }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [category, setCategory] = useState('Todas');
  const [expanded, setExpanded] = useState(null);
  const consultRef = useRef(null);
  const sectionRef = useRef(null);
  const [showMobileConsult, setShowMobileConsult] = useState(false);
  useEffect(() => {
    let frame = null;
    const measure = () => {
      frame = null;
      const action = consultRef.current?.getBoundingClientRect();
      const section = sectionRef.current?.getBoundingClientRect();
      setShowMobileConsult(Boolean(action && section && action.bottom < 78 && section.bottom > window.innerHeight - 80));
    };
    const schedule = () => { if (frame === null) frame = requestAnimationFrame(measure); };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    measure();
    return () => { window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); if (frame !== null) cancelAnimationFrame(frame); };
  }, [vehicle?.id]);
  const dialogRef = useRef(null);
  useEffect(() => { setActiveIndex(0); setCategory('Todas'); }, [vehicle?.id]);
  useEffect(() => {
    if (!expanded) return;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => { document.documentElement.style.overflow = previousOverflow; };
  }, [expanded]);
  if (!vehicle) return null;
  const photos = getVehicleGallery(vehicle);
  const activePhoto = photos[activeIndex] || photos[0];
  const filtered = photos.filter(photo => category === 'Todas' || photo.category === category);
  const versions = vehicle.versions || [];
  const usd = currency === 'USD';
  const ars = vehicle.priceUSD * EXCHANGE_RATE;
  const format = value => value.toLocaleString('es-AR');
  const viewerPhotos = expanded && !photos.some(photo => photo.url === expanded.url) ? [...photos, expanded] : photos;
  const viewerIndex = expanded ? viewerPhotos.findIndex(photo => photo.url === expanded.url) : 0;
  const movePhoto = direction => setExpanded(viewerPhotos[(viewerIndex + direction + viewerPhotos.length) % viewerPhotos.length]);
  const enlarge = photo => { setExpanded(photo); dialogRef.current.showModal(); };
  const consult = version => {
    const message = `Hola, quisiera consultar por ${vehicle.brand} ${vehicle.model} (${vehicle.year}), referencia ${vehicle.id}${version ? ', versión ' + version : ''}.`;
    window.open(`https://wa.me/5491155550199?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };
  return <section ref={sectionRef} className="vehicle-detail" aria-label={`Ficha de ${vehicle.brand} ${vehicle.model}`}>
    <div className="detail-main">
      <div className="back"><button type="button" onClick={onBack} style={{ background: 'none', padding: 0 }}>← Volver al catálogo</button><span>{vehicle.brand} / {vehicle.model} / {vehicle.year}</span></div>
      <div className="hero">
        <div className="gallery">
          <div className={`image-stage ${activePhoto.contain ? '' : 'photo'}`}><img src={activePhoto.url} alt={`${vehicle.brand} ${vehicle.model}: ${activePhoto.title}`} /><span className="badge">{vehicle.badge}</span><button className="expand" onClick={() => enlarge(activePhoto)}>⤢ Ampliar imagen</button></div>
          <div className="thumbnails" role="group" aria-label="Imágenes del vehículo">{photos.map((photo, index) => <button key={photo.url} className={`thumb ${photo.contain ? '' : 'photo'}`} aria-label={`Mostrar ${photo.title}`} aria-pressed={activeIndex === index} onClick={() => setActiveIndex(index)}><img src={photo.url} alt="" loading="lazy" decoding="async" /></button>)}</div>
        </div>
        <div className="overview"><p className="eyebrow">{vehicle.brand} · {vehicle.bodyType}</p><h1>{vehicle.model}</h1><p className="trim">{vehicle.trim}</p>
          <div className="price-block"><div className="price-head"><span>Precio de referencia</span><div className="currency" role="group" aria-label="Moneda del precio">{['USD', 'ARS'].map(value => <button key={value} aria-pressed={currency === value} onClick={() => onToggleCurrency(value)}>{value}</button>)}</div></div><div className="price">{usd ? `USD ${format(vehicle.priceUSD)}` : `$ ${format(ars)}`}</div><p className="equivalent">{usd ? `Equivalente a $ ${format(ars)}` : `Equivalente a USD ${format(vehicle.priceUSD)}`}</p></div>
          <PriceReference /><div className="actions"><button ref={consultRef} className="primary" onClick={() => consult()}>Consultar por este vehículo ↗</button></div><p className="location">{vehicle.location}</p>
        </div>
      </div>
      <dl className="facts">{[['Año', vehicle.year], ['Kilometraje', `${format(vehicle.km)} km`], ['Transmisión', vehicle.transmission], ['Combustible', vehicle.fuel], ['Tracción', vehicle.traction]].map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      <div className="detail-content"><section><p className="eyebrow">Diseño y tecnología</p><h2>Conocé sus características.</h2><p className="description">{vehicle.description}</p></section><ul className="equipment" aria-label="Equipamiento destacado">{vehicle.bullets?.map(item => <li key={item}>{item}</li>)}</ul></div>
      <section className="detail-gallery" aria-labelledby="details-title"><div className="gallery-heading"><div><p className="eyebrow">Galería del vehículo</p><h2 id="details-title">Conocé sus detalles.</h2><p>Exterior, interior y terminaciones. Tocá una foto para ampliarla.</p></div><div className="gallery-filters" role="group" aria-label="Filtrar fotos por categoría">{['Todas','Exterior','Interior','Detalles'].map(value => <button key={value} aria-pressed={category === value} onClick={() => setCategory(value)}>{value}</button>)}</div></div>
        <div className="detail-photos">{filtered.map(photo => <figure className="detail-shot" key={photo.url}><button onClick={() => enlarge(photo)} aria-label={`Ampliar ${photo.title}`}><img src={photo.url} alt={`${vehicle.brand} ${vehicle.model}: ${photo.title}`} loading="lazy" decoding="async" style={photo.contain ? { objectFit: 'contain' } : undefined} /><span aria-hidden="true">⤢ Ampliar</span></button><figcaption>{photo.title}<span>{photo.category}</span></figcaption></figure>)}</div>
        {!filtered.length && <p className="empty-gallery" role="status">Todavía no hay fotos de esta categoría para este modelo. Podés consultar más detalles con un asesor.</p>}
        <p className="gallery-count" role="status">{filtered.length} {filtered.length === 1 ? 'imagen' : 'imágenes'} · Fotografías ilustrativas del modelo.</p>
      </section>
      {versions.length > 0 && <section className="versions"><div className="version-heading"><h2>Elegí tu versión.</h2><p>Compará el equipamiento destacado de cada opción.</p></div><p className="version-note">Imágenes ilustrativas del modelo; las diferencias de equipamiento se detallan en cada versión.</p><div className="version-grid">{versions.map((version, index) => {
        const exterior = { url: version.png || vehicle.pngImage, title: 'Vista exterior ilustrativa', contain: true };
        const interiors = photos.filter(photo => photo.category === 'Interior');
        const interior = interiors.length ? interiors[(index + 1) % interiors.length] : null;
        return <article className="version" key={version.name}><div className="version-visual" style={!interior ? { gridTemplateColumns: '1fr' } : undefined}><button onClick={() => enlarge(exterior)} aria-label={`Ampliar exterior ilustrativo de ${version.name}`}><img src={exterior.url} alt={`Referencia exterior de ${vehicle.model}`} loading="lazy" decoding="async" /><span aria-hidden="true">⤢ Exterior</span></button>{interior && <button className="equipment-photo" onClick={() => enlarge(interior)} aria-label={`Ampliar referencia de interior de ${version.name}`}><img src={interior.url} alt={interior.title} loading="lazy" decoding="async" /><span aria-hidden="true">⤢ Interior</span></button>}</div><h3>{version.name}</h3><p>{version.highlight}</p><ul>{version.features?.map(item => <li key={item}>{item}</li>)}</ul><button onClick={() => consult(version.name)}>Consultar por {version.name} ↗</button></article>;
      })}</div></section>}
    </div>
    {showMobileConsult && !expanded && <div className="mobile-vehicle-consult"><div><span>Precio de referencia</span><strong>{usd ? `USD ${format(vehicle.priceUSD)}` : `$ ${format(ars)}`}</strong></div><button type="button" onClick={() => consult()} aria-label={`Consultar por ${vehicle.brand} ${vehicle.model}`}>Consultar ↗</button></div>}
    <dialog className="vehicle-image-viewer" ref={dialogRef} onClick={event => { if (event.target === dialogRef.current) dialogRef.current.close(); }} onClose={() => setExpanded(null)} onKeyDown={event => { if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); movePhoto(event.key === 'ArrowLeft' ? -1 : 1); } }} aria-label="Imagen ampliada del vehículo"><button onClick={() => dialogRef.current.close()}>Cerrar ✕</button>{expanded && <><button className="viewer-prev" aria-label="Imagen anterior" onClick={() => movePhoto(-1)}>‹</button><button className="viewer-next" aria-label="Imagen siguiente" onClick={() => movePhoto(1)}>›</button><p className="viewer-count" role="status">Foto {viewerIndex + 1} de {viewerPhotos.length}</p><img src={expanded.url} alt={`${vehicle.brand} ${vehicle.model}: ${expanded.title}`} /></>}</dialog>
  </section>;
}
