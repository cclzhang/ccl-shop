import React from 'react'
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext, OpenCartContext } from '../App';
import { addToCart } from '../helpers';


const Product = () => {
  const location = useLocation()
  const product = location.state

  const [cart, setCart] = useContext(CartContext)
  const [isCartOpen, setIsCartOpen] = useContext(OpenCartContext)

  const switchRender = (key, i) => {
    switch(key) {
      case 'image':
        return <div key={i}>
          <img 
            src={product[key]} 
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "https://via.placeholder.com/150";
            }}
            alt="" 
          />
        </div>
      case 'duration':
        return <p key={i}>{key.toUpperCase().replace(/_/g, ' ')}: {product[key]} mins</p>
      case 'id':
        return null
      default:
        return <p key={i}>{key.toUpperCase().replace(/_/g, ' ')}: {product[key]}</p>
    }
  }

return(
  <div>
    {Object.keys(product).map((key, i)=> (
      switchRender(key, i)
    ))}
    <button type="button" onClick={() => product && cart && addToCart(product, product.product_name, cart, setCart, setIsCartOpen)}>add to cart</button>
  </div>
)

}

export default Product