import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Star } from 'lucide-react';

const ReviewCard = ({ name, rating, text, date }) => {
  // Creamos un array de 5 elementos para representar las 5 estrellas
  const totalStars = 5;

  // Lista de palabras clave que queremos destacar
  const keywordsToHighlight = [
    'fundamental', 'profesional', 'recomiendo', 'confianza', 'perfectamente',
    'excelente', 'tranquilidad', 'ayudaron', 'preparada', 'consejos', 'clara',
    'solucionarlo', 'lactancia', 'segura', 'descansar', 'atendido'
  ];

  // Función para destacar palabras clave en el texto
  const highlightKeywords = (text) => {
    if (!text) return '';
    
    // Dividir el texto en palabras y puntuación
    const segments = text.split(/([\s,.!?;]+)/);
    
    return segments.map((segment, index) => {
      // Comprobar si la palabra (ignorando mayúsculas/minúsculas) está en nuestra lista de palabras clave
      const isKeyword = keywordsToHighlight.some(keyword => 
        segment.toLowerCase().includes(keyword.toLowerCase())
      );
      
      return isKeyword ? (
        <span key={index} className="font-bold" style={{ color: "var(--primary-dark)" }}>{segment}</span>
      ) : (
        <span key={index}>{segment}</span>
      );
    });
  };
  
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
        
        <p className="text-muted-foreground">
          {highlightKeywords(text)}
        </p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
