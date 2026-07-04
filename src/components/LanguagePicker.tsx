import React from 'react';
import { languages } from '../i18n/ui';

interface Props {
  currentLang: keyof typeof languages;
  currentRoute?: string;
  isScrolled?: boolean;
}

export default function LanguagePicker({ currentLang, currentRoute = '', isScrolled = false }: Props) {
  // If the route is empty or just '/', it maps directly to the root of the selected language.
  const route = currentRoute === '/' ? '' : currentRoute;

  return (
    <div className="flex items-center space-x-2">
      {Object.entries(languages).map(([lang, label]) => {
        const isActive = lang === currentLang;
        
        // Translate route segments
        let translatedRoute = route;
        if (lang === 'en') {
          translatedRoute = translatedRoute.replace(/^\/?paquetes/, '/packages');
          translatedRoute = translatedRoute.replace(/^\/?destinos/, '/destinations');
          translatedRoute = translatedRoute.replace(/nacionales\/?$/, 'national');
          translatedRoute = translatedRoute.replace(/internacionales\/?$/, 'international');
          translatedRoute = translatedRoute.replace(/^\/?nosotros\/?$/, '/about');
          translatedRoute = translatedRoute.replace(/^\/?contacto\/?$/, '/contact');
          translatedRoute = translatedRoute.replace(/^\/?transporte\/?$/, '/transport');
          translatedRoute = translatedRoute.replace(/^\/?galeria\/?$/, '/gallery');
          translatedRoute = translatedRoute.replace(/^\/?libro-de-reclamaciones\/?$/, '/complaints-book');
          translatedRoute = translatedRoute.replace(/^\/?privacidad\/?$/, '/privacy');
          translatedRoute = translatedRoute.replace(/^\/?terminos\/?$/, '/terms');
        } else if (lang === 'es') {
          translatedRoute = translatedRoute.replace(/^\/?packages/, '/paquetes');
          translatedRoute = translatedRoute.replace(/^\/?destinations/, '/destinos');
          translatedRoute = translatedRoute.replace(/national\/?$/, 'nacionales');
          translatedRoute = translatedRoute.replace(/international\/?$/, 'internacionales');
          translatedRoute = translatedRoute.replace(/^\/?about\/?$/, '/nosotros');
          translatedRoute = translatedRoute.replace(/^\/?contact\/?$/, '/contacto');
          translatedRoute = translatedRoute.replace(/^\/?transport\/?$/, '/transporte');
          translatedRoute = translatedRoute.replace(/^\/?gallery\/?$/, '/galeria');
          translatedRoute = translatedRoute.replace(/^\/?complaints-book\/?$/, '/libro-de-reclamaciones');
          translatedRoute = translatedRoute.replace(/^\/?privacy\/?$/, '/privacidad');
          translatedRoute = translatedRoute.replace(/^\/?terms\/?$/, '/terminos');
        }

        // Native Astro routing: Spanish is root ('/'), English is '/en/'
        const href = lang === 'es' ? `/${translatedRoute}` : `/${lang}/${translatedRoute}`;

        return (
          <a
            key={lang}
            href={href.replace(/\/\//g, '/')} // prevent double slashes
            className={`text-xs font-semibold px-3 py-1.5 rounded-full relative after:content-[''] after:absolute after:-inset-3 transition-colors uppercase ${
              isActive
                ? 'bg-orange-600 text-white'
                : isScrolled
                  ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  : 'text-slate-100 hover:text-white hover:bg-white/10'
            }`}
          >
            {lang}
          </a>
        );
      })}
    </div>
  );
}
