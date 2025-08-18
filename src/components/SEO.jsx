import { useEffect } from 'react';

const SEO = ({ 
  title = "Nursana | Enfermera especializada en cuidado de bebés y lactancia en Madrid",
  description = "Servicios profesionales de enfermería neonatal para bebés y madres en Madrid: asesoría personalizada de lactancia materna, puesta de pendientes para bebés, curso de primeros auxilios infantil y cuidado nocturno domiciliario (salus). Enfermera titulada con experiencia especializada en cuidados del recién nacido y apoyo en maternidad.",
  url = "https://www.nursana.es",
  image = "https://www.nursana.es/favicon.png"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name, content, attribute = 'name') => {
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', 'enfermera, cuidado bebés, lactancia materna, primeros auxilios, Madrid, enfermería neonatal, asesoría lactancia, puesta pendientes bebé, cuidado nocturno, salus');

    // Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:url', url, 'property');
    updateMetaTag('og:image', image, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:locale', 'es_ES', 'property');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', title, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', image, 'name');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
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
