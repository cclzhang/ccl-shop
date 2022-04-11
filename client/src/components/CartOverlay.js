import axios from 'axios'
import React, { useState, useEffect } from 'react'

const CartOverlay = ({ setCart, cart, increment, products, setProducts }) => {
  
  const index = pname => cart.findIndex(item => item.product_name == pname)

  const remove = pname => setCart(prev => prev.filter(item => item.product_name !== pname))

  const decrement = pname => {
    const i = index(pname)

    if (cart[i].quantity === 1) {
      remove(pname)
      return
    } 

    const newCart = [...cart];
    newCart[i].quantity = cart[i].quantity - 1;
    setCart(newCart);
  }

  useEffect(() => { 
    axios
      .get('http://127.0.0.1:5000/garage')
      .then(res => { setProducts(res.data) })
      .catch(err => console.log("error: ", err))

    return () => {
      console.log("cart overlay: return from data change")
    } 
  }, [cart])

  return (
    <div>
      <h2>Cart Overlay</h2>
      {
        cart && cart.map(({ id, product_name, image, stock, price, quantity }, index) => (
          <div key={index}>
            <img src={image} alt="" />
            <p>id: {id}</p>
            <p>product name: {product_name}</p>
            <p>stock: {products[index].stock}</p>
            <button onClick={() => decrement(product_name)}>-</button>
            <p>{quantity}</p>
            <button onClick={() => increment(product_name, products[index].stock)}>+</button>
            <p>price: {price}</p>
            <button onClick={() => remove(product_name)}>delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default CartOverlay