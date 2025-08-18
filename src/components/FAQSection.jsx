import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "¿Cuánto cuesta la asesoría de lactancia materna?",
      answer: "La asesoría de lactancia tiene un coste de 120€ e incluye una valoración personalizada completa, enseñanza de técnicas de agarre y posturas correctas, solución de problemas frecuentes como grietas o dificultades de succión, y seguimiento telefónico posterior para resolver dudas."
    },
    {
      question: "¿Realizáis los servicios a domicilio en toda Madrid?",
      answer: "Sí, realizamos todos nuestros servicios (asesoría de lactancia, puesta de pendientes, curso de primeros auxilios y cuidado nocturno) a domicilio en Madrid capital y localidades cercanas de la Comunidad de Madrid. El desplazamiento está incluido en el precio de todos nuestros servicios."
    },
    {
      question: "¿A partir de qué edad se pueden poner pendientes a los bebés?",
      answer: "Recomendamos esperar al menos hasta los 2-3 meses de edad para poner pendientes a los bebés, cuando el sistema inmunológico está más desarrollado y el lóbulo de la oreja tiene el tamaño adecuado. Utilizamos material estéril, pendientes hipoalergénicos y técnicas especializadas para minimizar las molestias."
    },
    {
      question: "¿Qué incluye el curso de primeros auxilios infantil?",
      answer: "El curso de primeros auxilios incluye técnicas de RCP en bebés y niños, actuación ante atragantamiento, manejo de convulsiones febriles, tratamiento de heridas y quemaduras, y cuándo acudir a urgencias. Tiene una duración de 2 horas, incluye práctica con muñecos y manual teórico. El precio es 80€ para parejas."
    },
    {
      question: "¿Cómo funciona el servicio de cuidado nocturno (salus)?",
      answer: "El servicio de salus nocturno permite que una enfermera especializada cuide de tu bebé durante la noche para que puedas descansar. El horario estándar es de 23:00 a 07:00 o de 00:00 a 08:00. El precio es 140€ de lunes a jueves y 160€ de viernes a domingo. Incluye desplazamiento y estancia completa."
    },
    {
      question: "¿Qué formación y experiencia tenéis?",
      answer: "Soy María, enfermera titulada desde 2015 con más de 9 años de experiencia en cuidados neonatales. He trabajado en urgencias pediátricas, UCI neonatal y actualmente en maternidad. Tengo un Máster en Urgencias, Emergencias y Transporte Sanitario por la Universidad CEU San Pablo, y formación específica en lactancia materna y primeros auxilios pediátricos."
    },
    {
      question: "¿Cuánto tiempo de antelación necesito para reservar una cita?",
      answer: "Para servicios de asesoría de lactancia y puesta de pendientes, recomendamos reservar con 2-3 días de antelación. Para el cuidado nocturno (salus), es preferible reservar con una semana de antelación. Para urgencias de lactancia, intentamos atender el mismo día o al siguiente según disponibilidad."
    },
    {
      question: "¿Ofrecéis seguimiento después de los servicios?",
      answer: "Sí, todos nuestros servicios incluyen seguimiento. En asesoría de lactancia ofrecemos seguimiento telefónico para resolver dudas posteriores. En puesta de pendientes, damos pautas detalladas de cuidados y estamos disponibles para consultas. En primeros auxilios, el manual incluye contacto para dudas."
    }
  ];

  return (
    <section className="py-20" style={{backgroundColor: '#fff2e3'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 nursana-text-gradient">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-gray-600">
            Resolvemos las dudas más comunes sobre nuestros servicios de enfermería neonatal, asesoría de lactancia y cuidado de bebés en Madrid.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="mb-4">
              <div 
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleItem(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {item.question}
                  </h3>
                  {openItems[index] ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" style={{color: '#7a9d8a'}} />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" style={{color: '#7a9d8a'}} />
                  )}
                </button>
                
                {openItems[index] && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            ¿No encuentras respuesta a tu pregunta?
          </p>
          <a 
            href="https://wa.me/34681882717" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #99bcab 0%, #7a9d8a 100%)',
              color: 'white'
            }}
          >
            Pregúntanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
