import React, { useEffect } from 'react'
import { addToCart } from '../helpers'

const GarageProduct = ({ product_name, image, stock, description, price, setCart, cart, setIsCartOpen }) => {

  const handleClick = () => {
    console.log("clicked")
  }

  return (
    <div className='garage-product'>
      <button onClick={handleClick}>
        <img 
          src={image}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "https://via.placeholder.com/150";
          }}
        />
        <h3>{product_name}</h3>
      </button>
      <p>stock: {stock}</p>
      <p>{description}</p>
      <p>{price}</p>
      <button type="button" onClick={() => addToCart(cart, setCart, setIsCartOpen, product_name, price, stock, image)}>add to cart</button>
    </div>
  )
}

export default GarageProduct