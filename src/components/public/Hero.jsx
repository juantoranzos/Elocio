import React from 'react'
import { Button, Container } from 'react-bootstrap';
import hero from '../../assets/img/hero.webp'
export const Hero = () => {
  return (
    <section
    className="position-relative"
    style={{
      backgroundImage: `url(${hero})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '8rem 0',
      color: 'white',
    }}
  >
    <div
      style={{
        position: 'absolute',
        inset: '0',
        backgroundColor: 'black',
        opacity: 0.6,
        zIndex: 1,
      }}
    ></div>
    <Container
      className="text-center position-relative"
      style={{ zIndex: 2 }}
    >
      <h1 className="display-1 fw-bold mb-4 titulo">El Ocio</h1>
      <h2 className="lead mb-4 mx-auto" style={{ maxWidth: '600px' }}>
        Tu tabaqueria y bodega de confianza 🚬🍷
      </h2>
      <h3 className='mb-4 fw-bold mx-auto'>📍San Pedro de Jujuy</h3>
      <Button
        size="lg"
        style={{
          backgroundColor: '#FFC107',
          color: '#3C2A21',
          borderColor: '#FFC107',
        }}
        className="hover-bg-amber"
      >
        Ver Productos 👽
      </Button>
    </Container>
  </section>
  )
}
