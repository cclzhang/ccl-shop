import axios from 'axios'
import React, { useEffect } from 'react'

const CartOverlay = ({ cart }) => {
  console.log("cart: ", cart)

  // axios
  //   .get('http://127.0.0.1:5000/garage')
  //   .then(res => { console.log(res.data) })
  //   .catch(err => console.log("error: ", err))

  return (
    <div>
      <h2>Cart Overlay</h2>
      {
        cart && cart.map(({ id, product_name, image, stock, description, price }, index) => (
          <div key={index}>
            <img src={image} alt="" />
            <p>product name: {product_name}</p>
            <p>stock: {stock}</p>
            <p>description: {description}</p>
            <p>price: {price}</p>
          </div>
        ))
      }
    </div>
  )
}

export default CartOverlay