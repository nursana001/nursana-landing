import React, { useState } from 'react';
import './cover-mobile.css';
import logo from '../assets/logo.png';
import motherImg from '../assets/mother2.jpg';

const CoverMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="cover-mobile">
      <div className="cover-header">
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
      <div className="cover-titles">
        <h1 className="cover-title">Servicios de enfermería neonatal y lactancia en Madrid</h1>
        <h2 className="cover-subtitle">Apoyo profesional en los primeros días de tu bebé: lactancia, descanso y bienestar</h2>
      </div>
      <div className="cover-img-container">
        <img src={motherImg} alt="Mother and baby Nursana" className="cover-img" />
      </div>
    </section>
  );
};

export default CoverMobile;
