import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { crearProducto } from '../../utils/queris';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const CrearProducto = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navegate = useNavigate();

  const onSubmit = (productoNuevo) => {
    crearProducto(productoNuevo).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Producto creado",
          text: "El producto se ha creado con exito",
          icon: "success",
        })
        reset();
        navegate('/admin');

      } else {
        Swal.fire({
          title: "Error",
          text: "El producto no pudo ser creado",
          icon: "error",
        });
      }
    })
  };

  return (
    <>
      <div className='container p-4'>
        <h2 className='text-center mb-4 fw-bold text-success'>Crear un nuevo producto</h2>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
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

          <Form.Group>
            <Form.Label>Marca</Form.Label>
            <Form.Control
              type='text'
              placeholder='Marca'
              {...register('marca', { required: "La marca es obligatoria" })} />
            {errors.marca && <p className="text-danger">{errors.marca.message}</p>}
          </Form.Group>

          <Form.Group>
            <Form.Label>Nombre del Producto</Form.Label>
            <Form.Control
              type='text'
              placeholder='Nombre del producto'
              {...register('nombreProducto', { required: "El nombre del producto es obligatorio" })} />
            {errors.nombreProducto && <p className="text-danger">{errors.nombreProducto.message}</p>}
          </Form.Group>

          <Form.Group>
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type='text'
              placeholder='Precio'
              {...register('precio', { required: "El precio es obligatorio" })} />
            {errors.precio && <p className="text-danger">{errors.precio.message}</p>}
          </Form.Group>

          <Form.Group>
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type='text'
              placeholder='Stock'
              {...register('stock', { required: "El stock es obligatorio" })} />
            {errors.stock && <p className="text-danger">{errors.stock.message}</p>}
          </Form.Group>

          <Form.Group>
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="text"
              placeholder="URL de la imagen"

              {...register('img', {
                required: "La URL de la imagen es obligatoria",
                pattern: {
                  value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i,
                  message: "Debe ser una URL válida que apunte a una imagen (png, jpg, jpeg, gif, webp)"
                }
              })}
            />
            {errors.imagen && <p className="text-danger">{errors.imagen.message}</p>}
          </Form.Group>


          <div className='d-flex justify-content-center'>
            <button className='btn btn-success m-4' type='submit'>Guardar</button>
          </div>
        </Form>
      </div>
    </>
  );
};
