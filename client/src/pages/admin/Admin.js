import React, { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { PageNotFound, AdminHome, Inventory } from '../../pages'

const Admin = ({products, setProducts, isAdmin, setIsAdmin}) => {

  return (
    <main>
      <h3>Admin</h3>
      
      <Routes>
        <Route index element={<AdminHome 
          isAdmin={isAdmin}
          setIsAdmin={setIsAdmin}
        />}/>
        {
          isAdmin ? <Route path="inventory" element={<Inventory 
            products={products} 
            setProducts={setProducts}
          />}/> : null
        }
        <Route path="/*" element={<PageNotFound/>} />
      </Routes>

    </main>
  )
}

export default Admin