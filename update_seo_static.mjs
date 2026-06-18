import fs from 'fs';
import path from 'path';

const pages = [
  {
    file: 'src/pages/nosotros.astro',
    title: 'Sobre Nosotros | Tour Peruvian Service',
    description: 'Conoce más sobre Tour Peruvian Service, nuestra historia, misión y pasión por mostrarte lo mejor del Perú y el mundo.'
  },
  {
    file: 'src/pages/galeria.astro',
    title: 'Galería de Fotos | Tour Peruvian Service',
    description: 'Explora nuestra galería de imágenes y descubre los increíbles destinos que puedes visitar con nosotros.'
  },
  {
    file: 'src/pages/contacto.astro',
    title: 'Contacto | Tour Peruvian Service',
    description: 'Ponte en contacto con Tour Peruvian Service. Estamos listos para ayudarte a planificar tu próximo viaje.'
  },
  {
    file: 'src/pages/transporte.astro',
    title: 'Servicio de Transporte | Tour Peruvian Service',
    description: 'Servicio de transporte turístico seguro y confortable. Conoce nuestra moderna flota de vehículos.'
  },
  {
    file: 'src/pages/paquetes/index.astro',
    title: 'Paquetes Turísticos Recomendados | Tour Peruvian Service',
    description: 'Descubre nuestros paquetes turísticos recomendados. Experiencias inolvidables diseñadas para ti.'
  },
  {
    file: 'src/pages/destinos/index.astro',
    title: 'Destinos Turísticos | Tour Peruvian Service',
    description: 'Explora nuestros destinos turísticos nacionales e internacionales. Encuentra tu próxima aventura.'
  },
  {
    file: 'src/pages/destinos/nacionales/index.astro',
    title: 'Destinos Nacionales | Perú | Tour Peruvian Service',
    description: 'Conoce los destinos más hermosos de Perú. Viajes a Cusco, Huaraz, Ica, Arequipa y más.'
  },
  {
    file: 'src/pages/destinos/internacionales/index.astro',
    title: 'Destinos Internacionales | Tour Peruvian Service',
    description: 'Viaja por el mundo con nuestros destinos internacionales exclusivos. Punta Cana, Río de Janeiro, Cartagena y más.'
  },
  // ENGLISH VERSIONS
  {
    file: 'src/pages/en/about.astro',
    title: 'About Us | Tour Peruvian Service',
    description: 'Learn more about Tour Peruvian Service, our history, mission, and passion for showing you the best of Peru and the world.'
  },
  {
    file: 'src/pages/en/gallery.astro',
    title: 'Photo Gallery | Tour Peruvian Service',
    description: 'Explore our image gallery and discover the incredible destinations you can visit with us.'
  },
  {
    file: 'src/pages/en/contact.astro',
    title: 'Contact Us | Tour Peruvian Service',
    description: 'Get in touch with Tour Peruvian Service. We are ready to help you plan your next trip.'
  },
  {
    file: 'src/pages/en/transport.astro',
    title: 'Transport Services | Tour Peruvian Service',
    description: 'Safe and comfortable tourist transport service. Discover our modern fleet of vehicles.'
  },
  {
    file: 'src/pages/en/packages/index.astro',
    title: 'Recommended Tour Packages | Tour Peruvian Service',
    description: 'Discover our recommended tour packages. Unforgettable experiences designed for you.'
  },
  {
    file: 'src/pages/en/destinations/index.astro',
    title: 'Tourist Destinations | Tour Peruvian Service',
    description: 'Explore our national and international tourist destinations. Find your next adventure.'
  },
  {
    file: 'src/pages/en/destinations/national/index.astro',
    title: 'National Destinations | Peru | Tour Peruvian Service',
    description: 'Discover the most beautiful destinations in Peru. Trips to Cusco, Huaraz, Ica, Arequipa, and more.'
  },
  {
    file: 'src/pages/en/destinations/international/index.astro',
    title: 'International Destinations | Tour Peruvian Service',
    description: 'Travel the world with our exclusive international destinations. Punta Cana, Rio de Janeiro, Cartagena, and more.'
  }
];

const basePath = process.cwd();

for (const page of pages) {
  const fullPath = path.join(basePath, page.file);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if <Layout> or <Layout > is present (without props)
    if (/<Layout\s*>/.test(content)) {
      content = content.replace(/<Layout\s*>/g, `<Layout\n  title="${page.title}"\n  description="${page.description}"\n>`);
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Updated: ${page.file}`);
    } else {
      console.log(`Skipped (no bare <Layout> found): ${page.file}`);
    }
  } else {
    console.log(`Not found: ${page.file}`);
  }
}
