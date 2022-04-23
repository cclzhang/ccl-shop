import React, { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { PageNotFound, Home, Inventory } from '../../pages'

const Admin = ({products, setProducts}) => {
  const [types, setTypes] = useState(['garage', 'writings', 'learn'])
  console.log(products)

  return (
    <main>
      <h3>Admin</h3>
      <Link to="inventory">Manage Inventory</Link>
      <Link to="/home">Log out</Link>
      
      <Routes>
        <Route index element={<Home />}/>
        <Route path="inventory" element={<Inventory products={products} setProducts={setProducts}/>}/>
        <Route path="/*" element={<PageNotFound/>} />
      </Routes>

    </main>
  )
}

export default Admin