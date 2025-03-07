import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { eliminarProducto, obtenerProductos } from "../../utils/queris";
import Swal from "sweetalert2";

export const Products = ({ producto, setProducts }) => {
  const borrarProducto = () => {
    Swal.fire({
      title: "¿Estás seguro, Papel?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarProducto(producto._id).then((respuesta) => {
          if (respuesta.status === 200) {
            Swal.fire({
              title: "Eliminado",
              text: `El producto ${producto.nombreProducto} ha sido eliminado.`,
              icon: "success",
            });
            obtenerProductos().then((nuevosProductos) => {
              setProducts(nuevosProductos);
            });
          } else {
            Swal.fire({
              title: "Error",
              text: `El producto ${producto.nombreProducto} no pudo ser eliminado.`,
              icon: "error",
            });
          }
        });
      }
    });
  };

  return (
    <tr>
      <td>{producto._id}</td>
      <td>{producto.categoria}</td>
      <td>{producto.marca}</td>
      <td>{producto.nombreProducto}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>
        <a
          href={producto.img}
          target="_blank"
          rel="noopener noreferrer"
          title={producto.img} // Mostrar URL completa al pasar el cursor
        >
          {producto.img.length > 30 ? `${producto.img.slice(0, 30)}...` : producto.img}
        </a>
      </td>
      <td>
        <Link className="btn btn-warning me-2 mb-2" to={`/admin/editar/${producto._id}`}>
          Editar <AiTwotoneEdit />
        </Link>
        <button className="btn btn-danger me-2 mb-2" onClick={borrarProducto}>
          Eliminar <AiFillDelete />
        </button>
      </td>
    </tr>
  );
};
