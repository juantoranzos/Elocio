import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { AdminPage } from '../pages/AdminPage'
import { AddProduct } from '../components/admin/AddProduct'
import { NavBar } from '../components/shared/NavBar'
import { Footer } from '../components/shared/Footer'
import { useState } from 'react'


 const AppRouter = () => {
  const [usuarioLogueado, setUsuarioLogueado] = useState({})
  return (
    <BrowserRouter>
    <NavBar usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage setUsuarioLogueado={setUsuarioLogueado} />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/crear" element={<AddProduct />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}
export default AppRouter