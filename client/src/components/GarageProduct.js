import React, { useEffect } from 'react'
import { addToCart } from '../helpers'

const GarageProduct = ({ product_name, image, stock, description, price, setCart, cart, setIsCartOpen }) => {

  const handleClick = () => {
    console.log("clicked")
  }

  return (
    <li className='garage-product'>
      <button onClick={handleClick}>
        {/* <img 
          src={image}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "https://via.placeholder.com/150";
          }}
        /> */}
        <img src="https://via.placeholder.com/150" alt="" />
        <h3>{product_name}</h3>
      </button>
      <p>stock: {stock}</p>
      <p>{description}</p>
      <p>${price.toFixed(2)}</p>
      <button type="button" onClick={() => addToCart(cart, setCart, setIsCartOpen, product_name, price, stock, image)}>add to cart</button>
    </li>
  )
}

export default GarageProduct