import React from 'react'
import { DataTable } from '../components'

const Inventory = ({products}) => {
  return (
    <>
      <DataTable
        products={products.garage}
        prefix='g'
        keys={[
          'product_name',
          'image', 
          'stock', 
          'description', 
          'price'
        ]}
        title="Garage"
      />
      <DataTable
        products={products.writings}
        prefix='w'
        keys={[
          'title',
          'stock', 
          'summary', 
          'price'
        ]}
        title="Writings"
      />
      <DataTable
        products={products.learn}
        prefix='e'
        keys={[
          'lesson_name',
          'duration_minutes', 
          'price'
        ]}
        title="Lessons"
      />
    </>
  )
}

export default Inventory