import React from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, Users, Package, ChevronDown } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTiktok, FaTripadvisor } from 'react-icons/fa';
import { useTranslations } from '../i18n/utils';
import { packageData } from './FeaturedPackages';
import { itineraries } from '../data/itineraries';

interface Props {
  lang: 'es' | 'en';
}

export default function Footer({ lang }: Props) {
  const t = useTranslations(lang);
  const currentYear = new Date().getFullYear();
  const [adults, setAdults] = React.useState('2');
  const [children, setChildren] = React.useState('0');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const select = form.querySelector('select');
    const selectedId = select?.value;
    
    // get inputs
    const inputs = form.querySelectorAll('input');
    const startDate = (inputs[0] as HTMLInputElement).value;
    const endDate = (inputs[1] as HTMLInputElement).value;

    if (selectedId) {
      const pkg = packageData.find(p => p.id === selectedId);
      if (pkg) {
        const fullTitle = itineraries[pkg.id]?.[lang]?.title || pkg.name;
        const phone = "51966638693";
        
        const formatDate = (dateStr: string) => {
          if (!dateStr) return null;
          const [year, month, day] = dateStr.split('-');
          return `${day}/${month}/${year}`;
        };

        const formattedStart = formatDate(startDate);
        const formattedEnd = formatDate(endDate);

        const message = lang === 'es' 
          ? `Hola *Tours Peruvian service*, me gustaría solicitar información sobre el paquete "${fullTitle}".\n\nDetalles:\n- Adultos: ${adults}\n- Niños: ${children}\n- Fecha de inicio: ${formattedStart || 'No especificada'}\n- Fecha de fin: ${formattedEnd || 'No especificada'}`
          : `Hello *Tours Peruvian service*, I would like to request information about the package "${fullTitle}".\n\nDetails:\n- Adults: ${adults}\n- Children: ${children}\n- Start date: ${formattedStart || 'Not specified'}\n- End date: ${formattedEnd || 'Not specified'}`;
        
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
      }
    }
  };

  return (
    <>
      <div 
        className="relative py-20 px-6 md:px-12 font-['Montserrat'] bg-cover bg-center"
        style={{ backgroundImage: "url('/slide1.avif')" }}
      >
        <div className="absolute inset-0 bg-[#1E2B4D]/80 backdrop-blur-sm"></div>
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-6 md:p-8 relative z-10">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 xl:grid-cols-5 gap-4 md:gap-6 items-end">
            
            <div className="flex flex-col">
              <label htmlFor="startDate" className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange-500" />
                {t('cta.startDate')}
              </label>
              <input id="startDate" required type="date" className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-slate-600 bg-slate-50 hover:bg-white" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="endDate" className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange-500" />
                {t('cta.endDate')}
              </label>
              <input id="endDate" required type="date" className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-slate-600 bg-slate-50 hover:bg-white" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="packageSelect" className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                <Package className="w-4 h-4 text-orange-500" />
                {t('cta.package')}
              </label>
              <div className="relative">
                <select id="packageSelect" required className="w-full border border-slate-200 rounded-xl p-3 pr-10 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-slate-600 bg-slate-50 hover:bg-white cursor-pointer appearance-none truncate">
                  <option value="" disabled hidden>{t('cta.package')}</option>
                  {packageData.map((pkg) => {
                    const fullTitle = itineraries[pkg.id]?.[lang]?.title || pkg.name;
                    return (
                      <option key={pkg.id} value={pkg.id}>{fullTitle}</option>
                    );
                  })}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col w-1/2">
                <label htmlFor="adultsCount" className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-orange-500" />
                  {t('cta.adults')}
                </label>
                <input id="adultsCount" required type="number" min="1" value={adults} onChange={(e) => setAdults(e.target.value)} onWheel={(e) => e.currentTarget.blur()} className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-slate-600 bg-slate-50 hover:bg-white" />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="childrenCount" className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-orange-500" />
                  {t('cta.children')}
                </label>
                <input id="childrenCount" required type="number" min="0" value={children} onChange={(e) => setChildren(e.target.value)} onWheel={(e) => e.currentTarget.blur()} className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-slate-600 bg-slate-50 hover:bg-white" />
              </div>
            </div>

            <button type="submit" className="xl:col-span-1 flex items-center justify-center bg-orange-700 hover:bg-orange-800 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 h-[46px] w-full mt-4 lg:mt-0 shadow-lg shadow-orange-700/30 hover:shadow-orange-700/50 hover:-translate-y-0.5 cursor-pointer">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
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
              <img src="/logo.png" alt="Turismo Peruvian Service" width={200} height={80} loading="lazy" decoding="async" className="w-auto h-14 md:h-20 lg:h-24 brightness-0 invert opacity-90 object-contain" />
            </a>
            <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-6 md:mb-0">
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
              <li><a href={lang === 'es' ? '/' : '/en/'} className="text-white/80 hover:text-orange-400 transition-colors text-xs md:text-sm inline-block py-1">{t('nav.home')}</a></li>
              <li><a href={lang === 'es' ? '/destinos/' : '/en/destinations/'} className="text-white/80 hover:text-orange-400 transition-colors text-xs md:text-sm inline-block py-1">{t('nav.destinations')}</a></li>
              <li><a href={lang === 'es' ? '/paquetes/' : '/en/packages/'} className="text-white/80 hover:text-orange-400 transition-colors text-xs md:text-sm inline-block py-1">{t('nav.packages')}</a></li>
              <li><a href={lang === 'es' ? '/nosotros/' : '/en/about/'} className="text-white/80 hover:text-orange-400 transition-colors text-xs md:text-sm inline-block py-1">{t('nav.about')}</a></li>
              <li><a href={lang === 'es' ? '/esnna/' : '/en/esnna/'} className="text-white/80 hover:text-orange-400 transition-colors text-xs md:text-sm inline-block py-1">{t('nav.esnna')}</a></li>
              <li><a href={lang === 'es' ? '/libro-de-reclamaciones/' : '/en/complaints-book/'} className="text-white/80 hover:text-orange-400 transition-colors text-xs md:text-sm inline-block py-1">{t('nav.complaints')}</a></li>
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
                <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                  Jr San Martin 541<br />
                  Trujillo – La Libertad
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-orange-400 mr-3 md:mr-4 flex-shrink-0" />
                <p className="text-white/80 text-xs md:text-sm">966638693</p>
              </div>
              <div className="flex items-start">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-orange-400 mr-3 md:mr-4 mt-0.5 flex-shrink-0" />
                <p className="text-white/80 text-xs md:text-sm break-all">reservas@toursperuvianservice.com.pe</p>
              </div>
              <div className="flex items-start">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-orange-400 mr-3 md:mr-4 mt-0.5 flex-shrink-0" />
                <p className="text-white/80 text-xs md:text-sm break-all">tours.peruvianservice@gmail.com</p>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-orange-400 mr-3 md:mr-4 mt-0.5 flex-shrink-0" />
                <div className="text-white/80 text-xs md:text-sm leading-relaxed">
                  <p>{lang === 'es' ? 'Atención 24/7 desde la web' : '24/7 service via web'}</p>
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
                <a href="https://www.facebook.com/share/1BXKK5nu7J/" target="_blank" rel="noopener noreferrer" title="Facebook" aria-label="Síguenos en Facebook" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300">
                  <FaFacebookF className="w-5 h-5 text-white" />
                </a>
                <a href="https://www.instagram.com/peruvianservice/" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Síguenos en Instagram" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300">
                  <FaInstagram className="w-5 h-5 text-white" />
                </a>
                <a href="https://www.tiktok.com/@tour.peruvianservice" target="_blank" rel="noopener noreferrer" title="TikTok" aria-label="Síguenos en TikTok" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300">
                  <FaTiktok className="w-5 h-5 text-white" />
                </a>
                <a href="https://maps.app.goo.gl/BCibvuEL4YgNFedf9" target="_blank" rel="noopener noreferrer" title="Google Maps Reviews" aria-label="Ver reseñas en Google Maps" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </a>
                <a href="https://www.tripadvisor.es/Attraction_Review-g298444-d32825119-Reviews-Agencia_De_Viajes_Peruvian_Service-Trujillo_La_Libertad_Region.html" target="_blank" rel="noopener noreferrer" title="TripAdvisor Reviews" aria-label="Ver reseñas en TripAdvisor" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300">
                  <FaTripadvisor className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
            
            <div className="flex-1">
              <h4 className="text-base font-bold mb-4 md:mb-6 flex items-center whitespace-nowrap">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                {t('footer.accepts')}
              </h4>
              <div className="flex flex-wrap gap-3 md:gap-4 mt-2">
                <img src="/img/pagos/visa.avif" alt="Visa" width={40} height={24} loading="lazy" decoding="async" className="w-auto h-6 md:h-7 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/img/pagos/mastercard.avif" alt="Mastercard" width={40} height={24} loading="lazy" decoding="async" className="w-auto h-6 md:h-7 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/img/pagos/amex.avif" alt="American Express" width={40} height={24} loading="lazy" decoding="async" className="w-auto h-6 md:h-7 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/img/pagos/dinners.avif" alt="Diners Club" width={40} height={24} loading="lazy" decoding="async" className="w-auto h-6 md:h-7 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/img/pagos/yape.avif" alt="Yape" width={40} height={24} loading="lazy" decoding="async" className="w-auto h-6 md:h-7 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/img/pagos/efectivo.avif" alt="Pago en Efectivo" width={40} height={24} loading="lazy" decoding="async" className="w-auto h-6 md:h-7 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col xl:flex-row justify-between items-center text-center xl:text-left gap-4">
          <p className="text-white/70 text-xs">
            &copy; {currentYear} Turismo Peruvian Service - Todos los derechos reservados. | RUC: 20601386144
          </p>
          <div className="flex space-x-2">
            <a href={lang === 'es' ? '/privacidad/' : '/en/privacy/'} className="text-white/70 hover:text-white/90 text-xs transition-colors p-2">{lang === 'es' ? 'Privacidad' : 'Privacy Policy'}</a>
            <span className="text-white/30 text-xs px-1">|</span>
            <a href={lang === 'es' ? '/terminos/' : '/en/terms/'} className="text-white/70 hover:text-white/90 text-xs transition-colors p-2">{lang === 'es' ? 'Términos' : 'Terms & Conditions'}</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
