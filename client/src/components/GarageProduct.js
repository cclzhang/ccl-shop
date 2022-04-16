import axios from 'axios'
import React, { useEffect } from 'react'
import { index, increment } from '../helpers'

const GarageProduct = ({ product_name, image, stock, description, price, setCart, cart }) => {

  const handleClick = () => {
    console.log("clicked")
  }

  const addToCart = (pname, stock) => {
    const i = index(cart, pname)

    if (i === -1){
      console.log("i: ",i)
      setCart([...cart, {
        product_name: product_name,
        image: image,
        price: price,
        quantity: 1,
      }])
    } else if (cart[i].quantity < stock) {
      setCart(increment(cart, pname, stock))
    }
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
      <button type="button" onClick={() => addToCart(product_name, stock)}>add to cart</button>
    </div>
  )
}

export default GarageProduct