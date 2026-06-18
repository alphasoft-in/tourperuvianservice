const fs = require('fs');

const path = 'src/data/itineraries.ts';
let content = fs.readFileSync(path, 'utf8');

// Replace specific service notes
const replacements = [
  // Huaraz
  {
    from: "services: 'Pasajes Lima – Huaraz - Lima con asientos reclinables, baño químico. Hotel Céntrico Casa Blanca o Chavín Señorial (una cama por persona, baño privado en cada habitación con agua caliente, wifi, tv cable, en habitación doble). Tres desayunos. Guía de turismo. Pago de entradas y traslado a todos los centros turísticos a visitar.',",
    to: "services: 'Pasajes de ida y vuelta desde lugar de origen. Alojamiento en hotel a elección del cliente (habitaciones con baño privado, agua caliente, wifi, tv cable). Tres desayunos. Guía de turismo. Pago de entradas y traslado a todos los centros turísticos a visitar.',"
  },
  {
    from: "note: '10:00 p.m. Salida de Trujillo',",
    to: "note: 'Horarios y punto de salida según coordinación previa.',"
  },
  {
    from: "services: 'Bus tickets Lima – Huaraz - Lima with reclining seats, chemical toilet. Central Hotel Casa Blanca or Chavín Señorial (one bed per person, private bathroom with hot water, Wi-Fi, cable TV in double room). Three breakfasts. Tour guide. Entrance fees and transfer to all tourist sites to visit.',",
    to: "services: 'Round trip tickets from place of origin. Accommodation in hotel of client\\'s choice (rooms with private bathroom, hot water, Wi-Fi, cable TV). Three breakfasts. Tour guide. Entrance fees and transfer to all tourist sites to visit.',"
  },
  {
    from: "note: '10:00 p.m. Departure from Trujillo',",
    to: "note: 'Departure times and points according to prior coordination.',"
  },

  // Tarapoto
  {
    from: "services: 'Alimentación: 2 desayunos, un almuerzo típico en la laguna azul. 2 noches de alojamiento en habitaciones dobles, matrimoniales, triples, cuádruples con TV, baño privado el Hotel cuenta con piscina (hotel Plaza del bosque). Entradas y traslados a los lugares turísticos, Guía oficial de turismo.',",
    to: "services: 'Alimentación: 2 desayunos, un almuerzo típico en la laguna azul. 2 noches de alojamiento en el hotel a elección del cliente (habitaciones con TV, baño privado, piscina según disponibilidad). Entradas y traslados a los lugares turísticos, Guía oficial de turismo.',"
  },
  {
    from: "note: '3:00 pm Salida del Terminal Terrestre de la Av. La Marina en Empresa de Transporte GH Bus',",
    to: "note: 'Horarios y punto de salida según coordinación previa.',"
  },
  {
    from: "services: 'Meals: 2 breakfasts, one typical lunch at the Blue Lagoon. 2 nights accommodation in double, matrimonial, triple, or quadruple rooms with TV, private bathroom, and swimming pool (Hotel Plaza del Bosque). Entrance fees and transfers to tourist places, Official tour guide.',",
    to: "services: 'Meals: 2 breakfasts, one typical lunch at the Blue Lagoon. 2 nights accommodation in hotel of client\\'s choice (rooms with TV, private bathroom, pool subject to availability). Entrance fees and transfers to tourist places, Official tour guide.',"
  },
  {
    from: "note: '3:00 p.m. Departure from the Av. La Marina Bus Terminal on GH Bus Transport Company.',",
    to: "note: 'Departure times and points according to prior coordination.',"
  },

  // Cajamarca
  {
    from: "services: 'Transporte Trujillo-Cajamarca-Trujillo. Se viaja con choferes, profesionales experimentados y conocedores de la ruta. Dos desayunos. Movilidad turística a todos los recorridos en Cajamarca. Alojamiento en hotel céntrico Colonial **. Están incluidas todas las entradas y guiados.',",
    to: "services: 'Pasajes de ida y vuelta desde lugar de origen. Se viaja con choferes, profesionales experimentados y conocedores de la ruta. Dos desayunos. Movilidad turística a todos los recorridos en Cajamarca. Alojamiento en hotel a elección del cliente. Están incluidas todas las entradas y guiados.',"
  },
  {
    from: "note: '10:00 pm Partida a Cajamarca en Bus de Turismo',",
    to: "note: 'Horarios y punto de salida según coordinación previa.',"
  },
  {
    from: "services: 'Trujillo-Cajamarca-Trujillo transportation. Travel with experienced and knowledgeable professional drivers. Two breakfasts. Tourist mobility to all tours in Cajamarca. Accommodation in the central Colonial Hotel **. All entrance fees and guided tours are included.',",
    to: "services: 'Round trip tickets from place of origin. Travel with experienced and knowledgeable professional drivers. Two breakfasts. Tourist mobility to all tours in Cajamarca. Accommodation in hotel of client\\'s choice. All entrance fees and guided tours are included.',"
  },
  {
    from: "note: '10:00 p.m. Departure to Cajamarca in a Tourist Bus',",
    to: "note: 'Departure times and points according to prior coordination.',"
  },

  // Chachapoyas
  {
    from: "services: 'Pasajes ida y vuelta en Móvil Tours. Movilidad turística a todos los itinerarios mencionados en el tour. Entradas a todos los lugares turísticos y guiados. Dos noches en hotel Ñuñurcos. Tres desayunos y tres almuerzos.',",
    to: "services: 'Pasajes de ida y vuelta desde lugar de origen. Movilidad turística a todos los itinerarios mencionados en el tour. Entradas a todos los lugares turísticos y guiados. Dos noches en hotel a elección del cliente. Tres desayunos y tres almuerzos.',"
  },
  {
    from: "note: '6:00 pm Salida en Móvil Tours.',",
    to: "note: 'Horarios y punto de salida según coordinación previa.',"
  },
  {
    from: "services: 'Round trip tickets in Móvil Tours. Tourist mobility to all itineraries mentioned in the tour. Entrances to all tourist places and guided tours. Two nights in Ñuñurcos hotel. Three breakfasts and three lunches.',",
    to: "services: 'Round trip tickets from place of origin. Tourist mobility to all itineraries mentioned in the tour. Entrances to all tourist places and guided tours. Two nights in hotel of client\\'s choice. Three breakfasts and three lunches.',"
  },
  {
    from: "note: '6:00 p.m. Departure in Móvil Tours.',",
    to: "note: 'Departure times and points according to prior coordination.',"
  },

  // Cusco
  {
    from: "services: 'Recojo del aeropuerto del Cusco y traslado al hotel, 04 noches de alojamiento (Hotel Tierra del Inca) a pocas cuadras de la Plaza de Armas de Cusco, 03 desayunos, entradas a todos los lugares turísticos, ticket de tren ida y retorno (tren turístico), boletos al Qoricancha y todos los centros turísticos que abarca el City Tour, ingresos a Machupicchu, bus de subida y bajada a Machupicchu (Consetur), Guía Profesional en Machupicchu y traslados a todos los lugares turísticos mencionados.',",
    to: "services: 'Recojo del aeropuerto/terminal del Cusco y traslado al hotel, 04 noches de alojamiento en hotel a elección del cliente (céntrico), 03 desayunos, entradas a todos los lugares turísticos, ticket de tren ida y retorno (tren turístico), boletos al Qoricancha y todos los centros turísticos que abarca el City Tour, ingresos a Machupicchu, bus de subida y bajada a Machupicchu (Consetur), Guía Profesional en Machupicchu y traslados a todos los lugares turísticos mencionados.',"
  },
  {
    from: "services: 'Pick up from Cusco airport and transfer to the hotel, 04 nights accommodation (Tierra del Inca hotel) a few blocks from the main square of Cusco, 03 breakfasts, entrances to all tourist places, round trip train ticket (tourist train), tickets to Qoricancha and all the tourist centers covered by the city tour, entrances to Machupicchu, bus up and down to Machupicchu (Consetur), Professional Guide in Machupicchu and transfers to all mentioned tourist places.',",
    to: "services: 'Pick up from Cusco airport/terminal and transfer to the hotel, 04 nights accommodation in hotel of client\\'s choice (central), 03 breakfasts, entrances to all tourist places, round trip train ticket (tourist train), tickets to Qoricancha and all the tourist centers covered by the city tour, entrances to Machupicchu, bus up and down to Machupicchu (Consetur), Professional Guide in Machupicchu and transfers to all mentioned tourist places.',"
  },

  // Arequipa
  {
    from: "services: 'Vuelos Lima - Arequipa - Lima y Trujillo - Lima - Trujillo. Recojo del aeropuerto o terminal terrestre. Transporte turístico durante todo el recorrido. Guía profesional bilingüe. Alojamiento en los hoteles elegidos. Desayuno continental. Traslados, guiado y las entradas, dos noches de hotel en el Colca, alimentación completa, Hostal Colca y otra noche en Arequipa en el Hotel La Casa de Consuelo.',",
    to: "services: 'Pasajes de ida y vuelta desde lugar de origen. Recojo del aeropuerto o terminal terrestre. Transporte turístico durante todo el recorrido. Guía profesional bilingüe. Alojamiento en hotel a elección del cliente. Desayuno continental. Traslados, guiado y las entradas, alimentación completa.',"
  },
  {
    from: "note: 'Salida del aeropuerto Jorge Chávez.',",
    to: "note: 'Horarios y punto de salida según coordinación previa.',"
  },
  {
    from: "services: 'Lima - Arequipa - Lima and Trujillo - Lima - Trujillo flights. Pick up from the airport or bus terminal. Tourist transport during the whole tour. Bilingual professional guide. Accommodation in the chosen hotels. Continental breakfast. Transfers, guided tours and entrance fees, two nights hotel in Colca, full meals, Hostal Colca and another night in Arequipa at Hotel La Casa de Consuelo.',",
    to: "services: 'Round trip tickets from place of origin. Pick up from the airport or bus terminal. Tourist transport during the whole tour. Bilingual professional guide. Accommodation in hotel of client\\'s choice. Continental breakfast. Transfers, guided tours and entrance fees, full meals.',"
  },
  {
    from: "note: 'Departure from Jorge Chávez airport.',",
    to: "note: 'Departure times and points according to prior coordination.',"
  },
  
  // Huacachina Ica
  {
    from: "services: 'Bus privado de turismo, Ingresos a todos los lugares a visitar, Guía profesional de Turismo, Entradas, Transporte turístico a todos los lugares a visitar, Paseo en tubulares en la Huacachina (opcional), Paseo en los deslizadores a las Islas Ballestas, Alimentación completa, Hospedaje por 2 Noches Habitación doble o matrimonial en hotel céntrico.',",
    to: "services: 'Pasajes de ida y vuelta desde lugar de origen. Ingresos a todos los lugares a visitar, Guía profesional de Turismo, Transporte turístico a todos los lugares a visitar, Paseo en tubulares en la Huacachina (opcional), Paseo en los deslizadores a las Islas Ballestas, Alimentación completa, Hospedaje por 2 Noches en hotel a elección del cliente.',"
  },
  {
    from: "note: '05:00 pm Recojo de la I.E en el bus de turismo.',",
    to: "note: 'Horarios y punto de salida según coordinación previa.',"
  },
  {
    from: "services: 'Private tourist bus, Entrances to all places to visit, Professional Tourist Guide, Tickets, Tourist transport to all places to visit, Buggy ride in Huacachina (optional), Speedboat ride to the Ballestas Islands, Full meals, Lodging for 2 Nights Double or matrimonial room in a central hotel.',",
    to: "services: 'Round trip tickets from place of origin. Entrances to all places to visit, Professional Tourist Guide, Tourist transport to all places to visit, Buggy ride in Huacachina (optional), Speedboat ride to the Ballestas Islands, Full meals, Lodging for 2 Nights in hotel of client\\'s choice.',"
  },
  {
    from: "note: '05:00 p.m. Pick up from the school in the tourist bus.',",
    to: "note: 'Departure times and points according to prior coordination.',"
  },

  // Huaraz y Chavin (School trip)
  {
    from: "services: 'Movilidad turística desde Trujillo a todos los circuitos turísticos, dos noches de hotel céntrico, dos desayunos, dos almuerzos, guiado y entradas a todos los lugares mencionados.',",
    to: "services: 'Pasajes de ida y vuelta desde lugar de origen. Movilidad turística a todos los circuitos turísticos, dos noches en hotel a elección del cliente, dos desayunos, dos almuerzos, guiado y entradas a todos los lugares mencionados.',"
  },
  {
    from: "note: '9:00 pm Salida desde Trujillo.',",
    to: "note: 'Horarios y punto de salida según coordinación previa.',"
  },
  {
    from: "services: 'Tourist mobility from Trujillo to all tourist circuits, two nights in a central hotel, two breakfasts, two lunches, guided tours and entrance fees to all mentioned places.',",
    to: "services: 'Round trip tickets from place of origin. Tourist mobility to all tourist circuits, two nights in hotel of client\\'s choice, two breakfasts, two lunches, guided tours and entrance fees to all mentioned places.',"
  },
  {
    from: "note: '9:00 p.m. Departure from Trujillo.',",
    to: "note: 'Departure times and points according to prior coordination.',"
  },

  // Cajamarca y Chiclayo (School trip)
  {
    from: "services: 'Dos noches de hospedaje en los hoteles mencionados en base a habitaciones dobles o triples con baño privado, agua caliente, tv cable, wifi. Alimentación completa. Traslados y entradas a los lugares turísticos.',",
    to: "services: 'Pasajes de ida y vuelta desde lugar de origen. Dos noches de hospedaje en el hotel a elección del cliente en base a habitaciones dobles o triples con baño privado, agua caliente, tv cable, wifi. Alimentación completa. Traslados y entradas a los lugares turísticos.',"
  },
  {
    from: "note: 'Recojo del terminal terrestre o aeropuerto.',",
    to: "note: 'Horarios y punto de salida según coordinación previa.',"
  },
  {
    from: "services: 'Two nights of accommodation in the mentioned hotels based on double or triple rooms with private bathroom, hot water, cable TV, Wi-Fi. Full meals. Transfers and entrance fees to tourist places.',",
    to: "services: 'Round trip tickets from place of origin. Two nights of accommodation in hotel of client\\'s choice based on double or triple rooms with private bathroom, hot water, cable TV, Wi-Fi. Full meals. Transfers and entrance fees to tourist places.',"
  },
  {
    from: "note: 'Pick up from the bus terminal or airport.',",
    to: "note: 'Departure times and points according to prior coordination.',"
  }
];

let replaced = 0;
for (const rep of replacements) {
  if (content.includes(rep.from)) {
    content = content.replace(rep.from, rep.to);
    replaced++;
  } else {
    console.log("Could not find:", rep.from.substring(0, 50) + "...");
  }
}

fs.writeFileSync(path, content);
console.log(`Replaced ${replaced} strings.`);
