import React from 'react'
import { DataTable } from '../../components'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Tab } from '@mui/material'

const Inventory = ({products, setProducts}) => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <TabContext value={value}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab label="Garage" value="1" />
        <Tab label="Writings" value="2" />
        <Tab label="Learn" value="3" />
      </TabList>
      <TabPanel value="1" sx={{ p: 0 }}>
        <DataTable
          products={products.garage}
          setProducts={setProducts}
          prefix='g'
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
      </TabPanel>
      <TabPanel value="2" sx={{ p: 0 }}>
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
        />
      </TabPanel>
      <TabPanel value="3" sx={{ p: 0 }}>
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
        />
      </TabPanel>
    </TabContext>
    </>
  )
}

export default Inventory