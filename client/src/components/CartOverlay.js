import React from 'react'
import { increment, decrement, calc, numToCurrency } from '../helpers'

const CartOverlay = ({ setCart, cart }) => {

  return (
    <div>
      <h2>Cart Sidebar</h2>
      {
        cart && cart.map(({ id, product_name, stock, image, price, quantity }, i) => (
          <div key={i} className="cartItem">
            {image 
            ? <div>
                <img src='https://via.placeholder.com/150' alt="" /> 
                <img src={image} alt="" /> 
              </div>
            : null}
            <div> 
              <p>product name: {product_name}</p>
              <p>price: ${price.toFixed(2)}</p>
            </div>
            <div>
              <div>
                <button onClick={() => 
                  setCart(decrement(cart, id))
                }>-</button>
                <p>{quantity}</p>
                <button onClick={()=> 
                  setCart(increment(cart, id, stock))
                }>+</button>
              </div>
              <button onClick={() => 
                setCart(cart.filter(item => item.id !== id))
              }>delete</button>
            </div>
          </div>
        ))
      }
      <p>subtotal: <span>CAD {cart && numToCurrency(calc(cart))}</span></p>
      <button>checkout</button>
    </div>
  )
}

export default CartOverlay