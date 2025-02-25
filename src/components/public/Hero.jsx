import React from 'react';
import { Button, Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import fondo1 from '../../assets/img/fondo1.webp';

export const Hero = () => {
  AOS.init();
  const scrollToProducts = () => {
    const productosSection = document.getElementById('productos');
    if (productosSection) {
      productosSection.scrollIntoView({ behavior: 'smooth' }); // Scroll suave
    }
  };
  return (
    <section
      className="position-relative d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${fondo1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ocupa toda la altura de la pantalla
        color: 'white',
      }}
    >
      {/* Overlay oscuro con gradiente */}
      <div
        style={{
          position: 'absolute',
          inset: '0',
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4))',
          zIndex: 1,
        }}
      ></div>

      {/* Contenido principal */}
      <Container
        className="text-center position-relative"
        style={{ zIndex: 2 }}
      >
        {/* Título principal */}
        <h1
          className="display-2 fw-bold mb-4 titulo"
          style={{
            fontFamily: "'Playfair Display', serif",
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)',
          }}
           data-aos="zoom-in"
           data-aos-duration="1000"
        >
          El Ocio
        </h1>

        {/* Subtítulo */}
        <h2
          className="lead mb-4 mx-auto fs-4"
          style={{
            maxWidth: '600px',
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 300,
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)',
          }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Tu tabaqueria y bodega de confianza.
        </h2>

        {/* Ubicación */}
        <h3
          className="mb-4 fw-bold mx-auto fs-5"
          style={{
            fontFamily: "'Raleway', sans-serif",
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)',
          }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          📍Aristobulo del Valle 273, San Pedro de Jujuy
        </h3>

        {/* Botón con efecto hover y sombra */}
        <Button
          size="lg"
          style={{
            backgroundColor: '#FFC107',
            color: '#3C2A21',
            border: 'none',
            padding: '12px 30px',
            fontSize: '1.1rem',
            fontWeight: '600',
            borderRadius: '50px',
            boxShadow: '0 4px 15px rgba(255, 193, 7, 0.4)',
            transition: 'all 0.3s ease',
          }}
          className="hover-scale"
          onClick={scrollToProducts}
          data-aos="zoom-in"
        >
          Ver Productos 👽
        </Button>
      </Container>

      {/* Estilos globales para el efecto hover del botón */}
      <style>
        {`
          .hover-scale:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 20px rgba(255, 193, 7, 0.6);
          }
        `}
      </style>
    </section>
  );
};