import React from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, Users, Package, ChevronDown } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTiktok, FaTripadvisor, FaYoutube } from 'react-icons/fa';
import { useTranslations } from '../i18n/utils';
import { packageData } from './FeaturedPackages';

interface Props {
  lang: 'es' | 'en';
}

export default function Footer({ lang }: Props) {
  const t = useTranslations(lang);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div 
        className="relative py-20 px-6 md:px-12 font-['Montserrat'] bg-cover bg-center"
        style={{ backgroundImage: "url('/slide1.png')" }}
      >
        <div className="absolute inset-0 bg-[#1E2B4D]/80 backdrop-blur-sm"></div>
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-6 md:p-8 relative z-10">
          <form className="grid grid-cols-1 xl:grid-cols-5 gap-4 md:gap-6 items-end">
            
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange-500" />
                {t('cta.startDate')}
              </label>
              <input type="date" className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-slate-600 bg-slate-50 hover:bg-white" />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange-500" />
                {t('cta.endDate')}
              </label>
              <input type="date" className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-slate-600 bg-slate-50 hover:bg-white" />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                <Package className="w-4 h-4 text-orange-500" />
                {t('cta.package')}
              </label>
              <div className="relative">
                <select className="w-full border border-slate-200 rounded-xl p-3 pr-10 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-slate-600 bg-slate-50 hover:bg-white cursor-pointer appearance-none">
                  <option value="">{t('cta.package')}</option>
                  {packageData.map(pkg => (
                    <option key={pkg.id} value={pkg.id}>{pkg.name}</option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col w-1/2">
                <label className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-orange-500" />
                  {t('cta.adults')}
                </label>
                <input type="number" min="1" defaultValue={2} className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-slate-600 bg-slate-50 hover:bg-white" />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-orange-500" />
                  {t('cta.children')}
                </label>
                <input type="number" min="0" defaultValue={0} className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-slate-600 bg-slate-50 hover:bg-white" />
              </div>
            </div>

            <button type="submit" className="xl:col-span-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 h-[46px] w-full mt-4 lg:mt-0 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5">
              {t('cta.search')}
            </button>

          </form>
        </div>
      </div>

      <footer className="bg-[#1E2B4D] text-white pt-12 md:pt-14 pb-6 font-['Montserrat']">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-8 xl:gap-12 mb-8 md:mb-12">
          
          {/* Brand & About */}
          <div className="col-span-1 sm:col-span-2 xl:col-span-4 xl:pr-6">
            <a href={lang === 'es' ? '/' : '/en/'} className="inline-block mb-4 md:mb-6">
              <img src="/logo.png" alt="Turismo Peruvian Service" className="h-14 md:h-20 lg:h-24 brightness-0 invert opacity-90 object-contain" />
            </a>
            <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-6 md:mb-0">
              {t('footer.about')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 xl:col-span-2">
            <h4 className="text-base font-bold mb-4 md:mb-6 flex items-center whitespace-nowrap">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
              {t('footer.links')}
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <li><a href={lang === 'es' ? '/' : '/en/'} className="text-white/70 hover:text-orange-400 transition-colors text-xs md:text-sm">{t('nav.home')}</a></li>
              <li><a href={lang === 'es' ? '/destinos' : '/en/destinations'} className="text-white/70 hover:text-orange-400 transition-colors text-xs md:text-sm">{t('nav.destinations')}</a></li>
              <li><a href={lang === 'es' ? '/paquetes' : '/en/packages'} className="text-white/70 hover:text-orange-400 transition-colors text-xs md:text-sm">{t('nav.packages')}</a></li>
              <li><a href={lang === 'es' ? '/nosotros' : '/en/about'} className="text-white/70 hover:text-orange-400 transition-colors text-xs md:text-sm">{t('nav.about')}</a></li>
              <li><a href="#" className="text-white/70 hover:text-orange-400 transition-colors text-xs md:text-sm">{t('nav.esnna')}</a></li>
              <li><a href="#" className="text-white/70 hover:text-orange-400 transition-colors text-xs md:text-sm">{t('nav.complaints')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 xl:col-span-3">
            <h4 className="text-base font-bold mb-4 md:mb-6 flex items-center whitespace-nowrap">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
              {t('footer.contact')}
            </h4>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-orange-400 mr-3 md:mr-4 mt-0.5 flex-shrink-0" />
                <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                  Jr San Martin 541<br />
                  Trujillo – La Libertad
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-orange-400 mr-3 md:mr-4 flex-shrink-0" />
                <p className="text-white/70 text-xs md:text-sm">966638693</p>
              </div>
              <div className="flex items-start">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-orange-400 mr-3 md:mr-4 mt-0.5 flex-shrink-0" />
                <p className="text-white/70 text-xs md:text-sm break-all">info@toursperuvianservice.com</p>
              </div>
              <div className="flex items-start">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-orange-400 mr-3 md:mr-4 mt-0.5 flex-shrink-0" />
                <p className="text-white/70 text-xs md:text-sm break-all">tours.peruvianservice@gmail.com</p>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-orange-400 mr-3 md:mr-4 mt-0.5 flex-shrink-0" />
                <div className="text-white/70 text-xs md:text-sm leading-relaxed">
                  <p>{lang === 'es' ? 'L-V: 9:30am-1pm / 4pm-8pm' : 'Mon-Fri: 9:30am-1pm / 4pm-8pm'}</p>
                  <p>{lang === 'es' ? 'Sáb: 9:30am-1pm' : 'Sat: 9:30am-1pm'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Payments */}
          <div className="col-span-1 sm:col-span-2 xl:col-span-3 flex flex-col sm:flex-row xl:flex-col gap-8 sm:gap-12 xl:gap-8">
            <div className="flex-1">
              <h4 className="text-base font-bold mb-4 md:mb-6 flex items-center whitespace-nowrap">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                {t('footer.follow')}
              </h4>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300">
                  <FaFacebookF className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300">
                  <FaInstagram className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300">
                  <FaTiktok className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300">
                  <FaYoutube className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300">
                  <FaTripadvisor className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
            
            <div className="flex-1">
              <h4 className="text-base font-bold mb-4 md:mb-6 flex items-center whitespace-nowrap">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                {t('footer.accepts')}
              </h4>
              <div className="flex flex-wrap gap-3 md:gap-4 mt-2">
                <img src="/img/pagos/visa.webp" alt="Visa" className="h-6 md:h-7 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/img/pagos/mastercard.webp" alt="Mastercard" className="h-6 md:h-7 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/img/pagos/amex.webp" alt="American Express" className="h-6 md:h-7 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/img/pagos/dinners.webp" alt="Diners Club" className="h-6 md:h-7 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/img/pagos/yape.png" alt="Yape" className="h-6 md:h-7 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/img/pagos/efectivo.webp" alt="Pago en Efectivo" className="h-6 md:h-7 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col xl:flex-row justify-between items-center text-center xl:text-left gap-4">
          <p className="text-white/50 text-xs">
            &copy; {currentYear} Turismo Peruvian Service - Todos los derechos reservados. | RUC: 20601386144
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white/80 text-xs transition-colors">Privacidad</a>
            <a href="#" className="text-white/50 hover:text-white/80 text-xs transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
