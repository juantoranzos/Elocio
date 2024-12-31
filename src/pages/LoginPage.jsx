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
     <section className="bg-dark text-white min-vh-100 d-flex flex-column justify-content-center align-items-center px-3">
  <div className="text-center mb-4">
    <h1 className="fw-bold">Admin Panel Ocio</h1>
    <p className="fs-5">
      Si no eres administrador,{" "}
      <Link to="/" className="text-warning text-decoration-underline">
        vuelve a la página principal
      </Link>
    </p>
  </div>

  <form
    onSubmit={handleSubmit(onSubmit)}
    className="w-100 d-flex flex-column align-items-center"
    style={{ maxWidth: "400px" }}
  >
    <div className="mb-3 w-100">
      <input
        type="email"
        placeholder="Usuario"
        className="form-control py-2"
        {...register("email", { required: "El email es obligatorio" })}
      />
      <p className="text-danger text-center mt-2">{errors.email?.message}</p>
    </div>

    <div className="mb-3 w-100">
      <input
        type="password"
        placeholder="Contraseña"
        className="form-control py-2"
        {...register("password", { required: "La contraseña es obligatoria" })}
      />
      <p className="text-danger text-center mt-2">{errors.password?.message}</p>
    </div>

    <button
      type="submit"
      className="btn btn-danger w-100 py-2 fw-bold"
      style={{ borderRadius: "30px" }}
    >
      Ingresar
    </button>
  </form>
</section>

    </>
  )
}
