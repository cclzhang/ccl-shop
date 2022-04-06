import React, { useState, useEffect } from 'react'
import { LearnProduct } from '../components'

const Learn = () => {
  const [products, setProducts] = useState()

  useEffect(() => {
    fetch('http://127.0.0.1:5000/learn')
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
        products && products.map(({ id, lesson_name, duration_minutes, price }) => (
          <LearnProduct
            key={id}
            name={lesson_name}
            duration={duration_minutes}
            price={price}
          />
        ))
      }
    </main>
  )
}

export default Learn