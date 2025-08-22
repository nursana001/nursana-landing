import React from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Heart, Clock, CheckCircle, MessageCircle, Phone } from 'lucide-react';
import SEO from '../../components/SEO';

const AsesoriaLactancia = () => {
  return (
    <div className="min-h-screen bg-white" lang="es">
      <SEO 
        title="Asesoría de Lactancia Materna en Madrid | Nursana"
        description="Asesoría personalizada de lactancia materna a domicilio en Madrid. Enfermera especializada en lactancia materna y cuidados neonatales. Resuelve problemas de agarre, grietas y más."
        url="https://www.nursana.es/servicios/asesoria-lactancia-madrid"
      />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 nursana-text-gradient">
              Asesoría de Lactancia Materna en Madrid
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acompañamiento profesional especializado en lactancia materna. Resuelve tus dudas, supera las dificultades y disfruta de una lactancia exitosa con el apoyo de una enfermera experta.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Información del servicio */}
            <div>
              <Card className="border-[#99bcab] shadow-lg">
                <CardHeader className="bg-[#fff2e3]">
                  <CardTitle className="text-2xl text-[#7a9d8a] flex items-center">
                    <Heart className="w-6 h-6 mr-2" />
                    Detalles del Servicio
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-[#99bcab] mr-3" />
                      <span><strong>Duración:</strong> 1.5-2 horas</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl text-[#99bcab] mr-3">€</span>
                      <span><strong>Precio:</strong> 120€</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#99bcab] mr-3 mt-1" />
                      <span><strong>Incluye:</strong> Desplazamiento a domicilio en Madrid</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-[#99bcab] hover:bg-[#7a9d8a] text-white"
                  onClick={() => window.open('https://wa.me/34681882717?text=Hola, me interesa la asesoría de lactancia materna. ¿Podrías darme más información?', '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Solicitar Asesoría por WhatsApp
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full border-[#99bcab] text-[#99bcab] hover:bg-[#99bcab] hover:text-white"
                  onClick={() => window.open('tel:+34681882717', '_blank')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar Ahora: 681 882 717
                </Button>
              </div>
            </div>

            {/* Qué incluye */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#7a9d8a]">¿Qué incluye la asesoría?</h2>
              <div className="space-y-4">
                {[
                  "Valoración personalizada completa de la situación",
                  "Enseñanza de técnicas de agarre y posturas correctas",
                  "Solución de problemas frecuentes (grietas, dolor, etc.)",
                  "Evaluación de la transferencia de leche",
                  "Consejos sobre rutinas y horarios de alimentación",
                  "Apoyo emocional y resolución de dudas",
                  "Seguimiento telefónico posterior",
                  "Material informativo personalizado"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#99bcab] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Problemas que resuelve */}
          <div className="bg-[#fff2e3] rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#7a9d8a]">
              Problemas comunes que resolvemos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Dificultades en el agarre del bebé",
                "Dolor o grietas en los pezones",
                "Sensación de poca producción de leche",
                "Bebé que llora mucho después de mamar",
                "Problemas con horarios y rutinas",
                "Vuelta al trabajo y extracción",
                "Mastitis o ingurgitación mamaria",
                "Destete gradual y respetuoso",
                "Lactancia con fórmula mixta"
              ].map((problem, index) => (
                <div key={index} className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-[#99bcab] mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{problem}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Por qué elegir Nursana */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 text-[#7a9d8a]">
              ¿Por qué elegir la asesoría de Nursana?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#99bcab] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Experiencia Especializada</h3>
                <p className="text-gray-600">Más de 9 años de experiencia en cuidados neonatales y apoyo en maternidad</p>
              </div>
              <div className="text-center">
                <div className="bg-[#99bcab] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Atención Personalizada</h3>
                <p className="text-gray-600">Cada asesoría se adapta a tu situación particular y necesidades específicas</p>
              </div>
              <div className="text-center">
                <div className="bg-[#99bcab] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Seguimiento Continuo</h3>
                <p className="text-gray-600">Apoyo posterior a la consulta para resolver dudas que puedan surgir</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsesoriaLactancia;
