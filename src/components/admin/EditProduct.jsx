import React from 'react'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { obtenerProducto } from '../../utils/queris';
import { useParams } from 'react-router-dom';

export const EditProduct = () => {
   const { register, handleSubmit, formState: { errors }, setValue } = useForm();
   const { id } = useParams()
   
   useEffect(() => {
    const cargarProducto = async () => {
      try {
        const respuesta = await obtenerProducto(id)
        console.log('Respuesta completa:', respuesta) // Para debugging
        
        if (respuesta && respuesta.status === 200) {
          // Asumiendo que los nombres de las propiedades coinciden exactamente
          Object.keys(respuesta).forEach(key => {
            if (key !== 'status') {
              setValue(key, respuesta[key])
            }
          })
        } else {
          console.error('Error al cargar el producto:', respuesta)
        }
      } catch (error) {
        console.error('Error al cargar el producto:', error)
      }
    }

    if (id) {
      cargarProducto()
    }
   }, [id, setValue])
   
  const onSubmit = (productoSeleccionado) => {
    console.log('Datos del formulario:', productoSeleccionado)
  }

  return (
    <div className='container p-4'>
      <h2 className='text-center mb-4 fw-bold text-success'>Editar Producto</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Categoria</Form.Label>
          <select
            className='form-select'
            {...register('categoria', { required: "La categoría es obligatoria" })}>
            <option value="">Seleccionar categoría</option>
            <option value="bebidas">Bebidas</option>
            <option value="accesorios">Accesorios</option>
            <option value="tabacos">Tabaco y accesorios para fumar</option>
          </select>
          {errors.categoria && <p className="text-danger">{errors.categoria.message}</p>}
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Marca</Form.Label>
          <Form.Control 
            type='text' 
            {...register('marca', { required: "La marca es obligatoria" })}
          />
          {errors.marca && <p className="text-danger">{errors.marca.message}</p>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nombre del Producto</Form.Label>
          <Form.Control 
            type='text' 
            {...register('nombreProducto', { required: "El nombre es obligatorio" })}
          />
          {errors.nombreProducto && <p className="text-danger">{errors.nombreProducto.message}</p>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control 
            type='number' 
            {...register('precio', { required: "El precio es obligatorio" })}
          />
          {errors.precio && <p className="text-danger">{errors.precio.message}</p>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Stock</Form.Label>
          <Form.Control 
            type='number' 
            {...register('stock', { required: "El stock es obligatorio" })}
          />
          {errors.stock && <p className="text-danger">{errors.stock.message}</p>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Imagen</Form.Label>
          <Form.Control 
            type='text' 
            {...register('imagen', { required: "La imagen es obligatoria" })}
          />
          {errors.imagen && <p className="text-danger">{errors.imagen.message}</p>}
        </Form.Group>

        <div className='d-flex justify-content-center'>
          <button type="submit" className='btn btn-success m-4'>Guardar</button>
        </div>
      </Form>
    </div>
  )
}