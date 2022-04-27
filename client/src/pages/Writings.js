import React, { useState } from 'react'
import { Pagination } from '@mui/material'
import { WritingsProduct } from '../components'

const Writings = ({ products }) => {
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
          products && products.slice(startIndex, endIndex).map((product, i) => (
            <WritingsProduct
              key={i}
              product={product}
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