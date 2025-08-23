import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Heart, Baby, Clock, Shield, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';
import '../App.css';
import '../responsive-fixes.css';
import '../final-solution.css';
import '../mobile-layout-solution.css';
import '../desktop-image-enhancement.css';
import '../mother-baby-mobile.css';
import '../mobile-logo-position.css';
import '../mobile-buttons-position.css';
import '../mobile-text-above-image.css';
import '../mobile-sobre-nursana.css';
import '../mobile-services-layout.css';
import '../mobile-reviews.css';
import '../mobile-carousel-buttons-fix.css';
import '../small-computer-service-button-fix.css';
import '../button-text-overflow-fix.css';
import '../horizontal-buttons-fix.css';

// Importaciones optimizadas para performance
import bebeDurmiendo from '../assets/bebe-durmiendo.jpeg';
import logonursana from '../assets/logo.png';
import motherImg from '../assets/mother2.jpg';
import SplashScreen from '../components/SplashScreen';
import RoundedImage from '../components/RoundedImage';
import LazyImage from '../components/LazyImage';
import SEO from '../components/SEO';
import ErrorBoundary from '../components/ErrorBoundary';
import { preloadCriticalImages } from '../utils/imagePerformance';

// Lazy loading para componentes no críticos
const ReviewCarousel = lazy(() => import('../components/ReviewCarousel'));
const ServicesSection = lazy(() => import('../components/ServicesSection'));
const ContactSection = lazy(() => import('../components/ContactSection'));

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
    name: "Ana García",
    rating: 5,
    text: "El curso de primeros auxilios nos dio mucha tranquilidad como padres primerizos. Muy recomendable para todas las familias.",
    date: "Julio 2025"
  },
  {
    name: "Marta López",
    rating: 5,
    text: "La puesta de pendientes de mi bebé fue perfecta. Muy profesional y cuidadosa. Mi hija no lloró nada y quedó precioso.",
    date: "Agosto 2025"
  },
  {
    name: "Sandra Ruiz",
    rating: 4,
    text: "Muy contenta con el servicio de asesoría. María es una profesional excelente y me ayudó muchísimo con la lactancia.",
    date: "Septiembre 2025"
  },
  {
    name: "Patricia Moreno",
    rating: 5,
    text: "El servicio nocturno fue un salvavidas. Después de semanas agotadores, por fin pude descansar. Lo recomiendo 100%.",
    date: "Octubre 2025"
  }
];

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [preloadComplete, setPreloadComplete] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Preload critical images
        await preloadCriticalImages([bebeDurmiendo, logonursana, motherImg]);
        setPreloadComplete(true);
        
        // Minimum splash time for UX
        const timer = setTimeout(() => {
          setShowSplash(false);
          setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
      } catch (error) {
        console.error('Error during app initialization:', error);
        setPreloadComplete(true);
        setShowSplash(false);
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  // Performance optimization: avoid render during loading
  if (isLoading || !preloadComplete) {
    return <SplashScreen />;
  }

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen bg-white" lang="es">
      <SEO />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img src={logonursana} alt="Nursana - Enfermera especializada en cuidado de bebés y madres en Madrid" className="splash-down" />
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#inicio" className="text-gray-700 hover:text-[#99bcab] transition-colors">Inicio</a>
              <a href="#servicios" className="text-gray-700 hover:text-[#99bcab] transition-colors">Servicios</a>
              <a href="#sobre-mi" className="text-gray-700 hover:text-[#99bcab] transition-colors">Sobre mí</a>
              <a href="#testimonios" className="text-gray-700 hover:text-[#99bcab] transition-colors">Testimonios</a>
              <a href="#contacto" className="text-gray-700 hover:text-[#99bcab] transition-colors">Contacto</a>
            </div>
            <Button 
              onClick={() => window.open('https://wa.me/34681882717', '_blank')}
              className="bg-[#99bcab] hover:bg-[#7a9d8a] text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-20 bg-gradient-to-br from-[#fff2e3] to-white" id="inicio">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 nursana-text-gradient">
                  Enfermera neonatal y lactancia Madrid
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Servicios profesionales de enfermería neonatal para bebés y madres en Madrid: asesoría personalizada de lactancia materna, puesta de pendientes para bebés, curso de primeros auxilios infantil y cuidado nocturno domiciliario (salus). Enfermera titulada con experiencia especializada en cuidados del recién nacido y apoyo en maternidad.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    className="bg-[#99bcab] hover:bg-[#7a9d8a] text-white px-8 py-4 text-lg"
                    onClick={() => window.open('https://wa.me/34681882717', '_blank')}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Consulta gratuita
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-[#99bcab] text-[#99bcab] hover:bg-[#99bcab] hover:text-white px-8 py-4 text-lg"
                    onClick={() => document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Ver servicios
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <LazyImage
                    src={bebeDurmiendo}
                    alt="Bebé durmiendo plácidamente - Servicios de enfermería neonatal Nursana"
                    className="rounded-2xl shadow-2xl max-w-full h-auto"
                    loading="eager"
                    width={500}
                    height={400}
                  />
                  <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Heart className="w-6 h-6 text-red-500 fill-current" />
                      <span className="font-semibold text-gray-800">+200 familias atendidas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ErrorBoundary>
          <Suspense fallback={
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="mt-2 text-muted-foreground">Cargando servicios...</p>
            </div>
          }>
            <ServicesSection />
          </Suspense>
        </ErrorBoundary>

        {/* About Section */}
        <section className="py-20 bg-[#fff2e3]" id="sobre-mi">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 nursana-text-gradient">
                  Sobre Nursana
                </h2>
                <div className="space-y-6 text-lg text-gray-700">
                  <p>
                    Soy <strong>María</strong>, enfermera titulada desde 2015 con más de 9 años de experiencia especializada en cuidados neonatales y apoyo a madres durante la maternidad.
                  </p>
                  <p>
                    Mi formación incluye un <strong>Máster en Urgencias, Emergencias y Transporte Sanitario</strong> por la Universidad CEU San Pablo, y he desarrollado mi carrera profesional en diferentes áreas: urgencias pediátricas y actualmente en maternidad.
                  </p>
                  <p>
                    Nursana nace de mi pasión por acompañar a las familias en los primeros momentos con sus bebés, ofreciendo servicios especializados de enfermería neonatal con un enfoque humano y profesional.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-[#99bcab] text-white">Enfermería Neonatal</Badge>
                    <Badge variant="secondary" className="bg-[#99bcab] text-white">Lactancia Materna</Badge>
                    <Badge variant="secondary" className="bg-[#99bcab] text-white">Primeros Auxilios</Badge>
                    <Badge variant="secondary" className="bg-[#99bcab] text-white">Cuidados Especializados</Badge>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <RoundedImage
                  src={motherImg}
                  alt="María, enfermera especializada en cuidado neonatal y asesoría de lactancia"
                  className="w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </section>

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

        {/* Contact Section */}
        <ErrorBoundary>
          <Suspense fallback={
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="mt-2 text-muted-foreground">Cargando contacto...</p>
            </div>
          }>
            <ContactSection />
          </Suspense>
        </ErrorBoundary>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src={logonursana} alt="Nursana" className="h-12 mb-4 filter brightness-0 invert" />
              <p className="text-gray-400">
                Servicios profesionales de enfermería neonatal para bebés y madres en Madrid.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Asesoría de lactancia</li>
                <li>Pendientes hipoalergénicos a elegir</li>
                <li>Curso de primeros auxilios</li>
                <li>Cuidado nocturno (Salus)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +34 681 882 717
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  hola@nursana.es
                </p>
                <p className="flex items-center">
                  <Instagram className="w-4 h-4 mr-2" />
                  @nursana.care
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Nursana. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
