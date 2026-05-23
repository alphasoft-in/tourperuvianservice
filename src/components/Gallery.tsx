import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { useTranslations } from '../i18n/utils';

interface Props {
  lang: 'es' | 'en';
}

const images = [
  {
    id: 1,
    src: '/slide1.png',
    titleKey: 'gallery.img1.title',
    className: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    id: 2,
    src: '/slide2.png',
    titleKey: 'gallery.img2.title',
    className: 'col-span-1 md:col-span-1 row-span-1',
  },
  {
    id: 3,
    src: '/trujillo.webp',
    titleKey: 'gallery.img3.title',
    className: 'col-span-1 md:col-span-1 row-span-2',
  },
  {
    id: 4,
    src: '/img/paquetes_recomendados/cajamarca.png',
    titleKey: 'gallery.img4.title',
    className: 'col-span-1 md:col-span-1 row-span-1',
  },
  {
    id: 5,
    src: '/img/paquetes_recomendados/huaraz.png',
    titleKey: 'gallery.img5.title',
    className: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 6,
    src: '/img/paquetes_recomendados/tarapoto.png',
    titleKey: 'gallery.img6.title',
    className: 'col-span-1 md:col-span-1 row-span-1',
  },
];

export default function Gallery({ lang }: Props) {
  const t = useTranslations(lang);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="pt-32 pb-20 bg-slate-50 relative overflow-hidden font-['Montserrat'] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
            {t('gallery.title') || 'Nuestra Galería'}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('gallery.subtitle') || 'Descubre los momentos inolvidables y paisajes majestuosos que te esperan en Perú.'}
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {images.map((img, index) => (
            <div
              key={img.id}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer shadow-lg ${img.className}`}
              onClick={() => setSelectedImg(img.src)}
            >
              <img
                src={img.src}
                alt={t(img.titleKey as any) || 'Gallery image'}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/95 flex items-center justify-center p-4 md:p-12 backdrop-blur-sm"
            onClick={() => setSelectedImg(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full"
              onClick={() => setSelectedImg(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedImg}
              alt="Ampliada"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
