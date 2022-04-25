import React, { useEffect, useState } from 'react'
import { Pagination } from '@mui/material'
import { GarageProduct } from '../components'

const Garage = ({ setCart, cart, products, setIsCartOpen }) => {
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
          products && products.slice(startIndex, endIndex).map(({ id, product_name, image, stock, description, price }) => (
            <GarageProduct
              key={id}
              product_name={product_name}
              image={image}
              stock={stock}
              description={description}
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

export default Garage