import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { NavBar } from '../components/shared/NavBar'
import { Footer } from '../components/shared/Footer'
import { useState } from 'react'
import { RutasProtegidas } from './RutasProtegidas'
import { RutasAdmin } from './RutasAdmin'


 const AppRouter = () => {
  const usuarioSesionStorage = JSON.parse(sessionStorage.getItem('usuario')) || {}
  const [usuarioLogueado, setUsuarioLogueado] = useState({...usuarioSesionStorage}) 
  return (
    <BrowserRouter>
    <NavBar usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage setUsuarioLogueado={setUsuarioLogueado} />} />
      <Route path="/admin/*" element={
        <RutasProtegidas>
        <RutasAdmin />
        </RutasProtegidas>}  />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}
export default AppRouter