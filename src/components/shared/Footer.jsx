import React from 'react'
import { FaInstagram } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className='d-flex justify-content-between shadow p-3' style={{backgroundColor: '#2c2c54', color: '#f5f6fa'}}> 
      <p>Todos los derechos reservados &copy; EL OCIO 2025</p>
      <a href="https://www.instagram.com/el_ocio25/" target="_blank"><FaInstagram /></a>
    </footer>
  )
}
