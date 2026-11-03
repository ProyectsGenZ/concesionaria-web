import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ photos = [], initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setCurrentIndex(prev => (prev - 1 + photos.length) % photos.length);
      if (e.key === 'ArrowRight') setCurrentIndex(prev => (prev + 1) % photos.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photos.length, onClose]);

  if (!photos.length) return null;

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev - 1 + photos.length) % photos.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev + 1) % photos.length);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 select-none animate-fadeIn"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-lg transition cursor-pointer"
        title="Cerrar (Esc)"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition cursor-pointer"
        title="Anterior (←)"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Image */}
      <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
        <img
          src={photos[currentIndex]}
          alt={`Foto ${currentIndex + 1}`}
          className="max-h-[78vh] w-auto object-contain rounded-xl shadow-2xl"
        />
        <span className="text-xs text-zinc-400 font-medium mt-4 tabular-nums font-tech">
          Foto {currentIndex + 1} de {photos.length}
        </span>
      </div>

      {/* Next */}
      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition cursor-pointer"
        title="Siguiente (→)"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
