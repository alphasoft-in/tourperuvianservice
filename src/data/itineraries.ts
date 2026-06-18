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
    includes?: string[];
    note?: string;
    optionalTours?: string;
    days: DayItinerary[];
  };
  en: {
    title: string;
    subtitle: string;
    duration: string;
    services: string;
    includes?: string[];
    note?: string;
    optionalTours?: string;
    days: DayItinerary[];
  };
}

export const itineraries: Record<string, PackageDetails> = {
  huaraz: {
    id: 'huaraz',
    image: '/img/paquetes_recomendados/huaraz.avif',
    heroImage: '/img/paquetes_recomendados/huaraz_hero.avif',
    es: {
      title: 'Huaraz: Mágico Callejón de Huaylas',
      subtitle: 'Descubre las maravillas de la Cordillera Blanca, lagunas cristalinas y la cultura milenaria de Chavín.',
      duration: '4 DÍAS / 3 NOCHES',
      services: 'Pasajes de ida y vuelta desde lugar de origen. Alojamiento en hotel a elección del cliente (habitaciones con baño privado, agua caliente, wifi, tv cable). Tres desayunos. Guía de turismo. Pago de entradas y traslado a todos los centros turísticos a visitar.',
      note: 'Horarios y punto de salida según coordinación previa.',
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
      services: 'Round trip tickets from place of origin. Accommodation in hotel of client\'s choice (rooms with private bathroom, hot water, Wi-Fi, cable TV). Three breakfasts. Tour guide. Entrance fees and transfer to all tourist sites to visit.',
      note: 'Departure times and points according to prior coordination.',
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
    image: '/img/paquetes_recomendados/tarapoto.avif',
    heroImage: '/img/paquetes_recomendados/tarapoto.avif',
    es: {
      title: 'Aventura en la Selva del Alto Mayo: Rioja, Moyobamba, Tarapoto',
      subtitle: 'Descubre la magia de la selva peruana, desde la comunidad nativa de Lamas hasta la impresionante Laguna Azul y las Cataratas de Ahuashiyacu.',
      duration: '4 DÍAS / 3 NOCHES',
      services: 'Alimentación: 2 desayunos, un almuerzo típico en la laguna azul. 2 noches de alojamiento en el hotel a elección del cliente (habitaciones con TV, baño privado, piscina según disponibilidad). Entradas y traslados a los lugares turísticos, Guía oficial de turismo.',
      note: 'Horarios y punto de salida según coordinación previa.',
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
          title: 'TERCER DÍA: ALTOMAYO MOYOBAMBA Y RIOJA',
          activities: [
            'El valle del Alto Mayo o "El lado oculto del paraíso" es como llamamos a las ciudades de Moyobamba y Rioja por sus exóticos atractivos, con variedad de orquídeas, aguas cristalinas, termales y sulfurosas, cuevas y reservas de bosques protegidos. Durante este recorrido, visitaremos los lugares turísticos más importantes durante el día y por supuesto incluye la degustación del rico café.',
            '07:00 Desayuno en el hotel.',
            '07:30 Recojo del hotel.',
            '08:30 Salida hacia la ciudad de Rioja.',
            '10:00 Visita a la Naciente del Rio Tioyacu.',
            '13:30 Almuerzo en un restaurante turístico.',
            '14:30 Visita al Orquideario.',
            '15:00 Visita a los baños Termales de San Mateo.',
            '16:30 Visita a una cafetería en Moyobamba.',
            '17:30 Retorno a la ciudad de Tarapoto.'
          ]
        },
        {
          title: 'CUARTO DÍA: CATARATAS DE AHUASHIYACU',
          activities: [
            'Desayuno.',
            'Partida a las cataratas de Ahushiyacu, impresionante catarata de 40 mts. de altura donde podrán darse un chapuzón y tomarse fotos.',
            'Retorno a Tarapoto, traslado al aeropuerto o terminal terrestre y fin de nuestros servicios.'
          ]
        }
      ]
    },
    en: {
      title: 'Alto Mayo Jungle Adventure: Rioja, Moyobamba, Tarapoto',
      subtitle: 'Discover the magic of the Peruvian jungle, from the native community of Lamas to the impressive Blue Lagoon and Ahuashiyacu Waterfalls.',
      duration: '4 DAYS / 3 NIGHTS',
      services: 'Meals: 2 breakfasts, one typical lunch at the Blue Lagoon. 2 nights accommodation in hotel of client\'s choice (rooms with TV, private bathroom, pool subject to availability). Entrance fees and transfers to tourist places, Official tour guide.',
      note: 'Departure times and points according to prior coordination.',
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
          title: 'THIRD DAY: ALTO MAYO, MOYOBAMBA AND RIOJA',
          activities: [
            'The Alto Mayo valley or "The hidden side of paradise" is what we call the cities of Moyobamba and Rioja for their exotic attractions, with a variety of orchids, crystal clear, thermal and sulfurous waters, caves and protected forest reserves. During this tour, we will visit the most important tourist places during the day and of course it includes tasting delicious coffee.',
            '07:00 Breakfast at the hotel.',
            '07:30 Pick up from the hotel.',
            '08:30 Departure to the city of Rioja.',
            '10:00 Visit to the Source of the Tioyacu River.',
            '13:30 Lunch at a tourist restaurant.',
            '14:30 Visit to the Orchidarium.',
            '15:00 Visit to the San Mateo Thermal Baths.',
            '16:30 Visit to a cafeteria in Moyobamba.',
            '17:30 Return to the city of Tarapoto.'
          ]
        },
        {
          title: 'FOURTH DAY: AHUASHIYACU WATERFALLS',
          activities: [
            'Breakfast.',
            'Departure to the Ahushiyacu waterfalls, an impressive 40-meter high waterfall where you can take a dip and take photos.',
            'Return to Tarapoto, transfer to the airport or bus terminal and end of our services.'
          ]
        }
      ]
    }
  },
  chachapoyas: {
    id: 'chachapoyas',
    image: '/img/paquetes_recomendados/chachapoyas.avif',
    heroImage: '/img/paquetes_recomendados/chachapoyas.avif',
    es: {
      title: 'Chachapoyas',
      subtitle: 'Descubre la asombrosa ciudadela de Kuélap, los misteriosos Sarcófagos de Karajía y la imponente Catarata de Gocta.',
      duration: '3 DÍAS / 2 NOCHES',
      services: 'Pasajes Trujillo Chachapoyas Trujillo en móvil tours. Movilidad turística en Chachapoyas. Traslado a todos los itinerarios mencionados en el tour. Entradas a todos los lugares turísticos y guiados. Dos noches de hotel. Dos desayunos, tres almuerzos.',
      includes: [
        'Pasajes Trujillo / Chachapoyas / Trujillo en Móvil Tours',
        'Movilidad turística en Chachapoyas',
        'Traslado a todos los itinerarios mencionados en el tour',
        'Entradas a todos los lugares turísticos y guiados',
        '2 noches de hotel',
        '2 desayunos',
        '3 almuerzos'
      ],
      note: 'Costo del tour por persona: S/ 950.00. (04:00 pm Salida de Trujillo en Bus de móvil tours del terrapuerto)',
      days: [
        {
          title: 'PRIMER DÍA: CIUDADELA FORTIFICADA DE KUÉLAP',
          activities: [
            '06:00 am Arribo a Chachapoyas, recepción y traslado estación de bus/hotel (tener en cuenta que en la mayoría de hoteles el check-in es a partir del mediodía).',
            '08:30 am Salida de Chachapoyas con dirección al pueblo del Tingo (1 hora en carro). A 40 minutos de Chachapoyas hacen una primera parada en un mirador para observar el sitio Arqueológico de Macro.',
            '09:45 am Llegada a la boletería para adquirir los tickets y continuar 10 minutos más en carro hasta el andén de salida de las Telecabinas a Kuélap.',
            '10:30 am Desembarque de pasajeros en la zona denominada La Malca, en donde se obtendrán los tickets de ingreso a Kuélap. Se registran e inician la caminata de 1km (30 minutos) para llegar al sitio arqueológico de Kuélap. La visita guiada toma 2 horas aproximadamente.',
            '01:00 pm Caminata de retorno a la Malca.',
            '01:30 pm Traslado en Teleférico a Tingo.',
            '02:00 pm Almuerzo en Tingo o alrededores.',
            '03:00 pm Traslado de retorno a la ciudad de Chachapoyas.',
            '04:00 pm Llegada a Chachapoyas, fin del servicio.',
            '07:00 pm Cena y primera noche de hotel.'
          ]
        },
        {
          title: 'SEGUNDO DÍA: SARCÓFAGOS DE KARAJÍA Y CAVERNA DE QUIOCTA',
          activities: [
            '07:30 am Desayuno en el hotel.',
            '08:00 am Salida con dirección al pueblo de Cruzpata (2 horas en carro), desde ahí harán una caminata de 30 minutos para llegar al sitio arqueológico de Karajía, estilo funerario único del Perú y del mundo. Caminata de retorno al pueblo de Cruzpata.',
            '12:00 pm Traslado al restaurante ubicado en el pueblo de Lamud (1 hora en carro).',
            '01:00 pm Almuerzo.',
            '03:00 pm Traslado a la caverna de Quiocta (30 minutos en carro hasta la zona de parqueo). Caminata de 270 metros hasta el ingreso de la caverna. La visita dentro de la caverna toma 1.5 horas aproximadamente, en donde se aprecian miles de estalactitas y estalagmitas.',
            '06:30 pm Arribo a Chachapoyas.',
            '07:30 pm Cena.'
          ]
        },
        {
          title: 'TERCER DÍA: CATARATA DE GOCTA',
          activities: [
            '07:30 am Desayuno en el hotel.',
            '08:30 am Salida con dirección al Pueblo de Cocachimba (1 hora en carro).',
            '09:30 am Llegada a Cocachimba, registro de pasajeros en la boletería.',
            '10:00 am Caminata o cabalgata de 2.5 horas para llegar a la Catarata de Gocta. Luego de admirar su singular belleza, toma de fotografías y/o tomar un baño (opcional ya que el agua es muy fría). Retorno al pueblo de Cocachimba para almorzar en un restaurante de la comunidad.',
            '03:00 pm Almuerzo y retorno a Chachapoyas.',
            '05:00 pm Arribo a Chachapoyas, fin del servicio.',
            '07:00 pm Traslado hotel/estación de Bus en Chachapoyas y cena a bordo.'
          ]
        }
      ]
    },
    en: {
      title: 'Chachapoyas – Cable Car Tour',
      subtitle: 'Discover the amazing Kuelap citadel, the mysterious Karajia Sarcophagi, and the imposing Gocta Waterfall.',
      duration: '3 DAYS / 2 NIGHTS',
      services: 'Tickets Trujillo-Chachapoyas-Trujillo via Movil Tours. Tourist transport in Chachapoyas. Transfers to all itineraries mentioned in the tour. Entrance fees to all tourist places and guides. Two nights of hotel. Two breakfasts, three lunches.',
      includes: [
        'Tickets Trujillo / Chachapoyas / Trujillo via Movil Tours',
        'Tourist transportation in Chachapoyas',
        'Transfers to all itineraries mentioned in the tour',
        'Entrance fees to all tourist places and guided tours',
        '2 nights hotel accommodation',
        '2 breakfasts',
        '3 lunches'
      ],
      note: 'Tour cost per person: S/ 950.00. (04:00 pm Departure from Trujillo by Movil Tours bus from the bus terminal)',
      days: [
        {
          title: 'FIRST DAY: FORTIFIED CITADEL OF KUELAP',
          activities: [
            '06:00 a.m. Arrival in Chachapoyas, reception and transfer bus station/hotel (keep in mind that in most hotels check-in is from noon).',
            '08:30 a.m. Departure from Chachapoyas towards the town of Tingo (1 hour by car). 40 minutes from Chachapoyas, make a first stop at a viewpoint to observe the Macro Archaeological site.',
            '09:45 a.m. Arrival at the ticket office to purchase tickets and continue 10 more minutes by car to the departure platform of the Cable Cars to Kuelap.',
            '10:30 a.m. Disembarkation of passengers in the area called La Malca, where you will obtain the entrance tickets to Kuelap. Register and start the 1km walk (30 minutes) to reach the Kuelap archaeological site. The guided tour takes approximately 2 hours.',
            '01:00 p.m. Return walk to La Malca.',
            '01:30 p.m. Cable car transfer to Tingo.',
            '02:00 p.m. Lunch in Tingo or surroundings.',
            '03:00 p.m. Return transfer to the city of Chachapoyas.',
            '04:00 p.m. Arrival in Chachapoyas, end of service.',
            '07:00 p.m. Dinner and first night at the hotel.'
          ]
        },
        {
          title: 'SECOND DAY: KARAJIA SARCOPHAGI AND QUIOCTA CAVE',
          activities: [
            '07:30 a.m. Breakfast at the hotel.',
            '08:00 a.m. Departure towards the town of Cruzpata (2 hours by car), from there you will take a 30-minute walk to reach the Karajia archaeological site, a unique funerary style in Peru and the world. Return walk to the town of Cruzpata.',
            '12:00 p.m. Transfer to the restaurant located in the town of Lamud (1 hour by car).',
            '01:00 p.m. Lunch.',
            '03:00 p.m. Transfer to the Quiocta cave (30 minutes by car to the parking area). Walk 270 meters to the cave entrance. The visit inside the cave takes approximately 1.5 hours, where you can appreciate thousands of stalactites and stalagmites.',
            '06:30 p.m. Arrival in Chachapoyas.',
            '07:30 p.m. Dinner.'
          ]
        },
        {
          title: 'THIRD DAY: GOCTA WATERFALL',
          activities: [
            '07:30 a.m. Breakfast at the hotel.',
            '08:30 a.m. Departure towards the town of Cocachimba (1 hour by car).',
            '09:30 a.m. Arrival in Cocachimba, passenger registration at the ticket office.',
            '10:00 a.m. 2.5-hour walk or horseback ride to reach the Gocta Waterfall. After admiring its singular beauty, taking pictures and/or taking a bath (optional since the water is very cold), return to the town of Cocachimba to have lunch at a community restaurant.',
            '03:00 p.m. Lunch and return to Chachapoyas.',
            '05:00 p.m. Arrival in Chachapoyas, end of service.',
            '07:00 p.m. Transfer hotel/bus station in Chachapoyas and dinner on board.'
          ]
        }
      ]
    }
  },
  'selva-central': {
    id: 'selva-central',
    image: '/img/paquetes_recomendados/selva_central.avif',
    heroImage: '/img/paquetes_recomendados/selva_central.avif',
    es: {
      title: 'Tour Selva Central',
      subtitle: 'Descubre la magia de Oxapampa, Pozuzo, Villa Rica y el Valle del Perené en una aventura inolvidable.',
      duration: '4 DÍAS / 3 NOCHES',
      services: 'Transporte en bus Lima – Oxapampa - La Merced - Lima. 3 noches de hospedaje. 3 desayunos. Traslados. Guía oficial de Turismo.',
      includes: [
        '3 noches de hospedaje',
        '3 desayunos',
        'Transporte en bus Lima – Oxapampa – La Merced – Lima',
        'Traslados',
        'Guía oficial de Turismo'
      ],
      note: 'Precio por persona S/ 950.00. (9:00 pm Salida desde el terminal de Móvil bus en la Victoria, Lima)',
      days: [
        {
          title: 'DÍA 1: TOUR OXAPAMPA (Altitud 1814 msnm)',
          activities: [
            '8:30 am Llegada al terminal de Oxapampa y traslado al hotel.',
            '10:30 am Inicio del tour: La Colonia Oxapampina. Compra de productos de la zona y observaremos un baile típico tradicional (género Polka).',
            'Tunqui Cueva o casa al revés (opcional): Ingresamos a una caverna y observamos formaciones rocosas.',
            'Mirador La Florida: Observamos toda la ciudad de Oxapampa con una hermosa vista.',
            'Recreo el Wharapo: Explicación sobre el proceso de la caña de azúcar (aguardiente, wharapo y miel de caña).',
            'Casa de artesanías: Compras de artesanías de Oxapampa.',
            'Parque de Chontabamba y Catarata del Río Tigre: Puente colgante y hermoso paisaje para fotografías.',
            'Manantial la Virgen: Nacimiento de agua cristalina pura, considerada agua curativa.',
            'Bienvenida a Oxapampa: Observación de los símbolos representativos y participación en ordeño de ganado y amamantado de becerro.',
            'Museo SCHLAEFLI: Muestra de artefactos antiguos con una breve historia por Don Armando Schlaefli.',
            '6:30 pm Fin del tour del día.'
          ]
        },
        {
          title: 'DÍA 2: TOUR POZUZO',
          activities: [
            '8:00 am Inicio del tour hacia Pozuzo.',
            'Catarata Rayantambo: Caídas de agua ideales para fotografías con un hermoso paisaje de fondo.',
            'Cascada de Yulitunqui y Portal de Bienvenida a Pozuzo.',
            'Parque de Prusia y Barrio de Prusia: Observamos las hermosas casas típicas europeas.',
            'Visita a la Fábrica de Cerveza artesanal con explicación de su elaboración.',
            'Puente colgante histórico Emperador Guillermo.',
            'Pozas de Agua Salada: Refrescante baño en pozas con azufre (bueno para la regeneración de células).',
            'Parque temático de Pozuzo: Observamos la réplica a escala del barco el Norton y otras representaciones de la historia de Pozuzo.',
            'Almuerzo típico europeo.',
            '6:30 pm Fin del tour del día.'
          ]
        },
        {
          title: 'DÍA 3: TOUR VILLA RICA',
          activities: [
            '8:30 am Inicio del tour.',
            'Canopy Extremo: Deporte de suspensión en el aire (1200 metros) observando la vegetación.',
            'Fábrica de chocolate: Explicación sobre el proceso para obtener pasta de chocolate.',
            'Plaza de Villa Rica: Observamos la cafetera más grande del mundo.',
            'Cascada el León: Refrescante baño en las aguas de la cascada y observación del perfil del león.',
            'Laguna el Oconal: Paseo en bote e ictioterapia (los peces comen las células muertas del pie al introducirlas en el agua).',
            'Cata de café: Explicación sobre el proceso del café y una cata básica.',
            'Mirador la Cumbre: Observamos el 80% de la ciudad de Villa Rica, la cual tiene una forma representativa del Perú.',
            '6:30 pm Fin del tour del día.'
          ]
        },
        {
          title: 'DÍA 4: TOUR VALLE DEL PERENÉ',
          activities: [
            '8:00 am Inicio del tour.',
            'Catarata Bayoz: Refrescante baño en la segunda caída de aguas temperadas.',
            'Catarata Velo de Novia: Observación de la caída y toma de fotos (no hay baño, solo fotografías).',
            'Comunidad Nativa: Bailes y tradiciones basadas en su cultura antigua (baile alrededor de una fogata).',
            'Mariposario: Observación de la metamorfosis de la mariposa y un mini zoológico.',
            'Paseo en bote a motor fuera de borda en el río Perené.',
            'Almuerzo Típico: Basado en los platos deliciosos de la zona selvática.',
            '7:00 pm Fin del tour y traslado para el retorno a Lima.'
          ]
        }
      ]
    },
    en: {
      title: 'Central Jungle Tour',
      subtitle: 'Discover the magic of Oxapampa, Pozuzo, Villa Rica and the Perene Valley in an unforgettable adventure.',
      duration: '4 DAYS / 3 NIGHTS',
      services: 'Bus transportation Lima - Oxapampa - La Merced - Lima. 3 nights of accommodation. 3 breakfasts. Transfers. Official Tourism Guide.',
      includes: [
        '3 nights of accommodation',
        '3 breakfasts',
        'Bus transportation Lima – Oxapampa – La Merced – Lima',
        'Transfers',
        'Official Tourism Guide'
      ],
      note: 'Tour cost per person: S/ 950.00. (9:00 pm Departure from the Movil bus terminal in La Victoria, Lima)',
      days: [
        {
          title: 'DAY 1: OXAPAMPA TOUR',
          activities: [
            '8:30 a.m. Arrival at the Oxapampa terminal and transfer to the hotel.',
            '10:30 a.m. Tour starts: The Oxapampina Colony. Purchase of local products and traditional typical dance (Polka genre).',
            'Tunqui Cueva or upside-down house (optional): Enter a cavern and observe rock formations.',
            'La Florida Viewpoint: Observe the entire city of Oxapampa with a beautiful view.',
            'El Wharapo recreation center: Explanation of the sugar cane process (aguardiente, wharapo and cane honey).',
            'Handicraft house: Shopping for Oxapampa crafts.',
            'Chontabamba Park and Tigre River Waterfall: Suspension bridge and beautiful landscape for photographs.',
            'La Virgen Spring: Source of pure crystal clear water, considered healing water.',
            'Welcome to Oxapampa: Observation of representative symbols and participation in cattle milking and calf nursing.',
            'SCHLAEFLI Museum: Exhibition of ancient artifacts with a brief history by Don Armando Schlaefli.',
            '6:30 p.m. End of the day\'s tour.'
          ]
        },
        {
          title: 'DAY 2: POZUZO TOUR',
          activities: [
            '8:00 a.m. Tour starts towards Pozuzo.',
            'Rayantambo Waterfall: Waterfalls ideal for photographs with a beautiful landscape.',
            'Yulitunqui Waterfall and Welcome Portal to Pozuzo.',
            'Prussia Park and Prussia Neighborhood: We observe the typical European houses.',
            'Visit to the Craft Beer Factory with explanation of its production.',
            'Emperor Guillermo historic suspension bridge.',
            'Salt Water Pools: Refreshing bath in pools with sulfur (good for cell regeneration).',
            'Pozuzo Theme Park: Scale replica of the Norton ship and representations of Pozuzo\'s history.',
            'Typical European lunch.',
            '6:30 p.m. End of the day\'s tour.'
          ]
        },
        {
          title: 'DAY 3: VILLA RICA TOUR',
          activities: [
            '8:30 a.m. Tour starts.',
            'Extreme Canopy: Suspension sport in the air (1200 meters) observing the vegetation.',
            'Chocolate factory: Explanation of the process to obtain chocolate paste.',
            'Villa Rica Square: We observe the largest coffee maker in the world.',
            'El Leon Waterfall: Refreshing bath in the waters of the waterfall and observation of the lion\'s profile.',
            'El Oconal Lagoon: Boat ride and ichthyotherapy (fish eat the dead cells of the foot).',
            'Coffee tasting: Explanation of the coffee process and basic tasting.',
            'La Cumbre Viewpoint: We observe 80% of the city of Villa Rica, which has a shape representative of Peru.',
            '6:30 p.m. End of the day\'s tour.'
          ]
        },
        {
          title: 'DAY 4: PERENE VALLEY TOUR',
          activities: [
            '8:00 a.m. Tour starts.',
            'Bayoz Waterfall: Refreshing bath in the second fall of temperate waters.',
            'Velo de Novia Waterfall: Observation of the fall and taking photos.',
            'Native Community: Dances and traditions based on their ancient culture around a campfire.',
            'Butterfly Farm: Observation of butterfly metamorphosis and a mini zoo.',
            'Outboard motor boat ride on the Perene river.',
            'Typical lunch based on dishes from the jungle area.',
            '7:00 p.m. End of the tour and transfer for the return to Lima.'
          ]
        }
      ]
    }
  },
  cajamarca: {
    id: 'cajamarca',
    image: '/img/paquetes_recomendados/cajamarca.avif',
    heroImage: '/img/paquetes_recomendados/cajamarca.avif',
    es: {
      title: 'Cajamarca Inolvidable',
      subtitle: 'Descubre la historia, la cultura y los impresionantes paisajes de Cajamarca, desde el Cuarto del Rescate hasta Cumbemayo.',
      duration: '3 DÍAS / 2 NOCHES',
      services: 'Pasajes de ida y vuelta desde lugar de origen. Se viaja con choferes, profesionales experimentados y conocedores de la ruta. Dos desayunos. Movilidad turística a todos los recorridos en Cajamarca. Alojamiento en hotel a elección del cliente. Están incluidas todas las entradas y guiados.',
      note: 'Horarios y punto de salida según coordinación previa.',
      days: [
        {
          title: 'PRIMER DÍA: CITY TOURS / VENTANILLAS DE OTUZCO',
          activities: [
            'Instalaciones en Gran Hotel Colonial.',
            'Desayuno.',
            'City Tours, conociendo Plaza de Armas, la Iglesia Catedral, Museo de Hombres y Mujeres, Iglesia Complejo monumental Belén, Capilla Santa Apolonia. Silla del Inca, ubicada en lo alto de la colina del mismo nombre, desde donde tendremos una vista panorámica de la ciudad.',
            'También visitaremos el famoso Cuarto del Rescate.',
            'Almuerzo.',
            'Salida hacia Ventanillas de Otuzco, que son series de galerías horizontales excavadas en roca volcánica en época pre-inca con fines funerarios, puente colgante, Fundo los Alpes y degustación manjar blanco, jardín de las hortensias.',
            'Primera noche de hotel.'
          ]
        },
        {
          title: 'SEGUNDO DIA: CALLACPUMA/ NAMORA/ LA COLPA/ BAÑOS DEL INCA',
          activities: [
            'Desayuno.',
            'Visita a la Alameda de los Incas.',
            'Conoceremos las Cuevas de Callacpuma y su arte rupestre.',
            'Visita a una fábrica de guitarras.',
            'Visita al Bosque de Piedra los Sapitos.',
            'Almuerzo en Namora.',
            'Visita a la laguna San Nicolás en Namora, en donde se podrán pasear en los Caballitos de Totora.',
            'Visita a la Ex Hacienda La Colpa, donde podrán apreciar el Tradicional llamado de vacas por su nombre, terminamos en los baños del inca con su Importante Museo de Sitio.',
            'Retorno al hotel y Segunda noche de hotel.'
          ]
        },
        {
          title: 'TERCER DÍA: CUMBEMAYO/ COMPRAS',
          activities: [
            'Desayuno.',
            'Partida al Cumbemayo el bosque de piedras donde se pueden ver diversas formas de animales y personas en las rocas, también conoceremos un impresionante trabajo de ingeniería hidráulica como el canal de Cumbemayo.',
            'Retorno a Cajamarca.',
            'Tarde de compras y cena.',
            '9:30 pm Retorno a Trujillo.'
          ]
        }
      ]
    },
    en: {
      title: 'Unforgettable Cajamarca',
      subtitle: 'Discover the history, culture, and stunning landscapes of Cajamarca, from the Rescue Room to Cumbemayo.',
      duration: '3 DAYS / 2 NIGHTS',
      services: 'Round trip tickets from place of origin. Travel with experienced and knowledgeable professional drivers. Two breakfasts. Tourist mobility to all tours in Cajamarca. Accommodation in hotel of client\'s choice. All entrance fees and guided tours are included.',
      note: 'Departure times and points according to prior coordination.',
      days: [
        {
          title: 'FIRST DAY: CITY TOUR / VENTANILLAS DE OTUZCO',
          activities: [
            'Installation at Gran Hotel Colonial.',
            'Breakfast.',
            'City Tour, visiting the Plaza de Armas, the Cathedral Church, Museum of Men and Women, Belén Monumental Complex Church, Santa Apolonia Chapel. The Inca Seat, located at the top of the hill of the same name, from where we will have a panoramic view of the city.',
            'We will also visit the famous Rescue Room.',
            'Lunch.',
            'Departure to Ventanillas de Otuzco, which are a series of horizontal galleries excavated in volcanic rock in the pre-Inca era for funerary purposes, hanging bridge, Fundo Los Alpes and tasting of manjar blanco, hydrangea garden.',
            'First night at the hotel.'
          ]
        },
        {
          title: 'SECOND DAY: CALLACPUMA / NAMORA / LA COLPA / BAÑOS DEL INCA',
          activities: [
            'Breakfast.',
            'Visit to the Alameda de los Incas.',
            'We will discover the Callacpuma Caves and their rock art.',
            'Visit to a guitar factory.',
            'Visit to the Los Sapitos Stone Forest.',
            'Lunch in Namora.',
            'Visit to the San Nicolás lagoon in Namora, where you can take a ride on the Caballitos de Totora.',
            'Visit to the Ex Hacienda La Colpa, where you can appreciate the traditional calling of cows by their names, we finish at the Baños del Inca with its Important Site Museum.',
            'Return to the hotel and second night at the hotel.'
          ]
        },
        {
          title: 'THIRD DAY: CUMBEMAYO / SHOPPING',
          activities: [
            'Breakfast.',
            'Departure to Cumbemayo, the stone forest where you can see various shapes of animals and people in the rocks, we will also see an impressive hydraulic engineering work like the Cumbemayo canal.',
            'Return to Cajamarca.',
            'Shopping afternoon and dinner.',
            '9:30 p.m. Return to Trujillo.'
          ]
        }
      ]
    }
  },
  cusco: {
    id: 'cusco',
    image: '/img/paquetes_recomendados/cusco.avif',
    heroImage: '/img/paquetes_recomendados/cusco.avif',
    es: {
      title: 'Cusco Mágico',
      subtitle: 'Explora la magia del Imperio Inca, maravíllate con Machupicchu y conquista la Montaña de 7 Colores.',
      duration: '5 DÍAS / 4 NOCHES',
      services: 'Recojo del aeropuerto. Vuelos Trujillo-Lima-Trujillo y Lima-Cusco-Lima. 04 noches alojamiento (Hotel Arcangel o similar) a pocas cuadras de la plaza de armas de Cusco. 04 desayunos y un almuerzo buffet en Urubamba y un almuerzo en el tour Montaña de 7 colores. Bus turístico a todos los lugares mencionados. Entradas a todos los lugares turísticos. Ticket de tren ida y retorno (tren turístico Expedition). Boleto turístico. Bus de subida/bajada a Machupicchu (Consetur). Guía profesional en Valle Sagrado y Machupicchu. Traslados Tren Expedition Cusco/Ollanta/Cusco, City tour, Montaña de 7 colores.',
      includes: [
        'Recojo del aeropuerto',
        'Vuelos Trujillo Lima Trujillo y Lima Cusco Lima',
        '04 noches alojamiento (Hotel Arcangel o similar) a pocas cuadras de la plaza de armas de Cusco',
        '04 desayunos y un almuerzo bufete en Urubamba y un almuerzo en el tour Montaña de 7 colores',
        'Bus turístico a todos los lugares mencionados',
        'Entradas a todos los lugares turísticos',
        'Ticket de tren ida y retorno (tren turístico Expedition)',
        'Boleto turístico',
        'Bus de subida / bajada a Machupicchu (Consetur)',
        'Guía profesional en valle sagrado',
        'Guías profesionales en Machupicchu',
        'Traslados Tren Expedition Cusco/Ollanta/Cusco',
        'City tour',
        'Montaña de 7 colores'
      ],
      note: 'Costo del tour por persona: $750.00 US Dólares.',
      days: [
        {
          title: 'PRIMER DÍA: CITY TOURS',
          activities: [
            'a.m. Recepción en el aeropuerto a la hora indicada para luego llevarlos al Hotel.',
            '11:00 a.m. Recojo del Hotel, donde como primer punto se tendrá el Templo del Koricancha.',
            'Continuaremos en bus para visitar los centros arqueológicos Incas: El Templo de Sacsayhuamán que tiene una ubicación estratégica desde donde podrá dar una vista panorámica al Cusco. Este templo es muy famoso por las enormes piedras pulidas y moldeadas, algunas de estas tienen 9m/30ft de altura y tienen un peso de 350 toneladas, todas estas fueron unidas con tal precisión que es imposible poder ingresar un aguja en las uniones de estas inmensas piedras.',
            'Seguido nos dirigimos a un templo místico de los incas, Qenqo, donde en época inca se hacían los sacrificios religiosos.',
            'Luego conoceremos el centro de control y militar de los Incas, Puca Pucara, donde aquí todo hombre debía registrar su ingreso a la Ciudad de Cusco y finalmente el Templo Tambomachay.',
            '3:00 p.m. Retorno a Cusco.'
          ]
        },
        {
          title: 'SEGUNDO DÍA: CUSCO / VALLE SAGRADO DE LOS INKAS',
          activities: [
            '8:20 a.m. Recojo del hotel.',
            'Este día nosotros tendremos un viaje al Valle Sagrado de los Incas donde visitaremos diferentes pueblos y centros Arqueológicos.',
            'Como primer punto visitaremos Pisac, la construcción inca, el colorido mercado andino y la Iglesia Católica.',
            'Después pasaremos por algunos pueblos como Lamay, Calca y Urubamba donde nos detendremos para el almuerzo en un restaurante turístico campestre.',
            'Después del almuerzo nos dirigiremos a Ollantaytambo, donde podremos observar las típicas calles aún de trazo Inca, y sobre todo la impresionante construcción y las terrazas agrícolas del Templo de Ollantaytambo. Desde esta se tendrá una vista impresionante de todo el Valle Sagrado.',
            'Finalmente visitaremos el pueblo andino de Chinchero donde la construcción real de Tupac Inca Yupanqui vive, usted puede admirar las perfectas paredes incas que aún se preservan en la plaza de armas de este pueblo y visitar el templo Colonial de Chincheros con interesantes pinturas murales y paredes Incas.',
            'Traslado al terminal de Ollantaytambo para embarque en tren Expedition al pueblo de Aguas Calientes donde se pernoctará.'
          ]
        },
        {
          title: 'TERCER DÍA: CUSCO – MACHUPICCHU',
          activities: [
            '8:00 a.m. Desayuno.',
            'Luego tomaremos los buses de Consetur (media hora de subida en bus) y dirigirnos a Machupicchu, donde visitaremos este maravilloso Santuario también conocido como "La ciudad Perdida de los Incas", uno de los mejores ejemplos conocidos de arquitectura inca que aún sobrevive.',
            'En este recorrido podrá observar todos los templos, así como la Plaza Principal, la Torre Circular, el Sagrado Reloj Solar o Intihuatana.',
            'Después de la visita, de aproximadamente 3 horas. 2:00 p.m. Regresaremos a Aguas Calientes para almorzar.',
            '3:30 p.m. Retorno en el tren a la estación de Ollantaytambo.',
            '5:00 p.m. Estaremos en la estación de Ollantaytambo para luego llevarlos de retorno a Cusco.',
            '7:30 p.m. Llegarán a Cusco.',
            '8:00 p.m. Cena.'
          ]
        },
        {
          title: 'CUARTO DÍA: CUSCO / MONTAÑA DE 7 COLORES',
          activities: [
            'La montaña de arco iris, conocido como la montaña de 7 colores, montaña colorada, montaña vinicunca, es un lugar mágico donde sus caminos eran parte de la antigua cultura quechua, y que se utiliza para intercambiar sus productos (productos de trueque), junto con las otras regiones Quechuas. Ahora se ha convertido en una maravilla natural parecida a la montaña de arco iris de la China.',
            'Temprano, alrededor de las 03:30 horas, le recogeremos del hotel en Cusco para realizar el viaje con destino al Qollasuyo, parte sur de la antigua Quechua (Cusco), que fue parte importante del Tawantinsuyo (4 regiones antiguas de los Incas).',
            'Desde el inicio viajaremos durante 4 horas en transporte, primero pasaremos por el pueblo de Checacupe, para después seguir por Pitumarka. Finalmente llegaremos a Quechuyno, lugar donde daremos inicio de la caminata.',
            'En este lugar nos detendremos para desayunar y después de una breve charla, empezaremos nuestra caminata al pie del nevado de Ausangate, una subida de aproximadamente 3 horas hasta el punto más alto del cerro colorado.',
            'Durante este trayecto tendremos la oportunidad de ver las distintas variedades de camélidos sudamericanos. Llegado al cerro colorado, tendremos tiempo para tomar fotografías de este lugar enigmático.',
            'Después, continuaremos con nuestra caminata de 3 horas de descenso y partes planas al punto de inicio de la caminata (Quechuyno), donde tendremos el almuerzo.',
            'Finalmente retornaremos a Cusco, donde llegaremos a las 21:00 horas aproximadamente.'
          ]
        },
        {
          title: 'QUINTO DÍA: TRASLADO AEROPUERTO',
          activities: [
            'Desayuno.',
            'Traslado al aeropuerto.',
            'Llegada a Lima.'
          ]
        }
      ]
    },
    en: {
      title: 'Magic Cusco',
      subtitle: 'Explore the magic of the Inca Empire, marvel at Machupicchu, and conquer the 7 Colors Mountain.',
      duration: '5 DAYS / 4 NIGHTS',
      services: 'Pick up from the airport. Flights Trujillo-Lima-Trujillo and Lima-Cusco-Lima. 04 nights accommodation (Hotel Arcangel or similar) a few blocks from the main square of Cusco. 04 breakfasts and a buffet lunch in Urubamba and a lunch on the 7 Colors Mountain tour. Tourist bus to all mentioned places. Entrance fees to all tourist places. Round trip train ticket (Expedition tourist train). Tourist ticket. Bus up/down to Machupicchu (Consetur). Professional guide in Sacred Valley and Machupicchu. Transfers Expedition Train Cusco/Ollanta/Cusco, City tour, 7 Colors Mountain.',
      includes: [
        'Pick up from the airport',
        'Flights Trujillo-Lima-Trujillo and Lima-Cusco-Lima',
        '04 nights accommodation (Hotel Arcangel or similar) a few blocks from the main square of Cusco',
        '04 breakfasts and a buffet lunch in Urubamba and a lunch on the 7 Colors Mountain tour',
        'Tourist bus to all mentioned places',
        'Entrance fees to all tourist places',
        'Round trip train ticket (Expedition tourist train)',
        'Tourist ticket',
        'Bus up/down to Machupicchu (Consetur)',
        'Professional guide in Sacred Valley',
        'Professional guides in Machupicchu',
        'Transfers Expedition Train Cusco/Ollanta/Cusco',
        'City tour',
        '7 Colors Mountain'
      ],
      note: 'Tour cost per person: $750.00 US Dollars.',
      days: [
        {
          title: 'FIRST DAY: CITY TOUR',
          activities: [
            'a.m. Reception at the airport at the indicated time and then transfer to the Hotel.',
            '11:00 a.m. Pick up from the Hotel, where as a first point we will visit the Koricancha Temple.',
            'We will continue by bus to visit the Inca archaeological centers: The Sacsayhuaman Temple which has a strategic location from where you can have a panoramic view of Cusco. This temple is very famous for the huge polished and molded stones, some of these are 9m/30ft high and weigh 350 tons, all these were joined with such precision that it is impossible to insert a needle into the joints of these immense stones.',
            'Then we will go to a mystical temple of the Incas, Qenqo, where religious sacrifices were made in Inca times.',
            'Then we will visit the control and military center of the Incas, Puca Pucara, where every man had to register his entrance to the City of Cusco and finally the Tambomachay Temple.',
            '3:00 p.m. Return to Cusco.'
          ]
        },
        {
          title: 'SECOND DAY: CUSCO / SACRED VALLEY OF THE INCAS',
          activities: [
            '8:20 a.m. Pick up from the hotel.',
            'This day we will have a trip to the Sacred Valley of the Incas where we will visit different towns and Archaeological centers.',
            'As a first point we will visit Pisac, the Inca construction, the colorful Andean market and the Catholic Church.',
            'Then we will pass through some towns such as Lamay, Calca and Urubamba where we will stop for lunch in a country tourist restaurant.',
            'After lunch we will go to Ollantaytambo, where we can observe the typical streets still of Inca layout, and above all the impressive construction and agricultural terraces of the Temple of Ollantaytambo. From here you will have an impressive view of the entire Sacred Valley.',
            'Finally we will visit the Andean town of Chinchero where the real construction of Tupac Inca Yupanqui lives, you can admire the perfect Inca walls that are still preserved in the main square of this town and visit the Colonial temple of Chincheros with interesting mural paintings and Inca walls.',
            'Transfer to the Ollantaytambo terminal to board the Expedition train to the town of Aguas Calientes where we will spend the night.'
          ]
        },
        {
          title: 'THIRD DAY: CUSCO – MACHUPICCHU',
          activities: [
            '8:00 a.m. Breakfast.',
            'Then we will take the Consetur buses (half an hour going up by bus) and head to Machupicchu, where we will visit this wonderful Sanctuary also known as "The Lost City of the Incas", one of the best known examples of surviving Inca architecture.',
            'In this tour you will be able to observe all the temples, as well as the Main Square, the Circular Tower, the Sacred Solar Clock or Intihuatana.',
            'After the visit, of approximately 3 hours. 2:00 p.m. We will return to Aguas Calientes for lunch.',
            '3:30 p.m. Return by train to the Ollantaytambo station.',
            '5:00 p.m. We will be at the Ollantaytambo station and then take you back to Cusco.',
            '7:30 p.m. Arrival in Cusco.',
            '8:00 p.m. Dinner.'
          ]
        },
        {
          title: 'FOURTH DAY: CUSCO / 7 COLORS MOUNTAIN',
          activities: [
            'The rainbow mountain, known as the mountain of 7 colors, colored mountain, vinicunca mountain, is a magical place where its paths were part of the ancient Quechua culture, and that is used to exchange their products (barter products), along with the other Quechua regions. Now it has become a natural wonder similar to the rainbow mountain of China.',
            'Early, around 03:30 hours, we will pick you up from the hotel in Cusco to make the trip to Qollasuyo, southern part of the ancient Quechua (Cusco), which was an important part of the Tawantinsuyo (4 ancient regions of the Incas).',
            'From the beginning we will travel for 4 hours in transport, first we will pass through the town of Checacupe, to then continue through Pitumarka. Finally we will arrive at Quechuyno, where we will start the walk.',
            'In this place we will stop for breakfast and after a brief chat, we will begin our walk at the foot of the Ausangate snowy mountain, an ascent of approximately 3 hours to the highest point of the colored hill.',
            'During this journey we will have the opportunity to see the different varieties of South American camelids. Arriving at the colored hill, we will have time to take pictures of this enigmatic place.',
            'Then, we will continue with our 3-hour walk of descent and flat parts to the starting point of the walk (Quechuyno), where we will have lunch.',
            'Finally we will return to Cusco, where we will arrive at approximately 21:00 hours.'
          ]
        },
        {
          title: 'FIFTH DAY: AIRPORT TRANSFER',
          activities: [
            'Breakfast.',
            'Transfer to the airport.',
            'Arrival in Lima.'
          ]
        }
      ]
    }
  },
  arequipa: {
    id: 'arequipa',
    image: '/img/paquetes_recomendados/arequipa.avif',
    heroImage: '/img/paquetes_recomendados/arequipa.avif',
    es: {
      title: 'Arequipa Ciudad Blanca',
      subtitle: 'Descubre la Ciudad Blanca, admira su arquitectura colonial y maravíllate con el impresionante Cañón del Colca.',
      duration: '5 DÍAS / 4 NOCHES',
      services: 'Pasajes de ida y vuelta desde lugar de origen. Recojo del aeropuerto o terminal terrestre. Transporte turístico durante todo el recorrido. Guía profesional bilingüe. Alojamiento en hotel a elección del cliente. Desayuno continental. Traslados, guiado y las entradas, alimentación completa.',
      includes: [
        'Pasajes Trujillo / Lima / Arequipa y viceversa (vía aérea)',
        'Transporte en movilidad turística a todos los lugares a visitar',
        'Entradas de ingreso para todos los paseos mencionados',
        'Guía profesional para todos los paseos',
        '4 noches de hospedaje',
        '5 desayunos',
        '5 almuerzos (dentro de ellas 2 almuerzos buffet en el 2do y 3er día)',
        '4 cenas',
        'Botiquín de primeros auxilios'
      ],
      note: 'Precio por persona: S/ 2500.00',
      days: [
        {
          title: 'PRIMER DÍA: CAMPIÑA TOUR Y RUTA DEL SILLAR',
          activities: [
            'Salida de la ciudad de Trujillo hacia Lima / Arequipa.',
            'Recojo del aeropuerto y traslado al hotel.',
            'Dispondrán de tiempo para acomodarse. (Check-in: 12:00 pm, Check-out: 10:00 am).',
            '09:30 am - 01:30 pm CAMPIÑA TOUR: Recojo del hotel.',
            'Visita al Mirador de Carmen Alto, Yanahuara y Cayma. Visita al outlet Incalpaca y zoológico para observar 4 variedades de camélidos (Llama, Alpaca, Vicuña y Guanaco).',
            'Pasaremos por los lagos artificiales de Tingo y Sachaca tomando la vía paisajista.',
            'Ingreso a la Mansión del Fundador (casa colonial con ornamentos de origen colonial y republicano).',
            'Visita al Molino de Sabandia (construcción del siglo XVI), donde opcionalmente podrán realizar deportes extremos, cabalgata, paseo en cuatrimoto, entre otros.',
            'Cruzaremos el distrito de Paucarpata con su bella andenería pre-inca.',
            'Retorno a la ciudad de Arequipa y tiempo para almorzar.',
            '02:30 pm - 06:00 pm RUTA DEL SILLAR: Recojo del restaurante.',
            'Traslado al distrito de Cerro Colorado hacia las famosas Canteras de Añashuayco. Observaremos el proceso ancestral de elaboración y extracción de bloques de sillar blanco.',
            'Observación del megatallado en un farallón del frontis de la Iglesia de la Compañía de Jesús.',
            'Caminata de 20 minutos por la enigmática Quebrada de Culebrillas (cantera virgen con sendero estrecho formado por erosión del agua y viento). Al final hallaremos misteriosos petroglifos.',
            'Retorno a la ciudad de Arequipa.'
          ]
        },
        {
          title: 'SEGUNDO DÍA: AREQUIPA - CHIVAY',
          activities: [
            '07:30 am - 08:00 am Recojo del hotel para iniciar nuestra excursión al Valle del Colca.',
            'Tomaremos la carretera Yura, disfrutando de vistas de los volcanes y la Reserva Nacional de Salinas y Aguada Blanca, hábitat de vicuñas, llamas y alpacas.',
            'Parada en Patahuasi para observar formaciones geológicas y tomar infusión de coca.',
            'Continuaremos por Bofedales y Tojra Pampa hasta el Mirador de los Andes (Patapampa) a 4910 m.s.n.m. para observar los volcanes Ampato, Sabancaya y Hualca Hualca.',
            'Llegada al hermoso pueblo de Chivay y almuerzo buffet.',
            'Por la tarde instalación en su hotel y visita opcional a los baños termomedicinales de Chacapi o Yanque.',
            'Cena típica en restaurante con show folclórico y pernocte.'
          ]
        },
        {
          title: 'TERCER DÍA: CHIVAY - CRUZ DEL CÓNDOR - AREQUIPA',
          activities: [
            'Tiempo para el desayuno temprano.',
            'Salida hacia el Mirador de la Cruz del Cóndor, donde se podrá contemplar el majestuoso vuelo de los cóndores a pocos metros y la profundidad del Cañón del Colca.',
            'De retorno, visita a los pueblos tradicionales como Pinchollo, Maca y Yanque, observando iglesias coloniales, andenerías y terrazas Incas y Pre-Incas.',
            'Llegada a Chivay para el almuerzo buffet.',
            'Retorno a la ciudad de Arequipa.'
          ]
        },
        {
          title: 'CUARTO DÍA: CATARATA DE PILLONES Y BOSQUE DE PIEDRAS DE PURUÑA',
          activities: [
            '06:00 am - 06:20 am Recojo de los hoteles.',
            'Inicio de la excursión por la carretera Yura con vistas a los volcanes. Visita al pueblo fantasma de Pampa de Arrieros y su antigua estación de tren.',
            'Parada en la Reserva Nacional Salinas y Aguada Blanca y en Patahuasi para tomar un mate inca.',
            'Llegada al Bosque de Piedras de Puruña (parada en mirador Carlitos). Caminata de 1 hora y 30 minutos interpretando las siluetas de rocas esculpidas por la erosión.',
            'Llegada al centro poblado de Pillones y descenso hacia la Catarata de Pillones.',
            'Tiempo libre en la caída de agua para fotos y disfrutar del paisaje.',
            'Retorno a la ciudad de Arequipa llegando aproximadamente a las 05:00 pm.'
          ]
        },
        {
          title: 'QUINTO DÍA: RESERVA DE SALINAS Y AGUADA BLANCA - TRASLADO',
          activities: [
            '06:00 am Recojo del hotel. Viaje de 2 horas hacia la Reserva Nacional de Salinas y Aguada Blanca (4300 m.s.n.m.).',
            'Paso por el pueblo de Chiguata (plaza principal, iglesia y andenes pre incas).',
            'Ingreso a la Reserva, observación del bosque de Queñuas y espectacular vista de la parte posterior de los volcanes Misti, Chachani, Pichu Pichu y Ubinas.',
            'Visita a la Laguna y Salar de Salinas (espejos de agua). Avistamiento de llamas, alpacas, vicuñas, y aves andinas como guayatas, patos cordilleranos y flamencos.',
            'Caminata por el salar, observación de producción de sal y extracción de borato. Visita a fuente de aguas termales de poca profundidad.',
            '02:00 pm Retorno a Arequipa.',
            'Traslado hacia el aeropuerto o terminal terrestre para el viaje de regreso a Trujillo / lugar de origen.'
          ]
        }
      ]
    },
    en: {
      title: 'White City of Arequipa',
      subtitle: 'Discover the White City, admire its colonial architecture, and marvel at the impressive Colca Canyon.',
      duration: '5 DAYS / 4 NIGHTS',
      services: 'Round trip tickets from place of origin. Pick up from the airport or bus terminal. Tourist transport during the whole tour. Bilingual professional guide. Accommodation in hotel of client\'s choice. Continental breakfast. Transfers, guided tours and entrance fees, full meals.',
      includes: [
        'Round trip flights Trujillo / Lima / Arequipa',
        'Tourist transportation to all visited places',
        'Entrance fees for all mentioned tours',
        'Professional guide for all tours',
        '4 nights of accommodation',
        '5 breakfasts',
        '5 lunches (including 2 buffet lunches on days 2 and 3)',
        '4 dinners',
        'First aid kit'
      ],
      note: 'Tour cost per person: S/ 2500.00',
      days: [
        {
          title: 'FIRST DAY: COUNTRYSIDE TOUR AND SILLAR ROUTE',
          activities: [
            'Departure from the city of Trujillo to Lima / Arequipa.',
            'Airport pickup and transfer to the hotel.',
            'Free time to settle in. (Check-in: 12:00 pm, Check-out: 10:00 am).',
            '09:30 am - 01:30 pm COUNTRYSIDE TOUR: Hotel pickup.',
            'Visit the Carmen Alto Viewpoint, Yanahuara, and Cayma. Visit the Incalpaca outlet and zoo to observe 4 varieties of camelids (Llama, Alpaca, Vicuña, and Guanaco).',
            'Pass by the artificial lakes of Tingo and Sachaca taking the landscape route.',
            'Entrance to the Founder\'s Mansion (colonial house with colonial and republican ornaments).',
            'Visit the Sabandia Mill (16th-century construction), where you can optionally do extreme sports, horseback riding, ATV rides, among others.',
            'Cross the district of Paucarpata with its beautiful pre-Inca terraces.',
            'Return to the city of Arequipa and time for lunch.',
            '02:30 pm - 06:00 pm SILLAR ROUTE: Pickup from the restaurant.',
            'Transfer to the Cerro Colorado district to the famous Añashuayco Quarries. We will observe the ancestral process of elaboration and extraction of white sillar blocks.',
            'Observation of the mega-carving on a cliff of the facade of the Church of the Company of Jesus.',
            '20-minute walk through the enigmatic Culebrillas Ravine (virgin quarry with a narrow path formed by water and wind erosion). At the end, we will find mysterious petroglyphs.',
            'Return to the city of Arequipa.'
          ]
        },
        {
          title: 'SECOND DAY: AREQUIPA - CHIVAY',
          activities: [
            '07:30 am - 08:00 am Hotel pickup to begin our excursion to the Colca Valley.',
            'We will take the Yura road, enjoying views of the volcanoes and the Salinas and Aguada Blanca National Reserve, habitat of vicuñas, llamas, and alpacas.',
            'Stop in Patahuasi to observe geological formations and drink coca tea.',
            'Continue through Bofedales and Tojra Pampa to the Viewpoint of the Andes (Patapampa) at 4910 m.a.s.l. to observe the Ampato, Sabancaya, and Hualca Hualca volcanoes.',
            'Arrival at the beautiful town of Chivay and buffet lunch.',
            'In the afternoon, check-in at your hotel and optional visit to the thermal medicinal baths of Chacapi or Yanque.',
            'Typical dinner in a restaurant with a folklore show and overnight stay.'
          ]
        },
        {
          title: 'THIRD DAY: CHIVAY - CRUZ DEL CONDOR - AREQUIPA',
          activities: [
            'Time for an early breakfast.',
            'Departure to the Cruz del Condor Viewpoint, where you can contemplate the majestic flight of the condors a few meters away and the depth of the Colca Canyon.',
            'On the way back, visit traditional towns like Pinchollo, Maca, and Yanque, observing colonial churches, pre-Inca and Inca terraces.',
            'Arrival in Chivay for a buffet lunch.',
            'Return to the city of Arequipa.'
          ]
        },
        {
          title: 'FOURTH DAY: PILLONES WATERFALL AND PURUÑA STONE FOREST',
          activities: [
            '06:00 am - 06:20 am Hotel pickups.',
            'Start the excursion via the Yura road with views of the volcanoes. Visit the ghost town of Pampa de Arrieros and its old train station.',
            'Stop at the Salinas and Aguada Blanca National Reserve and Patahuasi for an Inca tea.',
            'Arrival at the Puruña Stone Forest (stop at Carlitos viewpoint). 1 hour and 30-minute walk interpreting the rock silhouettes sculpted by erosion.',
            'Arrival at the town of Pillones and descent to the Pillones Waterfall.',
            'Free time at the waterfall for photos and enjoying the landscape.',
            'Return to the city of Arequipa arriving at approximately 05:00 pm.'
          ]
        },
        {
          title: 'FIFTH DAY: SALINAS AND AGUADA BLANCA RESERVE - TRANSFER',
          activities: [
            '06:00 am Hotel pickup. 2-hour trip to the Salinas and Aguada Blanca National Reserve (4300 m.a.s.l.).',
            'Pass through the town of Chiguata (main square, church, and pre-Inca terraces).',
            'Enter the Reserve, observe the Queñuas forest, and get a spectacular view of the back of the Misti, Chachani, Pichu Pichu, and Ubinas volcanoes.',
            'Visit the Salinas Lagoon and Salt Flat (water mirrors). Sighting of llamas, alpacas, vicuñas, and Andean birds such as guayatas, Andean ducks, and flamingos.',
            'Walk through the salt flat, observing salt production and borate extraction. Visit a shallow thermal water source.',
            '02:00 pm Return to Arequipa.',
            'Transfer to the airport or bus terminal for the return trip to Trujillo / place of origin.'
          ]
        }
      ]
    }
  },
  ica: {
    id: 'ica',
    image: '/img/paquetes_recomendados/ica.avif',
    heroImage: '/img/paquetes_recomendados/ica.avif',
    es: {
      title: 'Belleza, Misterio y Aventura (Ica, Nazca y Paracas)',
      subtitle: 'Disfruta de un inolvidable paseo por las dunas de Huacachina, sobrevuela el misterio de Nazca y explora la vida silvestre en Paracas.',
      duration: '3 DÍAS / 2 NOCHES',
      services: 'Pasajes de ida y vuelta desde lugar de origen. Ingresos a todos los lugares a visitar, Guía profesional de Turismo, Transporte turístico a todos los lugares a visitar, Paseo en tubulares en la Huacachina (opcional), Paseo en los deslizadores a las Islas Ballestas, Alimentación completa, Hospedaje por 2 Noches en hotel a elección del cliente.',
      note: 'Horarios y punto de salida según coordinación previa.',
      days: [
        {
          title: 'PRIMER DIA: CITY TOUR ICA',
          activities: [
            'Arribo a la ciudad de Ica e instalación en el hotel seleccionado.',
            'Almuerzo.',
            '02:30 pm City tours Ica (duración: 5 horas).',
            'Visita por el centro monumental de Ica: Catedral, Plaza de Armas y Casonas Coloniales. Visitaremos a la Iglesia del Señor de Luren (la más tradicional de Ica, solo vista exterior).',
            'Visita a la laguna de Huacachina "El Oasis de América": Leyenda de la Sirena de Huacachina, Paseo por los alrededores de la laguna, Práctica de sandboard, Paseo en tubulares, Paseo en botes pedalones (opcional).',
            'Visita al pueblo tradicional de las Brujas de Cachiche: Visita al monumento de la bruja de Cachiche, Visita a la misteriosa palmera de las 7 cabezas.',
            'Visita a la bodega artesanal de vinos "EL CATADOR": Paseo por sus instalaciones, degustación y compras de vinos artesanales.',
            '08:00 pm Cena en el restaurant seleccionado y pernocte.'
          ]
        },
        {
          title: 'SEGUNDO DIA: TOUR ARQUEOLOGICO NASCA',
          activities: [
            '07:00 am Desayuno en el restaurant seleccionado.',
            '08:00 am Salida rumbo a Nazca.',
            '10:00 am Llegada al valle de Nazca (2 Horas de viaje).',
            'Visita al museo "Maria Reiche": Muestra de cerámicas y restos humanos Nasca, Trabajos y habitación de la Dra. Maria Reiche, Mausoleo de la Dra. Maria Reiche.',
            'Mirador artificial de las líneas de Nazca: Donde se aprecian las figuras de las manos y el árbol, figuras de trapezoides y parte de la figura de la lagartija.',
            'Visita a las ruinas de Paredones: Centro administrativo Inca, visitaremos acueductos de Cantalloc (Muestra de las magníficas obras de Ingeniería Hidráulica dejada por los antiguos Nazcas).',
            'Visita a la casa del artesano Nazca: Elaboración de cerámicas nazca utilizando las técnicas de los antiguos pobladores Nazca, exhibición y ventas de réplicas de Cerámicas nazca.',
            'Visitaremos la casa del proceso artesanal del oro: Muestra de la extracción y proceso artesanal del oro, exhibición y ventas de adornos y joyas trabajadas en oro.',
            '02:00 pm Almuerzo.',
            '04:30 pm Arribo a la Ciudad de Ica.',
            '07:00 pm Cena y pernocte.'
          ]
        },
        {
          title: 'TERCER DIA: ISLAS BALLESTAS Y RESERVA NACIONAL DE PARACAS',
          activities: [
            '07:00 am Desayuno.',
            '08:00 am Salida rumbo a Paracas.',
            '10:00 am Tour marítimo Islas Ballestas: Donde pasearemos en deslizador con chalecos salvavidas, tendremos una vista de la figura del candelabro y una hermosa vista de los lobos marinos, aves guaneras, Pingüinos Humboldt, Delfines, etc.',
            '12:00 pm Retorno de las Islas Ballestas y tiempo libre de compras: souvenirs, recuerdos, etc.',
            '12:30 pm Almuerzo en el restaurant seleccionado.',
            '01:30 pm Tour terrestre a la Reserva Nacional de Paracas: Recorreremos el centro de interpretación de la reserva, caminaremos a la bahía para ver a los flamencos donde tendremos una vista panorámica de la playa roja y visitaremos la playa lagunillas.',
            '04:30 pm Retorno a Lima.',
            '08:30 pm Llegada a Lima.'
          ]
        }
      ]
    },
    en: {
      title: 'Beauty, Mystery and Adventure (Ica, Nazca and Paracas)',
      subtitle: 'Enjoy an unforgettable ride through the Huacachina dunes, fly over the mystery of Nazca and explore the wildlife in Paracas.',
      duration: '3 DAYS / 2 NIGHTS',
      services: 'Round trip tickets from place of origin. Entrances to all places to visit, Professional Tourist Guide, Tourist transport to all places to visit, Buggy ride in Huacachina (optional), Speedboat ride to the Ballestas Islands, Full meals, Lodging for 2 Nights in hotel of client\'s choice.',
      note: 'Departure times and points according to prior coordination.',
      days: [
        {
          title: 'FIRST DAY: ICA CITY TOUR',
          activities: [
            'Arrival in the city of Ica and installation in the selected hotel.',
            'Lunch.',
            '02:30 p.m. Ica City tour (duration: 5 hours).',
            'Visit through the monumental center of Ica: Cathedral, Main Square and Colonial Mansions. We will visit the Church of the Lord of Luren (the most traditional of Ica, only exterior view).',
            'Visit to the Huacachina lagoon "The Oasis of America": Legend of the Mermaid of Huacachina, Walk around the lagoon, Sandboard practice, Buggy ride, Pedal boat ride (optional).',
            'Visit to the traditional town of the Witches of Cachiche: Visit to the monument of the witch of Cachiche, Visit to the mysterious palm tree with 7 heads.',
            'Visit to the artisanal wine cellar "EL CATADOR": Walk through its facilities, tasting and shopping for artisanal wines.',
            '08:00 p.m. Dinner in the selected restaurant and overnight.'
          ]
        },
        {
          title: 'SECOND DAY: NASCA ARCHAEOLOGICAL TOUR',
          activities: [
            '07:00 a.m. Breakfast in the selected restaurant.',
            '08:00 a.m. Departure towards Nazca.',
            '10:00 a.m. Arrival in the Nazca valley (2 hours trip).',
            'Visit to the "Maria Reiche" museum: Exhibition of ceramics and Nazca human remains, Work and room of Dr. Maria Reiche, Mausoleum of Dr. Maria Reiche.',
            'Artificial viewpoint of the Nazca lines: Where you can see the figures of the hands and the tree, trapezoid figures and part of the lizard figure.',
            'Visit to the ruins of Paredones: Inca administrative center, we will visit the Cantalloc aqueducts (Sample of the magnificent works of Hydraulic Engineering left by the ancient Nazcas).',
            'Visit to the house of the Nazca artisan: Elaboration of Nazca ceramics using the techniques of the ancient Nazca settlers, exhibition and sales of Nazca ceramic replicas.',
            'We will visit the house of the artisanal gold process: Sample of the extraction and artisanal process of gold, exhibition and sales of ornaments and jewelry worked in gold.',
            '02:00 p.m. Lunch.',
            '04:30 p.m. Arrival in the City of Ica.',
            '07:00 p.m. Dinner and overnight.'
          ]
        },
        {
          title: 'THIRD DAY: BALLESTAS ISLANDS AND PARACAS NATIONAL RESERVE',
          activities: [
            '07:00 a.m. Breakfast.',
            '08:00 a.m. Departure towards Paracas.',
            '10:00 a.m. Ballestas Islands maritime tour: Where we will ride in a speedboat with life jackets, we will have a view of the candelabrum figure and a beautiful view of the sea lions, guano birds, Humboldt Penguins, Dolphins, etc.',
            '12:00 p.m. Return from the Ballestas Islands and free time for shopping: souvenirs, memories, etc.',
            '12:30 p.m. Lunch in the selected restaurant.',
            '01:30 p.m. Land tour to the Paracas National Reserve: We will tour the interpretation center of the reserve, we will walk to the bay to see the flamingos where we will have a panoramic view of the red beach and we will visit the Lagunillas beach.',
            '04:30 p.m. Return to Lima.',
            '08:30 p.m. Arrival in Lima.'
          ]
        }
      ]
    }
  },
  lima: {
    id: 'lima',
    image: '/img/paquetes_recomendados/lima.avif',
    heroImage: '/img/paquetes_recomendados/lima.avif',
    es: {
      title: 'Lima Histórica y Moderna',
      subtitle: 'Descubre la Ciudad de los Reyes, desde su majestuoso centro histórico hasta el moderno circuito de playas.',
      duration: '3 DÍAS / 2 NOCHES',
      services: 'Pasajes de ida y vuelta desde lugar de origen. Movilidad turística a todos los circuitos turísticos, dos noches en hotel a elección del cliente, dos desayunos, dos almuerzos, guiado y entradas a todos los lugares mencionados.',
      note: 'Horarios y punto de salida según coordinación previa.',
      days: [
        {
          title: 'PRIMER DIA: LIMA HISTÓRICA',
          activities: [
            '8:00 am Llegada a Lima e instalación en el hotel.',
            '9:00 am Salida al centro histórico de Lima donde visitaremos la Plaza de Armas, Catedral, Iglesia San Francisco.',
            '12:00 am Podremos ver el tradicional cambio de guardia en palacio de gobierno.',
            '12:45 pm Almuerzo.',
            '2:00 pm Visita al Congreso donde haremos un recorrido y conoceremos los principales ambientes del palacio legislativo.',
            '3:30 pm Visita al museo de la santa inquisición donde conoceremos la historia del santo oficio y las torturas que hacían a las personas que iban contra las creencias religiosas.',
            '5:00 pm Retorno al hotel.',
            '7:00 pm Cena y pernocte en el hotel.'
          ]
        },
        {
          title: 'SEGUNDO DIA: CALLAO - PARQUE DE LAS LEYENDAS',
          activities: [
            '8:00 am Desayuno.',
            '9:00 am Partida al distrito de La Punta en el Callao donde conoceremos la Fortaleza del Real Felipe que fue construida para proteger el Callao de los piratas.',
            '12:00 pm Almuerzo.',
            '1:30 pm Visita al Parque de las Leyendas.',
            '6:00 pm Salida y retorno al hotel.',
            '8:00 pm Visita al Paseo de las Aguas.',
            '10:00 pm Retorno y pernocte en el hotel.'
          ]
        },
        {
          title: 'TERCER DIA: BARRANCO - CIRCUITO DE PLAYAS',
          activities: [
            '8:00 am Desayuno.',
            '9:00 am Partida al distrito bohemio de Barranco.',
            '10:00 am Llegada a Barranco donde podremos conocer el tradicional Puente de los Suspiros, lugar que inspiró a nuestra gran compositora Chabuca Granda.',
            '11:00 am Recorrido al Circuito de Playas y Larcomar.',
            '1:30 pm Almuerzo.',
            'Tarde libre en Plaza Norte.',
            '8:00 pm Cena y retorno a Trujillo.'
          ]
        }
      ]
    },
    en: {
      title: 'Historical and Modern Lima',
      subtitle: 'Discover the City of Kings, from its majestic historic center to the modern beach circuit.',
      duration: '3 DAYS / 2 NIGHTS',
      services: 'Round trip tickets from place of origin. Tourist mobility to all tourist circuits, two nights in hotel of client\'s choice, two breakfasts, two lunches, guided tours and entrance fees to all mentioned places.',
      note: 'Departure times and points according to prior coordination.',
      days: [
        {
          title: 'FIRST DAY: HISTORICAL LIMA',
          activities: [
            '8:00 a.m. Arrival in Lima and installation at the hotel.',
            '9:00 a.m. Departure to the historic center of Lima where we will visit the Plaza de Armas, Cathedral, and San Francisco Church.',
            '12:00 p.m. We will be able to see the traditional changing of the guard at the government palace.',
            '12:45 p.m. Lunch.',
            '2:00 p.m. Visit to the Congress where we will take a tour and get to know the main environments of the legislative palace.',
            '3:30 p.m. Visit to the Holy Inquisition Museum where we will learn about the history of the Holy Office and the tortures they inflicted on people who went against religious beliefs.',
            '5:00 p.m. Return to the hotel.',
            '7:00 p.m. Dinner and overnight at the hotel.'
          ]
        },
        {
          title: 'SECOND DAY: CALLAO - PARQUE DE LAS LEYENDAS',
          activities: [
            '8:00 a.m. Breakfast.',
            '9:00 a.m. Departure to the district of La Punta in Callao where we will visit the Real Felipe Fortress which was built to protect Callao from pirates.',
            '12:00 p.m. Lunch.',
            '1:30 p.m. Visit to the Parque de las Leyendas (Zoo and Botanical Garden).',
            '6:00 p.m. Departure and return to the hotel.',
            '8:00 p.m. Visit to the Paseo de las Aguas (Magic Water Circuit).',
            '10:00 p.m. Return and overnight at the hotel.'
          ]
        },
        {
          title: 'THIRD DAY: BARRANCO - BEACH CIRCUIT',
          activities: [
            '8:00 a.m. Breakfast.',
            '9:00 a.m. Departure to the bohemian district of Barranco.',
            '10:00 a.m. Arrival in Barranco where we can see the traditional Bridge of Sighs, a place that inspired our great composer Chabuca Granda.',
            '11:00 a.m. Tour of the Beach Circuit and Larcomar.',
            '1:30 p.m. Lunch.',
            'Free afternoon at Plaza Norte.',
            '8:00 p.m. Dinner and return to Trujillo.'
          ]
        }
      ]
    }
  },
  trujillo: {
    id: 'trujillo',
    image: '/img/paquetes_recomendados/trujillo.avif',
    heroImage: '/img/paquetes_recomendados/trujillo.avif',
    es: {
      title: 'Trujillo Primaveral y Aventurero',
      subtitle: 'Descubre la majestuosidad de Chan Chan, maravíllate con la Dama de Cao, vive la aventura en Cascas y Conache, y relájate en Huanchaco.',
      duration: '4 DÍAS / 3 NOCHES',
      services: 'Recojo del terminal o aeropuerto y traslado al hotel. Tres noches de hospedaje en los hoteles mencionados en base a habitaciones matrimoniales, dobles o triples con baño privado, agua caliente, tv cable, wifi. Movilidad turística a los lugares mencionados. Traslados, guiados y entradas a los lugares turísticos.',
      includes: [
        'Recojo del terminal o aeropuerto y traslado al hotel',
        '3 noches de hospedaje en los hoteles mencionados en base a habitaciones matrimoniales, dobles o triples con baño privado, agua caliente, tv cable, wifi',
        'Movilidad turística a los lugares mencionados',
        '3 desayunos',
        'Traslados, guiados y entradas a los lugares turísticos'
      ],
      note: 'Precio por persona: S/ 680.00',
      days: [
        {
          title: 'PRIMER DÍA: HUACA DE LA LUNA, CABALLOS DE PASO Y HUANCHACO',
          activities: [
            'Llegada e instalación en el hotel céntrico a cuatro cuadras de la plaza mayor.',
            'Desayuno.',
            'Iniciaremos el tour conociendo la campiña de moche, visitando la huaca de la luna.',
            'Tiempo para almuerzo en Restaurant Turístico.',
            'Función de caballos de paso.',
            'Visita a la ciudadela de Chan chan.',
            'Partida al balneario turístico de Huanchaco.',
            'Retorno a Trujillo y pernocte en el hotel.'
          ]
        },
        {
          title: 'SEGUNDO DÍA: RUTA DEL VINO (CASCAS)',
          activities: [
            'Recojo del hotel y partida a Cascas, la ciudad vitivinícola de la Libertad.',
            'Llegada a Cascas y visita a la cascada el Molino, un hermoso paisaje natural.',
            'Visita a la piscigranja Corlas.',
            'Tiempo para almorzar.',
            'Visita al árbol de las mil raíces.',
            'Visita al Cristo de las rocas.',
            'Llegada al viñedo de don Manuelito donde conoceremos cómo es la elaboración de sus deliciosos vinos y tendremos tiempo para compra de vinos.',
            'Retorno a Trujillo.'
          ]
        },
        {
          title: 'TERCER DÍA: DAMA DE CAO Y MIRABUS',
          activities: [
            'Desayuno.',
            'Partida a Magdalena de Cao e ingreso al Museo Dama de Cao.',
            'Recorrido por el centro arqueológico El Brujo.',
            'Tiempo en la plaza de Magdalena de Cao y almuerzo.',
            'Por la tarde, city tour en Mirabus, conociendo las principales calles de la ciudad, observando zonas coloniales, murales y mucho más.'
          ]
        },
        {
          title: 'CUARTO DÍA: CONACHE AVENTURERO',
          activities: [
            'Desayuno.',
            'Partida a un paraíso natural llamado Lagunas de Conache donde podrán practicar Sandboard en las dunas y usar los botes pedalones en la laguna.',
            'Almuerzo en Conache.',
            'Retorno y llegada a Trujillo.',
            'Retorno a su ciudad de origen.'
          ]
        }
      ]
    },
    en: {
      title: 'Spring and Adventurous Trujillo',
      subtitle: 'Discover the majesty of Chan Chan, marvel at the Lady of Cao, live the adventure in Cascas and Conache, and relax in Huanchaco.',
      duration: '4 DAYS / 3 NIGHTS',
      services: 'Pickup from the bus terminal or airport and transfer to the hotel. Three nights of accommodation in mentioned hotels based on double or triple rooms with private bathroom, hot water, cable TV, Wi-Fi. Tourist mobility to the mentioned places. Transfers, guided tours and entrance fees to tourist places.',
      includes: [
        'Pickup from the bus terminal or airport and transfer to the hotel',
        '3 nights of accommodation in mentioned hotels based on matrimonial, double or triple rooms with private bathroom, hot water, cable TV, Wi-Fi',
        'Tourist mobility to the mentioned places',
        '3 breakfasts',
        'Transfers, guided tours and entrance fees to tourist places'
      ],
      note: 'Tour cost per person: S/ 680.00',
      days: [
        {
          title: 'FIRST DAY: HUACA DE LA LUNA, PASO HORSES AND HUANCHACO',
          activities: [
            'Arrival and check-in at the downtown hotel located four blocks from the main square.',
            'Breakfast.',
            'We will start the tour exploring the Moche countryside, visiting the Huaca de la Luna.',
            'Time for lunch at a Tourist Restaurant.',
            'Peruvian Paso Horse Show.',
            'Visit to the Chan Chan citadel.',
            'Departure to the tourist beach resort of Huanchaco.',
            'Return to Trujillo and overnight stay at the hotel.'
          ]
        },
        {
          title: 'SECOND DAY: WINE ROUTE (CASCAS)',
          activities: [
            'Hotel pickup and departure to Cascas, the wine city of La Libertad.',
            'Arrival in Cascas and visit to the El Molino waterfall, a beautiful natural landscape.',
            'Visit to the Corlas fish farm.',
            'Time for lunch.',
            'Visit to the tree of a thousand roots.',
            'Visit to the Christ of the Rocks.',
            'Arrival at Don Manuelito\'s vineyard where we will learn about the elaboration of their delicious wines and have time to purchase wines.',
            'Return to Trujillo.'
          ]
        },
        {
          title: 'THIRD DAY: LADY OF CAO AND MIRABUS',
          activities: [
            'Breakfast.',
            'Departure to Magdalena de Cao and entrance to the Lady of Cao Museum.',
            'Tour through the El Brujo archaeological complex.',
            'Time at the Magdalena de Cao square and lunch.',
            'In the afternoon, city tour on the Mirabus, getting to know the main streets of the city, observing colonial areas, murals, and much more.'
          ]
        },
        {
          title: 'FOURTH DAY: ADVENTUROUS CONACHE',
          activities: [
            'Breakfast.',
            'Departure to a natural paradise called Conache Lagoons where you can practice sandboarding on the dunes and use the pedal boats on the lagoon.',
            'Lunch in Conache.',
            'Return and arrival in Trujillo.',
            'Return trip to your city of origin.'
          ]
        }
      ]
    }
  },
  'trujillo-chiclayo': {
    id: 'trujillo-chiclayo',
    image: '/img/paquetes/trujillo_chiclayo.avif',
    heroImage: '/img/paquetes/trujillo_chiclayo.avif',
    es: {
      title: 'Trujillo y Chiclayo',
      subtitle: 'Descubre los tesoros Moche, Chimú y Sipán en un viaje por dos fascinantes destinos norteños.',
      duration: '3 DÍAS / 2 NOCHES',
      services: 'Bus completamente a disposición Trujillo/Chiclayo/Trujillo. Bus equipado con asientos reclinables, TV, DVD, Música ambiental, Botiquín. 02 conductores profesionales y ayudante conocedores de la ruta. Alojamiento de Hotel céntrico. Dos desayunos. Entradas a los lugares turísticos y museos. Guía de turismo.',
      includes: [
        'Bus completamente a disposición (equipo completo: asientos reclinables, TV, DVD, Música, Botiquín)',
        '02 conductores profesionales y ayudante',
        'Alojamiento en hotel céntrico',
        '2 desayunos',
        'Entradas a los lugares turísticos y museos',
        'Guía de turismo'
      ],
      note: 'Precio por persona: S/ 850.00',
      days: [
        {
          title: 'PRIMER DÍA: FULL DAY TOUR MOCHE - CHIMÚ',
          activities: [
            'Llegada e instalación en Hotel Colonial a una cuadra del centro histórico.',
            'Desayuno.',
            'Iniciaremos el tour conociendo la campiña de moche, visitando la casa del artesano y la imponente Huaca de la Luna (vista panorámica a la Huaca del Sol).',
            'Tiempo para almuerzo.',
            'Función de caballos de paso en casa campo Alcor.',
            'Visita a la ciudadela Nikan o Chan Chan, la ciudad de barro más grande del mundo.',
            'Partida al balneario turístico de Huanchaco, tiempo para pasear por el balneario y conocer los caballitos de totora.',
            'Retorno a Trujillo y pernocte en el hotel.'
          ]
        },
        {
          title: 'SEGUNDO DÍA: FULL DAY CHICLAYO',
          activities: [
            'Salida directa a Chiclayo.',
            'Llegada a Chiclayo donde empezarán conociendo el fascinante paseo Yortuque, un paseo peatonal que nos cuenta su historia a través de murales tipo mosaico.',
            'Visita a fábrica de King Kongs donde les mostrarán cómo se hace este tradicional dulce lambayecano.',
            'Llegada a Lambayeque y tiempo para almorzar.',
            'Ingreso al Museo Tumbas Reales del Señor de Sipán, donde se encuentran los hallazgos originales del Complejo Arqueológico Sipán (Señor de Sipán, Sacerdote, Viejo Señor).',
            'Partida al balneario de Pimentel, el más turístico de Chiclayo. Parada en el criadero de aves gigantes (Ñandús y avestruces) donde les explicarán sobre la crianza de estas aves.',
            'Tiempo de playa en Pimentel.',
            'Tiempo de visita en Monsefú.',
            'Retorno a Trujillo.'
          ]
        },
        {
          title: 'TERCER DÍA: TOUR EL BRUJO',
          activities: [
            'Desayuno.',
            'Salida hacia el Valle de Chicama para visitar el Complejo El Brujo y el Museo de la Señora de Cao (gobernante de la cultura mochica del siglo IV d.C.).',
            'Almuerzo en Magdalena de Cao.',
            'Retorno a Trujillo.',
            'City tour en el mirabus.',
            'Retorno a su ciudad de origen.'
          ]
        }
      ]
    },
    en: {
      title: 'Trujillo and Chiclayo',
      subtitle: 'Discover the Moche, Chimu and Sipan treasures on a journey through two fascinating northern destinations.',
      duration: '3 DAYS / 2 NIGHTS',
      services: 'Bus completely available Trujillo/Chiclayo/Trujillo. Bus equipped with reclining seats, TV, DVD, Music, First aid kit. 2 professional drivers and assistant. Downtown hotel accommodation. Two breakfasts. Entrance fees to tourist places and museums. Tour guide.',
      includes: [
        'Bus completely available (fully equipped: reclining seats, TV, DVD, Music, First aid kit)',
        '2 professional drivers and assistant',
        'Downtown hotel accommodation',
        '2 breakfasts',
        'Entrance fees to tourist places and museums',
        'Tour guide'
      ],
      note: 'Tour cost per person: S/ 850.00',
      days: [
        {
          title: 'FIRST DAY: FULL DAY MOCHE - CHIMU TOUR',
          activities: [
            'Arrival and check-in at a Colonial Hotel one block from the historic center.',
            'Breakfast.',
            'We will start the tour exploring the Moche countryside, visiting the artisan\'s house and the imposing Huaca de la Luna (panoramic view of Huaca del Sol).',
            'Time for lunch.',
            'Peruvian Paso Horse Show at Alcor country house.',
            'Visit to the Nikan citadel or Chan Chan, the largest mud city in the world.',
            'Departure to the tourist beach resort of Huanchaco, time to walk around the resort and see the "caballitos de totora" (reed watercrafts).',
            'Return to Trujillo and overnight stay at the hotel.'
          ]
        },
        {
          title: 'SECOND DAY: FULL DAY CHICLAYO',
          activities: [
            'Direct departure to Chiclayo.',
            'Arrival in Chiclayo where we will visit the fascinating Yortuque promenade, a pedestrian walkway that tells its history through mosaic-style murals.',
            'Visit to the King Kong factory where they will show you how this traditional Lambayeque sweet is made.',
            'Arrival in Lambayeque and time for lunch.',
            'Entrance to the Royal Tombs of Sipan Museum, home to the original findings of the Sipan Archaeological Complex (Lord of Sipan, Priest, Old Lord).',
            'Departure to the Pimentel beach resort, the most touristic in Chiclayo. Stop at the giant bird farm (Rhea and ostriches) where they will explain the breeding of these birds.',
            'Beach time in Pimentel.',
            'Visit time in Monsefu.',
            'Return to Trujillo.'
          ]
        },
        {
          title: 'THIRD DAY: EL BRUJO TOUR',
          activities: [
            'Breakfast.',
            'Departure to the Chicama Valley to visit the El Brujo Complex and the Museum of the Lady of Cao (Moche culture ruler from the 4th century A.D.).',
            'Lunch in Magdalena de Cao.',
            'Return to Trujillo.',
            'City tour on the mirabus.',
            'Return trip to your city of origin.'
          ]
        }
      ]
    }
  },
  salpo: {
    id: 'salpo',
    image: '/img/paquetes_recomendados/salpo.avif',
    heroImage: '/img/paquetes_recomendados/salpo.avif',
    es: {
      title: 'Salpo Inolvidable',
      subtitle: 'Descubre el Balcón del Cielo, el Bosque de Piedras y el Dique de Carabamba.',
      duration: 'FULL DAY',
      services: 'INCLUYE: Movilidad Privada. Guía Turístico. Entradas a los atractivos. Botiquín de primeros auxilios. Actividades propias del tour. Fotografías y videos del recorrido. NO INCLUYE: Alimentación.',
      note: 'Salidas: Sábados, domingos y feriados. Inicio: 06:15 am, Retorno: 9:00 pm. Punto de embarque: Jr. San Martín #541',
      days: [
        {
          title: 'ITINERARIO',
          activities: [
            'Plaza de Armas de Salpo.',
            'Mirador Balcón del Cielo.',
            'Visita Dique y Laguna de Carabamba.',
            'Fábrica de quesos.',
            'Bosque de piedras "El Gran Shamana".',
            'Puesta de Sol en Mal Paso.'
          ]
        }
      ]
    },
    en: {
      title: 'Unforgettable Salpo',
      subtitle: 'Discover the Balcony of Heaven, the Stone Forest and the Carabamba Dam.',
      duration: 'FULL DAY',
      services: 'INCLUDES: Private Mobility. Tour Guide. Entrance fees. First aid kit. Tour activities. Photographs and videos of the tour. DOES NOT INCLUDE: Meals.',
      note: 'Departures: Saturdays, Sundays and holidays. Start: 06:15 am, Return: 9:00 pm. Boarding point: Jr. San Martin #541',
      days: [
        {
          title: 'ITINERARY',
          activities: [
            'Salpo Main Square.',
            'Balcony of Heaven Viewpoint.',
            'Visit Carabamba Dam and Lagoon.',
            'Cheese Factory.',
            '"El Gran Shamana" Stone Forest.',
            'Sunset in Mal Paso.'
          ]
        }
      ]
    }
  },
  'full-day-trujillo': {
    id: 'full-day-trujillo',
    image: '/img/paquetes_recomendados/full-day-trujillo.avif',
    heroImage: '/img/paquetes_recomendados/full-day-trujillo.avif',
    es: {
      title: 'Full Day Trujillo: Chan Chan y Huaca de la Luna',
      subtitle: 'Descubre la Huaca de la Luna, Chan Chan y el encantador Balneario de Huanchaco en un solo día con guías certificados y salidas diarias.',
      duration: 'FULL DAY',
      services: 'INCLUYE: Movilidad Privada. Guía Turístico. Botiquín de primeros auxilios. Actividades propias del tour. Fotografías y videos del recorrido. NO INCLUYE: Alimentación. Entradas.',
      note: 'Salidas: Martes a Domingos. Inicio: 10:30 am, Retorno: 5:00 pm. Punto de embarque: Jr. San Martín #541',
      days: [
        {
          title: 'ITINERARIO',
          activities: [
            'Parque de la fertilidad.',
            'Huaca de la Luna.',
            'Taller de artesanos Moche.',
            'Show de caballos de paso (Opcional).',
            'Ciudadela de Chan-Chan.',
            'Balneario de Huanchaco.'
          ]
        }
      ]
    },
    en: {
      title: 'Full Day Trujillo: Chan Chan and Huaca de la Luna',
      subtitle: 'Discover Huaca de la Luna, Chan Chan and the charming Huanchaco Beach in a single day with certified guides and daily departures.',
      duration: 'FULL DAY',
      services: 'INCLUDES: Private Mobility. Tour Guide. First aid kit. Tour activities. Photographs and videos of the tour. DOES NOT INCLUDE: Meals. Entrance fees.',
      note: 'Departures: Tuesdays to Sundays. Start: 10:30 am, Return: 5:00 pm. Boarding point: Jr. San Martin #541',
      days: [
        {
          title: 'ITINERARY',
          activities: [
            'Fertility Park.',
            'Huaca de la Luna.',
            'Moche artisan workshop.',
            'Peruvian Paso Horse Show (Optional).',
            'Chan-Chan Citadel.',
            'Huanchaco Beach.'
          ]
        }
      ]
    }
  },
  'caleta-colorada': {
    id: 'caleta-colorada',
    image: '/img/paquetes_recomendados/caleta-colorada.avif',
    heroImage: '/img/paquetes_recomendados/caleta-colorada.avif',
    es: {
      title: 'Caleta Colorada',
      subtitle: 'Disfruta de las playas, paseos en bote y los encantos de Chimbote y Nuevo Chimbote.',
      duration: 'FULL DAY',
      services: 'INCLUYE: Movilidad Privada. Guía Turístico. Entradas a los atractivos. Botiquín de primeros auxilios. Actividades propias del tour. Fotografías y videos del recorrido. Paseo en Bote. NO INCLUYE: Alimentación.',
      note: 'Salidas: Sábados, domingos y feriados. Inicio: 7:00 am, Retorno: 9:00 pm. Punto de embarque: Jr. San Martín #541',
      days: [
        {
          title: 'ITINERARIO',
          activities: [
            'Malecón Grau de Chimbote.',
            'Avistamiento de la Isla Blanca.',
            'Tiempo para que desayunen o compras.',
            'Visita a la playa El Dorado.',
            'Paseo en Bote.',
            'Tarde playera en Caleta Colorada.',
            'Visita a la Plaza Mayor de Nuevo Chimbote.'
          ]
        }
      ]
    },
    en: {
      title: 'Caleta Colorada',
      subtitle: 'Enjoy the beaches, boat rides, and the charms of Chimbote and Nuevo Chimbote.',
      duration: 'FULL DAY',
      services: 'INCLUDES: Private Mobility. Tour Guide. Entrance fees. First aid kit. Tour activities. Photographs and videos of the tour. Boat ride. DOES NOT INCLUDE: Meals.',
      note: 'Departures: Saturdays, Sundays and holidays. Start: 7:00 am, Return: 9:00 pm. Boarding point: Jr. San Martin #541',
      days: [
        {
          title: 'ITINERARY',
          activities: [
            'Grau Boardwalk of Chimbote.',
            'White Island sighting.',
            'Time for breakfast or shopping.',
            'Visit to El Dorado beach.',
            'Boat ride.',
            'Beach afternoon in Caleta Colorada.',
            'Visit to the Main Square of Nuevo Chimbote.'
          ]
        }
      ]
    }
  },
  'explora-jequetepeque': {
    id: 'explora-jequetepeque',
    image: '/img/paquetes_recomendados/explora-jequetepeque.avif',
    heroImage: '/img/paquetes_recomendados/explora-jequetepeque.avif',
    es: {
      title: 'Explora Jequetepeque',
      subtitle: 'Descubre San Pedro de Lloc, Pacasmayo y el imponente reservorio de Gallito Ciego.',
      duration: 'FULL DAY',
      services: 'INCLUYE: Movilidad Privada. Guía Turístico. Entradas a los atractivos. Botiquín de primeros auxilios. Actividades propias del tour. Fotografías y videos del recorrido. NO INCLUYE: Alimentación.',
      note: 'Salidas: Sábados, domingos y feriados. Inicio: 6:00 am, Retorno: 9:00 pm. Punto de embarque: Jr. San Martín #541',
      days: [
        {
          title: 'ITINERARIO',
          activities: [
            'Plaza de San Pedro de Lloc.',
            'Miradores de Gallito Ciego.',
            'Restaurant Campestre.',
            'Plaza de Jequetepeque.',
            'Show de caballos de paso.',
            'Playa de Pacasmayo.'
          ]
        }
      ]
    },
    en: {
      title: 'Explore Jequetepeque',
      subtitle: 'Discover San Pedro de Lloc, Pacasmayo and the imposing Gallito Ciego reservoir.',
      duration: 'FULL DAY',
      services: 'INCLUDES: Private Mobility. Tour Guide. Entrance fees. First aid kit. Tour activities. Photographs and videos of the tour. DOES NOT INCLUDE: Meals.',
      note: 'Departures: Saturdays, Sundays and holidays. Start: 6:00 am, Return: 9:00 pm. Boarding point: Jr. San Martin #541',
      days: [
        {
          title: 'ITINERARY',
          activities: [
            'San Pedro de Lloc Main Square.',
            'Gallito Ciego Viewpoints.',
            'Country Restaurant.',
            'Jequetepeque Main Square.',
            'Peruvian Paso Horse Show.',
            'Pacasmayo Beach.'
          ]
        }
      ]
    }
  },
  'ruta-del-vino': {
    id: 'ruta-del-vino',
    image: '/img/paquetes/rutas_del_vino.avif',
    heroImage: '/img/paquetes/rutas_del_vino.avif',
    es: {
      title: 'Ruta del Vino',
      subtitle: 'Descubre la Piedra El Gavilán, la Cascada El Molino y los viñedos de Cascas.',
      duration: 'FULL DAY',
      services: 'INCLUYE: Movilidad Privada. Guía Turístico. Entradas a los atractivos. Botiquín de primeros auxilios. Actividades propias del tour. Fotografías y videos del recorrido. NO INCLUYE: Alimentación.',
      note: 'Salidas: Sábados, domingos y feriados. Inicio: 6:45 am, Retorno: 7:30 pm. Punto de embarque: Jr. San Martín #541',
      days: [
        {
          title: 'ITINERARIO',
          activities: [
            'Piedra El Gavilán.',
            'Vinos Lavalet.',
            'Viñedos.',
            'Árbol de las mil raíces.',
            'Cristo de las Rocas.',
            'Plaza de Armas de Cascas.'
          ]
        }
      ]
    },
    en: {
      title: 'Wine Route',
      subtitle: 'Discover Piedra El Gavilan, El Molino Waterfall and the vineyards of Cascas.',
      duration: 'FULL DAY',
      services: 'INCLUDES: Private Mobility. Tour Guide. Entrance fees. First aid kit. Tour activities. Photographs and videos of the tour. DOES NOT INCLUDE: Meals.',
      note: 'Departures: Saturdays, Sundays and holidays. Start: 6:45 am, Return: 7:30 pm. Boarding point: Jr. San Martin #541',
      days: [
        {
          title: 'ITINERARY',
          activities: [
            'El Gavilan Stone.',
            'Lavalet Wines.',
            'Vineyards.',
            'Tree of a thousand roots.',
            'Christ of the Rocks.',
            'Cascas Main Square.'
          ]
        }
      ]
    }
  },
  'mayascon': {
    id: 'mayascon',
    image: '/img/paquetes_recomendados/mayascon.avif',
    heroImage: '/img/paquetes_recomendados/mayascon.avif',
    es: {
      title: 'Mayascón',
      subtitle: 'Disfruta de las piscinas naturales de Mayascón, el criadero de avestruces y Pimentel.',
      duration: '1 DÍA / 1 NOCHE',
      services: 'INCLUYE: Movilidad Privada. Guía Turístico. Entradas a los atractivos. Botiquín de primeros auxilios. Actividades propias del tour. Fotografías y videos del recorrido. NO INCLUYE: Alimentación.',
      note: 'Salida: 02 de abril 11:45 pm, Retorno: 03 de abril 10:00 pm. Punto de embarque: Jr. San Martín 541',
      days: [
        {
          title: 'ITINERARIO',
          activities: [
            'Plaza principal de Mayascón.',
            'Hacienda de Mayascón.',
            'Piedra milenaria de la energía.',
            'Cerro Cabeza de León.',
            'Trekking de 25 minutos para visitar las 7 piscinas naturales y volcánicas de Mayascón.',
            'Criadero de avestruces.',
            'Balneario y malecón de Pimentel.'
          ]
        }
      ]
    },
    en: {
      title: 'Mayascon',
      subtitle: 'Enjoy the natural pools of Mayascon, the ostrich farm and Pimentel.',
      duration: '1 DAY / 1 NIGHT',
      services: 'INCLUDES: Private Mobility. Tour Guide. Entrance fees. First aid kit. Tour activities. Photographs and videos of the tour. DOES NOT INCLUDE: Meals.',
      note: 'Departure: April 02 at 11:45 pm, Return: April 03 at 10:00 pm. Boarding point: Jr. San Martin 541',
      days: [
        {
          title: 'ITINERARY',
          activities: [
            'Mayascon main square.',
            'Mayascon Hacienda.',
            'Millenary energy stone.',
            'Lion Head Hill.',
            '25-minute trek to visit the 7 natural and volcanic pools of Mayascon.',
            'Ostrich farm.',
            'Pimentel beach and boardwalk.'
          ]
        }
      ]
    }
  },
  'ruta-chancay-medieval': {
    id: 'ruta-chancay-medieval',
    image: '/img/paquetes_recomendados/ruta-chancay-medieval.avif',
    heroImage: '/img/paquetes_recomendados/ruta-chancay-medieval.avif',
    es: {
      title: 'Ruta Chancay Medieval',
      subtitle: 'Descubre el Castillo de Chancay, Eco Truly Park y disfruta de shows en vivo.',
      duration: '1 DÍA / 1 NOCHE',
      services: 'INCLUYE: Movilidad Privada. Guía Turístico. Entradas a los atractivos. Botiquín de primeros auxilios. Actividades propias del tour. Fotografías y videos del recorrido. NO INCLUYE: Alimentación.',
      note: 'Salidas: Sábados. Inicio: 11:00 pm, Retorno: 12:00 am (media noche). Punto de embarque: Jr. San Martín #541',
      days: [
        {
          title: 'ITINERARIO',
          activities: [
            'Eco Truly Park.',
            'Castillo de Chancay.',
            'Parque Temático.',
            'Museos de la Época Medieval y Antigua.',
            'Culturas del Perú: Grecia, Roma, etc.',
            'Show en vivo.'
          ]
        }
      ]
    },
    en: {
      title: 'Medieval Chancay Route',
      subtitle: 'Discover Chancay Castle, Eco Truly Park and enjoy live shows.',
      duration: '1 DAY / 1 NIGHT',
      services: 'INCLUDES: Private Mobility. Tour Guide. Entrance fees. First aid kit. Tour activities. Photographs and videos of the tour. DOES NOT INCLUDE: Meals.',
      note: 'Departures: Saturdays. Start: 11:00 pm, Return: 12:00 am (midnight). Boarding point: Jr. San Martin #541',
      days: [
        {
          title: 'ITINERARY',
          activities: [
            'Eco Truly Park.',
            'Chancay Castle.',
            'Theme Park.',
            'Museums of the Medieval and Ancient Era.',
            'Cultures of Peru: Greece, Rome, etc.',
            'Live show.'
          ]
        }
      ]
    }
  },
  'rio-de-janeiro-new-year': {
    id: 'rio-de-janeiro-new-year',
    image: '/img/paquetes_internacionales/rio-janeiro.avif',
    heroImage: '/img/paquetes_internacionales/rio-janeiro.avif',
    es: {
      title: 'Año Nuevo Rio de Janeiro',
      subtitle: 'Recibe el año nuevo en las hermosas playas de Río de Janeiro.',
      duration: '4 DÍAS / 3 NOCHES',
      services: 'INCLUYE: Vuelos, Traslados, Alojamiento (3 Noches), Desayunos, Guía Turístico. (Precios desde $1479 según hotel: Atlantico Rio, Hotel Nacional Inn Rio Copacabana, Astoria Copacabana).',
      note: 'SALIDA CONFIRMADA: 29 de diciembre 2026 al 02 de enero 2027.',
      days: [
        {
          title: 'DÍA 1',
          activities: [
            'Llegada al aeropuerto de Río de Janeiro.',
            'Traslado al hotel seleccionado.',
            'Resto del día libre para caminar y conocer la famosa playa de Copacabana.'
          ]
        },
        {
          title: 'DÍA 2',
          activities: [
            'Desayuno en el hotel.',
            'Día libre. Te sugerimos realizar un City Tour opcional para conocer el Cristo Redentor (Corcovado) y el Pan de Azúcar.',
            'Tarde libre para disfrutar de la playa o pasear por Ipanema.'
          ]
        },
        {
          title: 'DÍA 3',
          activities: [
            'Desayuno en el hotel.',
            'Día libre de relajación en la playa.',
            'Por la noche, prepárate para el "Reveillon": la espectacular fiesta de Año Nuevo en la playa de Copacabana con el famoso show de fuegos artificiales.'
          ]
        },
        {
          title: 'DÍA 4',
          activities: [
            'Desayuno en el hotel.',
            'Mañana libre para las últimas compras o un último chapuzón en el mar.',
            'A la hora acordada, traslado al aeropuerto para tu vuelo de retorno.'
          ]
        }
      ]
    },
    en: {
      title: 'New Year Rio de Janeiro',
      subtitle: 'Welcome the new year on the beautiful beaches of Rio de Janeiro.',
      duration: '4 DAYS / 3 NIGHTS',
      services: 'INCLUDES: Flights, Transfers, Accommodation (3 Nights), Breakfasts, Tour Guide. (Prices from $1479 varying by hotel: Atlantico Rio, Hotel Nacional Inn Rio Copacabana, Astoria Copacabana).',
      note: 'CONFIRMED DEPARTURE: December 29, 2026 to January 02, 2027.',
      days: [
        {
          title: 'DAY 1',
          activities: [
            'Arrival at Rio de Janeiro airport.',
            'Transfer to the selected hotel.',
            'Rest of the day free to walk around and get to know the famous Copacabana beach.'
          ]
        },
        {
          title: 'DAY 2',
          activities: [
            'Breakfast at the hotel.',
            'Free day. We suggest taking an optional City Tour to visit Christ the Redeemer (Corcovado) and Sugarloaf Mountain.',
            'Free afternoon to enjoy the beach or stroll through Ipanema.'
          ]
        },
        {
          title: 'DAY 3',
          activities: [
            'Breakfast at the hotel.',
            'Free day of relaxation on the beach.',
            'At night, get ready for "Reveillon": the spectacular New Year party on Copacabana beach with the famous fireworks show.'
          ]
        },
        {
          title: 'DAY 4',
          activities: [
            'Breakfast at the hotel.',
            'Free morning for last minute shopping or a final dip in the sea.',
            'At the agreed time, transfer to the airport for your return flight.'
          ]
        }
      ]
    }
  },
  'punta-cana': {
    id: 'punta-cana',
    image: '/img/paquetes_internacionales/punta-cana.avif',
    heroImage: '/img/paquetes_internacionales/punta-cana.avif',
    es: {
      title: 'Punta Cana',
      subtitle: 'Disfruta de las mejores playas del Caribe con todo incluido.',
      duration: '5 DÍAS / 4 NOCHES',
      services: 'INCLUYE: Vuelos, Traslados, Alojamiento (4 Noches), Sistema Todo Incluido (Comidas y Bebidas), Guía Turístico. (Precios desde $1135 varían según hotel y fecha: Vik Arena Blanca, Vista Sol Punta Cana, Grand Sirenis Punta Cana, Meliá Caribe Beach).',
      note: 'SALIDAS CONFIRMADAS: 27 al 31 de enero 2027 / 10 al 14 de febrero 2027.',
      days: [
        {
          title: 'DÍA 1',
          activities: [
            'Llegada al aeropuerto de Punta Cana.',
            'Recepción y traslado privado al resort.',
            'Check-in y resto del día libre para empezar a disfrutar del sistema Todo Incluido.'
          ]
        },
        {
          title: 'DÍA 2',
          activities: [
            'Día libre en el resort.',
            'Disfruta de las múltiples piscinas, el acceso directo a la playa de arena blanca y el mar turquesa.',
            'Oportunidad de realizar actividades acuáticas no motorizadas incluidas en tu hotel.'
          ]
        },
        {
          title: 'DÍA 3',
          activities: [
            'Día libre.',
            'Te sugerimos tomar una excursión opcional de día completo a la paradisíaca Isla Saona en catamarán.',
            'Por la noche, asiste a los shows nocturnos temáticos del resort.'
          ]
        },
        {
          title: 'DÍA 4',
          activities: [
            'Día libre de total relax.',
            'Aprovecha al máximo los bares y restaurantes de especialidad (buffet y a la carta) de tu hotel.',
            'Descansa y disfruta del cálido clima caribeño.'
          ]
        },
        {
          title: 'DÍA 5',
          activities: [
            'Desayuno buffet.',
            'Últimas horas en la playa o la piscina.',
            'A la hora indicada, traslado hacia el aeropuerto de Punta Cana para tomar el vuelo de retorno.'
          ]
        }
      ]
    },
    en: {
      title: 'Punta Cana',
      subtitle: 'Enjoy the best beaches in the Caribbean with all-inclusive.',
      duration: '5 DAYS / 4 NIGHTS',
      services: 'INCLUDES: Flights, Transfers, Accommodation (4 Nights), All-Inclusive System (Meals and Drinks), Tour Guide. (Prices from $1135 varying by hotel and date: Vik Arena Blanca, Vista Sol Punta Cana, Grand Sirenis Punta Cana, Melia Caribe Beach).',
      note: 'CONFIRMED DEPARTURES: January 27 to 31, 2027 / February 10 to 14, 2027.',
      days: [
        {
          title: 'DAY 1',
          activities: [
            'Arrival at Punta Cana airport.',
            'Reception and private transfer to the resort.',
            'Check-in and the rest of the day free to start enjoying the All-Inclusive system.'
          ]
        },
        {
          title: 'DAY 2',
          activities: [
            'Free day at the resort.',
            'Enjoy the multiple pools, direct access to the white sand beach and the turquoise sea.',
            'Opportunity to enjoy non-motorized water activities included at your hotel.'
          ]
        },
        {
          title: 'DAY 3',
          activities: [
            'Free day.',
            'We suggest taking an optional full-day excursion to the paradisiacal Saona Island by catamaran.',
            'At night, attend the resort\'s thematic night shows.'
          ]
        },
        {
          title: 'DAY 4',
          activities: [
            'Free day for total relaxation.',
            'Make the most of the specialty bars and restaurants (buffet and a la carte) at your hotel.',
            'Rest and enjoy the warm Caribbean weather.'
          ]
        },
        {
          title: 'DAY 5',
          activities: [
            'Buffet breakfast.',
            'Last few hours on the beach or by the pool.',
            'At the indicated time, transfer to the Punta Cana airport to take your return flight.'
          ]
        }
      ]
    }
  },
  'cartagena-new-year': {
    id: 'cartagena-new-year',
    image: '/img/paquetes_internacionales/cartagena.avif',
    heroImage: '/img/paquetes_internacionales/cartagena.avif',
    es: {
      title: 'Cartagena Año Nuevo',
      subtitle: 'Recibe el año nuevo en la mágica ciudad de Cartagena con vuelos vía Latam.',
      duration: '5 DÍAS / 4 NOCHES',
      services: 'INCLUYE: Boleto aéreo vía Latam Airlines. Mochila + Carry on 10kg. Traslados. Alojamiento en Hotel Holiday Inn Express Cartagena Bocagrande 3*. Alimentación. Travelkit. (Precio Desde USD 999).',
      note: 'FECHAS: 28 de diciembre al 01 de enero.',
      days: [
        {
          title: 'DÍA 1',
          activities: [
            'Vuelo hacia Cartagena vía Latam Airlines.',
            'Recibimiento en el aeropuerto y traslado al Hotel Holiday Inn Express.',
            'Tarde libre para acomodarse y pasear por las vibrantes calles de Bocagrande.'
          ]
        },
        {
          title: 'DÍA 2',
          activities: [
            'Desayuno en el hotel.',
            'Día libre. Recomendamos un recorrido por el centro histórico y la imponente Ciudad Amurallada de Cartagena.',
            'Podrás visitar sitios emblemáticos como la Torre del Reloj y el Castillo de San Felipe (opcional).'
          ]
        },
        {
          title: 'DÍA 3',
          activities: [
            'Desayuno.',
            'Día libre para ir a la playa. Opcionalmente puedes tomar un tour en bote hacia las hermosas Islas del Rosario y Playa Blanca en Barú.',
            'Por la noche, disfruta de la gastronomía caribeña y música en vivo en la ciudad vieja.'
          ]
        },
        {
          title: 'DÍA 4',
          activities: [
            'Desayuno en el hotel.',
            'Mañana y tarde libre para descanso o compras.',
            'Por la noche, preparativos y cena para recibir el Año Nuevo al alegre estilo colombiano.'
          ]
        },
        {
          title: 'DÍA 5',
          activities: [
            'Desayuno en el hotel.',
            'Tiempo libre para empacar y realizar algunas últimas compras (café, artesanías).',
            'A la hora acordada, traslado al aeropuerto para tu vuelo de retorno vía Latam Airlines.'
          ]
        }
      ]
    },
    en: {
      title: 'New Year Cartagena',
      subtitle: 'Welcome the new year in the magical city of Cartagena with flights via Latam.',
      duration: '5 DAYS / 4 NIGHTS',
      services: 'INCLUDES: Air ticket via Latam Airlines. Backpack + Carry on 10kg. Transfers. Accommodation at Hotel Holiday Inn Express Cartagena Bocagrande 3*. Meals. Travelkit. (Price From USD 999).',
      note: 'DATES: December 28 to January 01.',
      days: [
        {
          title: 'DAY 1',
          activities: [
            'Flight to Cartagena via Latam Airlines.',
            'Reception at the airport and transfer to the Holiday Inn Express Hotel.',
            'Free afternoon to settle in and stroll through the vibrant streets of Bocagrande.'
          ]
        },
        {
          title: 'DAY 2',
          activities: [
            'Breakfast at the hotel.',
            'Free day. We recommend a tour of the historic center and the imposing Walled City of Cartagena.',
            'You can visit iconic sites such as the Clock Tower and the San Felipe Castle (optional).'
          ]
        },
        {
          title: 'DAY 3',
          activities: [
            'Breakfast.',
            'Free day to go to the beach. Optionally you can take a boat tour to the beautiful Rosario Islands and Playa Blanca in Barú.',
            'At night, enjoy Caribbean cuisine and live music in the old city.'
          ]
        },
        {
          title: 'DAY 4',
          activities: [
            'Breakfast at the hotel.',
            'Free morning and afternoon for rest or shopping.',
            'At night, preparations and dinner to welcome the New Year in the joyful Colombian style.'
          ]
        },
        {
          title: 'DAY 5',
          activities: [
            'Breakfast at the hotel.',
            'Free time to pack and do some last-minute shopping (coffee, souvenirs).',
            'At the agreed time, transfer to the airport for your return flight via Latam Airlines.'
          ]
        }
      ]
    }
  }
};
