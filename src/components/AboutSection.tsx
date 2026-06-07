import React from 'react';
import { Map, Plane, ShieldCheck, Bus, Award, Target, Eye, Heart, Star, HeartHandshake, ClipboardCheck, Users, FileText } from 'lucide-react';

interface Props {
  lang: 'es' | 'en';
}

const content = {
  es: {
    heroTitle: 'Nosotros',
    heroSubtitle: 'Lo mejor en viajes y turismo en Trujillo',
    experience: '20 Años de Experiencia',
    mainTitle: 'Descubre el Perú y el Mundo con Peruvian Service',
    intro: 'Somos una agencia de viaje y turismo con 20 años de experiencia brindando el mejor servicio turístico a los más bellos lugares del Perú y del Mundo.',
    features: [
      {
        icon: Map,
        title: 'Tours a Nivel Nacional',
        desc: 'Organizamos Tours y City tours a cualquier parte de nuestro hermoso Perú.'
      },
      {
        icon: Plane,
        title: 'Asesoría Integral',
        desc: 'Contamos con atención especializada en asesoría y venta de pasajes aéreos nacionales e internacionales, paquetes turísticos, paquetes de turismo educativo, viajes de promoción, etc.'
      },
      {
        icon: ShieldCheck,
        title: 'Garantía y Confianza',
        desc: 'Nuestra empresa se encuentra registrada en la Dirección Regional de Comercio Exterior y Turismo donde te garantizamos seguridad y confianza.'
      },
      {
        icon: Bus,
        title: 'Transporte Turístico',
        desc: 'También te ofrecemos Servicio de Transporte Turístico desde Trujillo, lo pueden solicitar para el traslado a cualquier ciudad del Perú.'
      }
    ],
    badgeTitle: 'Agencia Autorizada',
    badgeDesc: 'Registrada en la DIRCETUR',
    missionTitle: 'Misión',
    missionDesc: 'Nuestra misión es contribuir al desarrollo de un turismo sostenible, a través de experiencias de viaje que superen expectativas, basados en nuestra calidad, profesionalismo y pasión por los detalles.',
    visionTitle: 'Visión',
    visionDesc: 'Nuestra visión es ser la empresa líder en innovación y calidad de servicios turísticos, reconocida por el compromiso sostenible con el desarrollo de su entorno y la de mayor cobertura en Latinoamérica.',
    valuesTitle: 'Valores',
    valuesList: [
      { name: 'Calidad en el Servicio', icon: Star },
      { name: 'Compromiso', icon: HeartHandshake },
      { name: 'Confianza', icon: ShieldCheck },
      { name: 'Responsabilidad', icon: ClipboardCheck },
      { name: 'Atención Integral', icon: Users }
    ]
  },
  en: {
    heroTitle: 'About Us',
    heroSubtitle: 'The best in travel and tourism in Trujillo',
    experience: '20 Years of Experience',
    mainTitle: 'Discover Peru and the World with Peruvian Service',
    intro: 'We are a travel and tourism agency with 20 years of experience providing the best tourist service to the most beautiful places in Peru and the World.',
    features: [
      {
        icon: Map,
        title: 'National Tours',
        desc: 'We organize Tours and City tours anywhere in our beautiful Peru.'
      },
      {
        icon: Plane,
        title: 'Comprehensive Counseling',
        desc: 'We offer specialized attention in counseling and sales of national and international air tickets, tour packages, educational tourism packages, promotion trips, etc.'
      },
      {
        icon: ShieldCheck,
        title: 'Guarantee and Trust',
        desc: 'Our company is registered in the Regional Directorate of Foreign Trade and Tourism where we guarantee security and confidence.'
      },
      {
        icon: Bus,
        title: 'Tourist Transport',
        desc: 'We also offer Tourist Transport Service from Trujillo, which can be requested for transfer to any city in Peru.'
      }
    ],
    badgeTitle: 'Authorized Agency',
    badgeDesc: 'Registered in DIRCETUR',
    missionTitle: 'Mission',
    missionDesc: 'Our mission is to contribute to the development of sustainable tourism, through travel experiences that exceed expectations, based on our quality, professionalism and passion for details.',
    visionTitle: 'Vision',
    visionDesc: 'Our vision is to be the leading company in innovation and quality of tourist services, recognized for sustainable commitment to the development of its environment and the largest coverage in Latin America.',
    valuesTitle: 'Values',
    valuesList: [
      { name: 'Quality in Service', icon: Star },
      { name: 'Commitment', icon: HeartHandshake },
      { name: 'Trust', icon: ShieldCheck },
      { name: 'Responsibility', icon: ClipboardCheck },
      { name: 'Comprehensive Care', icon: Users }
    ]
  }
};

