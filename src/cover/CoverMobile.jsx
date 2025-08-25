import React, { useState } from 'react';
import './cover-mobile.css';
import logo from '../assets/logo_nursana_texto_vector.svg';
import motherImg from '../assets/bebeportada3.jpeg';

const CoverMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="cover-mobile" style={{position: 'relative', minHeight: '100vh', overflow: 'hidden'}}>
      {/* Imagen de fondo absoluta */}
      <img 
        src={motherImg}
        alt="Mother and baby Nursana"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          objectPosition: 'center top',
          zIndex: 0
        }}
      />
      <div 
        className="cover-header"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem 1.2rem 0 1.2rem',
          boxSizing: 'border-box'
        }}
      >
        <img src={logo} alt="Nursana Logo" className="cover-logo" />
        <button
          className="cover-menu-btn"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="cover-menu-icon">≡</span>
        </button>
        {menuOpen && (
          <>
            {/* Overlay to close menu when clicking outside */}
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 29,
                background: 'transparent',
              }}
              onClick={() => setMenuOpen(false)}
            />
            <div className="cover-menu-window"></div>
          </>
        )}
      </div>
      <div className="cover-titles" style={{position: 'relative', zIndex: 2}}>
  <h1 className="cover-title">Madre y bebé, cuidados expertos</h1>
  <h2 className="cover-subtitle">Enfermería neonatal en Madrid</h2>
      </div>
      {/* Eliminamos la imagen decorativa, ya que ahora es fondo */}
    </section>
  );
};

export default CoverMobile;
