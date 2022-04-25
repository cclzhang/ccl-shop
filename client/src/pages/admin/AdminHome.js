import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../../components'

const AdminHome = ({isAdmin, setIsAdmin}) => {
  return (
    <div>
      {
        isAdmin ? <>
          <Link to="inventory">Manage Inventory</Link>
          <Link to="/home">Log out</Link>     
        </> : <Login />
      }
    </div>
  )
}

export default AdminHome