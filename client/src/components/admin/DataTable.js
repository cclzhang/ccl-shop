import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { FormDialog } from '../../components'
import { ProductsContext } from '../../App';

const DataTable = ({ fields, prefix }) => {
  const [products, setProducts] = useContext(ProductsContext)
  const type = {g:'garage', w:'writings', e:'learn'}
  const productList = products[type[prefix]]
  const [open, setOpen] = useState(false)
  const [formValues, setFormValues] = useState({})
  const [index, setIndex] = useState(0)

  const handleClickOpen = () => {
    setOpen(true);
    setFormValues({})
  };
  const handleEdit = (id) => (e) => {
    setFormValues(products[type[prefix]][products[type[prefix]].findIndex(x => x.id === id)])
    setOpen(true)
  }

  const handleDelete = (id) => (e) => {
    axios
      .post(`http://127.0.0.1:5000/${type[prefix]}`,{
        type: type[prefix],  
        id: id 
      })
      .then(res => {
        setProducts({...products, [type]: res.data})
      })
      .catch(err => console.log('error:', err))
  }

  return (
    <section>
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
              fields.map((field, i)=>(
                <th key={i}>{field.key}</th>
              ))
            }
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {
            products[type[prefix]] && products[type[prefix]].map((product, i)=>(
              <tr key={i}>
                <td>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">select</label>
                </td>
                <th>
                  {prefix}{products[type[prefix]].length - i}
                </th>
                {
                  fields.map((field, i)=>(
                    field.key === 'price' 
                      ?<td key={i}>${parseFloat(product[field.key]).toFixed(2)}</td>
                      : <td key={i}>{product[field.key]}</td>
                  ))
                }
                <td>
                  <button onClick={handleEdit(product.id)}>edit</button>
                  <button onClick={handleDelete(product.id)}>delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <FormDialog 
        open={open} 
        setOpen={setOpen} 
        fields={fields} 
        formValues={formValues}
        setFormValues={setFormValues}
        type={type[prefix]}
      />
    </section>
  )
}

export default DataTable