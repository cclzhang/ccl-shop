import React from 'react'
import { DataTable } from '../../components'

const Inventory = ({products, setProducts}) => {
  return (
    <>
      <DataTable
        products={products.garage}
        setProducts={setProducts}
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
            key: 'price',
            value: 0.00
          },
          {
            key: 'description',
            value : 'This is a description for Product A'
          }
        ]}
      />
      <DataTable
        products={products.writings}
        setProducts={setProducts}
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
            key: 'price',
            value: 0.00
          },
          {
            key: 'summary',
            value : 'The summary of Story One'
          }
        ]}
        title="Writings"
      />
      <DataTable
        products={products.learn}
        setProducts={setProducts}
        prefix='e'
        fields={[
          { 
            key: 'lesson_name', 
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