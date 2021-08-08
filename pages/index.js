import React, { useState, useEffect } from 'react'
import {Products, NavBar} from '../components'
import { commerce } from '../lib/commerce'



const Home = () => {
  
  const [products, setProducts] = useState([])

  const fetchProducts = async() => {
     const {data: products } = await commerce.products.list()
     
     setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  console.log(products)
  return (
    <div>
       <NavBar/>
      <Products products={products} />    
    </div>
  )
}

export default Home

