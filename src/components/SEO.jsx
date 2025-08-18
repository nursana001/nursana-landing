import { useEffect } from 'react';

const SEO = () => {
  useEffect(() => {
    // Schema.org structured data for healthcare service
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "HealthAndBeautyBusiness",
      "name": "Nursana",
      "description": "Servicios profesionales de enfermería para bebés y madres. Enfermera titulada especializada en cuidado neonatal, asesoría de lactancia y primeros auxilios.",
      "url": "https://www.nursana.es",
      "logo": "https://www.nursana.es/favicon.png",
      "image": "https://www.nursana.es/favicon.png",
      "telephone": "+34681882717",
      "email": "hola@nursana.es",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Madrid",
        "addressRegion": "Madrid",
        "addressCountry": "ES"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.4168",
        "longitude": "-3.7038"
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€",
      "serviceType": [
        "Asesoría de lactancia",
        "Puesta de pendientes bebé",
        "Curso de primeros auxilios",
        "Servicio de cuidado nocturno"
      ],
      "medicalSpecialty": [
        "Enfermería Neonatal",
        "Lactancia Materna",
        "Cuidados Pediátricos"
      ],
      "founder": {
        "@type": "Person",
        "name": "María",
        "jobTitle": "Enfermera especializada",
        "description": "Enfermera titulada con experiencia en UCI neonatal y maternidad. Máster en Urgencias, Emergencias y Transporte Sanitario por la Universidad CEU San Pablo."
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Enfermería Nursana",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Asesoría de lactancia",
              "description": "Acompañamiento profesional en el inicio y desarrollo de la lactancia materna",
              "provider": {
                "@type": "Organization",
                "name": "Nursana"
              }
            },
            "price": "120",
            "priceCurrency": "EUR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Puesta de pendientes bebé",
              "description": "Colocación segura e higiénica de pendientes para bebés",
              "provider": {
                "@type": "Organization",
                "name": "Nursana"
              }
            },
            "price": "80",
            "priceCurrency": "EUR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Curso de primeros auxilios",
              "description": "Formación en primeros auxilios para bebés y niños",
              "provider": {
                "@type": "Organization",
                "name": "Nursana"
              }
            },
            "price": "80",
            "priceCurrency": "EUR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Servicio de cuidado nocturno",
              "description": "Cuidado profesional nocturno de bebés por enfermera especializada",
              "provider": {
                "@type": "Organization",
                "name": "Nursana"
              }
            },
            "priceRange": "140-160",
            "priceCurrency": "EUR"
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "6",
        "bestRating": "5",
        "worstRating": "4"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Laura Martínez"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4"
          },
          "reviewBody": "La asesoría de lactancia de Nursana fue fundamental para mí. Me ayudaron a resolver todas mis dudas sobre la lactancia y me dieron consejos muy útiles para el cuidado de mi bebé."
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Carmen Sánchez"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "reviewBody": "El servicio de Salus nocturno me permitió descansar después de semanas sin dormir bien. La enfermera fue muy profesional y mi bebé estuvo perfectamente atendido."
        }
      ],
      "sameAs": [
        "https://www.instagram.com/nursana.care"
      ]
    };

    // Create and append script tag with structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default SEO;
