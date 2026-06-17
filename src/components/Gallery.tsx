import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from '../i18n/utils';

interface Props {
  lang: 'es' | 'en';
}

const images = [
  {
    id: 1,
    src: '/slide1.png',
    titleKey: 'gallery.img1.title',
    className: 'col-span-1 md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    src: '/slide2.png',
    titleKey: 'gallery.img2.title',
    className: 'col-span-1 md:col-span-2',
  },
  {
    id: 3,
    src: '/trujillo.webp',
    titleKey: 'gallery.img3.title',
    className: 'col-span-1',
  },
  {
    id: 4,
    src: '/img/paquetes_recomendados/cajamarca.png',
    titleKey: 'gallery.img4.title',
    className: 'col-span-1',
  },
  {
    id: 5,
    src: '/img/paquetes_recomendados/huaraz.png',
    titleKey: 'gallery.img5.title',
    className: 'col-span-1 md:col-span-2',
  },
  {
    id: 6,
    src: '/img/paquetes_recomendados/tarapoto.png',
    titleKey: 'gallery.img6.title',
    className: 'col-span-1 md:col-span-2',
  },
];

export default function Gallery({ lang }: Props) {
  const t = useTranslations(lang);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="pt-32 pb-20 bg-slate-50 relative overflow-hidden font-['Montserrat'] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 tracking-tight">
            {t('gallery.title') || 'Nuestra Galería'}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t('gallery.subtitle') || 'Descubre los momentos inolvidables y paisajes majestuosos que te esperan en Perú.'}
          </p>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[250px] gap-4">
          {images.map((img, index) => (
            <div
              key={img.id}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer shadow-lg ${img.className}`}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={img.src}
                alt={t(img.titleKey as any) || 'Gallery image'}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white font-semibold text-lg drop-shadow-md">
                    {t(img.titleKey as any) || ''}
                  </span>
                  <div className="flex items-center text-orange-400 mt-2 text-sm font-medium">
                    <ZoomIn className="w-4 h-4 mr-2" />
                    {lang === 'es' ? 'Ampliar' : 'Zoom In'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md transition-all z-50"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all z-50"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all z-50"
              onClick={handleNext}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div 
              className="relative w-full max-w-5xl aspect-[4/3] md:aspect-[16/9] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                src={images[selectedIndex].src}
                alt="Selected view"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
