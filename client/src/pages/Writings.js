import React, { useState, useEffect } from 'react'
import { WritingsProduct } from '../components'

const Writings = () => {
  const [products, setProducts] = useState()

  useEffect(() => {
    fetch('http://127.0.0.1:5000/writings')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
      })
      .catch(error => console.log("error: ", error));

    return () => {
      console.log("return from data change")
    }
  }, []);

  return (
    <main>
      {
        products && products.map(({ id, title, stock, summary, price }) => (
          <WritingsProduct
            key={id}
            name={title}
            stock={stock}
            summary={summary}
            price={price}
          />
        ))
      }
    </main>
  )
}

export default Writings