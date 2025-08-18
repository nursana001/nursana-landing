// Utilidad para generar URLs canónicas de forma dinámica
import { siteRoutes } from './seoRoutes';

/**
 * Obtiene la URL canónica actual basada en window.location
 * @returns {string} URL canónica completa
 */
export const getCurrentCanonicalUrl = () => {
  const baseUrl = 'https://www.nursana.es';
  const currentPath = window.location.pathname;
  
  // Normalizar el path (remover trailing slash excepto para root)
  const normalizedPath = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');
  
  return baseUrl + normalizedPath;
};

/**
 * Obtiene información de la ruta actual para SEO
 * @returns {object} Información de la ruta (title, description, etc.)
 */
export const getCurrentRouteInfo = () => {
  const currentPath = window.location.pathname;
  const normalizedPath = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');
  
  // Buscar la ruta en la configuración de SEO
  const routeInfo = siteRoutes.find(route => route.path === normalizedPath);
  
  // Fallback a la página principal si no se encuentra la ruta
  return routeInfo || siteRoutes[0];
};

/**
 * Valida si una URL canónica es correcta
 * @param {string} url - URL a validar
 * @returns {boolean} true si la URL es válida
 */
export const validateCanonicalUrl = (url) => {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'https:' && urlObj.hostname === 'www.nursana.es';
  } catch (error) {
    return false;
  }
};
