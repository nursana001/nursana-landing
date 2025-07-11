import React, { useEffect, useState, useCallback } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import ReviewCard from './ReviewCard';

const ReviewCarousel = ({ reviews }) => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Optimizamos los callbacks para evitar recreaciones innecesarias
  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);
  
  // Se eliminó el efecto de autoplay
  
  // Añadir control mediante teclado para navegación accesible
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Navegación básica con flechas
      if (e.key === 'ArrowLeft') {
        api?.scrollPrev();
        // Después de navegar, enfocar el control activo
        setTimeout(() => {
          document.getElementById(`testimonio-tab-${api?.selectedScrollSnap() || 0}`)?.focus();
        }, 100);
      }
      if (e.key === 'ArrowRight') {
        api?.scrollNext();
        // Después de navegar, enfocar el control activo
        setTimeout(() => {
          document.getElementById(`testimonio-tab-${api?.selectedScrollSnap() || 0}`)?.focus();
        }, 100);
      }
      // Navegación con deslizamiento táctil para dispositivos móviles
      if (e.key === 'Swipe') {
        const direction = e.detail?.direction || '';
        if (direction === 'left') {
          api?.scrollNext();
        } else if (direction === 'right') {
          api?.scrollPrev();
        }
      }

      // Navegación avanzada para accesibilidad
      if (e.key === 'Home' && api) {
        api.scrollTo(0);
        document.getElementById('testimonio-tab-0')?.focus();
      }
      if (e.key === 'End' && api && count > 0) {
        api.scrollTo(count - 1);
        document.getElementById(`testimonio-tab-${count - 1}`)?.focus();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [api, count]);

  return (
    <div className="w-full max-w-5xl mx-auto relative px-4 sm:px-6 md:px-8">
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {current !== null && `Mostrando testimonio ${current + 1} de ${count}`}
      </div>
      <Carousel
        setApi={setApi}
        className="w-full touch-pan-y"
        opts={{
          align: "center",
          loop: true,
          duration: 0, // Sin animación de transición
        }}
        aria-roledescription="carrusel"
        aria-label="Testimonios de clientes"
      >
        {/* Flechas de navegación a los lados */}
        <CarouselPrevious 
          className="absolute left-0 top-1/2 -translate-y-1/2 md:-translate-x-full md:-ml-4 -ml-2 z-10 bg-primary text-white hover:bg-primary/80 hover:text-white shadow-lg h-8 w-8 sm:h-10 sm:w-10" 
          aria-label="Ver testimonios anteriores"
          title="Testimonios anteriores"
        />
        
        <CarouselNext 
          className="absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-full md:-mr-4 -mr-2 z-10 bg-primary text-white hover:bg-primary/80 hover:text-white shadow-lg h-8 w-8 sm:h-10 sm:w-10" 
          aria-label="Ver testimonios siguientes"
          title="Testimonios siguientes"
        />
        
        <CarouselContent className="py-4">
          {/* Usamos React.useMemo para evitar recrear elementos en cada renderizado */}
          {React.useMemo(() => reviews.map((review, index) => (
            <CarouselItem 
              key={index} 
              className="basis-full sm:basis-3/4 md:basis-1/2 lg:basis-1/2 pl-4"
              role="tabpanel"
              id={`testimonio-panel-${index}`}
              aria-labelledby={`testimonio-tab-${index}`}
            >
              <div className="p-1">
                <ReviewCard 
                  name={review.name}
                  rating={review.rating}
                  text={review.text}
                  date={review.date}
                />
              </div>
            </CarouselItem>
          )), [reviews])}
        </CarouselContent>

        <div className="flex justify-center mt-6 sm:mt-8">
          <nav aria-label="Navegación de testimonios" className="w-full">
            <div className="flex items-center gap-2 sm:gap-3 justify-center" role="tablist">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  className={`block h-3 w-3 sm:h-4 sm:w-4 rounded-full touch-manipulation ${
                    i === current ? "bg-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  role="tab"
                  id={`testimonio-tab-${i}`}
                  aria-selected={i === current}
                  aria-controls={`testimonio-panel-${i}`}
                  tabIndex={i === current ? 0 : -1}
                  onClick={() => api?.scrollTo(i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      api?.scrollTo(i);
                    }
                  }}
                  aria-label={`Ir al testimonio ${i + 1} de ${count}`}
                />
              ))}
            </div>
          </nav>
        </div>
      </Carousel>
    </div>
  );
};

export default ReviewCarousel;
