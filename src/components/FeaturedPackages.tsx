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
  { id: 'chachapoyas', name: 'Chachapoyas', days: 3, nights: 2, image: 'https://images.unsplash.com/photo-1632731513251-2eb2ee6773df?q=80&w=1000&auto=format&fit=crop', category: 'destino', isFeatured: true, locationType: 'nacional' },
  { id: 'cusco', name: 'Cusco', days: 5, nights: 4, image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1000&auto=format&fit=crop', category: 'destino', isFeatured: true, locationType: 'nacional' },
  { id: 'arequipa', name: 'Arequipa', days: 4, nights: 3, image: 'https://images.unsplash.com/photo-1591187425633-8a3dcbaf8cce?q=80&w=1000&auto=format&fit=crop', category: 'destino', isFeatured: true, locationType: 'nacional' },
  { id: 'ica', name: 'Ica', days: 3, nights: 2, image: 'https://images.unsplash.com/photo-1473220464593-9c8e100f90e9?q=80&w=1000&auto=format&fit=crop', category: 'destino', isFeatured: true, locationType: 'nacional' },
  { id: 'lima', name: 'Lima', days: 3, nights: 2, image: 'https://images.unsplash.com/photo-1583002633036-724bcbe66bfa?q=80&w=1000&auto=format&fit=crop', category: 'destino', isFeatured: true, locationType: 'nacional' },
  { id: 'trujillo', name: 'Trujillo', days: 4, nights: 3, image: 'https://images.unsplash.com/photo-1577085732168-524f2b5a1b3f?q=80&w=1000&auto=format&fit=crop', category: 'destino', isFeatured: true, locationType: 'nacional' },
  { id: 'salpo', name: 'Salpo', days: 1, nights: 0, image: '/img/paquetes_recomendados/salpo.png', category: 'paquete', isFeatured: false, locationType: 'nacional' },
  { id: 'full-day-trujillo', name: 'Full Day Trujillo', days: 1, nights: 0, image: '/img/paquetes_recomendados/full-day-trujillo.png', category: 'paquete', isFeatured: false, locationType: 'nacional' },
  { id: 'caleta-colorada', name: 'Caleta Colorada', days: 1, nights: 0, image: '/img/paquetes_recomendados/caleta-colorada.png', category: 'paquete', isFeatured: false, locationType: 'nacional' },
  { id: 'explora-jequetepeque', name: 'Explora Jequetepeque', days: 1, nights: 0, image: '/img/paquetes_recomendados/explora-jequetepeque.png', category: 'paquete', isFeatured: false, locationType: 'nacional' },
  { id: 'ruta-del-vino', name: 'Ruta del Vino', days: 1, nights: 0, image: '/img/paquetes_recomendados/ruta-del-vino.png', category: 'paquete', isFeatured: false, locationType: 'nacional' },
  { id: 'mayascon', name: 'Mayascón', days: 1, nights: 1, image: '/img/paquetes_recomendados/mayascon.png', category: 'paquete', isFeatured: false, locationType: 'nacional' },
  { id: 'ruta-chancay-medieval', name: 'Ruta Chancay Medieval', days: 1, nights: 1, image: '/img/paquetes_recomendados/ruta-chancay-medieval.png', category: 'paquete', isFeatured: false, locationType: 'nacional' },
  { id: 'rio-de-janeiro-new-year', name: 'Rio de Janeiro', days: 4, nights: 3, image: '/img/paquetes_recomendados/rio-de-janeiro.png', category: 'destino', isFeatured: false, locationType: 'internacional' },
  { id: 'punta-cana', name: 'Punta Cana', days: 5, nights: 4, image: '/img/paquetes_recomendados/punta-cana.png', category: 'destino', isFeatured: false, locationType: 'internacional' },
  { id: 'cartagena-new-year', name: 'Cartagena', days: 5, nights: 4, image: '/img/paquetes_recomendados/cartagena.png', category: 'destino', isFeatured: false, locationType: 'internacional' },
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

                <a 
                  href={lang === 'es' 
                    ? (pkg.category === 'destino' ? `/destinos/${pkg.id}` : `/paquetes/${pkg.id}`)
                    : (pkg.category === 'destino' ? `/en/destinations/${pkg.id}` : `/en/packages/${pkg.id}`)
                  }
                  className="block w-full text-center py-2.5 md:py-3.5 text-xs md:text-sm font-bold text-[#1E2B4D] bg-white border-2 border-slate-200 rounded-full hover:border-orange-500 hover:text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-red-500 hover:shadow-lg transition-all duration-300 uppercase tracking-wider"
                >
                  {t('packages.btn')}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
