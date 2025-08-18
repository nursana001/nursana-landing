// Configuración de rutas para el sitemap
export const siteRoutes = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'monthly',
    title: 'Nursana | Enfermera especializada en cuidado de bebés y lactancia en Madrid',
    description: 'Servicios profesionales de enfermería neonatal para bebés y madres en Madrid'
  },
  {
    path: '/servicios',
    priority: '0.9',
    changefreq: 'monthly',
    title: 'Servicios de Enfermería Neonatal en Madrid | Nursana',
    description: 'Servicios profesionales de enfermería para bebés: asesoría de lactancia, puesta de pendientes, curso de primeros auxilios y cuidado nocturno en Madrid'
  },
  {
    path: '/servicios/asesoria-lactancia-madrid',
    priority: '0.8',
    changefreq: 'monthly',
    title: 'Asesoría de Lactancia Materna en Madrid | Nursana',
    description: 'Asesoría personalizada de lactancia materna a domicilio en Madrid. Enfermera especializada en lactancia materna y cuidados neonatales'
  },
  {
    path: '/servicios/puesta-pendientes-bebe-madrid',
    priority: '0.8',
    changefreq: 'monthly',
    title: 'Puesta de Pendientes para Bebés en Madrid | Nursana',
    description: 'Colocación segura e higiénica de pendientes para bebés en Madrid. Enfermera especializada con técnicas profesionales'
  },
  {
    path: '/servicios/curso-primeros-auxilios-bebes-madrid',
    priority: '0.8',
    changefreq: 'monthly',
    title: 'Curso de Primeros Auxilios para Bebés en Madrid | Nursana',
    description: 'Curso de primeros auxilios para bebés y niños en Madrid. Aprende técnicas de RCP, atragantamiento y emergencias pediátricas'
  },
  {
    path: '/servicios/cuidado-nocturno-bebe-madrid',
    priority: '0.8',
    changefreq: 'monthly',
    title: 'Cuidado Nocturno de Bebés en Madrid - Salus | Nursana',
    description: 'Servicio de cuidado nocturno profesional para bebés en Madrid. Enfermera especializada para que puedas descansar'
  },
  {
    path: '/contacto',
    priority: '0.7',
    changefreq: 'monthly',
    title: 'Contacto - Nursana | Enfermería Neonatal Madrid',
    description: 'Contacta con Nursana para servicios de enfermería neonatal en Madrid. WhatsApp, email y redes sociales'
  }
];

// Generar sitemap XML
export const generateSitemap = (baseUrl = 'https://www.nursana.es') => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${siteRoutes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemapContent;
};

// Generar robots.txt
export const generateRobotsTxt = (baseUrl = 'https://www.nursana.es') => {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1`;
};

// Hook para obtener información de la ruta actual
export const useRouteInfo = (pathname) => {
  return siteRoutes.find(route => route.path === pathname) || siteRoutes[0];
};
