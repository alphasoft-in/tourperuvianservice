import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import { useTranslations } from '../i18n/utils';

interface Props {
  lang: 'es' | 'en';
}

const packageData = [
  { id: 'huaraz', name: 'Huaraz', days: 4, nights: 3, image: '/img/paquetes_recomendados/huaraz.png' },
  { id: 'tarapoto', name: 'Tarapoto', days: 4, nights: 3, image: '/img/paquetes_recomendados/tarapoto.png' },
  { id: 'cajamarca', name: 'Cajamarca', days: 3, nights: 2, image: '/img/paquetes_recomendados/cajamarca.png' },
  { id: 'chachapoyas', name: 'Chachapoyas', days: 3, nights: 2, image: 'https://images.unsplash.com/photo-1632731513251-2eb2ee6773df?q=80&w=1000&auto=format&fit=crop' },
  { id: 'cusco', name: 'Cusco', days: 5, nights: 4, image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1000&auto=format&fit=crop' },
  { id: 'arequipa', name: 'Arequipa', days: 4, nights: 3, image: 'https://images.unsplash.com/photo-1591187425633-8a3dcbaf8cce?q=80&w=1000&auto=format&fit=crop' },
  { id: 'ica', name: 'Ica', days: 3, nights: 2, image: 'https://images.unsplash.com/photo-1473220464593-9c8e100f90e9?q=80&w=1000&auto=format&fit=crop' },
  { id: 'lima', name: 'Lima', days: 3, nights: 2, image: 'https://images.unsplash.com/photo-1583002633036-724bcbe66bfa?q=80&w=1000&auto=format&fit=crop' },
  { id: 'trujillo', name: 'Trujillo', days: 4, nights: 3, image: 'https://images.unsplash.com/photo-1577085732168-524f2b5a1b3f?q=80&w=1000&auto=format&fit=crop' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function FeaturedPackages({ lang }: Props) {
  const t = useTranslations(lang);

  return (
    <section className="py-16 md:py-24 bg-slate-50 font-['Montserrat']">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2B4D] mb-4 md:mb-6 tracking-tight leading-tight"
          >
            {t('packages.title')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 w-24 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-4 md:px-0"
          >
            {t('packages.subtitle')}
          </motion.p>
        </div>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {packageData.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={itemVariants}
              className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group flex flex-col [transform:translateZ(0)]"
            >
              {/* Image Container */}
              <div className="relative h-56 md:h-64 overflow-hidden rounded-t-2xl md:rounded-t-3xl [transform:translateZ(0)]">
                <div className="absolute inset-0 bg-slate-200 animate-pulse"></div> {/* Skeleton */}
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-t-2xl md:rounded-t-3xl"
                  loading="lazy"
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
                  href={lang === 'es' ? `/paquetes/${pkg.id}` : `/en/packages/${pkg.id}`}
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
