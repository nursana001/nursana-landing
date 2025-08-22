import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Phone, Mail, MessageCircle, MapPin, Instagram } from 'lucide-react';

const ContactSection = ({ handleCallClick, handleEmailClick, handleWhatsAppClick, handleInstagramClick }) => {
  return (
    <section className="py-20" style={{backgroundColor: '#fff2e3'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 nursana-text-gradient relative z-10" style={{lineHeight: '1.2', paddingBottom: '4px'}}>
            ¿Lista para cuidar a tu bebé con total confianza?
          </h2>
          <p className="text-xl text-gray-600 mb-12 relative z-5">
            Contáctame para cualquier consulta. Estoy aquí para acompañarte en esta hermosa etapa.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 p-3 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#e8f0ec'}}>
                  <Phone className="w-8 h-8" style={{color: '#7a9d8a'}} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Teléfono</h3>
                <p className="text-gray-600 mb-4">640 31 49 58</p>
                <Button 
                  onClick={handleCallClick}
                  variant="outline" 
                  className="cta-button w-full transition-colors duration-300"
                  style={{
                    borderColor: '#99bcab',
                    color: '#7a9d8a'
                  }}
                >
                  Llamar ahora
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 p-3 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#e8f0ec'}}>
                  <Mail className="w-8 h-8" style={{color: '#7a9d8a'}} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600 mb-4">hola@nursana.es</p>
                <Button 
                  onClick={handleEmailClick}
                  variant="outline" 
                  className="cta-button w-full transition-colors duration-300"
                  style={{
                    borderColor: '#99bcab',
                    color: '#7a9d8a'
                  }}
                >
                  Enviar email
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 p-3 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#e8f0ec'}}>
                  <MessageCircle className="w-8 h-8" style={{color: '#7a9d8a'}} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">681 88 27 17</p>
                <Button 
                  onClick={handleWhatsAppClick}
                  variant="outline" 
                  className="cta-button w-full transition-colors duration-300"
                  style={{
                    borderColor: '#99bcab',
                    color: '#7a9d8a'
                  }}
                >
                  Escribir mensaje
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 p-3 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#e8f0ec'}}>
                  <Instagram className="w-8 h-8" style={{color: '#7a9d8a'}} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Instagram</h3>
                <p className="text-gray-600 mb-4">@nursana.care</p>
                <Button 
                  onClick={handleInstagramClick}
                  variant="outline" 
                  className="cta-button w-full transition-colors duration-300"
                  style={{
                    borderColor: '#99bcab',
                    color: '#7a9d8a'
                  }}
                >
                  Seguir
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 mr-2" style={{color: '#7a9d8a'}} />
              <h3 className="text-xl font-bold text-gray-800">Zona de servicio</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Ofrezco mis servicios en Madrid capital y alrededores. 
              Para consultas sobre otras zonas, no dudes en contactarme.
            </p>
            <p className="text-sm text-gray-500">
              📍 Madrid y Comunidad de Madrid
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
