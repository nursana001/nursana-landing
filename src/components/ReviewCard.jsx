import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Star } from 'lucide-react';

// Definimos el componente ReviewCard
const ReviewCard = ({ name, rating, text, date }) => {
  // Creamos un array de 5 elementos para representar las 5 estrellas
  const totalStars = 5;

  // Lista de palabras clave que queremos destacar
  const keywordsToHighlight = React.useMemo(() => [
    'fundamental', 'profesional', 'recomiendo', 'confianza', 'perfectamente',
    'excelente', 'tranquilidad', 'ayudaron', 'preparada', 'consejos', 'clara',
    'solucionarlo', 'lactancia', 'segura', 'descansar', 'atendido'
  ], []);
  
  // Crear un conjunto para búsqueda más eficiente
  const keywordSet = React.useMemo(() => {
    // Convertir el array a un Map para búsqueda O(1) en lugar de O(n)
    const map = new Map();
    keywordsToHighlight.forEach(keyword => 
      map.set(keyword.toLowerCase(), true)
    );
    return map;
  }, [keywordsToHighlight]);

  // Función optimizada para destacar palabras clave en el texto
  const highlightKeywords = React.useCallback((text) => {
    if (!text) return '';
    
    // Evitamos procesar texto si no hay palabras clave definidas
    if (keywordSet.size === 0) return text;
    
    // Dividir el texto en palabras y puntuación - usando un regex más eficiente
    const segments = text.split(/([\s,.!?;]+)/);
    
    // Creamos los elementos de manera eficiente
    return segments.map((segment, index) => {
      // Verificamos si el segmento no es espacio en blanco o puntuación
      if (segment.trim().length === 0 || /^[\s,.!?;]+$/.test(segment)) {
        return <span key={index}>{segment}</span>;
      }
      
      // Buscamos coincidencias exactas primero (más rápido)
      let isKeyword = keywordSet.has(segment.toLowerCase());
      
      // Si no hay coincidencia exacta, buscamos coincidencias parciales
      if (!isKeyword) {
        const segmentLower = segment.toLowerCase();
        isKeyword = Array.from(keywordSet.keys()).some(keyword => 
          segmentLower.includes(keyword)
        );
      }
      
      return <span key={index}>{segment}</span>;
    });
  }, [keywordSet]);
  
  // Memoizamos el renderizado de las estrellas para evitar recálculos innecesarios
  const starsElement = React.useMemo(() => {
    return Array(totalStars).fill(0).map((_, index) => (
      <Star 
        key={index} 
        className={`w-4 h-4 ${index < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
      />
    ));
  }, [rating, totalStars]);

  // Memoizamos el texto resaltado para evitar recálculos en cada render
  const highlightedText = React.useMemo(() => {
    return highlightKeywords(text);
  }, [text, highlightKeywords]);

  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-lg review-name">{name}</h3>
          <span className="text-sm text-muted-foreground review-date">{date}</span>
        </div>
        
        <div className="flex items-center mb-4">
          {starsElement}
        </div>
        
        <p className="text-muted-foreground review-text">
          {highlightedText}
        </p>
      </CardContent>
    </Card>
  );
};

// Exportamos el componente memoizado para evitar renderizaciones innecesarias
export default React.memo(ReviewCard);
