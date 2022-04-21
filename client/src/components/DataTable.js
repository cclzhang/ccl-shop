import React from 'react'

const DataTable = ({ products, keys, title, prefix }) => {

  return (
    <section>
      <h3>{title} Inventory</h3>
      <button>+ add new item</button>
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
    </section>
  )
}

export default DataTable