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
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
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