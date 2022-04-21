import React, { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { DataTable, Inventory, Upload } from '../components'
import { PageNotFound, Home } from '../pages'

const Admin = ({products}) => {
  const [types, setTypes] = useState(['garage', 'writings', 'learn'])

  return (
    <main>
      <h3>Admin</h3>
      <Link to="inventory">Manage Inventory</Link>
      <Link to="/home">Log out</Link>
      
      <Routes>
        <Route index element={<Home />}/>
        <Route path="inventory" element={<Inventory products={products}/>}/>
        <Route path="/*" element={<PageNotFound/>} />
      </Routes>

    </main>
  )
}

export default Admin