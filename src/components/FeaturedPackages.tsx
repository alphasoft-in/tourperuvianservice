import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import { useTranslations } from '../i18n/utils';

interface Props {
  lang: 'es' | 'en';
  category?: 'destino' | 'paquete';
  locationType?: 'nacional' | 'internacional';
  title?: string;
  subtitle?: string;
  featuredOnly?: boolean;
}

export const packageData = [
  { id: 'huaraz', name: 'Huaraz', days: 4, nights: 3, image: '/img/paquetes_recomendados/huaraz.png', category: 'destino', isFeatured: true, locationType: 'nacional' },
  { id: 'tarapoto', name: 'Tarapoto', days: 4, nights: 3, image: '/img/paquetes_recomendados/tarapoto.png', category: 'destino', isFeatured: true, locationType: 'nacional' },
  { id: 'cajamarca', name: 'Cajamarca', days: 3, nights: 2, image: '/img/paquetes_recomendados/cajamarca.png', category: 'destino', isFeatured: true, locationType: 'nacional' },
  { id: 'chachapoyas', name: 'Chachapoyas', days: 3, nights: 2, image: '/img/paquetes_recomendados/chachapoyas.png', category: 'destino', isFeatured: true, locationType: 'nacional' },
  { id: 'cusco', name: 'Cusco', days: 5, nights: 4, image: '/img/paquetes_recomendados/cusco.png', category: 'destino', isFeatured: true, locationType: 'nacional' },
  { id: 'arequipa', name: 'Arequipa', days: 4, nights: 3, image: '/img/paquetes_recomendados/arequipa.png', category: 'destino', isFeatured: true, locationType: 'nacional' },
  { id: 'ica', name: 'Ica', days: 3, nights: 2, image: '/img/paquetes_recomendados/ica.png', category: 'destino', isFeatured: true, locationType: 'nacional' },
  { id: 'lima', name: 'Lima', days: 3, nights: 2, image: '/img/paquetes_recomendados/lima.png', category: 'destino', isFeatured: true, locationType: 'nacional' },
  { id: 'trujillo', name: 'Trujillo', days: 4, nights: 3, image: '/img/paquetes_recomendados/trujillo.png', category: 'destino', isFeatured: true, locationType: 'nacional' },
  { id: 'salpo', name: 'Salpo', days: 1, nights: 0, image: '/img/paquetes/salpo.png', category: 'paquete', isFeatured: false, locationType: 'nacional' },
  { id: 'full-day-trujillo', name: 'Full Day Trujillo', days: 1, nights: 0, image: '/img/paquetes/trujillo-fullday.png', category: 'paquete', isFeatured: false, locationType: 'nacional' },
  { id: 'caleta-colorada', name: 'Caleta Colorada', days: 1, nights: 0, image: '/img/paquetes/caleta_colorada.png', category: 'paquete', isFeatured: false, locationType: 'nacional' },
  { id: 'explora-jequetepeque', name: 'Explora Jequetepeque', days: 1, nights: 0, image: '/img/paquetes/explora_jequetepeque.png', category: 'paquete', isFeatured: false, locationType: 'nacional' },
  { id: 'ruta-del-vino', name: 'Ruta del Vino', days: 1, nights: 0, image: '/img/paquetes/rutas_del_vino.png', category: 'paquete', isFeatured: false, locationType: 'nacional' },
  { id: 'mayascon', name: 'Mayascón', days: 1, nights: 1, image: '/img/paquetes/mayascon.png', category: 'paquete', isFeatured: false, locationType: 'nacional' },
  { id: 'ruta-chancay-medieval', name: 'Ruta Chancay Medieval', days: 1, nights: 1, image: '/img/paquetes/chancay_medieval.png', category: 'paquete', isFeatured: false, locationType: 'nacional' },
  { id: 'rio-de-janeiro-new-year', name: 'Rio de Janeiro', days: 4, nights: 3, image: '/img/paquetes_internacionales/rio-janeiro.png', category: 'destino', isFeatured: false, locationType: 'internacional' },
  { id: 'punta-cana', name: 'Punta Cana', days: 5, nights: 4, image: '/img/paquetes_internacionales/punta-cana.png', category: 'destino', isFeatured: false, locationType: 'internacional' },
  { id: 'cartagena-new-year', name: 'Cartagena', days: 5, nights: 4, image: '/img/paquetes_internacionales/cartagena.png', category: 'destino', isFeatured: false, locationType: 'internacional' },
];

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0 }
};

