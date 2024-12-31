import React from 'react'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { editarProducto, obtenerProducto } from '../../utils/queris';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export const EditProduct = () => {
   const { id } = useParams();
   const {register, handleSubmit  , formState: { errors }, reset, setValue,} = useForm();
   const navegacion = useNavigate();
   useEffect(() => {
     obtenerProducto(id).then((respuesta)=>{
      setValue('categoria', respuesta.categoria);
      setValue('marca', respuesta.marca);
      setValue('nombreProducto', respuesta.nombreProducto);
      setValue('stock', respuesta.stock);
      setValue('precio', respuesta.precio);
      setValue("img", respuesta.img);

     })
   }, [])

   const onSubmit = (productoEditado) => {
    editarProducto(productoEditado, id).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        Swal.fire({
          title: "Producto editado",
          text: `El producto: ${productoEditado.nombreProducto} ha sido editado con exito`,
          icon: "success",
        });
        navegacion('/admin');


      } else {
        Swal.fire({
          title: "Error",
          text: `El producto ${productoEditado.nombreProducto} no pudo ser editado`,
          icon: "error",
        });
      }
    })
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
    type="number" 
    {...register("precio", { 
      required: "El precio es obligatorio",
      min: { value: 100, message: "El precio debe ser al menos 100" }
    })}
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
          <Form.Label>Imagen URL</Form.Label>
          <Form.Control 
            type='text' 
            {...register('img', { required: "La imagen es obligatoria" })}
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