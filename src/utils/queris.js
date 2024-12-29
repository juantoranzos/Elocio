const urlUsuario = import.meta.env.VITE_API_USUARIO
const urlProductos = import.meta.env.VITE_API_PRODUCTOS
export const login = async (usuario) => {
    console.log(usuario)
    try {
        const resp = await fetch(urlUsuario)
        const listaUsuarios = await resp.json()
        console.log(listaUsuarios)
        const usuarioBuscado = listaUsuarios.find((itemUsuario) => itemUsuario.email === usuario.email)
        if (usuarioBuscado) {
            console.log('usuario encontrado')
            if (usuarioBuscado.password === usuario.password) {
                console.log('Encontramos al usuario')
                return usuarioBuscado;
            }
            else {
                console.log('Contraseña incorrecta')
                return null
            }
        } else {
            console.log('email incorrecto')
            return null
        }
    } catch (error) {
        console.log(error)
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
export const editarProducto = async ()=>{
    const resp = await fetch(urlProductos)
    const productos = await resp.json()
    return productos
}