import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { increment } from '../functions'

const GarageProduct = ({ product_name, image, stock, description, price, setCart, cart, increment }) => {

  const handleClick = () => {
    console.log("clicked")
  }

  const addToCart = (pname, stock) => {
    const index = cart.findIndex(item => item.product_name == pname)

    if (index === -1){
      setCart([...cart, {
        product_name: product_name,
        image: image,
        price: price,
        quantity: 1,
      }])
    } else {
      increment(pname, stock)
    }
    
  }

  useEffect(()=> {

    axios
      .post('http://127.0.0.1:5000/garage', {
        cart: cart
      })
      .then(res => {
        console.log("data: ", res.data)
      })
      .catch(err => {
        console.log(err);
      });

    return () => {
      console.log("garage product: return from data change")
    }
  }, [cart])

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