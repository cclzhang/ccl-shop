import React from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import { PageNotFound, AdminHome, Inventory } from '../../pages'
import { Login } from '../../components'

const Admin = ({ products, setProducts, isAdmin, setIsAdmin }) => {
  // const navigate = useNavigate();

  return (
    <main>
      <h3>Admin</h3>
      {
        isAdmin ? <>
          <Link to="/owner">Home</Link>
          <Link to="inventory">Manage Inventory</Link>
          <button onClick={() => setIsAdmin(false)}>Log out</button>
        </> : <Login setIsAdmin={setIsAdmin} />
      }
      <Routes>
        <Route index element={<AdminHome
          isAdmin={isAdmin}
          setIsAdmin={setIsAdmin}
        />} />
        {
          isAdmin
            ? <>
              <Route path="inventory" element={<Inventory
                products={products}
                setProducts={setProducts}
              />} />
            </>
            : <Route path="inventory" element={<Navigate to="/owner" replace />} />
        }
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

    </main>
  )
}

export default Admin