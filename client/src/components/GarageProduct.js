import axios from 'axios'
import React, { useState } from 'react'

const GarageProduct = ({ product_name, image, stock, description, price, displayCart }) => {
  
  const handleClick = () => {
    console.log("clicked")
  }

  const addToCart = () => {
    console.log(product_name)
    axios
      .post('http://127.0.0.1:5000/garage', {
        item: product_name
      })
      .then(res => {
        // console.log("res.data")
        // console.log(res.data);
        displayCart(res.data)
      })
      .catch(err => {
        console.log(err);
      });

    
  }

  return (
    <div className='garage-product'>
      <button onClick={handleClick}>
        <img src={image}/>
        <img src="https://via.placeholder.com/150" alt="" />
        <h3>{product_name}</h3>
      </button>
      <p>stock: {stock}</p>
      <p>{description}</p>
      <p>{price}</p>
      <button type="button" onClick={addToCart}>add to cart</button>
    </div>
  )
}

export default GarageProduct