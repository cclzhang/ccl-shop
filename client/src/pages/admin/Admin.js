import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { PageNotFound, AdminHome, Inventory } from '../../pages'

const Admin = ({ products, setProducts, isAdmin, setIsAdmin }) => {
  // const navigate = useNavigate();

  return (
    <main>
      <h3>Admin</h3>
      
      <Routes>
        <Route index element={<AdminHome 
          isAdmin={isAdmin}
          setIsAdmin={setIsAdmin}
        />}/>
        {
          isAdmin 
            ? <>
              <Route path="inventory" element={<Inventory 
                products={products} 
                setProducts={setProducts}
              />}/> 
            </>
            : <Route path="inventory" element={<Navigate to="/owner" replace />}/> 
        }
        <Route path="/*" element={<PageNotFound/>} />
      </Routes>

    </main>
  )
}

export default Admin