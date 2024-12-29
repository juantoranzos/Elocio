import React from 'react'
import { FaInstagram } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className=' container  d-flex justify-content-between shadow p-3'> 
      <p>Todos los derechos reservados &copy; EL OCIO</p>
      <a href="https://www.instagram.com/el_ocio25/" target="_blank"><FaInstagram /></a>
    </footer>
  )
}
