import React from 'react'
import { FaInstagram } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className='mt-auto w-100 p-4 bg-dark text-white d-flex justify-content-between'> 
      <p>Todos los derechos reservados &copy; EL OCIO</p>
      <a href="https://www.instagram.com/el_ocio25/" target="_blank"><FaInstagram /></a>
    </footer>
  )
}
