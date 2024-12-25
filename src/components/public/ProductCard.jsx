import React from 'react'
import data from '../../../db.json'

export const ProductCard = () => {
  return (
    <div>
        {data.productos.map(producto => (
            <div key={producto.id}>
                <h2>{producto.nombre}</h2>
                <p>{producto.precio}</p>
                <img src={producto.img} alt={producto.nombre} />
            </div>
        ))}
    </div>
  )
}
