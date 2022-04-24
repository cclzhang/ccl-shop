import React, { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { PageNotFound, AdminHome, Inventory } from '../../pages'

const Admin = ({products, setProducts}) => {

  return (
    <main>
      <h3>Admin</h3>
      
      <Routes>
        <Route index element={<AdminHome />}/>
        <Route path="inventory" element={<Inventory products={products} setProducts={setProducts}/>}/>
        <Route path="/*" element={<PageNotFound/>} />
      </Routes>

    </main>
  )
}

export default Admin