import React, { useState, useEffect } from 'react'
import { GarageProduct, CartOverlay } from '../components'
import axios from 'axios'

const Garage = ({ displayCart }) => {
  const [products, setProducts] = useState([])

  const [cart, setCart] = useState([])

  useEffect(() => {
    axios
      .get('http://127.0.0.1:5000/garage')
      .then(res => { setProducts(res.data) })
      .catch(err => console.log("error: ", err))
      
    return () => {
      console.log("return from data change")
    }
  }, []);

  return (
    <main>
      {
        products && products.map(({ id, product_name, image, stock, description, price }) => (
          <GarageProduct
            key={id}
            product_name={product_name}
            image={image}
            stock={stock}
            description={description}
            price={price}
            displayCart={displayCart}
          />
        ))
      }
    </main>
  )
}

export default Garage