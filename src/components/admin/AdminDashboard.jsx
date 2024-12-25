import React from 'react'
import { NavBar } from '../shared/NavBar'
import { useNavigate } from 'react-router-dom';
export const AdminDashboard = () => {
  return (
    
    <>
    <div className='container'>
        <h1 className='text-center mt-5 mb-5 fw-bold text-danger'>ADMINISTRADOR</h1>
       <div className='d-flex justify-content-between p-2'>
        <h3>Productos disponibles</h3>
        <button className='btn btn-success'>Agregar Productos</button>
        </div>    
    </div>
    </>
  )
}
