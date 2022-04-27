import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { addToCart } from '../helpers'
import { CartContext, OpenCartContext } from '../App';

const GarageProduct = ({ product }) => {
  const [cart, setCart] = useContext(CartContext)
  const [isCartOpen, setIsCartOpen] = useContext(OpenCartContext)

  return (
    <li className='garage-product'>
      <Link 
        to={`/garage/${product.product_name.toLowerCase().replace(/\s/g, '-')}`} 
        state={{
          id: product.id,
          product_name: product.product_name, 
          image: product.image,
          description: product.description,
          stock:product.stock, 
          price: product.price.toFixed(2)
        }}>
        <img 
          src={product.image}
          alt=""
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "https://via.placeholder.com/150";
          }}
        />
        <h3>{product.product_name}</h3>
      </Link>
      <p>stock: {product.stock}</p>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      <button type="button" onClick={() => addToCart(product, product.product_name, cart, setCart, setIsCartOpen)}>add to cart</button>
    </li>
  )
}

export default GarageProduct