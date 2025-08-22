import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const ServicesSection = ({ services, handleWhatsAppClick }) => {
  return (
    <section className="services-section py-20" style={{backgroundColor: '#fff2e3'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 nursana-text-gradient" style={{lineHeight: '1.2', paddingBottom: '4px'}}>
            Servicios especializados
          </h2>
          <p className="text-xl text-gray-600">
            Cuidado profesional y asesoramiento experto para el bienestar de tu bebé y tu tranquilidad como madre.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="service-card group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm flex flex-col h-full">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#e8f0ec'}}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-lg font-semibold" style={{color: '#7a9d8a'}}>
                  {service.price}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center flex flex-col flex-grow">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold text-gray-800 mb-3">Incluye:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#99bcab'}}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="service-button text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
                    style={{
                      background: 'linear-gradient(135deg, #99bcab 0%, #7a9d8a 100%)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #7a9d8a 0%, #99bcab 100%)'
                      }
                    }}
                  >
                    Solicitar información
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
