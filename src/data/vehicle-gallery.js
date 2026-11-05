import { HERO_SLIDES } from './vehicles';
import galleryAssets from './gallery-assets.json';

// Solo fotografías identificadas con el modelo. No completar con un pool genérico.
export function getVehicleGallery(vehicle) {
  const photos = [{ url: vehicle.pngImage, title: 'Vista exterior de estudio', category: 'Exterior', contain: true }];
  const hero = HERO_SLIDES.find(slide => slide.carId === vehicle.id);
  if (hero) photos.push({ url: hero.image, title: 'Exterior en paisaje', category: 'Exterior' });
  if (vehicle.id === 'HYU-001') photos.push(
    { url: '/images/tucson/dashboard.jpg', title: 'Tablero y puesto de conducción', category: 'Interior' },
    { url: '/images/tucson/seats.jpg', title: 'Asientos y espacio interior', category: 'Interior' },
    { url: '/images/tucson/front-detail.jpg', title: 'Diseño del frente', category: 'Detalles' }
  );
  photos.push(...(galleryAssets[vehicle.id] || []));
  return photos.filter(photo => photo.url);
}
