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
    description: 'Estamos diseñando experiencias turísticas inolvidables. Únete a nuestra lista para ser el primero en viajar con nosotros.',
    placeholder: 'INGRESA TU CORREO ELECTRÓNICO',
    button: 'Suscribirse',
    success: '¡Bienvenido! Te mantendremos informado sobre nuestro lanzamiento.',
    location: 'Trujillo, Perú'
  },
  en: {
    agencyName: 'TOUR PERUVIAN SERVICE',
    title: 'Get ready for the',
    titleHighlight: 'Adventure',
    description: 'We are crafting unforgettable tourism experiences. Join our list to be the first to travel with us.',
    placeholder: 'ENTER YOUR EMAIL ADDRESS',
    button: 'Subscribe',
    success: 'Welcome! We will keep you informed about our launch.',
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

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] } }
  };

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.3, delayChildren: 0.5 } 
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#1E2B4D] text-white selection:bg-orange-500 selection:text-white">
      {/* Background Image with Navy Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'easeOut' }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E2B4D]/80 via-[#1E2B4D]/90 to-[#1E2B4D] backdrop-blur-[1px]"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 w-full p-8 md:px-16 md:py-10 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-xs md:text-sm tracking-[0.2em] font-['Montserrat'] font-bold text-white flex items-center gap-2"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">TOUR</span>
          <span>PERUVIAN</span>
        </motion.div>

        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          onClick={toggleLanguage}
          className="text-xs tracking-[0.2em] font-['Montserrat'] uppercase text-white/70 hover:text-orange-400 transition-colors"
        >
          {lang === 'es' ? 'EN / ES' : 'ES / EN'}
        </motion.button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 w-full max-w-4xl mx-auto text-center">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center"
        >
          <motion.h1 
            variants={fadeUp}
            className="font-['Playfair_Display'] text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={lang}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="block"
              >
                {t.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 italic pr-2">
                  {t.titleHighlight}
                </span>
              </motion.span>
            </AnimatePresence>
          </motion.h1>

          <motion.div variants={fadeUp} className="w-16 h-[2px] bg-gradient-to-r from-yellow-400 to-red-500 mb-8"></motion.div>

          <motion.div variants={fadeUp} className="min-h-[80px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={lang}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="font-['Montserrat'] font-light text-sm md:text-base text-white/80 max-w-xl mx-auto leading-relaxed tracking-wide"
              >
                {t.description}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.div variants={fadeUp} className="w-full max-w-md mt-8">
            <form onSubmit={handleSubmit} className="relative flex items-center group">
              <input 
                type="email" 
                placeholder={t.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent border-b border-white/30 py-4 pr-12 font-['Montserrat'] text-xs tracking-widest text-white placeholder-white/50 focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button 
                type="submit" 
                className="absolute right-0 p-2 text-white/50 group-hover:text-orange-500 transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            
            <AnimatePresence>
              {submitted && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="font-['Montserrat'] text-xs text-orange-400 mt-6 tracking-wide"
                >
                  {t.success}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full p-8 md:px-16 md:py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="flex items-center space-x-3 text-white/60"
        >
          <MapPin className="w-4 h-4 text-orange-500" />
          <AnimatePresence mode="wait">
            <motion.span 
              key={lang}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-['Montserrat'] text-[10px] uppercase tracking-[0.2em] font-semibold"
            >
              {t.location}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="flex space-x-6"
        >
          <a href="https://www.facebook.com/agenciadeviajesperuvianservice/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-orange-500 transition-colors">
            <FaFacebook className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/peruvianservice/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-orange-500 transition-colors">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="https://www.youtube.com/channel/UCTqaPQt2jpXy9nmguzR9dtQ" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-orange-500 transition-colors">
            <FaYoutube className="w-5 h-5" />
          </a>
          <a href="https://wa.me/51966638693" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-orange-500 transition-colors">
            <FaWhatsapp className="w-5 h-5" />
          </a>
        </motion.div>
      </footer>
    </div>
  );
}
