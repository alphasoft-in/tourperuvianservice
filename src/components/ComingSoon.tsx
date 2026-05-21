import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa';

type Language = 'es' | 'en';

const translations = {
  es: {
    agencyName: 'TOUR PERUVIAN SERVICE',
    title: 'Próximamente',
    description: 'Estamos trabajando en una nueva experiencia digital. Descubre los mejores destinos del Perú con nuestro servicio exclusivo de viajes y turismo.',
    placeholder: 'Ingresa tu correo electrónico',
    button: 'Notificarme',
    success: 'Gracias por registrarte. Te contactaremos pronto.',
    location: 'Trujillo, Perú'
  },
  en: {
    agencyName: 'TOUR PERUVIAN SERVICE',
    title: 'Coming Soon',
    description: 'We are working on a new digital experience. Discover the best destinations in Peru with our exclusive travel and tourism service.',
    placeholder: 'Enter your email address',
    button: 'Notify Me',
    success: 'Thank you for subscribing. We will contact you soon.',
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

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 font-['Montserrat'] overflow-hidden">
      
      {/* Background Image of Trujillo / Peruvian Coast with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577085732168-524f2b5a1b3f?q=80&w=2070&auto=format&fit=crop')" }}
        />
        {/* Navy blue overlay with slight blur to make the card pop */}
        <div className="absolute inset-0 bg-[#1E2B4D]/60 backdrop-blur-[4px]"></div>
      </div>

      {/* Main Container */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Top Header Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>

        <div className="p-8 md:p-12">
          
          {/* Logo / Agency Name & Lang Toggle */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-[11px] font-bold tracking-widest text-[#1E2B4D]">
              TOUR PERUVIAN<br />SERVICE
            </h2>
            <button 
              onClick={toggleLanguage}
              className="text-[10px] font-medium text-slate-400 hover:text-[#1E2B4D] transition-colors uppercase tracking-wider"
            >
              {lang === 'es' ? 'EN / ES' : 'ES / EN'}
            </button>
          </div>

          {/* Content */}
          <div className="mb-8">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${lang}`}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 5 }}
                transition={{ duration: 0.3 }}
                className="text-2xl md:text-3xl font-bold text-[#1E2B4D] mb-4"
              >
                {t.title}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${lang}`}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 5 }}
                transition={{ duration: 0.3 }}
                className="text-sm text-slate-500 leading-relaxed"
              >
                {t.description}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder={t.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-lg text-[#1E2B4D] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E2B4D]/20 focus:border-[#1E2B4D] transition-all"
              />
              <button 
                type="submit" 
                className="w-full py-3 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-[#1E2B4D] to-[#2A3B66] hover:shadow-lg transition-all"
              >
                {t.button}
              </button>
            </div>
            
            <AnimatePresence>
              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-xs text-green-600 font-medium mt-4 text-center">
                    {t.success}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          {/* Divider */}
          <div className="w-full h-[1px] bg-slate-100 my-8"></div>

          {/* Footer inside card */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between text-slate-400">
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/agenciadeviajesperuvianservice/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                  <FaFacebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/peruvianservice/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a href="https://www.youtube.com/channel/UCTqaPQt2jpXy9nmguzR9dtQ" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                  <FaYoutube className="w-4 h-4" />
                </a>
                <a href="https://wa.me/51966638693" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                  <FaWhatsapp className="w-4 h-4" />
                </a>
              </div>
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-[10px] uppercase font-semibold tracking-wider">
                  {t.location}
                </span>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
