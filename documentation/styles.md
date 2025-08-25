he# Guía de estilos: Colores y Tipografías

Este documento detalla los colores y fuentes utilizados en la web de Nursana, con sus códigos y ejemplos de uso. Mantener esta guía actualizada ayuda a garantizar la coherencia visual y facilita el trabajo de diseño y desarrollo.

---

## 🎨 Paleta de Colores

| Nombre / Uso                        | Código HEX / RGBA         | Ejemplo / Ubicación principal                |
|-------------------------------------|---------------------------|----------------------------------------------|
| Crema corporativo                   | `#fff2e3`                 | Fondo principal portada, secciones, SplashScreen, ContactSection |
| Crema corporativo transparente      | `rgba(255, 242, 227, 0.18)`| Blur header portada                         |
| Verde corporativo                   | `#4a6657`                 | Títulos, subtítulos, textos destacados       |
| Verde claro (iconos, bordes)        | `#7a9d8a`                 | Iconos ContactSection, botones              |
| Verde pastel (fondo iconos)         | `#e8f0ec`                 | Fondo iconos ContactSection                 |
| Verde pastel (borde)                | `#99bcab`                 | Bordes botones ContactSection               |
| Verde pastel translúcido            | `rgba(153, 188, 171, 0.5)`| Fondo blur portada                          |
| Gris oscuro                         | `#222`                    | Textos secundarios, subtítulos              |

---

## 🅰️ Tipografías

| Familia / Peso         | Ejemplo de uso                        | CSS / Ubicación principal                  |
|-----------------------|---------------------------------------|--------------------------------------------|
| 'Montserrat', sans-serif | Títulos, subtítulos, textos generales | body, portada, secciones principales       |
| font-weight: bold     | Títulos principales                   | .cover-title, .cover-subtitle              |
| font-weight: 400      | Textos normales                       | .cover-subtitle, textos secundarios        |
| font-weight: 500      | Textos destacados                     | Algunos botones, textos resaltados         |

---

## 📋 Ejemplos de uso en código

```css
.cover-mobile {
  background: #fff2e3;
  font-family: 'Montserrat', sans-serif;
}
.cover-header-blur {
  background: rgba(255, 242, 227, 0.18);
}
.cover-title, .cover-subtitle {
  color: #4a6657;
  font-weight: bold;
}
.text-secondary {
  color: #222;
}
```

```jsx
// Ejemplo en React
<section style={{ backgroundColor: '#fff2e3' }}>
  <h1 style={{ color: '#4a6657', fontFamily: 'Montserrat, sans-serif' }}>Título</h1>
</section>
```

---

> _Para mantener la coherencia visual, utiliza siempre estos colores y fuentes definidos. Si necesitas añadir un nuevo color o fuente, actualiza este documento._
