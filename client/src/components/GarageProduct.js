import React, { useEffect } from 'react'
import { addToCart } from '../helpers'

const GarageProduct = ({ product_name, image, stock, description, price, setCart, cart }) => {

  const handleClick = () => {
    console.log("clicked")
  }

  return (
    <div className='garage-product'>
      <button onClick={handleClick}>
        <img src={image}/>
        <h3>{product_name}</h3>
      </button>
      <p>stock: {stock}</p>
      <p>{description}</p>
      <p>{price}</p>
      <button type="button" onClick={() => addToCart(cart, setCart, product_name, price, stock, image)}>add to cart</button>
    </div>
  )
}

export default GarageProduct