export default function AboutSection({ lang }: Props) {
  const data = content[lang];

  return (
    <>
      {/* Hero Section */}
      <div className="relative py-32 px-6 md:px-12 overflow-hidden flex items-center justify-center min-h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/slide2.png')" }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E2B4D]/80 via-transparent to-transparent"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 pt-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6 font-['Montserrat'] drop-shadow-lg tracking-tight leading-tight">
            {data.heroTitle}
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-medium font-['Montserrat'] drop-shadow-md">
            {data.heroSubtitle}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-0 md:pt-16 md:pb-2 xl:pb-12 font-['Montserrat']">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-20 items-center">
          
          <div className="flex flex-col justify-center max-w-xl mx-auto xl:mx-0 text-center xl:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-6 md:mb-8 w-fit mx-auto xl:mx-0 shadow-sm">
              <Award className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
              <span className="text-orange-700 font-bold text-xs sm:text-sm md:text-base tracking-wide">
                {data.experience}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-extrabold text-[#1E2B4D] mb-4 md:mb-6 font-['Montserrat'] tracking-tight leading-tight">
              {data.mainTitle}
            </h2>
            <p className="text-sm sm:text-base xl:text-lg text-slate-600 leading-relaxed mb-8 md:mb-10">
              {data.intro.split('20 años de experiencia').map((part, i, arr) => 
                i === 0 && lang === 'es' ? <span key={i}>{part}<strong>20 años de experiencia</strong>{arr[i+1]}</span> : null
              )}
              {lang === 'en' ? (
                <span>We are a travel and tourism agency with <strong>20 years of experience</strong> providing the best tourist service to the most beautiful places in Peru and the World.</span>
              ) : lang === 'es' && !data.intro.includes('20 años de experiencia') ? data.intro : null}
            </p>
            
            <div className="flex flex-col gap-8 lg:gap-6 max-w-xl mx-auto lg:mx-0 lg:max-w-none">
              {data.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex flex-col xl:flex-row items-center xl:items-start text-center xl:text-left gap-4 md:gap-5">
                    <div className="flex-shrink-0 w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center border border-orange-100 shadow-sm xl:mt-1">
                      <Icon className="w-7 h-7 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg lg:text-xl font-bold text-[#1E2B4D] mb-2">{feature.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-[13px] md:text-sm lg:text-base">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative mt-8 xl:mt-0 mr-4 mb-4 md:mr-6 md:mb-6">
            <div className="absolute inset-0 bg-orange-500 rounded-3xl transform translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6"></div>
            <img 
              src="/trujillo.webp" 
              alt="Turismo Peruvian Service" 
              className="relative rounded-3xl w-full h-[400px] md:h-[500px] xl:h-[700px] object-cover shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-10"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#1E2B4D]/80 via-transparent to-transparent z-10"></div>
            
            {/* Floating badge */}
            <div className="absolute top-6 sm:top-8 lg:top-12 left-4 sm:left-6 lg:-left-8 z-20 bg-white/90 backdrop-blur-md px-5 py-4 md:px-6 md:py-5 rounded-2xl shadow-xl flex items-center gap-3 md:gap-4 border border-white/50 animate-bounce hidden sm:flex" style={{ animationDuration: '3s' }}>
              <div className="flex-shrink-0 text-orange-500 bg-orange-50 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-sm">
                 <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm md:text-base leading-tight whitespace-nowrap">{data.badgeTitle}</h4>
                <p className="text-xs md:text-sm text-slate-500 mt-0.5 font-medium whitespace-nowrap">{data.badgeDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="bg-slate-50 pt-8 pb-10 md:pt-10 md:pb-16 lg:py-16 font-['Montserrat']">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Mission */}
            <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 border border-slate-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-500 mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3 font-['Montserrat']">{data.missionTitle}</h3>
              <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                {data.missionDesc}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 border border-slate-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-500 mb-5">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3 font-['Montserrat']">{data.visionTitle}</h3>
              <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                {data.visionDesc}
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 border border-slate-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-500 mb-5">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3 font-['Montserrat']">{data.valuesTitle}</h3>
              <div className="flex flex-wrap justify-center gap-3 mt-4 w-full">
                {data.valuesList.map((value, idx) => {
                  const Icon = value.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2 px-4 py-2.5 bg-slate-50/80 border border-slate-100 rounded-xl text-slate-700 font-semibold text-xs md:text-sm hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 transition-all shadow-sm">
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-rose-500 flex-shrink-0" />
                      <span>{value.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* PDF Previews Section */}
      <div className="bg-white py-12 md:py-20 font-['Montserrat']">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1E2B4D] mb-4 tracking-tight">
              {lang === 'es' ? 'Documentos Oficiales' : 'Official Documents'}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
              {lang === 'es' 
                ? 'Nuestra agencia opera con total transparencia y cumplimiento de las normativas vigentes.' 
                : 'Our agency operates with full transparency and compliance with current regulations.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12">
            {/* Constancia DIRCETUR */}
            <div className="flex flex-col items-center w-full max-w-[340px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-none mx-auto">
              <h3 className="text-lg md:text-xl font-bold text-[#1E2B4D] mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-orange-500" />
                {lang === 'es' ? 'Constancia DIRCETUR' : 'DIRCETUR Certificate'}
              </h3>
              <a 
                href="/pdf/constancia_inscripcion.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full aspect-[1/1.414] rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all cursor-zoom-in"
              >
                <img 
                  src="/pdf/constancia_inscripcion.png" 
                  alt="Constancia DIRCETUR"
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                />
              </a>
            </div>

            {/* Licencia Municipal */}
            <div className="flex flex-col items-center w-full max-w-[340px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-none mx-auto">
              <h3 className="text-lg md:text-xl font-bold text-[#1E2B4D] mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-orange-500" />
                {lang === 'es' ? 'Autorización Marca Perú' : 'Marca Perú Authorization'}
              </h3>
              <a 
                href="/pdf/licencia.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full aspect-[1/1.414] rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all cursor-zoom-in"
              >
                <img 
                  src="/pdf/licencia.png" 
                  alt="Autorización Marca Perú"
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