export default function FeaturedPackages({ lang, category, locationType, title, subtitle, featuredOnly }: Props) {
  const t = useTranslations(lang);

  let filteredData = packageData;
  if (category) {
    filteredData = filteredData.filter(pkg => pkg.category === category);
  }
  if (locationType) {
    filteredData = filteredData.filter(pkg => pkg.locationType === locationType);
  }
  if (featuredOnly) {
    filteredData = filteredData.filter(pkg => pkg.isFeatured);
  }

  return (
    <section className="py-16 md:py-24 bg-slate-50 font-['Montserrat']">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2B4D] mb-4 md:mb-6 tracking-tight leading-tight">
            {title || t('packages.title')}
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-sm md:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
            {subtitle || t('packages.subtitle')}
          </p>
        </div>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredData.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={itemVariants}
              className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group flex flex-col [transform:translateZ(0)]"
            >
              {/* Image Container */}
              <div className="relative h-56 md:h-64 overflow-hidden rounded-t-2xl md:rounded-t-3xl [transform:translateZ(0)]">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-t-2xl md:rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2B4D]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 md:bottom-4 left-4 md:left-6 right-4 md:right-6 flex items-end justify-between">
                  <h3 className="text-lg md:text-xl font-bold text-white drop-shadow-md capitalize">
                    {pkg.name}
                  </h3>
                  <div className="bg-white/20 backdrop-blur-md rounded-full px-2 md:px-3 py-1 flex items-center shadow-sm">
                    <MapPin className="w-3 h-3 md:w-3.5 md:h-3.5 text-orange-400 mr-1" />
                    <span className="text-[10px] md:text-xs font-semibold text-white uppercase tracking-wider">{lang === 'es' ? 'Perú' : 'Peru'}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-center md:justify-start text-slate-600 mb-4 md:mb-6 bg-slate-50 rounded-xl md:rounded-2xl p-3 md:p-4 border border-slate-100">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-orange-500 mr-2 md:mr-3 flex-shrink-0" />
                    <div className="flex space-x-2 text-xs md:text-sm font-bold text-[#1E2B4D]">
                      <span>{pkg.days} {t('packages.days')}</span>
                      <span className="text-slate-300">|</span>
                      <span>{pkg.nights} {t('packages.nights')}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 mt-2">
                  <a
                    href={lang === 'es'
                      ? (pkg.category === 'destino' ? `/destinos/${pkg.id}` : `/paquetes/${pkg.id}`)
                      : (pkg.category === 'destino' ? `/en/destinations/${pkg.id}` : `/en/packages/${pkg.id}`)
                    }
                    className="flex items-center justify-center w-full py-2.5 md:py-3.5 text-xs md:text-sm font-bold text-[#1E2B4D] bg-white border-2 border-slate-200 rounded-full hover:border-orange-500 hover:text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-red-500 hover:shadow-lg transition-all duration-300 uppercase tracking-wider"
                  >
                    {t('packages.btn')}
                  </a>
                  <a
                    href={`https://wa.me/51966638693?text=${encodeURIComponent(lang === 'es' ? `Hola *Peruvian Service*, deseo consultar sobre el paquete/destino: ${pkg.name}` : `Hello *Peruvian Service*, I would like to consult about the package/destination: ${pkg.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-2.5 md:py-3.5 text-xs md:text-sm font-bold text-white rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-lg hover:shadow-green-500/40 hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wider"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    {/* @ts-ignore - The new key is in ui.ts but we ignore to avoid strict type issues on compile if any */}
                    {t('packages.consultBtn' as any)}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
