import React, { useEffect, useState } from 'react'
import { GarageProduct } from '../components'
import axios from 'axios'

const Garage = ({ setCart, cart, products, setProducts, setIsCartOpen }) => {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   axios
  //     .get('http://127.0.0.1:5000/garage')
  //     .then(res => { 
  //       setProducts({...products, garage:res.data})
  //     })
  //     .catch(err => console.log("error: ", err))
      
  //   return () => {
  //     console.log("return from data change")
  //   }
  // }, []);

  return (
    <main>
      <h3>Shop All In My Home</h3>
      <p>{ count ? `${count} items` : " " }</p>
      {
        products && products.map(({ id, product_name, image, stock, description, price }) => (
          <GarageProduct
            key={id}
            product_name={product_name}
            image={image}
            stock={stock}
            description={description}
            price={price}
            setCart={setCart}
            cart={cart}
            setIsCartOpen={setIsCartOpen}
          />
        ))
      }
    </main>
  )
}

export default Garage