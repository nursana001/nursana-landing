import React, { useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Heart, Baby, Clock, Shield, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';
import './App.css';
import './responsive-fixes.css';
import './final-solution.css'; // SOLUCIÓN FINAL: Corrige todos los problemas
import './mobile-layout-solution.css'; // Nueva solución con layout vertical para móviles y tablets
import './desktop-image-enhancement.css'; // Solución para ordenadores pequeños (14 pulgadas)
import './mother-baby-mobile.css'; // Ajusta la imagen motherImg para igualar ancho con bebeDurmiendo
import './mobile-logo-position.css'; // Posiciona el logo arriba a la izquierda solo en móviles y tablets
import './mobile-buttons-position.css'; // Estilos básicos para botones en móviles y tablets
import './mobile-text-above-image.css'; // Posiciona el texto encima de la imagen en móviles y tablets
import './mobile-sobre-nursana.css'; // Posiciona el título y texto encima de la imagen en la sección "Sobre Nursana"
import './mobile-services-layout.css'; // Reorganiza la sección de servicios en móviles y tablets
import './mobile-reviews.css'; // Ajusta el ancho y texto de las reviews en móviles y tablets
import './mobile-carousel-buttons-fix.css'; // Ajusta los botones del carrusel de reviews para evitar solapamiento en móviles
import './small-computer-service-button-fix.css'; // Corrige el tamaño del botón "Solicitar información" en ordenadores pequeños
import './button-text-overflow-fix.css'; // Solución adicional para problemas específicos de desbordamiento de texto en botones
import './horizontal-buttons-fix.css'; // Nueva solución para que los botones aparezcan uno al lado del otro
// Eliminamos la importación no utilizada de nurseBaby
import bebeDurmiendo from './assets/bebe-durmiendo.jpeg';
import logonursana from './assets/logo.png';
import motherImg from './assets/mother2.jpg';
import SplashScreen from './components/SplashScreen';
import ReviewCarousel from './components/ReviewCarousel';
import RoundedImage from './components/RoundedImage';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Posicionamiento dinámico del botón "Contacta ahora" en dispositivos móviles y tablets
  useEffect(() => {
    // Solo ejecutar en móviles y tablets (ancho máximo de 768px)
    function isMobileOrTablet() {
      return window.innerWidth <= 768;
    }

    function positionContactButton() {
      if (!isMobileOrTablet()) return;

      // Obtener el logo y el botón de contacto
      const logoContainer = document.querySelector('.logo-container');
      const logoImg = logoContainer ? logoContainer.querySelector('img') : null;
      const contactButton = document.querySelector('.hero-section .btn-contacta');
      
      if (!logoImg || !contactButton) return;
      
      // Obtener la posición y dimensiones del logo
      const logoRect = logoImg.getBoundingClientRect();
      
      // Calcular el centro vertical de la palabra "Nursana" en el logo
      // (asumimos que la palabra está aproximadamente en el 50% de la altura del logo)
      const logoCenterY = logoRect.top + (logoRect.height * 0.5);
      
      // Obtener dimensiones del botón
      const buttonRect = contactButton.getBoundingClientRect();
      
      // Posicionar el botón para que su centro vertical se alinee con el centro de la palabra "Nursana"
      const topPosition = logoCenterY - (buttonRect.height / 2);
      
      // Aplicar la posición calculada
      contactButton.style.position = 'fixed';
      contactButton.style.top = `${topPosition}px`;
      contactButton.style.right = '2.5rem';
      contactButton.style.zIndex = '100';
    }

    // Posicionar inicialmente después de que todo esté cargado
    if (!showSplash) {
      const timer = setTimeout(() => {
        positionContactButton();
      }, 500); // Un pequeño retraso para asegurar que todo está renderizado
      
      // Reposicionar en scroll y resize
      window.addEventListener('scroll', positionContactButton);
      window.addEventListener('resize', positionContactButton);
      
      return () => {
        clearTimeout(timer);
        window.removeEventListener('scroll', positionContactButton);
        window.removeEventListener('resize', positionContactButton);
      };
    }
  }, [showSplash]);
  
  const reviews = [
    {
      name: "Laura Martínez",
      rating: 4,
      text: "La visita postparto de Nursana fue fundamental para mí. Me ayudaron con la lactancia y me dieron consejos muy útiles para cuidar de mi bebé. Lo recomiendo totalmente.",
      date: "Mayo 2025"
    },
    {
      name: "Carmen Sánchez",
      rating: 5,
      text: "El servicio de Salus nocturno me permitió descansar después de semanas sin dormir bien. La enfermera fue muy profesional y mi bebé estuvo perfectamente atendido.",
      date: "Junio 2025"
    },
    {
      name: "Marta Rodríguez",
      rating: 5,
      text: "El curso de primeros auxilios me ha dado mucha confianza. Ahora me siento preparada para actuar ante cualquier emergencia. Explicaciones claras y prácticas.",
      date: "Abril 2025"
    },
    {
      name: "Ana López",
      rating: 5,
      text: "La asesoría de lactancia fue justo lo que necesitaba. Mi bebé tenía problemas para agarrarse bien y con su ayuda conseguimos solucionarlo en una sola sesión.",
      date: "Mayo 2025"
    },
    {
      name: "Elena Gómez",
      rating: 5,
      text: "La puesta de pendientes a mi bebé fue rápida y sin complicaciones. Muy profesionales y cuidadosas con mi pequeña. La recomiendo sin dudarlo.",
      date: "Junio 2025"
    },
    {
      name: "Patricia Fernández",
      rating: 4,
      text: "El curso de primeros auxilios ha sido muy completo. Ahora me siento mucho más segura con mi bebé. La enfermera explica todo de forma clara y práctica.",
      date: "Mayo 2025"
    }
  ];

  const services = [
    {
      title: "Visita postparto",
      description: "Apoyo profesional tras el parto para ayudarte con lactancia, cuidados del bebé, bienestar materno y resolución de dudas en la tranquilidad de tu hogar.",
      price: "1 visita: 70€ | 2 visitas: 130€",
      includes: ["Desplazamiento", "Visita de 1 hora y media", "Valoración personalizada"],
      icon: <Shield className="w-8 h-8 text-primary" />
    },
    {
      title: "Asesoría de lactancia",
      description: "Te acompañamos en el inicio y desarrollo de la lactancia, resolviendo dudas y ayudando a superar cualquier dificultad. Nuestro objetivo es que vivas la lactancia de forma tranquila, informada y segura.",
      price: "120€",
      includes: ["Valoración personalizada", "Técnicas de agarre", "Solución de problemas frecuentes", "Seguimiento"],
      icon: <Heart className="w-8 h-8 text-primary" />
    },
    {
      title: "Puesta de pendientes",
      description: "Realizamos la colocación de pendientes a tu bebé de manera segura, higiénica y sin dolor, utilizando material estéril y técnicas adaptadas a los más pequeños.",
      price: "70€",
      includes: ["Asesoramiento previo", "Elección de pendientes hipoalergénicos", "Cuidados posteriores"],
      icon: <Baby className="w-8 h-8 text-primary" />
    },
    {
      title: "Curso de primeros auxilios",
      description: "Aprende desde casa a reaccionar ante emergencias como RCP, atragantamiento, convulsiones y cuando acudir a urgencias. Claro, práctico y pensado para familias. Impartido por una enfermera experta.",
      price: "Privado por pareja: 80€ | Grupos: consultar",
      includes: ["Desplazamiento", "Curso teórico-práctico de 2 horas de duración", "Manual teórico"],
      icon: <Shield className="w-8 h-8 text-primary" />
    },
    {
      title: "Servicio de Salus nocturno",
      description: "¿Necesitas descansar? Nuestro servicio de salus nocturno te permite confiar el cuidado de tu bebé a una profesional durante la noche, para que puedas recuperar energías con total tranquilidad.",
      price: "L-J 140€, V-D 160€",
      includes: ["Desplazamiento y estancia en domicilio de 22:00 a 08:00", "Para otras franjas, consultar"],
      icon: <Clock className="w-8 h-8 text-primary" />
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/34681882717', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+34640314958', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:hola@nursana.es', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/nursana.care?igsh=MTFza2w5NHF5cWhqZA==', '_blank');
  };

  return (
    <>
      {showSplash && (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      )}
      {!showSplash && (
        <div className="min-h-screen bg-background">
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-end justify-center overflow-hidden hero-section">
            <div className="absolute inset-0 nursana-gradient opacity-10"></div>
            
            {/* Logo - responsive positioning for all sizes */}
            <div className="logo-container">
              <img src={logonursana} alt="Logo Nursana" className="splash-down" />
            </div>
            
            {/* Image - responsive adjustments for different devices */}
            {showSplash === false && (
              <div className="image-container full-right-image">
                <RoundedImage 
                  src={motherImg} 
                  alt="Madre Nursana" 
                  className="splash-right-to-left drop-shadow-xl rounded-image" 
                />
              </div>
            )}
            
            {/* Content Container - Now with responsive adjustments */}
            <div className="container mx-auto px-4 py-20 relative z-10 flex flex-col justify-end h-full min-h-screen">
              <div className="text-center fade-in w-full pb-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight w-full max-w-none mx-0 px-0 nursana-text-gradient" style={{wordBreak: 'break-word'}}>
                  Descubre nuestros servicios profesionales para madres y recién nacidos
                </h1>
                {/* Contenedor simplificado con botones directamente horizontales */}
                <div className="flex justify-center mt-10" id="horizontal-buttons-container">
                  <Button 
                    size="lg" 
                    className="cta-button btn-reserva bg-primary hover:bg-primary/90 text-white px-4 py-3 mx-2"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle className="btn-icon w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Reserva tu cita</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="btn-contacta border-primary text-primary hover:bg-primary hover:text-white px-4 py-3 mx-2"
                    onClick={handleCallClick}
                  >
                    <Phone className="btn-icon w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Contacta ahora</span>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Sobre Nursana Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* En pantallas grandes (Desktop), esta div aparece a la izquierda */}
                <div className="slide-in-left desktop-only">
                  <img 
                    src={bebeDurmiendo}
                    alt="Bebé durmiendo Nursana"
                    className="w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>
                {/* Contenido de texto que aparecerá primero en móviles/tablets */}
                <div className="slide-in-right">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 nursana-text-gradient">
                    Sobre Nursana
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    En Nursana sabemos que la llegada de un bebé es uno de los momentos más especiales (y a veces, más retadores) de la vida. Por eso, te acompañamos con servicios profesionales y personalizados, pensados para que disfrutes de esta etapa con confianza y tranquilidad.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Nuestro equipo está formado por enfermeras especializadas en el cuidado infantil, con una vocación clara: ayudarte y apoyarte cuando más lo necesitas.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-2">
                      Enfermeras especializadas
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-2">
                      Cuidado personalizado
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-2">
                      Apoyo profesional
                    </Badge>
                  </div>
                  {/* Esta imagen solo aparecerá en móviles/tablets, debajo del texto */}
                  <div className="mobile-tablet-only mt-8 pt-4">
                    <img 
                      src={bebeDurmiendo}
                      alt="Bebé durmiendo Nursana"
                      className="w-full h-auto rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="flex flex-row gap-8 items-start mb-16 justify-end">
                <div className="sticky top-24 w-1/3" style={{minWidth: '260px'}}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 nursana-text-gradient text-left">
                    Nuestros Servicios
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-md text-left">
                    Diseñados para acompañarte en esta etapa
                  </p>
                </div>
                <div className="flex flex-col items-end gap-8 w-[60%] ml-auto">
                  {services.map((service) => (
                    <Card key={service.title} className="service-card bg-white border-0 shadow-lg w-full" style={{marginLeft:0}}>
                      <CardHeader className="text-center pb-4">
                        <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                          {service.icon}
                        </div>
                        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                        <div className="text-2xl font-bold text-primary">{service.price}</div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base mb-4 leading-relaxed card-description">
                          {service.description}
                        </CardDescription>
                        <div className="space-y-2">
                          <p className="font-semibold text-sm text-primary">Incluye:</p>
                          <ul className="space-y-1">
                            {service.includes.map((item, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button 
                          className="w-auto min-w-[300px] mt-6 bg-primary hover:bg-primary/90 mx-auto block"
                          onClick={handleWhatsAppClick}
                          style={{whiteSpace: 'nowrap'}}
                        >
                          Solicitar información
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Reviews Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <ReviewCarousel reviews={reviews} />
            </div>
          </section>

          {/* Contacto Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 nursana-text-gradient">
                  Contacta con nosotras
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Estamos aquí para resolver todas tus dudas y acompañarte en esta hermosa etapa
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Teléfono</h3>
                  <p className="text-muted-foreground mb-4">+34 681 882 717</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={handleCallClick}
                  >
                    Llamar
                  </Button>
                </Card>
                
                <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground mb-4 text-sm">hola@nursana.es</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={handleEmailClick}
                  >
                    Escribir
                  </Button>
                </Card>
                
                <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground mb-4">Contacto directo</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={handleWhatsAppClick}
                  >
                    Chatear
                  </Button>
                </Card>
                
                <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Instagram</h3>
                  <p className="text-muted-foreground mb-4">@nursana.care</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={handleInstagramClick}
                  >
                    Seguir
                  </Button>
                </Card>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-primary text-white py-12">
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-2xl font-bold mb-4">Nursana</h3>
              <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
                Cuidado profesional y personalizado para tu bebé. Acompañándote con confianza y tranquilidad.
              </p>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-primary-foreground/60 text-sm">
                  © 2025 Nursana. Todos los derechos reservados.
                </p>
              </div>
            </div>
          </footer>

          {/* Floating WhatsApp Button */}
          <div className="floating-whatsapp">
            <Button 
              size="lg" 
              className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-lg"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-8 h-8" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

