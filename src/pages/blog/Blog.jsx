import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo_nursana_texto_vector.svg";
import "./blog.css";

const Blog = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (target) => {
    setMenuOpen(false);
    
    if (target === 'home') {
      // Navegación a la portada
      navigate('/');
    } else if (target === 'blog') {
      // Ya estamos en blog, no hacer nada
      return;
    } else {
      // Navegación a sección en la portada
      navigate('/', { state: { scrollTo: target } });
    }
  };

  return (
    <div className="blog-container">
      {/* Header con logo y menú - igual que en CoverMobile */}
      <div 
        className="blog-header"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem 1.2rem 0 1.2rem',
          boxSizing: 'border-box'
        }}
      >
        <button 
          onClick={() => handleNavigation('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <img src={logo} alt="Nursana Logo" className="blog-header-logo" />
        </button>
        
        <button
          className="blog-menu-btn"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="blog-menu-icon">≡</span>
        </button>
      </div>
      
      {/* Menu desplegable - igual que en CoverMobile */}
      {menuOpen && (
        <>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 999,
              background: 'rgba(0, 0, 0, 0.3)',
            }}
            onClick={() => setMenuOpen(false)}
          />
          <div className="blog-menu-window">
            <nav className="blog-menu-nav">
              <ul className="blog-menu-list">
                <li className="blog-menu-item">
                  <button className="blog-menu-link" onClick={() => handleNavigation('sobre-nursana')}>
                    <span>👩‍⚕️</span>
                    <span>Sobre Nursana</span>
                  </button>
                </li>
                <li className="blog-menu-item">
                  <button className="blog-menu-link" onClick={() => handleNavigation('servicios')}>
                    <span>🤱</span>
                    <span>Nuestros Servicios</span>
                  </button>
                </li>
                <li className="blog-menu-item">
                  <button className="blog-menu-link blog-menu-current" onClick={() => handleNavigation('blog')}>
                    <span>📝</span>
                    <span>El Blog de Nursana</span>
                  </button>
                </li>
                <li className="blog-menu-item">
                  <button className="blog-menu-link" onClick={() => handleNavigation('contacto')}>
                    <span>📞</span>
                    <span>Contacto</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}

      {/* Contenido del blog */}
      <div className="blog-content">
        <img src={logo} alt="Nursana Logo" className="blog-logo" />
        <h1 className="blog-message nursana-text-gradient">Estamos creando el blog de Nursana</h1>
        <div className="blog-bar-loader" aria-label="Cargando...">
          <div className="bar-loader-track">
            <div className="bar-loader-fill"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
