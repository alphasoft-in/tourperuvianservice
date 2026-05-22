import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslations } from '../i18n/utils';
import LanguagePicker from './LanguagePicker';

interface Props {
  lang: 'es' | 'en';
  currentRoute?: string;
}

export default function Navbar({ lang, currentRoute = '' }: Props) {
  const [scrolledVal, setScrolledVal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations(lang);

  const isHomePage = currentRoute === '/' || currentRoute === '/en/' || currentRoute === '';

  useEffect(() => {
    const handleScroll = () => {
      setScrolledVal(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolled = !isHomePage || scrolledVal;

  const links = [
    { name: t('nav.home'), href: lang === 'es' ? '/' : '/en/' },
    { name: t('nav.destinations'), href: lang === 'es' ? '/destinos' : '/en/destinations' },
    { name: t('nav.packages'), href: lang === 'es' ? '/paquetes' : '/en/packages' },
    { name: t('nav.about'), href: lang === 'es' ? '/nosotros' : '/en/about' },
    { name: t('nav.contact'), href: lang === 'es' ? '/contacto' : '/en/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-['Montserrat'] ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <a href={lang === 'es' ? '/' : '/en/'} className="flex items-center group">
          <img 
            src="/logo.png" 
            alt="Tour Peruvian Service" 
            className={`transition-all duration-300 object-contain ${
              isScrolled 
                ? 'h-12 md:h-14' 
                : 'h-16 md:h-20 brightness-0 invert opacity-90 group-hover:opacity-100'
            }`}
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center space-x-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors uppercase tracking-wider ${
                isScrolled ? 'text-slate-700 hover:text-orange-500' : 'text-white/90 hover:text-orange-400'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <div className={`h-6 w-[1px] mx-4 transition-colors ${isScrolled ? 'bg-slate-300' : 'bg-white/20'}`}></div>
          
          <LanguagePicker currentLang={lang} currentRoute={currentRoute} isScrolled={isScrolled} />
        </div>

        {/* Mobile Hamburger */}
        <div className="xl:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`focus:outline-none transition-colors ${isScrolled ? 'text-slate-800' : 'text-white'}`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-[#1E2B4D] border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-base font-semibold text-white/90 hover:text-orange-400 transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="w-full h-[1px] bg-white/10 my-4"></div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 uppercase tracking-widest">Idioma</span>
                <LanguagePicker currentLang={lang} currentRoute={currentRoute} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
