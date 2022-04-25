import React, { useState, useEffect } from 'react'
import { Pagination } from '@mui/material'
import { WritingsProduct } from '../components'

const Writings = ({ cart, setCart, products, setIsCartOpen}) => {
  const [currentPage, setCurrentPage] = useState(1)

  const length = products?.length
  const [productsPerPage, setProductsPerPage] = useState(2)
  const endIndex = currentPage * productsPerPage
  const startIndex = endIndex - productsPerPage

  return (
    <main>
      <p>{ products ? `${products.length} items` : "0 items" }</p>
      <ul className='garage'>
        {
          products && products.slice(startIndex, endIndex).map(({ id, title, stock, summary, price }) => (
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

export default Writings