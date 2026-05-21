import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa';

type Language = 'es' | 'en';

const translations = {
  es: {
    agencyName: 'TOUR PERUVIAN SERVICE',
    title: 'Prepárate para la',
    titleHighlight: 'Aventura',
    description: 'Estamos diseñando experiencias turísticas exclusivas a través de los destinos más asombrosos del Perú. Únete a nuestra lista selecta y sé el primero en descubrir una nueva forma de viajar.',
    placeholder: 'TU CORREO ELECTRÓNICO',
    button: 'Descubrir',
    success: '¡Bienvenido a nuestro exclusivo círculo! Te informaremos pronto.',
    location: 'Trujillo, Perú'
  },
  en: {
    agencyName: 'TOUR PERUVIAN SERVICE',
    title: 'Get ready for the',
    titleHighlight: 'Adventure',
    description: 'We are crafting exclusive tourism experiences through the most breathtaking destinations in Peru. Join our select list and be the first to discover a new way to travel.',
    placeholder: 'YOUR EMAIL ADDRESS',
    button: 'Discover',
    success: 'Welcome to our exclusive circle! We will notify you soon.',
    location: 'Trujillo, Peru'
  }
};

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [lang, setLang] = useState<Language>('es');

  const t = translations[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setEmail('');
    }
  };

  const toggleLanguage = () => {
    setLang(prev => prev === 'es' ? 'en' : 'es');
  };

  // Animations
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.4 } 
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col lg:flex-row bg-[#1E2B4D] text-white selection:bg-orange-500 selection:text-white font-sans overflow-hidden">
      
      {/* 
        ====================================================
        LEFT SECTION: Editorial High-End Imagery
        ====================================================
      */}
      <div className="relative w-full lg:w-[45%] h-[40vh] lg:h-screen shrink-0 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: 'easeOut' }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2076&auto=format&fit=crop')] bg-cover bg-center"
        />
        {/* Subtle overlays to blend the image edge with the navy background on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#1E2B4D] via-transparent to-transparent lg:to-black/20 opacity-90 lg:opacity-100"></div>
        <div className="absolute inset-0 bg-[#1E2B4D]/20 mix-blend-multiply"></div>
      </div>

      {/* 
        ====================================================
        RIGHT SECTION: Premium Typography & Content
        ====================================================
      */}
      <div className="relative w-full lg:w-[55%] h-auto lg:h-screen flex flex-col justify-between px-8 py-12 md:px-16 lg:px-24 lg:py-16">
        
        {/* Subtle background noise for texture (Premium feel) */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>

        {/* --- HEADER --- */}
        <header className="relative z-10 flex justify-between items-center w-full">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex items-center gap-2 font-['Montserrat']"
          >
            <span className="text-[10px] md:text-xs tracking-[0.3em] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              TOUR
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] font-light text-white/90">
              PERUVIAN
            </span>
          </motion.div>

          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            onClick={toggleLanguage}
            className="text-[10px] md:text-xs tracking-[0.2em] font-['Montserrat'] font-light uppercase text-white/50 hover:text-white transition-colors duration-500 border border-white/20 px-4 py-2 rounded-full hover:border-orange-500/50 hover:bg-white/5"
          >
            {lang === 'es' ? 'EN / ES' : 'ES / EN'}
          </motion.button>
        </header>

        {/* --- MAIN CONTENT --- */}
        <main className="relative z-10 flex-grow flex flex-col justify-center py-16 lg:py-0">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="visible"
            className="w-full max-w-2xl"
          >
            <motion.h1 
              variants={fadeUp}
              className="font-['Playfair_Display'] text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-[1.1] mb-8"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={lang}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="block"
                >
                  {t.title} <br />
                  <span className="font-italic italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 pr-2">
                    {t.titleHighlight}.
                  </span>
                </motion.span>
              </AnimatePresence>
            </motion.h1>

            <motion.div variants={fadeUp} className="w-12 h-[1px] bg-gradient-to-r from-yellow-400 to-red-500 mb-10 opacity-70"></motion.div>

            <motion.div variants={fadeUp} className="min-h-[90px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={lang}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="font-['Montserrat'] font-light text-sm md:text-base text-white/70 leading-relaxed tracking-wide md:pr-12"
                >
                  {t.description}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Newsletter Form */}
            <motion.div variants={fadeUp} className="w-full max-w-lg mt-12 relative">
              <form onSubmit={handleSubmit} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
                <div className="relative flex items-center bg-[#1E2B4D] border border-white/10 rounded-full p-2 pl-6 group-hover:border-orange-500/40 transition-colors duration-500 shadow-2xl">
                  <input 
                    type="email" 
                    placeholder={t.placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-grow bg-transparent font-['Montserrat'] text-[10px] md:text-xs tracking-[0.2em] text-white placeholder-white/40 focus:outline-none"
                  />
                  <button 
                    type="submit" 
                    className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 text-white hover:scale-105 transition-transform duration-500 shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
              
              <AnimatePresence>
                {submitted && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -bottom-10 left-0 font-['Montserrat'] text-[10px] md:text-xs text-orange-400 tracking-wider"
                  >
                    {t.success}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </main>

        {/* --- FOOTER --- */}
        <footer className="relative z-10 flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-8 mt-16 lg:mt-0 pt-8 border-t border-white/5">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="flex items-center space-x-3 text-white/50"
          >
            <MapPin className="w-4 h-4 text-orange-500/80" />
            <AnimatePresence mode="wait">
              <motion.span 
                key={lang}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-['Montserrat'] text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-medium"
              >
                {t.location}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="flex space-x-6"
          >
            <a href="https://www.facebook.com/agenciadeviajesperuvianservice/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-orange-500 transition-colors duration-500">
              <FaFacebook className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a href="https://www.instagram.com/peruvianservice/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-orange-500 transition-colors duration-500">
              <FaInstagram className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a href="https://www.youtube.com/channel/UCTqaPQt2jpXy9nmguzR9dtQ" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-orange-500 transition-colors duration-500">
              <FaYoutube className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a href="https://wa.me/51966638693" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-orange-500 transition-colors duration-500">
              <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </motion.div>
        </footer>

      </div>
    </div>
  );
}
