import React, { useState } from 'react'
import { FormDialog } from '../components'


const DataTable = ({ products, keys, title, prefix }) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const addItem = (prefix) => {
    console.log('add', title.toLowerCase())
  }

  return (
    <section>
      <h3>{title} Inventory</h3>
      <button onClick={handleClickOpen}>+ add new item</button>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">select</label>
            </th>
            <th>id</th>
            {
              keys.map((key, i)=>(
                <th key={i}>{key}</th>
              ))
            }
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {
            products && products.map((product, i)=>(
              <tr key={i}>
                <td>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">select</label>
                </td>
                <th>{prefix}{product.id}</th>
                {
                  keys.map((key, i)=>(
                    <td key={i}>{product[key]}</td>
                  ))
                }
                <td>
                  <button>edit</button>
                  <button>delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <FormDialog open={open} setOpen={setOpen} title={title}/>
    </section>
  )
}

export default DataTable