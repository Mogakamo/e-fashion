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

const Home = ({products, cart}) => {
  
  return (
    <div>
       <NavBar/>
      <Products products={products} />   

      console.log(cart) 
    </div>
  )
}

export default Home


