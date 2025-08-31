#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateSitemap, generateRobotsTxt } from './src/utils/seoRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.nursana.es';

// Generar sitemap.xml
const sitemapContent = generateSitemap(BASE_URL);
const sitemapPath = path.join(__dirname, 'docs', 'sitemap.xml');

// Crear directorio docs si no existe
const docsDir = path.join(__dirname, 'docs');
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

// Escribir sitemap.xml
fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
console.log('✅ Sitemap generado en:', sitemapPath);

// Generar robots.txt
const robotsContent = generateRobotsTxt(BASE_URL);
const robotsPath = path.join(__dirname, 'docs', 'robots.txt');

// Escribir robots.txt
fs.writeFileSync(robotsPath, robotsContent, 'utf8');
console.log('✅ Robots.txt generado en:', robotsPath);


console.log('\n📊 URLs incluidas en el sitemap:');
import { siteRoutes } from './src/utils/seoRoutes.js';
siteRoutes.forEach(route => {
  console.log(`  - ${BASE_URL}${route.path} (Priority: ${route.priority})`);
});

// Copiar CNAME a docs/ si existe en la raíz
const cnameSrc = path.join(__dirname, 'CNAME');
const cnameDest = path.join(docsDir, 'CNAME');
if (fs.existsSync(cnameSrc)) {
  fs.copyFileSync(cnameSrc, cnameDest);
  console.log('✅ CNAME copiado a docs/');
} else {
  console.warn('⚠️  No se encontró CNAME en la raíz, no se copió a docs/.');
}

console.log('\n🚀 Para publicar en Google Search Console:');
console.log(`1. Sitemap URL: ${BASE_URL}/sitemap.xml`);
console.log(`2. Robots.txt URL: ${BASE_URL}/robots.txt`);
console.log('\n💡 Ejecuta este script cada vez que agregues nuevas rutas.');
