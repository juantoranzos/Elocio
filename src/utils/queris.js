const urlUsuario = import.meta.env.VITE_API_USUARIO
const urlProductos = import.meta.env.VITE_API_PRODUCTOS
// export const login = async (usuario) => {
//     console.log(usuario)
//     try {
//         const resp = await fetch(urlUsuario)
//         const listaUsuarios = await resp.json()
//         console.log(listaUsuarios)
//         const usuarioBuscado = listaUsuarios.find((itemUsuario) => itemUsuario.email === usuario.email)
//         if (usuarioBuscado) {
//             console.log('usuario encontrado')
//             if (usuarioBuscado.password === usuario.password) {
//                 console.log('Encontramos al usuario')
//                 return usuarioBuscado;
//             }
//             else {
//                 console.log('Contraseña incorrecta')
//                 return null
//             }
//         } else {
//             console.log('email incorrecto')
//             return null
//         }
//     } catch (error) {
//         console.log(error)
//     }

// }
export const login = async (usuario) => {
    try {
      console.log(usuario);
      const resp = await fetch(urlUsuario, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
      });
      const datos = await resp.json();
      return {
        status: resp.status,
        mensaje: datos.mensaje,
        email: datos.email,
        usuario: datos.nombre,
        uid: datos.uid
      };
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  
export const obtenerProductos = async ()=>{
   try {
    const resp = await fetch(urlProductos)
    const productos = await resp.json()
    return productos  
   } catch (error) {
    console.log(error)
   }
}
export const obtenerProducto = async (id) => {
    try {
     const resp = await fetch(`${urlProductos}/${id}`)
     const productoEditar = await resp.json()
     return productoEditar
    } catch (error) {
     console.log(error)
     return {
       status: 500,
       error: error.message
     }
    }
 }
export const eliminarProducto = async (id)=>{
    try {
        const resp = await fetch(`${urlProductos}/${id}`,{
            method: 'DELETE'
        })
        return resp
    } catch (error) {
        console.log(error)
    }
}
export const crearProducto = async (producto)=>{
    try {
        const resp = await fetch(urlProductos,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        })
        return resp
    } catch (error) {
        console.log(error)
    }
}
export const editarProducto = async (producto , id)=>{
  try {
    const resp = await fetch(urlProductos + '/' + id, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(producto)
    })
    return resp
  } catch (error) {
    console.log(error)
  }
}