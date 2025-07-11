import React, { useEffect, useState, memo } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import ReviewCard from './ReviewCard';

// Memoizar el componente ReviewCard para evitar renderizados innecesarios
const MemoizedReviewCard = memo(ReviewCard);

const ReviewCarousel = ({ reviews }) => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);
  
  // Añadir control mediante teclado (flechas izquierda/derecha)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') api?.scrollPrev();
      if (e.key === 'ArrowRight') api?.scrollNext();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [api]);

  return (
    <div className="w-full max-w-5xl mx-auto relative">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        {/* Flechas de navegación a los lados */}
        <CarouselPrevious 
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full -ml-4 z-10 bg-primary text-white hover:bg-primary/80 hover:text-white shadow-lg" 
        />
        
        <CarouselNext 
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full mr-4 z-10 bg-primary text-white hover:bg-primary/80 hover:text-white shadow-lg" 
          style={{ marginRight: "-16px" }}
        />
        
        <CarouselContent className="py-4">
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
              <div className="p-1">
                <MemoizedReviewCard 
                  name={review.name}
                  rating={review.rating}
                  text={review.text}
                  date={review.date}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-3">
            {Array.from({ length: count }).map((_, i) => (
              <span
                key={i}
                className={`block h-3 w-3 rounded-full transition-colors cursor-pointer ${
                  i === current ? "bg-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                role="button"
                tabIndex={0}
                onClick={() => api?.scrollTo(i)}
                onKeyDown={(e) => e.key === 'Enter' && api?.scrollTo(i)}
                aria-label={`Ir a la review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default ReviewCarousel;
