import React, { useState, useEffect } from 'react'
import {Products, NavBar} from '../components'
import commerce from '../lib/commerce'

export async function getStaticProps() {
  const { data: products } = await commerce.products.list()
  const cart = await commerce.cart.retrieve()
  return {
    props: {
      products,
      cart
    },
  };
}

const handleAddToCart = async (productId, quantity) => {
  const item = await commerce.cart.add(productId, quantity)
}

const Home = ({products, cart}) => {
    
  // console.log(products)
  // console.log(cart)
  return (
    <div>
       <NavBar totalItems={cart.total_items} />
      <Products products={products} onAddToCart={handleAddToCart} />   

       
    </div>
  )
}

export default Home


