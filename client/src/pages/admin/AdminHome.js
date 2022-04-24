import React from 'react'
import { Link } from 'react-router-dom'

const AdminHome = () => {
  return (
    <div>
      <Link to="inventory">Manage Inventory</Link>
      <Link to="/home">Log out</Link>
    </div>
  )
}

export default AdminHome