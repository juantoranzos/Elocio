import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { login } from '../utils/queris'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
export const LoginPage = ({setUsuarioLogueado}) => {
  const {register, handleSubmit, formState: {errors}} = useForm()
  const navigate = useNavigate();
  const onSubmit =(usuario)=>{
    login(usuario).then((respuesta)=>{
      if(respuesta){
        //loguear al usuario
        sessionStorage.setItem('usuario', JSON.stringify(respuesta))
        setUsuarioLogueado(respuesta)
        Swal.fire('Bienvenido', 'Hola Papelex', 'success')
        navigate('/admin')
      }else{
        //mostrar error
        Swal.fire('Error', 'El usuario o la contraseña son incorrectos', 'error')
      }
    })
  }
  return (
    <>
      <section className='bg-dark text-white min-vh-100 d-flex flex-column justify-content-center'>
        <h1 className='text-center'>Admin Panel Ocio</h1>
        <p className='text-center'>Si no eres administrador <Link to='/'>vuelve a la pagina principal</Link></p>


        <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column align-items-center'>
          <input type="email" placeholder='usuario' className='mb-2 form-control w-25' {
            ...register('email', {required: 'El email es obligatorio'})
            
          }  />
          <p className='text-danger text-center'>{errors.email?.message}</p>
          <input type="password" placeholder='constraseña' className='mb-2 form-control w-25'{
            ...register('password', {required: 'La constraseña es obligatoria'})
          }  />
          <p className='text-danger text-center'>{errors.password?.message}</p>
          <button type="submit" className='btn btn-danger'>Ingresar</button>
        </form>

      </section>
    </>
  )
}
