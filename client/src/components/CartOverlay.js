import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { increment, decrement, index, remove, calc, numToCurrency } from '../helpers'

const CartOverlay = ({ setCart, cart, products }) => {

  return (
    <div>
      <h2>Cart Sidebar</h2>
      {
        cart && cart.map(({ product_name, image, price, quantity }, i) => (
          <div key={i} className="cartItem">
            {image ? <img src={image} alt="" /> : null}
            <div> 
              <p>product name: {product_name}</p>
              <p>price: {price}</p>
            </div>
            <div>
              <div>
                <button onClick={() => setCart(decrement(cart, product_name))}>-</button>
                <p>{quantity}</p>
                <button onClick={() => setCart(increment(cart, product_name, cart[index(cart, product_name)].stock))}>+</button>
              </div>
              <button onClick={() => setCart(remove(product_name))}>delete</button>
            </div>
          </div>
        ))
      }
      <p>subtotal: <span>CAD {numToCurrency(calc(cart))}</span></p>
      <button>checkout</button>
    </div>
  )
}

export default CartOverlay