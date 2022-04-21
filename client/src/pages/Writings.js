import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { WritingsProduct } from '../components'

const Writings = ({ cart, setCart, products, setProducts, setIsCartOpen}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios
      .get('http://127.0.0.1:5000/writings')
      .then( res=> {
        setProducts({ ...products, writings: res.data.writings })
        setCount(res.data.count)
      })
      .catch(error => console.log("error: ", error));

    return () => {
      console.log("return from data change")
    }
  }, []);

  return (
    <main>
      <h3>Shop All In My Head</h3>
      {count ? <p>{count} items</p>: <p></p>}
      {
        products && products.map(({ id, title, stock, summary, price }) => (
          <WritingsProduct
            key={id}
            product_name={title}
            stock={stock}
            summary={summary}
            price={price}
            cart={cart}
            setCart={setCart}
            setIsCartOpen={setIsCartOpen}
          />
        ))
      }
    </main>
  )
}

export default Writings