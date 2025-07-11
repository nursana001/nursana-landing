import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Star } from 'lucide-react';

const ReviewCard = ({ name, rating, text, date }) => {
  // Creamos un array de 5 elementos para representar las 5 estrellas
  const totalStars = 5;
  
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-lg">{name}</h3>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        
        <div className="flex items-center mb-4">
          {Array(totalStars).fill(0).map((_, index) => (
            <Star 
              key={index} 
              className={`w-4 h-4 ${index < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
            />
          ))}
        </div>
        
        <p className="text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
