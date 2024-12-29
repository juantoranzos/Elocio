import React from 'react'
import { Form } from 'react-bootstrap'

export const EditProduct = () => {
  return (
    <div className='container p-4'>
      <h2 className='text-center mb-4 fw-bold text-success'>Editar Producto</h2>
      <Form className=''>
        <Form.Group>
          <Form.Label>
            Id
          </Form.Label>
          <Form.Control type='text' placeholder='ID'></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Categoria
          </Form.Label>
          <Form.Control type='text' placeholder='Categoria'></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Marca
          </Form.Label>
          <Form.Control type='text' placeholder='Marca'></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Nombre del Producto
          </Form.Label>
          <Form.Control type='text' placeholder='Nombre del producto'></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Precio
          </Form.Label>
          <Form.Control type='text' placeholder='Precio'></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>
          Stock
          </Form.Label>
          <Form.Control type='text' placeholder='Stock'></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Imagen
          </Form.Label>
          <Form.Control type='text' placeholder='Imagen'></Form.Control>
        </Form.Group>
      </Form>
      <div className='d-flex justify-content-center'>
        <button className='btn btn-success m-4'>Guardar</button>
      </div>
    </div>
  )
}
