import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useTranslations } from '../i18n/utils';

interface Props {
  lang: 'es' | 'en';
}

export default function Footer({ lang }: Props) {
  const t = useTranslations(lang);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E2B4D] text-white pt-16 pb-8 font-['Montserrat']">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & About */}
          <div className="col-span-1 lg:col-span-1">
            <a href={lang === 'es' ? '/' : '/en/'} className="inline-block mb-6">
              <img src="/logo.png" alt="Tour Peruvian Service" className="h-16 brightness-0 invert opacity-90" />
            </a>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {t('footer.about')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
              {t('footer.links')}
            </h4>
            <ul className="space-y-4">
              <li><a href={lang === 'es' ? '/' : '/en/'} className="text-white/70 hover:text-orange-400 transition-colors text-sm">{t('nav.home')}</a></li>
              <li><a href={lang === 'es' ? '/destinos' : '/en/destinations'} className="text-white/70 hover:text-orange-400 transition-colors text-sm">{t('nav.destinations')}</a></li>
              <li><a href={lang === 'es' ? '/paquetes' : '/en/packages'} className="text-white/70 hover:text-orange-400 transition-colors text-sm">{t('nav.packages')}</a></li>
              <li><a href={lang === 'es' ? '/nosotros' : '/en/about'} className="text-white/70 hover:text-orange-400 transition-colors text-sm">{t('nav.about')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
              {t('footer.contact')}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-orange-400 mr-4 mt-1 flex-shrink-0" />
                <p className="text-white/70 text-sm leading-relaxed">
                  Jr San Martin 541<br />
                  Trujillo – La Libertad
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-orange-400 mr-4 flex-shrink-0" />
                <p className="text-white/70 text-sm">966638693</p>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-orange-400 mr-4 mt-1 flex-shrink-0" />
                <div className="text-white/70 text-sm leading-relaxed">
                  <p>info@toursperuvianservice.com</p>
                  <p>tours.peruvianservice@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-orange-400 mr-4 mt-1 flex-shrink-0" />
                <div className="text-white/70 text-sm leading-relaxed">
                  <p>{lang === 'es' ? 'Lunes a viernes: 9:30am - 1:00pm y 4:00pm - 8:00pm' : 'Monday to Friday: 9:30am - 1:00pm and 4:00pm - 8:00pm'}</p>
                  <p>{lang === 'es' ? 'Sábado: 9:30am - 1:00pm' : 'Saturday: 9:30am - 1:00pm'}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Tour Peruvian Service. {t('footer.rights')}
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white/80 text-sm transition-colors">Privacidad</a>
            <a href="#" className="text-white/50 hover:text-white/80 text-sm transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
