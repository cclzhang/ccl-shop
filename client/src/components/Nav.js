import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/garage">garage</NavLink></li>
        <li><NavLink to="/writings">writings</NavLink></li>
        <li><NavLink to="/learn">learn</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav