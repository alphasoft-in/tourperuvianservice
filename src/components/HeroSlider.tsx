import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from '../i18n/utils';
import { ui } from '../i18n/ui';

interface Props {
  lang: 'es' | 'en';
}

type TranslationKey = keyof typeof ui['es'];

const slides = [
  {
    id: 1,
    image: '/slide1.png', // User's slide
    titleKey: 'slider.slide1.title' as TranslationKey,
    descKey: 'slider.slide1.desc' as TranslationKey,
  },
  {
    id: 2,
    image: '/slide2.png', // Coastal/Trujillo vibe
    titleKey: 'slider.slide2.title' as TranslationKey,
    descKey: 'slider.slide2.desc' as TranslationKey,
  },
  {
    id: 3,
    image: '/slide3.png', // Jungle/Nature
    titleKey: 'slider.slide3.title' as TranslationKey,
    descKey: 'slider.slide3.desc' as TranslationKey,
  }
];

export default function HeroSlider({ lang }: Props) {
  const [current, setCurrent] = useState(0);
  const t = useTranslations(lang);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-900">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slides[current].image}')` }}
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-12 z-10">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl flex flex-col items-center"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight font-['Montserrat'] drop-shadow-xl">
                {t(slides[current].titleKey)}
              </h1>
              <p className="text-base md:text-lg text-white/95 mb-8 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                {t(slides[current].descKey)}
              </p>
              
              <button className="px-8 py-3.5 text-sm font-bold text-white rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:shadow-lg hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wider">
                {t('slider.btn')}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all z-20"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all z-20"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index ? 'w-8 h-2 bg-orange-500' : 'w-2 h-2 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
