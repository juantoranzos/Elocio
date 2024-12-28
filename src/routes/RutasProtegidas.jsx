import React from 'react'
import { Navigate } from 'react-router-dom';


export const RutasProtegidas = ({children}) => {
    const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario')) || null;
    //perguntar si el usuario no esta logueando
    if(!usuarioLogueado) {
        return <Navigate to={'/login'} />
    }else{
        return children
    }
}
