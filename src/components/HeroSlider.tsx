import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from '../i18n/utils';
import { ui } from '../i18n/ui';
import { FaTripadvisor } from 'react-icons/fa';

interface Props {
  lang: 'es' | 'en';
}

type TranslationKey = keyof typeof ui['es'];

const slides = [
  {
    id: 1,
    image: '/slide1.avif', // User's slide
    titleKey: 'slider.slide1.title' as TranslationKey,
    descKey: 'slider.slide1.desc' as TranslationKey,
  },
  {
    id: 2,
    image: '/slide2.avif', // Coastal/Trujillo vibe
    titleKey: 'slider.slide2.title' as TranslationKey,
    descKey: 'slider.slide2.desc' as TranslationKey,
  },
  {
    id: 3,
    image: '/slide3.avif', // Jungle/Nature
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
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/80 via-black/30 to-black/80"></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-16 md:px-24 z-10">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl flex flex-col items-center"
            >
              <motion.div 
                className="mb-3 md:mb-4 flex flex-col items-center justify-center bg-[#34e0a1] text-slate-900 rounded-t-[32px] rounded-b-xl px-3 py-2 md:px-4 md:py-2.5 shadow-2xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="flex items-center justify-center mb-0.5 md:mb-1">
                  <FaTripadvisor className="w-6 h-6 md:w-8 md:h-8 text-slate-900" />
                </div>
                <span className="font-black text-[10px] md:text-xs tracking-tight leading-none text-center font-['Montserrat']">
                  Travelers'<br/>Choice
                </span>
                <span className="font-bold text-[8px] md:text-[9px] mt-0.5 tracking-widest">2026</span>
              </motion.div>
              
              <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-2 md:mb-4 tracking-tight font-['Montserrat'] drop-shadow-2xl leading-tight">
                {t(slides[current].titleKey)}
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-white/90 mb-5 md:mb-8 font-normal max-w-2xl mx-auto leading-relaxed drop-shadow-2xl">
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
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-md border border-white/20 transition-all z-20"
        aria-label="Anterior slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-md border border-white/20 transition-all z-20"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Ir al slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full relative after:absolute after:-inset-4 ${
              current === index ? 'w-8 h-2 bg-orange-500' : 'w-2 h-2 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
