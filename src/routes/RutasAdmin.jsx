import { Route, Routes } from "react-router-dom"
import { AdminPage } from "../pages/AdminPage"
import { CrearProducto } from "../components/admin/CrearProducto"
import { EditProduct } from "../components/admin/EditProduct"

export const RutasAdmin = () => {
  return (
    <>
    <Routes >
    <Route exact path="/" element={<AdminPage />} />
    <Route exact path="/crear" element={<CrearProducto />} />
    <Route exact path="/editar" element={<EditProduct />} />
    </Routes>
    </>
  )
}
