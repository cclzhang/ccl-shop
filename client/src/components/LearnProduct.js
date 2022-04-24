import React from 'react'
import { addToCart } from '../helpers'

const LearnProduct = ({ name, duration, price, setCart, cart, setIsCartOpen }) => {
  const handleClick = () => {
    console.log("clicked")
  }

  return (
    <div className='Learn-product'>
      <button onClick={handleClick}>
        <h3>{name}</h3>
      </button>
      <p>time: {duration}mins</p>
      <p>price: {price}</p>
      <button type="button" onClick={() => addToCart(cart, setCart, setIsCartOpen, name, price, 1)}>add to cart</button>
    </div>
  )
}

export default LearnProduct