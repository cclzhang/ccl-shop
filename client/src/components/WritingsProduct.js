import React from 'react'
import { addToCart } from '../helpers'

const WritingsProduct = ({ cart, setCart, product_name, stock, summary, price, setIsCartOpen }) => {
  return (
    <div className='writings-product'>
      <button>
        <h3>{product_name}</h3>
      </button>
      <p>stock: {stock}</p>
      <p>{summary}</p>
      <p>{price}</p>
      <button type="button" onClick={() => addToCart(cart, setCart, setIsCartOpen, product_name, price, stock)}>add to cart</button>
    </div>
  )
}

export default WritingsProduct