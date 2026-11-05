import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const BRANCHES = {
  libertador: { title: 'Showroom Libertador', address: 'Av. del Libertador 14200, Acassuso.', weekdays: '09:00 a 19:30', saturday: '10:00 a 14:00' },
  pilar: { title: 'Hub Logístico Pilar', address: 'Panamericana Km 46.5, Ramal Pilar.', weekdays: '08:30 a 18:00', saturday: 'Con cita previa' }
};

export default function ShowroomContact({ prefilledVehicle = '', onShowToast }) {
  const [activeBranch, setActiveBranch] = useState('libertador');
  const [formData, setFormData] = useState({ name: '', phone: '', vehicle: prefilledVehicle, message: '' });
  const [errors, setErrors] = useState({});
  const [opening, setOpening] = useState(false);
  const submitLock = useRef(false);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const branch = BRANCHES[activeBranch];
  const location = encodeURIComponent(`${branch.address}, Argentina`);

  useEffect(() => {
    if (prefilledVehicle) setFormData(previous => ({ ...previous, vehicle: prefilledVehicle }));
  }, [prefilledVehicle]);

  const updateField = event => {
    const { name, value } = event.target;
    setFormData(previous => ({ ...previous, [name]: value }));
    setErrors(previous => ({ ...previous, [name]: undefined }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (submitLock.current) return;
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Escribí tu nombre para continuar.';
    if (formData.phone.replace(/\D/g, '').length < 7) nextErrors.phone = 'Ingresá un teléfono con código de área (al menos 7 dígitos).';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      (nextErrors.name ? nameRef : phoneRef).current?.focus();
      return;
    }
    submitLock.current = true;
    setOpening(true);
    const message = `Hola, quisiera hacer una consulta.\nNombre: ${formData.name.trim()}\nTeléfono: ${formData.phone.trim()}\nSede: ${branch.title}\nVehículo: ${formData.vehicle.trim() || 'Consulta general'}\nMensaje: ${formData.message.trim() || 'Quisiera recibir asesoramiento.'}`;
    const destination = window.open('about:blank', '_blank');
    if (destination) {
      destination.opener = null;
      destination.location.href = `https://wa.me/5491155550199?text=${encodeURIComponent(message)}`;
      onShowToast?.('Continuá en WhatsApp para revisar y enviar tu consulta.');
    } else {
      setErrors({ submit: 'El navegador bloqueó la apertura. Permití las ventanas emergentes y volvé a intentar.' });
    }
    submitLock.current = false;
    setOpening(false);
  };

  return (
    <section id="contacto-showroom" className="showroom-contact" aria-labelledby="contact-title">
      <div className="contact-content">
        <p className="contact-eyebrow">Contacto & showroom</p>
        <h2 id="contact-title" className="contact-title">Hablemos de<br /><span>tu próximo auto.</span></h2>
        <p className="contact-intro">Consultá por un vehículo o coordiná una visita. Estamos para acompañarte.</p>
        <div className="contact-layout">
          <div className="contact-form-panel">
            <h3>Contanos qué estás buscando</h3>
            <p>Dejanos tus datos y continuamos por WhatsApp.</p>
            <form onSubmit={handleSubmit} noValidate>
              <div className="contact-row">
                <div className="contact-field"><label htmlFor="contact-name">Tu nombre</label><input ref={nameRef} id="contact-name" name="name" autoComplete="name" placeholder="Nombre y apellido" required value={formData.name} onChange={updateField} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} />{errors.name && <p className="contact-error" id="contact-name-error">{errors.name}</p>}</div>
                <div className="contact-field"><label htmlFor="contact-phone">Tu teléfono</label><input ref={phoneRef} id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="Código de área y número" required value={formData.phone} onChange={updateField} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'contact-phone-error' : undefined} />{errors.phone && <p className="contact-error" id="contact-phone-error">{errors.phone}</p>}</div>
              </div>
              <div className="contact-field"><label htmlFor="contact-vehicle">Vehículo de interés <span>· Opcional</span></label><input id="contact-vehicle" name="vehicle" placeholder="Marca o modelo que te interesa" value={formData.vehicle} onChange={updateField} /></div>
              <div className="contact-field"><label htmlFor="contact-message">¿En qué podemos ayudarte? <span>· Opcional</span></label><textarea className="resize-none" id="contact-message" name="message" placeholder="Quiero conocer más sobre un vehículo, coordinar una visita…" rows={3} value={formData.message} onChange={updateField} onInput={event => { event.target.style.height = 'auto'; event.target.style.height = `${event.target.scrollHeight}px`; }} /></div>
              <button className="contact-submit" type="submit" disabled={opening} aria-busy={opening}><span>{opening ? 'Abriendo WhatsApp…' : 'Continuar en WhatsApp'}</span><ArrowUpRight size={17} aria-hidden="true" /></button>
              <p className="contact-note">Podrás revisar tu consulta antes de enviarla.</p>
              <div role="status">{errors.submit && <p className="contact-error">{errors.submit}</p>}</div>
            </form>
          </div>
          <div className="contact-left">
            <p className="contact-section-label">Te esperamos en nuestras sedes</p>
            <div className="contact-branches" role="group" aria-label="Elegí una sede">
              {Object.keys(BRANCHES).map(key => <button type="button" key={key} aria-pressed={activeBranch === key} onClick={() => setActiveBranch(key)}>{key === 'libertador' ? 'Libertador' : 'Pilar'}</button>)}
            </div>
            <div className="contact-branch-info" aria-live="polite">
              <h3>{branch.title}</h3>
              <p className="contact-address">{branch.address}</p>
              <p className="contact-hours">Lunes a viernes · {branch.weekdays}<br />Sábados · {branch.saturday}</p>
              <a className="contact-map-link" href={`https://www.google.com/maps/search/?api=1&query=${location}`} target="_blank" rel="noopener noreferrer">Cómo llegar <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
            <div className="contact-location-map"><iframe key={activeBranch} title={`Ubicación de ${branch.title} en Google Maps`} src={`https://maps.google.com/maps?q=${location}&z=15&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div>
            <a className="contact-phone" href="tel:+541147908800">Llamanos al (011) 4790-8800</a>
          </div>
        </div>
      </div>
      {/* 2. APARTADO INDIVIDUAL "SEGUINOS EN NUESTRAS REDES SOCIALES" (De lado a lado / Full Width) */}
      <div className="w-full bg-white border-y border-zinc-200/90 py-16 px-6 lg:px-10">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 block mb-1 font-tech">
              Comunidad Oficial
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight font-display">
              Seguinos en nuestras Redes Sociales
            </h3>
            <p className="text-xs text-zinc-500 mt-1">
              Novedades, entregas inmediatas, lanzamientos exclusivos y contenido audiovisual de cada unidad.
            </p>
          </div>

          {/* Fila de Iconos SVG Monocromáticos en Gris/Negro (De lado a lado y centrada) */}
          <div className="contact-social-icons flex items-center gap-8 text-zinc-400">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-all transform hover:scale-115 cursor-pointer"
              title="Facebook"
            >
              <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
                <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5C12 6.57 13.18 5.5 14.92 5.5c.83 0 1.54.06 1.75.09v2.03h-1.2c-.94 0-1.12.45-1.12 1.1V11h2.25l-.3 3h-1.95v7H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-all transform hover:scale-115 cursor-pointer"
              title="Instagram"
            >
              <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-all transform hover:scale-115 cursor-pointer"
              title="X (Twitter)"
            >
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-all transform hover:scale-115 cursor-pointer"
              title="YouTube"
            >
              <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-all transform hover:scale-115 cursor-pointer"
              title="LinkedIn"
            >
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
