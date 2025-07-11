import React, { useEffect, useState } from "react";
import logonursana from '../assets/logo.png';

export default function SplashScreen({ onFinish }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHide(true);
      setTimeout(onFinish, 800); // Espera a que termine la animación
    }, 1200); // Duración visible del splash
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-primary flex flex-col items-center justify-center ${
        hide ? "animate-slide-up" : ""
      } transition-transform duration-800 ease-in-out`}
      style={{ background: "#fff2e3" }}
    >
      <img src={logonursana} alt="Logo Nursana" className="w-40 h-40 object-contain" />
      <span className="mt-6 text-xl font-semibold text-primary nursana-text-gradient text-center">Cuidados con alma profesional</span>
    </div>
  );
}
