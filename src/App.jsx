import React, { useState, useEffect, lazy, Suspense } from 'react';
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
import './service-bullet-align.css'; // Alinea correctamente los bullets en listas de servicios
import './service-cards-alignment.css'; // Alineación correcta de botones en tarjetas de servicios
import './horizontal-buttons-fix.css'; // Nueva solución para que los botones aparezcan uno al lado del otro
// Importaciones optimizadas para performance - preload de imágenes críticas
import bebeDurmiendo from './assets/bebe-durmiendo.jpeg';
import madreCogiendo from './assets/madre-cogiendo-bebe.jpg';
import logonursana from './assets/logo.png';
import motherImg from './assets/mother2.jpg';
import SplashScreen from './components/SplashScreen';
import RoundedImage from './components/RoundedImage';
import LazyImage from './components/LazyImage';
import SEO from './components/SEO';
import ErrorBoundary from './components/ErrorBoundary';
import { preloadCriticalImages } from './utils/imagePerformance';

// Lazy loading para componentes no críticos
const ReviewCarousel = lazy(() => import('./components/ReviewCarousel'));
const ServicesSection = lazy(() => import('./components/ServicesSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));

// Datos estáticos optimizados para performance
const reviews = [
  {
    name: "Laura Martínez",
    rating: 4,
    text: "La asesoría de lactancia de Nursana fue fundamental para mí. Me ayudaron a resolver todas mis dudas sobre la lactancia y me dieron consejos muy útiles para el cuidado de mi bebé. Lo recomiendo totalmente.",
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
    title: "Asesoría de lactancia",
    description: "Te acompañamos en el inicio y desarrollo de la lactancia, resolviendo dudas y ayudando a superar cualquier dificultad. Nuestro objetivo es que vivas la lactancia de forma tranquila, informada y segura.",
    price: "120€",
    includes: ["Valoración personalizada", "Técnicas de enganche", "Solución de problemas frecuentes", "Seguimiento"],
    icon: <Heart className="w-8 h-8 text-primary" />
  },
  {
    title: "Puesta de pendientes",
    description: "Realizamos la colocación sanitaria de pendientes a tu bebé de manera segura, higiénica y sin dolor, utilizando material estéril y técnicas adaptadas a los más pequeños.",
    price: "80€",
  includes: ["Asesoramiento previo", "Pendientes hipoalergénicos a elegir", "Cuidados posteriores"],
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
    description: "¿Necesitas descansar? Nuestro servicio de salus nocturno te permite confiar el cuidado de tu bebé a una enfermera especializada durante la noche, para que puedas recuperar energías con total tranquilidad.",
    price: "L-J 140€, V-D 160€",
    includes: ["Desplazamiento y estancia en domicilio de 23:00 a 07:00 o de 00:00 a 08:00", "Para otras franjas, consultar"],
    icon: <Clock className="w-8 h-8 text-primary" />
  }
];

function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Preload de imágenes críticas y manejo del splash screen
  useEffect(() => {
    // Preload de imágenes críticas para mejor performance
    preloadCriticalImages().catch(console.error);
    
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Posicionamiento dinámico del botón "Contacta ahora" en dispositivos móviles y tablets
  useEffect(() => {
    // Solo ejecutar en móviles y tablets (ancho máximo de 768px) Y cuando el logo esté arriba
    // No ejecutar cuando el logo esté en la esquina inferior izquierda
    function isMobileOrTablet() {
      return window.innerWidth <= 768;
    }

    function positionContactButton() {
      const contactButton = document.querySelector('.hero-section .btn-contacta');
      if (!contactButton) return;
      if (isMobileOrTablet()) {
        contactButton.style.setProperty('position', 'fixed', 'important');
        contactButton.style.setProperty('top', '1.2rem', 'important');
        contactButton.style.setProperty('right', '1.2rem', 'important');
        contactButton.style.setProperty('left', 'auto', 'important');
        contactButton.style.setProperty('z-index', '120', 'important');
        contactButton.style.setProperty('width', 'auto', 'important');
        contactButton.style.setProperty('max-width', '90vw', 'important');
      } else {
        contactButton.style.setProperty('position', '', 'important');
        contactButton.style.setProperty('top', '', 'important');
        contactButton.style.setProperty('right', '', 'important');
        contactButton.style.setProperty('left', '', 'important');
        contactButton.style.setProperty('z-index', '', 'important');
        contactButton.style.setProperty('width', '', 'important');
        contactButton.style.setProperty('max-width', '', 'important');
        contactButton.style.display = '';
      }
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

  // Controlar visibilidad del botón de contacto en móviles y tablets
  useEffect(() => {
    function handleContactButtonVisibility() {
      const contactButton = document.querySelector('.hero-section .btn-contacta');
      if (!contactButton) return;
      if (window.innerWidth <= 1023) {
        // Solo en móviles/tablets: ocultar al hacer scroll
        if (window.scrollY > 200) {
          contactButton.style.setProperty('display', 'none', 'important');
        } else {
          contactButton.style.setProperty('display', 'flex', 'important');
        }
      } else {
        // En ordenadores: siempre visible, display por defecto
        contactButton.style.setProperty('display', '', 'important');
      }
    }

    if (!showSplash) {
      // Ejecutar inicialmente
      handleContactButtonVisibility();
      
      // Ejecutar en scroll
      window.addEventListener('scroll', handleContactButtonVisibility);
      window.addEventListener('resize', handleContactButtonVisibility);
      
      return () => {
        window.removeEventListener('scroll', handleContactButtonVisibility);
        window.removeEventListener('resize', handleContactButtonVisibility);
      };
    }
  }, [showSplash]);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/34681882717', '_blank');
  };

  const handleCallClick = () => {
  window.open('tel:+34681882717', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:hola@nursana.es', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/nursana.care?igsh=MTFza2w5NHF5cWhqZA==', '_blank');
  };

  return (
    <>
      <SEO />
      {showSplash && (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      )}
      {!showSplash && (
        <div className="min-h-screen bg-background">
          {/* Hero Header */}
          <header className="relative min-h-screen flex items-end justify-center overflow-hidden hero-section">
            {/* <div className="absolute inset-0 nursana-gradient opacity-10"></div> */}
            
            {/* Logo - responsive positioning for all sizes */}
            <div className="logo-container">
              <img src={logonursana} alt="Nursana - Enfermera especializada en cuidado de bebés y madres en Madrid" className="splash-down" />
            </div>
            
            {/* Image - responsive adjustments for different devices */}
            {showSplash === false && (
              <div className="image-container full-right-image">
                <RoundedImage 
                  src={motherImg} 
                  alt="Madre con bebé recibiendo cuidados profesionales de enfermería especializada" 
                  className="splash-right-to-left drop-shadow-xl rounded-image" 
                />
              </div>
            )}
            
            {/* Content Container - Now with responsive adjustments - moved down 1cm */}
            <div className="container mx-auto px-4 py-20 relative z-10 flex flex-col justify-start pt-18 h-full min-h-screen">
              <div id="hero-title-block" className="text-center fade-in w-full pb-16 md:pb-20">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight w-full max-w-none mx-0 px-0 nursana-text-gradient mb-6" style={{wordBreak: 'break-word'}}>
                  Servicios de enfermería neonatal y lactancia en Madrid
                </h1>
                <p className="text-xl text-muted-foreground mt-6 max-w-4xl mx-auto">
                  Apoyo profesional en los primeros días de tu bebé: lactancia, descanso y bienestar
                </p>
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
          </header>

          {/* Main content */}
          <main>
            {/* Sobre Nursana Article */}
            <article className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* En pantallas grandes (Desktop), esta div aparece a la izquierda */}
                <div className="slide-in-left desktop-only">
                  <LazyImage 
                    src={madreCogiendo}
                    alt="Madre cogiendo a su bebé con amor y cuidado profesional de enfermería especializada"
                    className="w-full h-auto rounded-2xl shadow-xl"
                    loading="lazy"
                  />
                </div>
                {/* Contenido de texto que aparecerá primero en móviles/tablets */}
                <div className="slide-in-right">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 nursana-text-gradient">
                    Sobre mi
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Soy María, tengo 32 años y soy enfermera. Terminé la carrera en 2015 y desde entonces he desarrollado mi vocación en distintos ámbitos relacionados con la salud infantil y materna. He trabajado en urgencias —incluyendo las pediátricas—, en la UCI neonatal y actualmente formo parte de una planta de maternidad, donde acompañamos muy de cerca a las familias en el inicio de la lactancia.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    A lo largo de estos años me he formado en diferentes aspectos del recién nacido y del niño, convencida de que una atención actualizada y basada en la evidencia puede marcar una gran diferencia en los primeros momentos de vida. Además, cuento con un Máster en Urgencias, Emergencias y Transporte Sanitario por la Universidad CEU San Pablo, que me ha permitido adquirir una visión amplia y resolutiva en situaciones críticas.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Con Nursana quiero poner toda mi experiencia y formación al servicio de las familias, ofreciendo apoyo profesional y cercano en una etapa tan importante como la llegada de un bebé.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-2">
                      Enfermera especializada
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
                    <LazyImage 
                      src={madreCogiendo}
                      alt="Madre cogiendo a su bebé con amor y cuidado profesional de enfermería especializada"
                      className="w-full h-auto rounded-2xl shadow-xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Servicios Section */}
          <ErrorBoundary>
            <Suspense fallback={
              <div className="py-20 text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                <p className="mt-2 text-muted-foreground">Cargando servicios...</p>
              </div>
            }>
              <ServicesSection services={services} handleWhatsAppClick={handleWhatsAppClick} />
            </Suspense>
          </ErrorBoundary>

          {/* Reviews Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 pb-2 nursana-text-gradient">
                  Opiniones de familias
                </h2>
                <p className="text-xl text-gray-600">
                  Descubre las experiencias reales de madres y padres que han confiado en nuestros servicios profesionales de enfermería neonatal y asesoría de lactancia en Madrid.
                </p>
              </div>
              <ErrorBoundary>
                <Suspense fallback={
                  <div className="text-center py-8">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    <p className="mt-2 text-muted-foreground">Cargando opiniones...</p>
                  </div>
                }>
                  <ReviewCarousel reviews={reviews} />
                </Suspense>
              </ErrorBoundary>
            </div>
          </section>

          {/* Contacto Section */}
          <ErrorBoundary>
            <Suspense fallback={
              <div className="py-20 text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                <p className="mt-2 text-muted-foreground">Cargando contacto...</p>
              </div>
            }>
              <ContactSection 
                handleCallClick={handleCallClick}
                handleEmailClick={handleEmailClick}
                handleWhatsAppClick={handleWhatsAppClick}
                handleInstagramClick={handleInstagramClick}
              />
            </Suspense>
          </ErrorBoundary>
          </main>

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

