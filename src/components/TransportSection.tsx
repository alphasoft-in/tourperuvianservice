import React from 'react';
import { Users, CheckCircle2, ChevronRight } from 'lucide-react';
import { useTranslations } from '../i18n/utils';

interface Props {
  lang: 'es' | 'en';
}

const vehicles = [
  {
    id: 'bus50',
    img: '/img/vehiculos/14.png',
    titleKey: 'transport.bus50.title',
    capKey: 'transport.bus50.cap',
    descKey: 'transport.bus50.desc',
  },
  {
    id: 'bus30',
    img: '/img/vehiculos/15.png',
    titleKey: 'transport.bus30.title',
    capKey: 'transport.bus30.cap',
    descKey: 'transport.bus30.desc',
  },
  {
    id: 'minivan',
    img: '/img/vehiculos/16.png',
    titleKey: 'transport.minivan.title',
    capKey: 'transport.minivan.cap',
    descKey: 'transport.minivan.desc',
  },
  {
    id: 'suv',
    img: '/img/vehiculos/17.png',
    titleKey: 'transport.suv.title',
    capKey: 'transport.suv.cap',
    descKey: 'transport.suv.desc',
  },
];

export default function TransportSection({ lang }: Props) {
  const t = useTranslations(lang);

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden font-['Montserrat'] min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 tracking-tight">
            {t('transport.title') || 'Nuestra Flota'}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t('transport.subtitle') || 'Contamos con vehículos modernos y confortables para hacer de tu viaje una experiencia segura y placentera.'}
          </p>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto mt-8 rounded-full"></div>
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
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <h3 className="text-2xl font-bold text-white drop-shadow-md">
                    {t(vehicle.titleKey as any)}
                  </h3>
                  <div className="bg-orange-500 text-white px-3 py-1.5 rounded-full flex items-center text-sm font-bold shadow-lg">
                    <Users className="w-4 h-4 mr-1.5" />
                    {t(vehicle.capKey as any)}
                  </div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start space-x-3 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-slate-600 leading-relaxed">
                      {t(vehicle.descKey as any)}
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <a 
                    href={lang === 'es' ? '/contacto' : '/en/contact'}
                    className="inline-flex items-center justify-center w-full py-3.5 px-6 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors group/btn"
                  >
                    {t('transport.consultBtn') || 'Consultar Disponibilidad'}
                    <ChevronRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
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
