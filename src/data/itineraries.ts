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
  chachapoyas: {
    id: 'chachapoyas',
    image: '/img/paquetes_recomendados/chachapoyas.avif',
    heroImage: '/img/paquetes_recomendados/chachapoyas.avif',
    es: {
      title: 'Tour Chachapoyas - Teleférico',
      subtitle: 'Descubre la majestuosa fortaleza de Kuélap, los misteriosos Sarcófagos de Karajía y la imponente Catarata de Gocta.',
      duration: '3 DÍAS / 2 NOCHES',
      services: 'Pasajes de ida y vuelta desde lugar de origen. Movilidad turística a todos los itinerarios mencionados en el tour. Entradas a todos los lugares turísticos y guiados. Dos noches en hotel a elección del cliente. Tres desayunos y tres almuerzos.',
      note: 'Horarios y punto de salida según coordinación previa.',
      days: [
        {
          title: 'PRIMER DIA: CIUDADELA FORTIFICADA DE KUELAP',
          activities: [
            '6:00 am Arribo a Chachapoyas, recepción y traslado estación de bus/hotel (tener en cuenta que en la mayoría de los hoteles el check-in es a partir del mediodía).',
            '8:30 am Salida de Chachapoyas con dirección al pueblo del Tingo (1 hora en carro), a 40 minutos de Chachapoyas hacen una primera parada en un mirador para observar el sitio Arqueológico de Macro.',
            '9:45 am Llegada a la boletería para adquirir los tickets y continuar 10 minutos más en carro hasta el Andén de salida de las Telecabinas a Kuelap.',
            '10:30 am Desembarque de pasajeros en la zona denominada La Malca, en donde se obtendrá los tickets de ingreso a Kuelap. Se registran e inician la caminata de 1km (30 minutos) para llegar al sitio arqueológico de Kuelap. La visita guiada toma 2 horas aproximadamente.',
            '1:00 pm Caminata de retorno a la Malca.',
            '1:30 pm Traslado en Teleférico a Tingo.',
            '2:00 pm Almuerzo en Tingo o alrededores.',
            '3:00 pm Traslado de retorno a la ciudad de Chachapoyas.',
            '4:00 pm Llegada a Chachapoyas, fin del servicio.',
            '7:00 pm Primera noche de hotel.'
          ]
        },
        {
          title: 'SEGUNDO DIA: SARCÓFAGOS DE KARAJIA Y CAVERNA DE QUIOCTA',
          activities: [
            '7:30 am Desayuno en el hotel.',
            '8:00 am Salida con dirección al pueblo de Cruzpata (2 horas en carro), desde ahí harán una caminata de 30 minutos para llegar al sitio arqueológico de Karajia, estilo funerario único del Perú y del mundo, caminata de retorno al pueblo de Cruzpata.',
            '12:00 pm Traslado al restaurante ubicado en el pueblo de Lamud (1 hora en carro).',
            '1:00 pm Almuerzo.',
            '3:00 pm Traslado a la caverna de Quiocta, 30 minutos en carro hasta la zona de parqueo, caminata de 270 metros hasta el ingreso de la caverna, la visita dentro de la caverna toma 1.5 horas aproximadamente, en donde se aprecia miles de estalactitas y estalagmitas.',
            '6:30 pm Arribo a Chachapoyas.',
            'Segunda noche de hotel.'
          ]
        },
        {
          title: 'TERCER DIA: CATARATA DE GOCTA',
          activities: [
            '7:30 am Desayuno en el hotel.',
            '8:30 am Salida con dirección al Pueblo de Cocachimba (1 hora en carro).',
            '9:30 am Llegada a Cocachimba, registro de pasajeros en la boletería.',
            '10:00 am Caminata o cabalgata de 2.5 horas para llegar a la Catarata de Gocta. Luego de admirar su singular belleza, toma de fotografías y/o tomar un baño (opcional ya que el agua es muy fría). Retorno al pueblo de Cocachimba para almorzar en un restaurante de la comunidad.',
            '3:00 pm Almuerzo y retorno a Chachapoyas.',
            '5:00 pm Arribo a Chachapoyas, fin del servicio.',
            '7:00 pm Traslado hotel /estación de Bus en Chachapoyas, cena a bordo.'
          ]
        }
      ]
    },
    en: {
      title: 'Chachapoyas Tour - Cable Car',
      subtitle: 'Discover the majestic Kuélap fortress, the mysterious Karajía Sarcophagi, and the imposing Gocta Waterfall.',
      duration: '3 DAYS / 2 NIGHTS',
      services: 'Round trip tickets from place of origin. Tourist mobility to all itineraries mentioned in the tour. Entrances to all tourist places and guided tours. Two nights in hotel of client\'s choice. Three breakfasts and three lunches.',
      note: 'Departure times and points according to prior coordination.',
      days: [
        {
          title: 'FIRST DAY: FORTIFIED CITADEL OF KUELAP',
          activities: [
            '6:00 a.m. Arrival in Chachapoyas, reception and transfer from bus station/hotel (keep in mind that in most hotels check-in is from noon).',
            '8:30 a.m. Departure from Chachapoyas towards the town of Tingo (1 hour by car), 40 minutes from Chachapoyas we make a first stop at a viewpoint to observe the Archaeological site of Macro.',
            '9:45 a.m. Arrival at the ticket office to purchase tickets and continue 10 more minutes by car to the departure platform of the Cable Cars to Kuelap.',
            '10:30 a.m. Disembarkation of passengers in the area called La Malca, where you will obtain the entrance tickets to Kuelap. You register and start the 1km walk (30 minutes) to reach the archaeological site of Kuelap. The guided tour takes approximately 2 hours.',
            '1:00 p.m. Return walk to La Malca.',
            '1:30 p.m. Cable car transfer to Tingo.',
            '2:00 p.m. Lunch in Tingo or surroundings.',
            '3:00 p.m. Return transfer to the city of Chachapoyas.',
            '4:00 p.m. Arrival in Chachapoyas, end of service.',
            '7:00 p.m. First night at the hotel.'
          ]
        },
        {
          title: 'SECOND DAY: KARAJIA SARCOPHAGI AND QUIOCTA CAVE',
          activities: [
            '7:30 a.m. Breakfast at the hotel.',
            '8:00 a.m. Departure towards the town of Cruzpata (2 hours by car), from there you will take a 30-minute walk to reach the archaeological site of Karajia, a unique funerary style in Peru and the world, return walk to the town of Cruzpata.',
            '12:00 p.m. Transfer to the restaurant located in the town of Lamud (1 hour by car).',
            '1:00 p.m. Lunch.',
            '3:00 p.m. Transfer to the Quiocta cave, 30 minutes by car to the parking area, 270-meter walk to the entrance of the cave, the visit inside the cave takes approximately 1.5 hours, where you can see thousands of stalactites and stalagmites.',
            '6:30 p.m. Arrival in Chachapoyas.',
            'Second night at the hotel.'
          ]
        },
        {
          title: 'THIRD DAY: GOCTA WATERFALL',
          activities: [
            '7:30 a.m. Breakfast at the hotel.',
            '8:30 a.m. Departure towards the Town of Cocachimba (1 hour by car).',
            '9:30 a.m. Arrival in Cocachimba, registration of passengers at the ticket office.',
            '10:00 a.m. 2.5 hour walk or horseback ride to reach the Gocta Waterfall. After admiring its singular beauty, taking photographs and/or taking a bath (optional since the water is very cold). Return to the town of Cocachimba to have lunch at a community restaurant.',
            '3:00 p.m. Lunch and return to Chachapoyas.',
            '5:00 p.m. Arrival in Chachapoyas, end of service.',
            '7:00 p.m. Transfer hotel / Bus station in Chachapoyas, dinner on board.'
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
      duration: '4 DÍAS / 3 NOCHES',
      services: 'Recojo del aeropuerto/terminal del Cusco y traslado al hotel, 04 noches de alojamiento en hotel a elección del cliente (céntrico), 03 desayunos, entradas a todos los lugares turísticos, ticket de tren ida y retorno (tren turístico), boletos al Qoricancha y todos los centros turísticos que abarca el City Tour, ingresos a Machupicchu, bus de subida y bajada a Machupicchu (Consetur), Guía Profesional en Machupicchu y traslados a todos los lugares turísticos mencionados.',
      days: [
        {
          title: 'PRIMER DIA: CITY TOURS',
          activities: [
            'Recepción en el aeropuerto a la hora indicada para luego llevarlos al Hotel.',
            '14:00 pm Recojo del Hotel, donde como primer punto se tendrá el Templo Del Koricancha, continuaremos en bus para visitar los centros arqueológicos Incas: El Templo de Sacsaywaman que tiene una ubicación estratégica donde podrá dar una vista panorámica al Cusco.',
            'Seguido nos dirigimos a un templo místico de los incas donde en época inca se hacían los sacrificios religiosos.',
            'Luego conoceremos el centro de control y militar de los Incas Pucara donde aquí todo hombre debía registrar su ingreso a la Ciudad de Cusco y finalmente el Templo Tambomachay.',
            'Retorno a Cusco a las 7:00 pm y noche libre.'
          ]
        },
        {
          title: 'SEGUNDO DIA: CUSCO / MONTAÑA DE 7 COLORES',
          activities: [
            'La montaña de arco iris, conocido como la montaña de 7 colores, montaña colorada, montaña vinicunca, es un lugar mágico donde sus caminos eran parte de la antigua cultura quechua, y que se utiliza para intercambiar sus productos (productos de trueque), junto con las otras regiones Quechuas, ahora se ha convertido en una maravilla natural parecida a la montaña de arco iris de la china.',
            'Temprano, alrededor de las 03:30 horas, le recogeremos del hotel en Cusco para realizar el viaje con destino al Qollasuyo, parte sur de la antigua Quechua (Cusco), que fue parte importante del Tawantinsuyo (4 regiones antiguas de los Incas).',
            'Desde el inicio viajaremos durante 4 horas en transporte, primero pasaremos por el pueblo de Checacupe, para después seguir por Pitumarka, finalmente llegaremos a Quechuyno, lugar donde daremos inicio de la caminata.',
            'En este lugar nos detendremos para desayunar y después de una breve charla, empezaremos nuestra caminata al pie del nevado de Ausangate, una subida de aproximadamente 3 horas hasta el punto más alto del cerro colorado.',
            'Durante este trayecto tendremos la oportunidad de ver las distintas variedades de camélidos sudamericanos. Llegado al cerro colorado, tendremos tiempo para tomar fotografías de este lugar enigmático.',
            'Después, continuaremos con nuestra caminata de 3 horas de descenso y partes planas al punto de inicio de la caminata (Quechuyno), donde tendremos el almuerzo.',
            'Finalmente retornaremos a Cusco, donde llegaremos a las 21:00 horas aproximadamente.'
          ]
        },
        {
          title: 'TERCER DIA: CUSCO – MACHUPICCHU',
          activities: [
            '03.00 a.m Recojo del hotel y traslado a la estación de tren de Ollantaytambo rumbo al pueblo de Aguas Calientes.',
            '8.00 am Nos dirigimos al tour todo el día en el mágico Santuario de Machupicchu. Que se encuentra a 112 km. del Cusco. Durante el viaje podrá observar el Cañon de Urubamba, el río Vilcanota y el gran espectáculo de los nevados de la Montaña Verónica.',
            'Arribaremos en el pueblo de Aguas Calientes allí les estará esperando el transfer con la bandera Celeste y el grupo se denominará INCA.',
            'Luego tomaremos los buses de Consetur (media hora de subida en bus) y dirigirnos a Machupicchu, donde visitaremos este maravilloso Santuario también conocido como "La Ciudad Perdida de los Incas" uno de los mejores ejemplos conocidos de arquitectura inca que aún sobrevive.',
            'En este recorrido podrá observar todos los templos así como la Plaza Principal, la Torre Circular, el Sagrado Reloj Solar o Intihuatana.',
            'Después de la visita, de aproximadamente 3 horas, nosotros regresaremos a Aguas Calientes para almorzar aproximadamente a las 2:00 pm. (El retorno depende del pasajero, ya que pueden recorrer por su cuenta después del tour y tomarse más vistas y explorar hasta las 4:30 a 5:00 pm que sale el ultimo bus).',
            'Estando en Aguas Calientes cogerán el tren de las 18:35 PM luego los recogeremos de Ollantaytambo para luego llevarlos de retorno a Cusco, llegaran a Cusco 10:30 pm.'
          ]
        },
        {
          title: 'CUARTO DIA: RETORNO A LIMA',
          activities: [
            'Traslado al aeropuerto.'
          ]
        }
      ]
    },
    en: {
      title: 'Magic Cusco',
      subtitle: 'Explore the magic of the Inca Empire, marvel at Machupicchu, and conquer the 7 Colors Mountain.',
      duration: '4 DAYS / 3 NIGHTS',
      services: 'Pick up from Cusco airport/terminal and transfer to the hotel, 04 nights accommodation in hotel of client\'s choice (central), 03 breakfasts, entrances to all tourist places, round trip train ticket (tourist train), tickets to Qoricancha and all the tourist centers covered by the city tour, entrances to Machupicchu, bus up and down to Machupicchu (Consetur), Professional Guide in Machupicchu and transfers to all mentioned tourist places.',
      days: [
        {
          title: 'FIRST DAY: CITY TOUR',
          activities: [
            'Reception at the airport at the indicated time and then transfer to the Hotel.',
            '2:00 p.m. Pick up from the Hotel, where as a first point we will have the Koricancha Temple, we will continue by bus to visit the Inca archaeological centers: The Sacsaywaman Temple which has a strategic location where you can give a panoramic view to Cusco.',
            'Then we will go to a mystical temple of the Incas where religious sacrifices were made in Inca times.',
            'Then we will know the control and military center of the Incas Pucara where here every man had to register his entrance to the City of Cusco and finally the Tambomachay Temple.',
            'Return to Cusco at 7:00 p.m. and free night.'
          ]
        },
        {
          title: 'SECOND DAY: CUSCO / 7 COLORS MOUNTAIN',
          activities: [
            'The rainbow mountain, known as the mountain of 7 colors, colored mountain, vinicunca mountain, is a magical place where its paths were part of the ancient Quechua culture, and that is used to exchange their products (barter products), along with the other Quechua regions, has now become a natural wonder similar to the rainbow mountain of China.',
            'Early, around 03:30 hours, we will pick you up from the hotel in Cusco to make the trip to Qollasuyo, southern part of the ancient Quechua (Cusco), which was an important part of the Tawantinsuyo (4 ancient regions of the Incas).',
            'From the beginning we will travel for 4 hours in transport, first we will pass through the town of Checacupe, and then continue through Pitumarka, finally we will arrive at Quechuyno, where we will start the walk.',
            'In this place we will stop for breakfast and after a brief chat, we will begin our walk at the foot of the Ausangate snowy mountain, an ascent of approximately 3 hours to the highest point of the colored hill.',
            'During this journey we will have the opportunity to see the different varieties of South American camelids. Arriving at the colored hill, we will have time to take pictures of this enigmatic place.',
            'Then, we will continue with our 3-hour walk of descent and flat parts to the starting point of the walk (Quechuyno), where we will have lunch.',
            'Finally we will return to Cusco, where we will arrive at approximately 21:00 hours.'
          ]
        },
        {
          title: 'THIRD DAY: CUSCO - MACHUPICCHU',
          activities: [
            '03:00 a.m. Pick up from the hotel and transfer to the Ollantaytambo train station heading to the town of Aguas Calientes.',
            '8:00 a.m. We head to the full day tour in the magical Sanctuary of Machupicchu, which is located 112 km from Cusco. During the trip you will be able to observe the Urubamba Canyon, the Vilcanota River and the great spectacle of the snowy mountains of Mount Veronica.',
            'We will arrive in the town of Aguas Calientes there the transfer with the Light Blue flag will be waiting for you and the group will be called INCA.',
            'Then we will take the Consetur buses (half an hour up by bus) and go to Machupicchu, where we will visit this wonderful Sanctuary also known as "The Lost City of the Incas", one of the best known examples of Inca architecture that still survives.',
            'In this tour you will be able to observe all the temples as well as the Main Square, the Circular Tower, the Sacred Solar Clock or Intihuatana.',
            'After the visit, of approximately 3 hours, we will return to Aguas Calientes for lunch approximately at 2:00 p.m. (The return depends on the passenger, since they can tour on their own after the tours and take more views and explore until 4:30 to 5:00 p.m. when the last bus leaves).',
            'Being in Aguas Calientes you will catch the 18:35 PM train, then we will pick you up from Ollantaytambo and then take you back to Cusco, you will arrive in Cusco at 10:30 p.m.'
          ]
        },
        {
          title: 'FOURTH DAY: RETURN TO LIMA',
          activities: [
            'Transfer to the airport.'
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
      title: 'Arequipa y Colca',
      subtitle: 'Descubre la Ciudad Blanca, admira su arquitectura colonial y maravíllate con el impresionante Cañón del Colca.',
      duration: '4 DÍAS / 3 NOCHES',
      services: 'Pasajes de ida y vuelta desde lugar de origen. Recojo del aeropuerto o terminal terrestre. Transporte turístico durante todo el recorrido. Guía profesional bilingüe. Alojamiento en hotel a elección del cliente. Desayuno continental. Traslados, guiado y las entradas, alimentación completa.',
      note: 'Horarios y punto de salida según coordinación previa.',
      days: [
        {
          title: 'PRIMER DIA: CITY TOUR',
          activities: [
            '09:00 am Recojo de los pasajeros del aeropuerto, traslado a su hotel y desayuno.',
            '02:00 pm City tour.',
            'La basílica catedral de Arequipa, donde podremos visitar dos joyas de la ciudad de Arequipa, el órgano belga y el púlpito de origen francés hecho en Lille por un artista famoso francés Buisine Rigot.',
            'La iglesia de la compañía de Jesús, bellísima iglesia y fachada impresionante de estilo barroco mestizo por la profusa ornamentación. Aquí podemos encontrar elementos decorativos nativos y europeos, donde podemos interpretar la iconografía de esa época.',
            'La cúpula de San Ignacio de Loyola y los claustros de la compañía, en esta cúpula vemos una decoración polícroma hecha con tintes naturales, vemos un hermoso cuadro de Bernardo Bitti (artista jesuita) que representa a San Ignacio de Loyola en La Storta.',
            'Dentro de la iglesia podemos apreciar las obras de otro artista interesante como Diego Portales. Diego Portales tiene cuadros como la entrada de Jesús a Jerusalén y la Última Cena, donde en medio de la mesa encontramos un elemento andino como el cuy.',
            'El Monasterio y convento de Santa Catalina data de fines del siglo XV el que representa a la influencia española, este lugar es considerado como una ciudadela dentro de la misma Ciudad de Arequipa riquísima en arquitectura y pintura que lo habitaron 500 mujeres. En este lugar aún viven monjas en el área norte del convento.',
            'También haremos una visita al mirador de Carmen Alto donde existen terrazas pre incas y un excelente mirador al Valle de Chilina y a los tres volcanes Misti, Chachani y Pichu Pichu.',
            '07:30 pm Cena y pernocte en el Hotel.'
          ]
        },
        {
          title: 'SEGUNDO DIA: COLCA',
          activities: [
            'Salida desde Arequipa a las 8:30 am dirigiéndonos por la carretera vía Yura y posteriormente bordearemos el Volcán Chachani para luego pasar por Pampa Cañahuas y detenernos un tiempo de 10 a 15 minutos en el que los pasajeros pueden apreciar a las vicuñas que se encuentran en su ambiente natural.',
            'Posteriormente tendremos una segunda parada para disfrutar del mate de coca y no les afecte la altura ya que nos encontraremos a los 3800 m.s.n.m. Continuaremos subiendo hasta los 4800 m.s.n.m (mirador de los volcanes).',
            'Iniciaremos así nuestro descenso hasta el pueblo de Chivay después de 45 minutos aproximadamente.',
            'Los acomodamos en el hospedaje, posteriormente almorzaremos. En horas de la tarde nos dirigiremos a La Calera (piscina de aguas termo medicinales). Terminando con el programa por el día, cena y pernocte en el hotel elegido.'
          ]
        },
        {
          title: 'TERCER DÍA: CRUZ DEL CÓNDOR',
          activities: [
            'Desayunaremos (5:30 am) y posteriormente nos dirigiremos a la Cruz del Cóndor directamente, lugar en el que podremos apreciar el Cañón del Colca y el vuelo del cóndor esperando un tiempo prudente.',
            'Posteriormente dirigirnos a visitar los miradores de Wayrapunko, Andaguilque, Choquetico y los pueblos de Pinchollo, Maca, Achoma, Yanque y finalizar en Chivay.',
            'Almorzaremos y nos prepararemos para retornar a la ciudad de Arequipa a la que arribaremos aproximadamente 05:00 pm.'
          ]
        },
        {
          title: 'CUARTO DIA: CAMPIÑA TOUR AREQUIPA',
          activities: [
            'Duración del tour: 4 horas.',
            '08:00 am Desayuno.',
            'Iniciando el recorrido, nos dirigimos al mirador de Sachaca el cual es el más alto de toda la ciudad de Arequipa desde donde se puede ver toda la campiña arequipeña.',
            'Luego visitaremos la Mansión del Fundador que es una casona donde vivió el hijo del fundador de la ciudad de Arequipa, el cual también en una temporada fue tomada en la guerra como un cuartel general.',
            'Luego nos vamos hacia el pueblo de Sabandia, acá podremos apreciar el Molino Hidráulico de Sabandia, que se usaba para moler el grano, este molino es de la época colonial. Finalizando el tour pasaremos por el distrito de Paucarpata para observar sus terrazas y Andenerías Pre-Incas.',
            '01:30 pm Almuerzo. Tarde libre para compras.',
            'Partida a Lima desde el aeropuerto.'
          ]
        }
      ]
    },
    en: {
      title: 'Arequipa and Colca',
      subtitle: 'Discover the White City, admire its colonial architecture, and marvel at the impressive Colca Canyon.',
      duration: '4 DAYS / 3 NIGHTS',
      services: 'Round trip tickets from place of origin. Pick up from the airport or bus terminal. Tourist transport during the whole tour. Bilingual professional guide. Accommodation in hotel of client\'s choice. Continental breakfast. Transfers, guided tours and entrance fees, full meals.',
      note: 'Departure times and points according to prior coordination.',
      days: [
        {
          title: 'FIRST DAY: CITY TOUR',
          activities: [
            '09:00 a.m. Pick up of passengers from the airport, transfer to their hotel and breakfast.',
            '02:00 p.m. City tour.',
            'The Cathedral Basilica of Arequipa, where we can visit two jewels of the city, the Belgian organ and the French-origin pulpit made in Lille by a famous French artist, Buisine Rigot.',
            'The Church of the Company of Jesus, a beautiful church and impressive mestizo baroque style facade due to the profuse ornamentation. Here we can find native and European decorative elements.',
            'The dome of San Ignacio de Loyola and the cloisters of the company. In this dome we see a polychrome decoration made with natural dyes, we see a beautiful painting by Bernardo Bitti (Jesuit artist).',
            'Inside the church we can appreciate the works of another interesting artist like Diego Portales, who has paintings like the entrance of Jesus to Jerusalem and the Last Supper, where in the middle of the table we find an Andean element like the guinea pig.',
            'The Santa Catalina monastery and convent dates from the end of the 15th century which represents the Spanish influence. This place is considered a citadel within the City of Arequipa itself. Nuns still live in this place in the northern area of the convent.',
            'We will also visit the Carmen Alto viewpoint where there are pre-Inca terraces and an excellent viewpoint to the Chilina Valley and the three volcanoes Misti, Chachani, and Pichu Pichu.',
            '07:30 p.m. Dinner and overnight at the Hotel.'
          ]
        },
        {
          title: 'SECOND DAY: COLCA',
          activities: [
            'Departure from Arequipa at 8:30 a.m. heading along the road via Yura and later we will border the Chachani Volcano and then pass through Pampa Cañahuas. We will stop for 10 to 15 minutes where passengers can appreciate the vicuñas in their natural environment.',
            'Then we will have a second stop to enjoy coca tea so the altitude doesn\'t affect you, since we will be at 3800 m.a.s.l. We will continue climbing up to 4800 m.a.s.l (volcano viewpoint).',
            'Starting our descent to the town of Chivay after approximately 45 minutes.',
            'We accommodate you in the lodging, later we will have lunch. In the afternoon we will go to La Calera (thermal medicinal water pool). Finishing the program for the day, dinner and overnight at the chosen hotel.'
          ]
        },
        {
          title: 'THIRD DAY: CRUZ DEL CONDOR',
          activities: [
            'We will have breakfast (5:30 a.m.) and then we will head directly to the Cruz del Cóndor, a place where we can appreciate the Colca Canyon and the flight of the condor, waiting a prudent time.',
            'Then we will go to visit the viewpoints of Wayrapunko, Andaguilque, Choquetico and the towns of Pinchollo, Maca, Achoma, Yanque and finish in Chivay.',
            'We will have lunch and prepare to return to the city of Arequipa, arriving approximately at 05:00 p.m.'
          ]
        },
        {
          title: 'FOURTH DAY: AREQUIPA COUNTRYSIDE TOUR',
          activities: [
            'Tour duration: 4 hours.',
            '08:00 a.m. Breakfast.',
            'Starting the tour, we head to the Sachaca viewpoint which is the highest in the entire city of Arequipa from where you can see the whole Arequipa countryside.',
            'Then we will visit the Founder\'s Mansion, a large house where the son of the founder of the city of Arequipa lived.',
            'Then we go to the town of Sabandia, here we can appreciate the Sabandia Hydraulic Mill, which was used to grind grain, this mill is from colonial times. Finishing the tour we will pass through the Paucarpata district to observe its pre-Inca terraces.',
            '01:30 p.m. Lunch. Free afternoon for shopping.',
            'Departure to Lima from the airport.'
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
      title: 'Tours en Trujillo: Chan Chan, Huacas y Huanchaco | Salidas Diarias',
      subtitle: 'Explora la majestuosidad de Chan Chan, descubre los misterios de la Dama de Cao y relájate en las playas de Huanchaco con nuestros guías certificados.',
      duration: '4 DÍAS / 3 NOCHES',
      services: 'Pasajes de ida y vuelta desde lugar de origen. Dos noches de hospedaje en el hotel a elección del cliente en base a habitaciones dobles o triples con baño privado, agua caliente, tv cable, wifi. Alimentación completa. Traslados y entradas a los lugares turísticos.',
      note: 'Horarios y punto de salida según coordinación previa.',
      days: [
        {
          title: 'PRIMER DIA: HUACA DE LA LUNA',
          activities: [
            '7:00 am Llegada e instalación en el hotel elegido.',
            '8:30 am Desayuno.',
            '10:30 am Iniciaremos el tour conociendo la campiña de Moche, visitando el museo de sitio de Huaca de la Luna y la imponente Huaca de la Luna desde donde también podrán ver la Huaca del Sol (aún no abierta al turismo).',
            '1:00 pm Tiempo para almorzar.',
            '2:30 pm Empezamos el tour visitando la Huaca Arco Iris.',
            '3:30 pm Visita a la ciudadela Nikan o Chan Chan la ciudad de barro más grande del mundo.',
            '5:00 pm Partida al balneario turístico de Huanchaco tiempo para pasear por el balneario y conocer los caballitos de totora.',
            '6:00 pm Retorno a Trujillo.'
          ]
        },
        {
          title: 'SEGUNDO DIA: TOUR EL BRUJO',
          activities: [
            '8:30 am Desayuno.',
            '10:30 am Salida al valle Chicama lugar donde se encuentra el pueblo de Magdalena de Cao y podremos conocer el museo de sitio del complejo arqueológico El Brujo y podremos conocer a la Señora de Cao, un gobernante Moche que es una prueba de que existió el matriarcado en la cultura mochica.',
            'Luego subiremos a la Huaca Cao Viejo donde podremos conocer el lugar donde fue hallada la Señora de Cao y los frisos hechos por los Moches.',
            '2:30 pm Retorno a Trujillo.'
          ]
        },
        {
          title: 'TERCER DIA: CITY TOUR',
          activities: [
            '8:00 am Desayuno.',
            '9:00 am Visita a las lagunas de Conache y prácticas de sandboard.',
            '03:00 pm City tour en el mirabus conociendo los puntos principales de nuestra ciudad.',
            '9:00 pm Retorno a su ciudad.'
          ]
        },
        {
          title: 'CUARTO DIA: CAÑONCILLO – PACASMAYO',
          activities: [
            '8:30 am Desayuno.',
            '9:15 am Partida a San Pedro.',
            '10:30 am Llegada a San Pedro en donde tomaremos el desvío para las lagunas de Cañoncillo y Gallinazo conociendo un hermoso ecosistema y podrán darse un chapuzón en la laguna.',
            '12:30 pm Almuerzo.',
            '1:15 pm Partida al balneario de Pacasmayo y visita a su mirador, malecón, paseo de la amistad y su hermosa playa.',
            '4:00 pm Retorno a Trujillo.',
            '5:30 pm Llegada al hotel.',
            '7:00 pm Cena.',
            '9:00 pm Retorno a su ciudad.'
          ]
        }
      ]
    },
    en: {
      title: 'Trujillo Tours: Chan Chan, Huacas and Huanchaco | Daily Departures',
      subtitle: 'Explore the majesty of Chan Chan, discover the mysteries of the Lady of Cao, and relax on the beaches of Huanchaco with our certified guides.',
      duration: '4 DAYS / 3 NIGHTS',
      services: 'Round trip tickets from place of origin. Two nights of accommodation in hotel of client\'s choice based on double or triple rooms with private bathroom, hot water, cable TV, Wi-Fi. Full meals. Transfers and entrance fees to tourist places.',
      note: 'Departure times and points according to prior coordination.',
      days: [
        {
          title: 'FIRST DAY: HUACA DE LA LUNA',
          activities: [
            '7:00 a.m. Arrival and installation at the chosen hotel.',
            '8:30 a.m. Breakfast.',
            '10:30 a.m. We will start the tour knowing the Moche countryside, visiting the site museum of Huaca de la Luna and the imposing Huaca de la Luna from where you can also see the Huaca del Sol (not yet open to tourism).',
            '1:00 p.m. Time for lunch.',
            '2:30 p.m. We start the tour visiting the Huaca Arco Iris.',
            '3:30 p.m. Visit to the Nikan citadel or Chan Chan, the largest mud city in the world.',
            '5:00 p.m. Departure to the tourist resort of Huanchaco, time to walk around the resort and see the "caballitos de totora" (reed watercrafts).',
            '6:00 p.m. Return to Trujillo.'
          ]
        },
        {
          title: 'SECOND DAY: EL BRUJO TOUR',
          activities: [
            '8:30 a.m. Breakfast.',
            '10:30 a.m. Departure to the Chicama valley, place where the town of Magdalena de Cao is located and we will be able to visit the site museum of the El Brujo archaeological complex and we will be able to know the Lady of Cao, a Moche ruler who is proof that matriarchy existed in the Mochica culture.',
            'Then we will go up to the Huaca Cao Viejo where we can see the place where the Lady of Cao was found and the friezes made by the Moches.',
            '2:30 p.m. Return to Trujillo.'
          ]
        },
        {
          title: 'THIRD DAY: CITY TOUR',
          activities: [
            '8:00 a.m. Breakfast.',
            '9:00 a.m. Visit to the Conache lagoons and sandboard practice.',
            '03:00 p.m. City tour in the mirabus visiting the main points of our city.',
            '9:00 p.m. Return to your city.'
          ]
        },
        {
          title: 'FOURTH DAY: CAÑONCILLO – PACASMAYO',
          activities: [
            '8:30 a.m. Breakfast.',
            '9:15 a.m. Departure to San Pedro.',
            '10:30 a.m. Arrival in San Pedro where we will take the detour to the Cañoncillo and Gallinazo lagoons knowing a beautiful ecosystem and you can take a dip in the lagoon.',
            '12:30 p.m. Lunch.',
            '1:15 p.m. Departure to the Pacasmayo resort and visit to its viewpoint, boardwalk, Paseo de la Amistad and its beautiful beach.',
            '4:00 p.m. Return to Trujillo.',
            '5:30 p.m. Arrival at the hotel.',
            '7:00 p.m. Dinner.',
            '9:00 p.m. Return to your city.'
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
    image: '/img/paquetes_recomendados/ruta-del-vino.avif',
    heroImage: '/img/paquetes_recomendados/ruta-del-vino.avif',
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
            'Vinos La Volet.',
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
            'La Volet Wines.',
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
