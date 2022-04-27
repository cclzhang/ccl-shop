import React, { useState } from 'react'
import { Pagination } from '@mui/material'
import { GarageProduct } from '../components'

const Garage = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const length = products?.length
  const [productsPerPage, setProductsPerPage] = useState(2)
  const endIndex = currentPage * productsPerPage
  const startIndex = endIndex - productsPerPage
  
  return (
    <main>
      <h3>Shop All In My Home</h3>
      <p>{ products ? `${products.length} items` : "0 items" }</p>
      <ul className='garage'>
        {
          products && products.slice(startIndex, endIndex).map((product, i) => (
            <GarageProduct
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

export default Garage