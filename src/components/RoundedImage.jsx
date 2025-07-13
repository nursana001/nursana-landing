import React from 'react';
import './RoundedImage.css';

// Componente específico para la imagen con bordes redondeados - versión simplificada
const RoundedImage = ({ src, alt, className, ...props }) => {
  return (
    <div className="rounded-image-container">
      <img 
        src={src}
        alt={alt}
        className={`${className || ''} rounded-image-border`}
        {...props}
      />
    </div>
  );
};

export default RoundedImage;
