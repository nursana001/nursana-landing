import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram } from 'lucide-react';
import logonursana from '../assets/logo.png';

const Footer = () => {
  return (
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
              <li><Link to="/servicios/asesoria-lactancia-madrid" className="hover:text-white transition-colors">Asesoría de lactancia</Link></li>
              <li>Puesta de pendientes</li>
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
  );
};

export default Footer;
