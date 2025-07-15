/**
 * Este script se encarga de posicionar dinámicamente el botón "Contacta ahora"
 * alineándolo con el centro de la palabra "Nursana" del logo en dispositivos móviles y tablets.
 */

(function() {
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
    // (asumimos que la palabra está aproximadamente en el 45-55% de la altura del logo)
    const logoCenterY = logoRect.top + (logoRect.height * 0.5);
    
    // Obtener dimensiones del botón
    const buttonRect = contactButton.getBoundingClientRect();
    
    // Posicionar el botón para que su centro vertical se alinee con el centro de la palabra "Nursana"
    const topPosition = logoCenterY - (buttonRect.height / 2);
    
    // Aplicar la posición calculada
    contactButton.style.position = 'fixed';
    contactButton.style.top = `${topPosition}px`;
    contactButton.style.right = '2.5rem';
    contactButton.style.transform = 'none';
    contactButton.style.zIndex = '100';
  }

  // Posicionar el botón inicialmente
  function init() {
    // Ocultar el botón reserva en móviles y tablets
    const reservaButton = document.querySelector('.hero-section .btn-reserva');
    if (reservaButton && isMobileOrTablet()) {
      reservaButton.style.display = 'none';
    }
    
    // Esperar a que el logo esté cargado para calcular su posición correctamente
    window.addEventListener('load', function() {
      positionContactButton();
      
      // Reposicionar en scroll y resize
      window.addEventListener('scroll', positionContactButton);
      window.addEventListener('resize', positionContactButton);
    });
  }

  // Ejecutar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
