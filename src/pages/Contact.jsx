import React, { lazy, Suspense } from 'react';
import SEO from '../components/SEO';
import ErrorBoundary from '../components/ErrorBoundary';

const ContactSection = lazy(() => import('../components/ContactSection'));

const Contact = () => {
  return (
    <div className="min-h-screen bg-white" lang="es">
      <SEO 
        title="Contacto - Nursana | Enfermería Neonatal Madrid"
        description="Contacta con Nursana para servicios de enfermería neonatal en Madrid. WhatsApp: +34 681 882 717 | Email: hola@nursana.es"
        url="https://www.nursana.es/contacto"
      />
      
      <div className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 nursana-text-gradient">
            Contacto
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            ¿Tienes dudas sobre nuestros servicios? ¿Necesitas una consulta personalizada? Estamos aquí para ayudarte. Contacta con nosotros y resolveremos todas tus preguntas.
          </p>
        </div>

        <ErrorBoundary>
          <Suspense fallback={
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="mt-2 text-muted-foreground">Cargando información de contacto...</p>
            </div>
          }>
            <ContactSection />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Contact;
