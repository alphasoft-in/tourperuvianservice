import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslations } from '../i18n/utils';
import LanguagePicker from './LanguagePicker';
import { packageData } from './FeaturedPackages';

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
    // Check initial scroll position on mount, useful when navigating back with view transitions
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolled = !isHomePage || scrolledVal;

  const links = [
    { name: t('nav.home'), href: lang === 'es' ? '/' : '/en/' },
    { 
      name: t('nav.destinations'), 
      href: lang === 'es' ? '/destinos' : '/en/destinations',
      dropdown: [
        { name: lang === 'es' ? 'Nacionales' : 'National', href: lang === 'es' ? '/destinos/nacionales' : '/en/destinations/national' },
        { name: lang === 'es' ? 'Internacionales' : 'International', href: lang === 'es' ? '/destinos/internacionales' : '/en/destinations/international' }
      ]
    },
    { name: t('nav.packages'), href: lang === 'es' ? '/paquetes' : '/en/packages' },
    { name: t('nav.transport'), href: lang === 'es' ? '/transporte' : '/en/transport' },
    { name: t('nav.about'), href: lang === 'es' ? '/nosotros' : '/en/about' },
    { name: t('nav.gallery'), href: lang === 'es' ? '/galeria' : '/en/gallery' },
    { name: t('nav.contact'), href: lang === 'es' ? '/contacto' : '/en/contact' },
  ];

  const isActive = (href: string) => {
    try {
      let currentPath = currentRoute || '';
      let effectiveCurrentPath = currentPath;

      // Handle package details page active state
      let match = currentPath.match(/^paquetes\/([^\/]+)/);
      if (!match && lang !== 'es') {
        match = currentPath.match(/^packages\/([^\/]+)/);
      }
      
      if (match) {
        const id = match[1];
        const pkg = packageData.find(p => p.id === id);
        if (pkg) {
          if (pkg.category === 'destino') {
            effectiveCurrentPath = pkg.locationType === 'internacional' ? 'destinos/internacionales' : 'destinos/nacionales';
            if (lang !== 'es') {
              effectiveCurrentPath = pkg.locationType === 'internacional' ? 'destinations/international' : 'destinations/national';
            }
          } else {
            effectiveCurrentPath = lang === 'es' ? 'paquetes' : 'packages';
          }
        }
      }

      if (lang !== 'es') {
        effectiveCurrentPath = effectiveCurrentPath === '/' ? `/${lang}/` : `/${lang}/${effectiveCurrentPath}`;
      }
      
      const normalize = (p: string) => {
        if (!p) return '';
        if (!p.startsWith('/')) p = '/' + p;
        if (p.endsWith('/') && p.length > 1) p = p.slice(0, -1);
        return p;
      };

      const normCurrent = normalize(effectiveCurrentPath);
      const normHref = normalize(href);
      
      if (normHref === '/' || normHref === `/${lang}`) {
        return normCurrent === normHref;
      }
      
      return normCurrent === normHref || normCurrent.startsWith(normHref + '/');
    } catch (e) {
      return false;
    }
  };

  return (
    <nav
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
          {links.map((link) => {
            const active = isActive(link.href) || (link.dropdown && link.dropdown.some(sub => isActive(sub.href)));
            
            if (link.dropdown) {
              return (
                <div key={link.name} className="relative group pt-4 pb-4">
                  <span 
                    className={`cursor-pointer text-sm font-medium transition-colors uppercase tracking-wider flex items-center ${
                      active 
                        ? isScrolled ? 'text-orange-500 font-bold' : 'text-orange-400 font-bold'
                        : isScrolled 
                          ? 'text-slate-700 group-hover:text-orange-500' 
                          : 'text-white/90 group-hover:text-orange-400'
                    }`}
                  >
                    {link.name} <ChevronDown className="w-4 h-4 ml-1" />
                  </span>
                  <div className="absolute left-0 mt-4 w-48 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {link.dropdown.map((sublink) => {
                        const subActive = isActive(sublink.href);
                        return (
                          <a 
                            key={sublink.name} 
                            href={sublink.href} 
                            className={`block px-5 py-3 text-sm transition-colors uppercase tracking-wider font-medium ${
                              subActive 
                                ? 'bg-orange-50 text-orange-500' 
                                : 'text-slate-700 hover:bg-slate-50 hover:text-orange-500'
                            }`}
                          >
                            {sublink.name}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors uppercase tracking-wider ${
                  active 
                    ? isScrolled ? 'text-orange-500 font-bold' : 'text-orange-400 font-bold'
                    : isScrolled 
                      ? 'text-slate-700 hover:text-orange-500' 
                      : 'text-white/90 hover:text-orange-400'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          
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
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#1E2B4D] border-t border-white/10">
          <div className="flex flex-col px-6 py-6 space-y-4">
            {links.map((link) => {
              const active = isActive(link.href) || (link.dropdown && link.dropdown.some(sub => isActive(sub.href)));
              
              if (link.dropdown) {
                return (
                  <div key={link.name} className="flex flex-col space-y-3">
                    <span 
                      className={`cursor-pointer text-base transition-colors uppercase tracking-widest ${
                        active ? 'text-orange-400 font-bold' : 'text-white/90 hover:text-orange-400 font-semibold'
                      }`}
                    >
                      {link.name}
                    </span>
                    <div className="pl-4 flex flex-col space-y-3 border-l-2 border-white/10 ml-2">
                      {link.dropdown.map((sublink) => {
                        const subActive = isActive(sublink.href);
                        return (
                          <a 
                            key={sublink.name} 
                            href={sublink.href} 
                            className={`text-sm transition-colors uppercase tracking-wider font-medium ${
                              subActive ? 'text-orange-400 font-bold' : 'text-white/70 hover:text-orange-400'
                            }`}
                          >
                            {sublink.name}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`text-base transition-colors uppercase tracking-widest ${
                    active ? 'text-orange-400 font-bold' : 'text-white/90 hover:text-orange-400 font-semibold'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            
            <div className="w-full h-[1px] bg-white/10 my-4"></div>
            
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400 uppercase tracking-widest">Idioma</span>
              <LanguagePicker currentLang={lang} currentRoute={currentRoute} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
