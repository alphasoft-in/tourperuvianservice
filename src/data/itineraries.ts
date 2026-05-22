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
  },
  tarapoto: {
    id: 'tarapoto',
    image: '/img/paquetes_recomendados/tarapoto.png',
    heroImage: '/img/paquetes_recomendados/tarapoto.png',
    es: {
      title: 'Aventura en la Selva del Alto Mayo: Rioja, Moyobamba, Tarapoto',
      subtitle: 'Descubre la magia de la selva peruana, desde la comunidad nativa de Lamas hasta la impresionante Laguna Azul y las Cataratas de Ahuashiyacu.',
      duration: '3 DÍAS / 2 NOCHES',
      services: 'Traslado Trujillo-Tarapoto-Trujillo en móvil tours cuenta con, música ambiental, TV, DVD con seguro Vigente SOAT; Dos choferes profesionales conocedores de la ruta. Alimentación: 2 desayunos, un almuerzo típico en la laguna azul. 2 noches de alojamiento en habitaciones dobles, matrimoniales, triples, cuádruples con TV, baño privado el Hotel cuenta con piscina (hotel Plaza del bosque). Entradas y traslados a los lugares turísticos, Guía oficial de turismo.',
      note: '3:00 pm Salida del Terminal Terrestre de la Av. La Marina en Empresa de Transporte GH Bus',
      days: [
        {
          title: 'PRIMER DIA: LAMAS NATIVO',
          activities: [
            'Llegada a Tarapoto recojo del terminal terrestre e instalación en el hotel.',
            'Desayuno en el hotel Plaza del Bosque.',
            '3:00 p.m. Salida a la ciudad de Lamas, llamada también la ciudad de los tres pisos ecológicos, aquí visitaremos la comunidad Nativa de WAYKU, así como su Mirador y el Castillo de Lamas.',
            'Retorno a Tarapoto y pernocte en el hotel.'
          ]
        },
        {
          title: 'SEGUNDO DÍA: LAGUNA AZUL',
          activities: [
            'Desayuno en el hotel y partida hacia la impresionante Laguna Azul, en el distrito de Sauce y atravesaremos los ríos Huallaga en la Balsa Cautiva en Pto. López.',
            'Almuerzo típico en la Laguna AZUL, lugar donde disfrutaremos de un hermoso día donde se podrán bañar así como pasear en botes y trasladarnos al barrio Dos de Mayo.',
            'Retorno a Tarapoto. Pernocte.'
          ]
        },
        {
          title: 'TERCER DÍA: CATARATAS DE AHUASHIYACU',
          activities: [
            'Desayuno.',
            'Partida a las cataratas de Ahushiyacu, impresionante catarata de 40 mts. de altura donde podrán darse un chapuzón y tomarse fotos.',
            'Retorno a Tarapoto.',
            'Embarque en el terminal de móvil tours y retorno a Trujillo.'
          ]
        },
        {
          title: 'CUARTO DIA',
          activities: [
            'Llegada a Trujillo.'
          ]
        }
      ]
    },
    en: {
      title: 'Alto Mayo Jungle Adventure: Rioja, Moyobamba, Tarapoto',
      subtitle: 'Discover the magic of the Peruvian jungle, from the native community of Lamas to the impressive Blue Lagoon and Ahuashiyacu Waterfalls.',
      duration: '3 DAYS / 2 NIGHTS',
      services: 'Trujillo-Tarapoto-Trujillo transfer in Movil Tours with ambient music, TV, DVD, valid SOAT insurance; Two professional drivers familiar with the route. Meals: 2 breakfasts, one typical lunch at the Blue Lagoon. 2 nights accommodation in double, matrimonial, triple, or quadruple rooms with TV, private bathroom, and swimming pool (Hotel Plaza del Bosque). Entrance fees and transfers to tourist places, Official tour guide.',
      note: '3:00 p.m. Departure from the Av. La Marina Bus Terminal on GH Bus Transport Company.',
      days: [
        {
          title: 'FIRST DAY: NATIVE LAMAS',
          activities: [
            'Arrival in Tarapoto, pick up from the bus terminal, and installation at the hotel.',
            'Breakfast at the Plaza del Bosque hotel.',
            '3:00 p.m. Departure to the city of Lamas, also called the city of the three ecological floors. Here we will visit the native community of WAYKU, as well as its viewpoint and the Castle of Lamas.',
            'Return to Tarapoto and overnight at the hotel.'
          ]
        },
        {
          title: 'SECOND DAY: BLUE LAGOON',
          activities: [
            'Breakfast at the hotel and departure to the impressive Blue Lagoon in the Sauce district. We will cross the Huallaga River on the Captive Raft in Pto. López.',
            'Typical lunch at the BLUE LAGOON, where we will enjoy a beautiful day swimming, taking boat rides, and moving to the Dos de Mayo neighborhood.',
            'Return to Tarapoto. Overnight.'
          ]
        },
        {
          title: 'THIRD DAY: AHUASHIYACU WATERFALLS',
          activities: [
            'Breakfast.',
            'Departure to the Ahushiyacu waterfalls, an impressive 40-meter high waterfall where you can take a dip and take photos.',
            'Return to Tarapoto.',
            'Boarding at the Movil Tours terminal and return to Trujillo.'
          ]
        },
        {
          title: 'FOURTH DAY',
          activities: [
            'Arrival in Trujillo.'
          ]
        }
      ]
    }
  }
};
