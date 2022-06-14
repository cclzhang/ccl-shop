import React from 'react'


const AdminHome = ({ isAdmin }) => {
  return (
    <div>
      {
        isAdmin ? <p>HOME</p> : null
      }
    </div>
  )
}

export default AdminHome