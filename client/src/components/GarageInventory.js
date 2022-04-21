import React from 'react'

const GarageInventory = ({products}) => {
  const keys = [
    'id', 
    'product_name',
    'image', 
    'stock', 
    'description', 
    'price'
  ]

  return (
    <section>
      <h3>Garage Inventory</h3>
      <button>+ add new item</button>
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" name="" id="" /></th>
            {
              keys.map((key)=>(
                <th>{key}</th>
              ))
            }
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {
            products && products.map((product)=>(
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">select</label>
                </td>
                {
                  keys.map((key)=>(
                    <td>{product[key]}</td>
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

export default GarageInventory