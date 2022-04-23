import React from 'react'
import { DataTable } from '../components'

const Inventory = ({products}) => {
  return (
    <>
      <DataTable
        products={products.garage}
        prefix='g'
        title="Garage"
        fields={[
          { 
            key: 'product_name', 
            value: 'Product A'
          },
          {
            key: 'image',
            value: 'https://via.placeholder.com/150'
          }, 
          {
            key: 'stock',
            value: 0
          }, 
          {
            key: 'description',
            value : 'This is a description for Product A'
          }, 
          {
            key: 'price',
            value: 0.00
          }
        ]}
      />
      <DataTable
        products={products.writings}
        prefix='w'
        fields={[
          { 
            key: 'title', 
            value: 'Story One'
          },
          {
            key: 'stock',
            value: 0
          }, 
          {
            key: 'summary',
            value : 'The summary of Story One'
          }, 
          {
            key: 'price',
            value: 0.00
          }
        ]}
        title="Writings"
      />
      <DataTable
        products={products.learn}
        prefix='e'
        fields={[
          { 
            key: 'Lesson_name', 
            value: 'Lesson C'
          },
          {
            key: 'duration_minutes',
            value: 0
          }, 
          {
            key: 'price',
            value: 0.00
          }
        ]}
        title="Lessons"
      />
    </>
  )
}

export default Inventory