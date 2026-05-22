export interface DayItinerary {
  title: string;
  activities: string[];
}

export interface PackageDetails {
  id: string;
  image: string;
  heroImage: string;
  es: {
    title: string;
    subtitle: string;
    duration: string;
    services: string;
    note?: string;
    optionalTours?: string;
    days: DayItinerary[];
  };
  en: {
    title: string;
    subtitle: string;
    duration: string;
    services: string;
    note?: string;
    optionalTours?: string;
    days: DayItinerary[];
  };
}

export const itineraries: Record<string, PackageDetails> = {
  huaraz: {
    id: 'huaraz',
    image: '/img/paquetes_recomendados/huaraz.png',
    heroImage: '/img/paquetes_recomendados/huaraz_hero.png',
    es: {
      title: 'Huaraz: Mágico Callejón de Huaylas',
      subtitle: 'Descubre las maravillas de la Cordillera Blanca, lagunas cristalinas y la cultura milenaria de Chavín.',
      duration: '4 DÍAS / 3 NOCHES',
      services: 'Pasajes Lima – Huaraz - Lima con asientos reclinables, baño químico. Hotel Céntrico Casa Blanca o Chavín Señorial (una cama por persona, baño privado en cada habitación con agua caliente, wifi, tv cable, en habitación doble). Tres desayunos. Guía de turismo. Pago de entradas y traslado a todos los centros turísticos a visitar.',
      note: '10:00 p.m. Salida de Trujillo',
      optionalTours: 'Tenemos Tours opcionales como Laguna de Parón o Laguna 69.',
      days: [
        {
          title: 'PRIMER DIA: CHAVIN DE HUANTAR / CALLEJON DE CONCHUCOS',
          activities: [
            '7:00 a.m. Llegada a Huaraz e instalación en el hotel elegido.',
            '8:00 a.m. Desayuno.',
            '8:30 a.m. Partida a Chavín de Huántar: Observaremos la Laguna de Querococha, atravesamos la Cordillera Blanca por el Túnel de Cavish, los pueblos del Callejón de Conchucos y llegaremos al Templo Ceremonial de Chavín de Huántar donde apreciaremos sus Galerías, Cabezas Clavas y el Lanzón Monolítico.',
            '5:00 p.m. Retorno a Huaraz.'
          ]
        },
        {
          title: 'SEGUNDO DIA: NEVADO DEL PASTORURI / PUYA RAIMONDI',
          activities: [
            '7:00 a.m. Desayuno.',
            'Nevado de Pastoruri: Visitaremos los pueblos de Recuay, Ticapampa y Catac, la Puya Raimondi, el agua gasificada de Pumapampa (Laguna de Siete Colores); el Ojo de Agua Pumachimi y Pinturas Rupestres hasta llegar al Nevado de Pastoruri donde haremos una caminata hasta la parte donde aún hay nieve para las fotos.',
            '1:30 p.m. Almuerzo.',
            '4:30 p.m. Retorno a Huaraz.'
          ]
        },
        {
          title: 'TERCER DIA: CALLEJON DE HUAYLAS / LAGUNA DE LLANGANUCO',
          activities: [
            '7:00 a.m. Desayuno.',
            '8:00 a.m. Iniciamos el tour por el norte del Callejón de Huaylas, visitando los pueblos de Anta, Marcara, Carhuaz (en donde disfrutarán de degustación de unos riquísimos helados artesanales de fruta), luego visitaremos el campo santo de Yungay, La Laguna de Llanganuco (Chinacocha). Luego visitaremos la hermosa Ciudad de Caraz donde almorzaremos y por último se visitará uno de los Centros Artesanales en el pueblo de Tarica.',
            '6:00 p.m. Retorno a Huaraz. Pernocte en el hotel.'
          ]
        },
        {
          title: 'CUARTO DIA: CITY TOUR',
          activities: [
            '8:30 a.m. Desayuno y Salida al Criadero de Truchas, el barrio de José Olaya (el único que sobrevivió al terremoto del 70), visita a los Baños Termales de Monterrey y tiempo para bañarse.',
            'Almuerzo y tarde libre.',
            'Retorno a Lima.'
          ]
        }
      ]
    },
    en: {
      title: 'Huaraz: Magic Callejón de Huaylas',
      subtitle: 'Discover the wonders of the Cordillera Blanca, crystalline lagoons, and the ancient culture of Chavín.',
      duration: '4 DAYS / 3 NIGHTS',
      services: 'Bus tickets Lima – Huaraz - Lima with reclining seats, chemical toilet. Central Hotel Casa Blanca or Chavín Señorial (one bed per person, private bathroom with hot water, Wi-Fi, cable TV in double room). Three breakfasts. Tour guide. Entrance fees and transfer to all tourist sites to visit.',
      note: '10:00 p.m. Departure from Trujillo',
      optionalTours: 'We have optional tours such as Parón Lagoon or Lagoon 69.',
      days: [
        {
          title: 'FIRST DAY: CHAVIN DE HUANTAR / CALLEJON DE CONCHUCOS',
          activities: [
            '7:00 a.m. Arrival in Huaraz and installation in the chosen hotel.',
            '8:00 a.m. Breakfast.',
            '8:30 a.m. Departure to Chavín de Huántar: We will observe the Querococha Lagoon, cross the Cordillera Blanca through the Cavish Tunnel, the towns of the Callejón de Conchucos, and arrive at the Ceremonial Temple of Chavín de Huántar where we will appreciate its Galleries, Cabezas Clavas, and the Lanzón Monolítico.',
            '5:00 p.m. Return to Huaraz.'
          ]
        },
        {
          title: 'SECOND DAY: PASTORURI SNOWY MOUNTAIN / PUYA RAIMONDI',
          activities: [
            '7:00 a.m. Breakfast.',
            'Pastoruri Snowy Mountain: We will visit the towns of Recuay, Ticapampa and Catac, the Puya Raimondi, the carbonated water of Pumapampa (Lagoon of Seven Colors), the Pumachimi Water Spring, and Cave Paintings until we reach the Pastoruri Snowy Mountain where we will hike to the part where there is still snow for photos.',
            '1:30 p.m. Lunch.',
            '4:30 p.m. Return to Huaraz.'
          ]
        },
        {
          title: 'THIRD DAY: CALLEJON DE HUAYLAS / LLANGANUCO LAGOON',
          activities: [
            '7:00 a.m. Breakfast.',
            '8:00 a.m. We start the tour through the north of the Callejón de Huaylas, visiting the towns of Anta, Marcara, Carhuaz (where you will enjoy a tasting of delicious handmade fruit ice cream). Then we will visit the holy field of Yungay, the Llanganuco Lagoon (Chinacocha). Next, we will visit the beautiful City of Caraz where we will have lunch, and finally, we will visit one of the Artisan Centers in the town of Tarica.',
            '6:00 p.m. Return to Huaraz. Overnight at the hotel.'
          ]
        },
        {
          title: 'FOURTH DAY: CITY TOUR',
          activities: [
            '8:30 a.m. Breakfast and departure to the Trout Hatchery, the neighborhood of José Olaya (the only one that survived the 1970 earthquake), visit to the Monterrey Thermal Baths with time to bathe.',
            'Lunch and free afternoon.',
            'Return to Lima.'
          ]
        }
      ]
    }
  }
};
