import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { Products } from './Products';
import { obtenerProductos } from '../../utils/queris';
import { Link } from 'react-router-dom';

export const AdminDashboard = () => {
   const [products, setProducts] = useState([])
  useEffect(() => {
    obtenerProductos().then((respuesta) => {
      setProducts(respuesta)
      console.log(respuesta)
    })
  },[])
  return (
    <>
    <div className='container'>
        <h1 className='text-center mt-5 mb-5 fw-bold text-danger'>ADMINISTRADOR</h1>
       <div className='d-flex justify-content-between p-2'>
        <h3>Productos disponibles</h3>
        <Link className='btn btn-success' to={'/admin/crear'}>Agregar Productos</Link>
        </div>    
        <hr />
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Cod</th>
              <th>Categoria</th>
              <th>Marca</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Imagen URL</th>
              <th>Opciones</th>
            </tr>
          </thead>
        <tbody>
          {
            products.map(producto =>  <Products key={producto._id} producto={producto} setProducts={setProducts} />)
          }
          
        </tbody>
        </Table>
    </div>
    </>
  )
}
