import React, { useEffect } from 'react'
import { GarageProduct } from '../components'
import axios from 'axios'

const Garage = ({ setCart, cart, products, setProducts }) => {

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
            setCart={setCart}
            cart={cart}
          />
        ))
      }
    </main>
  )
}

export default Garage