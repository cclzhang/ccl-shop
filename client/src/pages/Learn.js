import React, { useState, useEffect } from 'react'
import { Pagination } from '@mui/material'
import { LearnProduct } from '../components'

const Learn = ({cart, setCart, products, setIsCartOpen}) => {
  const [currentPage, setCurrentPage] = useState(1)

  const length = products?.length
  const [productsPerPage, setProductsPerPage] = useState(2)
  const endIndex = currentPage * productsPerPage
  const startIndex = endIndex - productsPerPage

  return (
    <main>
      <h3>Shop All Lessons I've Learned</h3>
      <p>{ products ? `${products.length} items` : "0 items" }</p>
      <ul className='garage'>
        {
          products && products.slice(startIndex, endIndex).map(({ id, lesson_name, duration_minutes, price }) => (
            <LearnProduct
              key={id}
              name={lesson_name}
              duration={duration_minutes}
              price={price}
              setCart={setCart}
              cart={cart}
              setIsCartOpen={setIsCartOpen}
            />
          ))
        }
      </ul>
      {
        products &&
        <div>
          <p>
            {`Showing ${startIndex + 1} to ${Math.min(endIndex, length)} of ${length} results`}
          </p>
          <Pagination 
            count={Math.ceil(length / productsPerPage)} 
            shape='rounded'
            page={currentPage} 
            onChange={(e, value) => setCurrentPage(value)} 
          />
        </div>
      }
    </main>
  )
}

export default Learn