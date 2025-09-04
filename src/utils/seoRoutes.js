// Configuración de rutas para el sitemap
export const siteRoutes = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'monthly',
    title: 'Enfermera neonatal y lactancia Madrid',
    description: 'Servicios profesionales de enfermería neonatal para bebés y madres en Madrid'
  },
  {
    path: '/blog',
    priority: '0.8',
    changefreq: 'weekly',
    title: 'Blog Nursana - Consejos y guías para el cuidado de bebés',
    description: 'Artículos especializados sobre lactancia, cuidado neonatal y maternidad por enfermera especializada'
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
