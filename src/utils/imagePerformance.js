// Utilidades de performance para optimización de imágenes
export const imageFormats = {
  webp: 'webp',
  jpeg: 'jpeg',
  jpg: 'jpg',
  png: 'png'
};

// Detecta soporte para WebP
export const supportsWebP = () => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

// Cache de imágenes para mejorar performance
class ImageCache {
  constructor() {
    this.cache = new Map();
    this.pendingRequests = new Map();
  }

  async loadImage(src) {
    // Si ya está en caché, devolver inmediatamente
    if (this.cache.has(src)) {
      return this.cache.get(src);
    }

    // Si ya hay una petición pendiente, esperarla
    if (this.pendingRequests.has(src)) {
      return this.pendingRequests.get(src);
    }

    // Crear nueva petición
    const promise = new Promise((resolve, reject) => {
      const img = new Image();
      
      img.onload = () => {
        this.cache.set(src, img);
        this.pendingRequests.delete(src);
        resolve(img);
      };
      
      img.onerror = () => {
        this.pendingRequests.delete(src);
        reject(new Error(`Failed to load image: ${src}`));
      };
      
      img.src = src;
    });

    this.pendingRequests.set(src, promise);
    return promise;
  }

  preloadImages(sources) {
    return Promise.all(sources.map(src => this.loadImage(src)));
  }

  clearCache() {
    this.cache.clear();
    this.pendingRequests.clear();
  }

  getCacheSize() {
    return this.cache.size;
  }
}

export const imageCache = new ImageCache();

// Preload crítico de imágenes importantes
export const preloadCriticalImages = () => {
  const criticalImages = [
    '/src/assets/mother2.jpg',
    '/src/assets/logonursana.png',
    '/src/assets/bebe-durmiendo.jpeg'
  ];
  
  return imageCache.preloadImages(criticalImages);
};

// Genera URLs optimizadas según el dispositivo
export const getOptimizedImageUrl = (src, options = {}) => {
  const { 
    width, 
    height, 
    quality = 80, 
    format = 'auto' 
  } = options;
  
  // En un entorno real, aquí usarías un servicio como Cloudinary, ImageKit, etc.
  // Por ahora devolvemos la URL original
  return src;
};

// Hook para performance de imágenes
export const useImagePerformance = () => {
  const isWebPSupported = supportsWebP();
  
  const getOptimalFormat = (originalSrc) => {
    if (isWebPSupported && !originalSrc.includes('.webp')) {
      // En un entorno real, aquí cambiarías la extensión por .webp
      return originalSrc;
    }
    return originalSrc;
  };

  return {
    isWebPSupported,
    getOptimalFormat,
    preloadCriticalImages,
    imageCache
  };
};
