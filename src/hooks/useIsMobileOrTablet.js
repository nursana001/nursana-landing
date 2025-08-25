// src/hooks/useIsMobileOrTablet.js
import { useState, useEffect } from 'react';

// Returns true if window width is <= 1023px (mobile/tablet)
export default function useIsMobileOrTablet() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 1023;
    }
    return false;
  });

  useEffect(() => {
    function handleResize() {
      setIsMobileOrTablet(window.innerWidth <= 1023);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobileOrTablet;
}
