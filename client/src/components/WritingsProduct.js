import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { addToCart } from '../helpers'
import { CartContext, OpenCartContext } from '../App';

const WritingsProduct = ({ product }) => {
  const [cart, setCart] = useContext(CartContext)
  const [isCartOpen, setIsCartOpen] = useContext(OpenCartContext)

  return (
    <div className='writings-product'>
      <Link 
        to={`/writings/${product.title.toLowerCase().replace(/\s/g, '-')}`} 
        state={{
          id: product.id,
          title: product.title, 
          summary: product.summary,
          stock: product.stock, 
          price: product.price.toFixed(2)
        }}>  
        <h3>{product.title}</h3>
      </Link>
      <p>stock: {product.stock}</p>
      <p>{product.summary}</p>
      <p>${product.price.toFixed(2)}</p>
      <button type="button" onClick={() => addToCart(product, product.title, cart, setCart, setIsCartOpen)}>add to cart</button>
    </div>
  )
}

export default WritingsProduct