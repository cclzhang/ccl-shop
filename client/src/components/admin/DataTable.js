import React, { useState, useContext } from 'react'
import { FormDialog, DeleteWarn } from '../../components'
import { ProductsContext } from '../../App';

const DataTable = ({ fields, prefix }) => {
  const [products, setProducts] = useContext(ProductsContext)
  const type = {g:'garage', w:'writings', e:'learn'}
  const [openForm, setOpenForm] = useState(false)
  const [openWarning, setOpenWarning] = useState(false)
  const [formValues, setFormValues] = useState({})
  const [currentId, setCurrentId] = useState(null)

  const handleOpenForm = () => {
    setOpenForm(true);
    setFormValues({})
  };
  const handleEdit = (id) => (e) => {
    setFormValues(products[type[prefix]][products[type[prefix]].findIndex(x => x.id === id)])
    setOpenForm(true)
  }

  const handleOpenWarning = id => e => {
    setOpenWarning(true)
    setCurrentId(id)
  }



  return (
    <section>
      <button onClick={handleOpenForm}>+ add new item</button>
      <div className='test'>
        <table>
          <thead>
            <tr>
              {/* <th>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">select</label>
              </th> */}
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
              products && products[type[prefix]].map((product, i)=>(
                <tr key={i}>
                  {/* <td>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">select</label>
                  </td> */}
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
                    <button onClick={handleOpenWarning(product.id)}>delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <FormDialog 
        open={openForm} 
        setOpen={setOpenForm} 
        fields={fields} 
        formValues={formValues}
        setFormValues={setFormValues}
        type={type[prefix]}
      />
      <DeleteWarn
        open={openWarning} 
        setOpen={setOpenWarning} 
        type={type[prefix]}
        id={currentId}
      />
    </section>
  )
}

export default DataTable