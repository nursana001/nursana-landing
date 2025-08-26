import React from "react";
import logo from "../../assets/logo_nursana_texto_oscuro.png";
import "./blog.css";

const Blog = () => {
  return (
    <div className="blog-container">
      <img src={logo} alt="Nursana Logo" className="blog-logo" />
      <h1 className="blog-message nursana-text-gradient">Estamos creando el blog de Nursana</h1>
      <div className="blog-bar-loader" aria-label="Cargando...">
        <div className="bar-loader-track">
          <div className="bar-loader-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
