import React, { useEffect, useState } from 'react'
import { GarageProduct } from '../components'
import axios from 'axios'

const Garage = ({ setCart, cart, products, setProducts }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios
      .get('http://127.0.0.1:5000/garage')
      .then(res => { 
        console.log("garage: ", res.data)
        setProducts({...products, items:res.data.items})
        setCount(res.data.count)
      })
      .catch(err => console.log("error: ", err))
      
    return () => {
      console.log("return from data change")
    }
  }, []);

  return (
    <main>
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
          />
        ))
      }
    </main>
  )
}

export default Garage