import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const ProductCard = () => {
  AOS.init();

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');
  const [productos, setProductos] = useState([]); // Estado para los productos

  // Obtener productos desde el backend usando la variable de entorno
  useEffect(() => {
    axios.get(import.meta.env.VITE_API_PRODUCTOS)
      .then(response => setProductos(response.data))
      .catch(error => console.error('Error al obtener productos:', error));
  }, []);

  // Obtener categorías únicas
  const categorias = ['todos', ...new Set(productos.map(producto => producto.categoria))];

  // Filtrar productos según la categoría seleccionada
  const productosFiltrados = categoriaSeleccionada === 'todos'
    ? productos
    : productos.filter(producto => producto.categoria === categoriaSeleccionada);

  const titulo = categoriaSeleccionada === 'todos'
    ? 'Todos los productos'
    : `${categoriaSeleccionada}`;

  return (
    <div className="container my-4" id='productos'>
      <h2 className='text-center mb-4 fw-bold productos'>{titulo}</h2>

      <Form.Select
        aria-label="Seleccionar categoría"
        className="mb-4 w-50 mx-auto"
        onChange={(e) => setCategoriaSeleccionada(e.target.value)}
        value={categoriaSeleccionada}
      >
        {categorias.map((categoria, index) => (
          <option key={index} value={categoria}>
            {categoria}
          </option>
        ))}
      </Form.Select>

      <Row className="g-4">
        {productosFiltrados.map((producto) => (
          <Col key={producto.id} xs={12} sm={6} md={4}>
            <Card className=" h-100 shadow-lg border-0" style={{ backgroundColor: '#2c2c54', color: '#f5f6fa', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} data-aos="fade-up" data-aos-duration="1135">
              <Card.Img
                variant="top"
                src={producto.img}
                alt={producto.nombreProducto}
                style={{ maxHeight: '350px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title className="fw-bold text-uppercase text-center">
                  {producto.nombreProducto}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-center" style={{ color: '#ff7979' }}>
                  {producto.marca}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-center" style={{ color: '#ff7979' }}>
                  {producto.categoria}
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
