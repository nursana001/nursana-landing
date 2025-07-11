import React, { useEffect, useState } from 'react';
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

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="py-4">
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
              <div className="p-1">
                <ReviewCard 
                  name={review.name}
                  rating={review.rating}
                  text={review.text}
                  date={review.date}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center gap-2 mt-8">
          <CarouselPrevious 
            className="static transform-none mx-2 bg-primary text-white hover:bg-primary/80 hover:text-white" 
          />
          <div className="flex items-center gap-2">
            {Array.from({ length: count }).map((_, i) => (
              <span
                key={i}
                className={`block h-2 w-2 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <CarouselNext 
            className="static transform-none mx-2 bg-primary text-white hover:bg-primary/80 hover:text-white" 
          />
        </div>
      </Carousel>
    </div>
  );
};

export default ReviewCarousel;
