import React, { lazy, Suspense } from 'react';
import SEO from '../components/SEO';
import ErrorBoundary from '../components/ErrorBoundary';

const ServicesSection = lazy(() => import('../components/ServicesSection'));

const Services = () => {
  return (
    <div className="min-h-screen bg-white" lang="es">
      <SEO 
        title="Servicios de Enfermería Neonatal en Madrid | Nursana"
        description="Servicios profesionales de enfermería para bebés: asesoría de lactancia, puesta de pendientes, curso de primeros auxilios y cuidado nocturno en Madrid."
  url="https://www.nursana.es/"
      />
      
      {/* Header Placeholder - Will be shared component */}
      <div className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 nursana-text-gradient">
            Servicios de Enfermería Neonatal
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Servicios profesionales especializados en el cuidado de bebés y apoyo a madres en Madrid. Cada servicio está diseñado para brindar tranquilidad y confianza a las familias.
          </p>
        </div>

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
      </div>
    </div>
  );
};

export default Services;
