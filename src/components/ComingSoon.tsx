import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Compass, Mountain, Send, Globe } from 'lucide-react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

type Language = 'es' | 'en';

const translations = {
  es: {
    subtitle: 'Tour Peruvian Service',
    titleStart: 'Descubre la Magia',
    titleMiddle: 'de',
    titleHighlight: 'Perú',
    description: 'Estamos preparando experiencias inolvidables. Aventuras, cultura y paisajes que te quitarán el aliento. Sé el primero en enterarte cuando despeguemos.',
    placeholder: 'Tu correo electrónico',
    success: '¡Gracias por suscribirte! Te mantendremos informado.',
    location: 'Cusco, Perú'
  },
  en: {
    subtitle: 'Tour Peruvian Service',
    titleStart: 'Discover the Magic',
    titleMiddle: 'of',
    titleHighlight: 'Peru',
    description: 'We are preparing unforgettable experiences. Adventures, culture, and breathtaking landscapes. Be the first to know when we take off.',
    placeholder: 'Your email address',
    success: 'Thank you for subscribing! We will keep you updated.',
    location: 'Cusco, Peru'
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
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  const toggleLanguage = () => {
    setLang(prev => prev === 'es' ? 'en' : 'es');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 font-sans">
      {/* Language Toggle */}
      <div className="absolute top-6 right-6 z-20">
        <button 
          onClick={toggleLanguage}
          className="flex items-center space-x-2 bg-slate-800/60 hover:bg-slate-700/80 backdrop-blur-md text-slate-300 px-4 py-2 rounded-full border border-slate-700 transition-all"
        >
          <Globe className="w-4 h-4 text-emerald-400" />
          <span className="text-sm font-medium uppercase">{lang === 'es' ? 'EN' : 'ES'}</span>
        </button>
      </div>

      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/30 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-amber-600/20 rounded-full blur-[150px]"
        />
      </div>

      {/* Main Content Card */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-4xl mx-auto px-6 py-12 md:py-20"
      >
        <div className="backdrop-blur-xl bg-slate-900/50 border border-slate-700/50 p-8 md:p-16 rounded-3xl shadow-2xl shadow-emerald-900/20 text-center">
          
          <motion.div variants={itemVariants} className="flex justify-center items-center space-x-3 mb-6">
            <Mountain className="w-8 h-8 text-emerald-400" />
            <h2 className="text-xl md:text-2xl font-semibold tracking-widest text-slate-300 uppercase">
              {t.subtitle}
            </h2>
            <Compass className="w-8 h-8 text-emerald-400" />
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight min-h-[140px] md:min-h-[160px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={lang}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {t.titleStart} <br className="hidden md:block"/> {t.titleMiddle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">{t.titleHighlight}</span>
              </motion.div>
            </AnimatePresence>
          </motion.h1>

          <motion.div variants={itemVariants} className="min-h-[80px] mb-10">
            <AnimatePresence mode="wait">
              <motion.p 
                key={lang}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
              >
                {t.description}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-md mx-auto mb-12">
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <input 
                type="email" 
                placeholder={t.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-slate-800/80 border border-slate-600 rounded-full py-4 pl-6 pr-16 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
              />
              <button 
                type="submit" 
                className="absolute right-2 p-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 rounded-full transition-colors"
              >
                <Send className="w-6 h-6" />
              </button>
            </form>
            {submitted && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-emerald-400 mt-4 text-sm font-medium"
              >
                {t.success}
              </motion.p>
            )}
          </motion.div>

          {/* Social / Info Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-6">
            <a href="#" className="p-3 bg-slate-800/60 rounded-full text-slate-400 hover:text-emerald-400 hover:bg-slate-700/80 transition-all border border-slate-700 hover:border-emerald-500/50">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-slate-800/60 rounded-full text-slate-400 hover:text-emerald-400 hover:bg-slate-700/80 transition-all border border-slate-700 hover:border-emerald-500/50">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-slate-800/60 rounded-full text-slate-400 hover:text-emerald-400 hover:bg-slate-700/80 transition-all border border-slate-700 hover:border-emerald-500/50">
              <FaTwitter className="w-5 h-5" />
            </a>
            <div className="flex items-center space-x-2 text-slate-400 px-3 bg-slate-800/60 rounded-full border border-slate-700">
              <MapPin className="w-5 h-5 text-amber-400" />
              <AnimatePresence mode="wait">
                <motion.span 
                  key={lang}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-sm font-medium"
                >
                  {t.location}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
