import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { addToCart } from '../helpers'
import { CartContext, OpenCartContext } from '../App';

const LearnProduct = ({ product }) => {
  const [cart, setCart] = useContext(CartContext)
  const [isCartOpen, setIsCartOpen] = useContext(OpenCartContext)

  return (
    <div className='Learn-product'>
      <Link 
        to={`/learn/${product.lesson_name.toLowerCase().replace(/\s/g, '-')}`} 
        state={{
          id: product.id,
          product_name: product.lesson_name, 
          duration: product.duration_minutes,
          price: product.price.toFixed(2)
        }}>  
        <h3>{product.lesson_name}</h3>
      </Link>
      <p>time: {product.duration_minutes} mins</p>
      <p>price: ${product.price.toFixed(2)}</p>
      <button type="button" onClick={() => addToCart(product, product.lesson_name, cart, setCart, setIsCartOpen)}>add to cart</button>
    </div>
  )
}

export default LearnProduct