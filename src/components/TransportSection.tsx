import React from 'react';
import { Users, CheckCircle2, ChevronRight } from 'lucide-react';
import { useTranslations } from '../i18n/utils';

interface Props {
  lang: 'es' | 'en';
}

const vehicles = [
  {
    id: 'bus50',
    img: '/img/vehiculos/bus_50.jpeg',
    titleKey: 'transport.bus50.title',
    capKey: 'transport.bus50.cap',
    descKey: 'transport.bus50.desc',
  },
  {
    id: 'bus30',
    img: '/img/vehiculos/15.avif',
    titleKey: 'transport.bus30.title',
    capKey: 'transport.bus30.cap',
    descKey: 'transport.bus30.desc',
  },
  {
    id: 'minivan',
    img: '/img/vehiculos/16.avif',
    titleKey: 'transport.minivan.title',
    capKey: 'transport.minivan.cap',
    descKey: 'transport.minivan.desc',
  },
  {
    id: 'suv',
    img: '/img/vehiculos/17.avif',
    titleKey: 'transport.suv.title',
    capKey: 'transport.suv.cap',
    descKey: 'transport.suv.desc',
  },
];

export default function TransportSection({ lang }: Props) {
  const t = useTranslations(lang);

  return (
    <section className="pt-32 pb-10 md:pb-16 bg-slate-50 relative overflow-hidden font-['Montserrat']">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 tracking-tight">
            {t('transport.title') || 'Nuestra Flota'}
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            {t('transport.subtitle') || 'Contamos con vehículos modernos y confortables para hacer de tu viaje una experiencia segura y placentera.'}
          </p>
          <div className="w-16 sm:w-20 h-1.5 bg-orange-500 mx-auto mt-6 sm:mt-8 rounded-full"></div>
        </div>

        {/* Grid de Vehículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 group hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={vehicle.img} 
                  alt={t(vehicle.titleKey as any) || ''} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex justify-between items-end gap-2 sm:gap-3">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white drop-shadow-md leading-tight">
                    {t(vehicle.titleKey as any)}
                  </h3>
                  <div className="bg-orange-700 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full flex items-center shrink-0 whitespace-nowrap text-xs sm:text-sm font-medium shadow-lg">
                    <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-1.5 shrink-0" />
                    {t(vehicle.capKey as any)}
                  </div>
                </div>
              </div>
              <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col items-center text-center space-y-3 mb-6">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500 shrink-0" />
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {t(vehicle.descKey as any)}
                    </p>
                  </div>
                </div>
                <div className="mt-4 sm:mt-8 flex justify-center w-full">
                  <a 
                    href={`https://wa.me/51966638693?text=${encodeURIComponent(lang === 'es' ? `Hola *Peruvian Service*, deseo consultar la disponibilidad del vehículo: ${t(vehicle.titleKey as any)} (${t(vehicle.capKey as any)})` : `Hello *Peruvian Service*, I would like to consult the availability of the vehicle: ${t(vehicle.titleKey as any)} (${t(vehicle.capKey as any)})`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center py-2.5 px-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-lg hover:shadow-green-500/40 hover:-translate-y-1 transition-all duration-300 text-white text-xs font-semibold uppercase tracking-wider rounded-full group/btn w-full sm:w-auto"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 shrink-0 group-hover/btn:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span className="text-center">{t('transport.consultBtn') || 'Consultar Ahora'}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
