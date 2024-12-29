import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import data from '../../../db.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const ProductCard = () => {
    AOS.init();
  return (
    <div className="container my-4">
      <h2 className='text-center mb-4 fw-bold productos'>Todos los productos</h2>
      <Row className="g-4">
        {data.productos.map((producto) => (
          <Col key={producto.id} xs={12} sm={6} md={4}>
            <Card className="h-100 shadow-lg border-0" style={{ backgroundColor: '#2c2c54', color: '#f5f6fa' }} data-aos="fade-up" data-aos-duration="1135" >
              <Card.Img 
                variant="top" 
                src={producto.img} 
                alt={producto.nombreProducto} 
                style={{ maxHeight: '200px', objectFit: 'cover' }} 
              />
              <Card.Body>
                <Card.Title className="fw-bold text-uppercase text-center">
                  {producto.nombreProducto}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-center" style={{ color: '#ff7979' }}>
                  {producto.marca}
                </Card.Subtitle>
                <Card.Text className="text-center">
                  <strong>Precio:</strong> ${producto.precio}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
