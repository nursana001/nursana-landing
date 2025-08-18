import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';
import logonursana from '../assets/logo.png';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img 
                src={logonursana} 
                alt="Nursana - Enfermera especializada en cuidado de bebés y madres en Madrid" 
                className="splash-down h-12" 
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            {isHome ? (
              <>
                <a href="#inicio" className="text-gray-700 hover:text-[#99bcab] transition-colors">Inicio</a>
                <a href="#servicios" className="text-gray-700 hover:text-[#99bcab] transition-colors">Servicios</a>
                <a href="#sobre-mi" className="text-gray-700 hover:text-[#99bcab] transition-colors">Sobre mí</a>
                <a href="#testimonios" className="text-gray-700 hover:text-[#99bcab] transition-colors">Testimonios</a>
                <a href="#contacto" className="text-gray-700 hover:text-[#99bcab] transition-colors">Contacto</a>
              </>
            ) : (
              <>
                <Link to="/" className="text-gray-700 hover:text-[#99bcab] transition-colors">Inicio</Link>
                <Link to="/servicios" className="text-gray-700 hover:text-[#99bcab] transition-colors">Servicios</Link>
                <Link to="/contacto" className="text-gray-700 hover:text-[#99bcab] transition-colors">Contacto</Link>
              </>
            )}
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
  );
};

export default Header;
