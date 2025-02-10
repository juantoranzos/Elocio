import React from 'react'
import { Hero } from '../components/public/Hero'
import { ProductList } from '../components/public/ProductList'
import { WhatsappLink } from '../components/public/WhatsappLink'

export const HomePage = () => {
  return (
    <div>
        
        <Hero />
        <ProductList  />
        <WhatsappLink />
      
    </div>
  )
}
