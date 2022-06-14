import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBurger = ({setIsNavOpen}) => {
  return (
    <nav>
      <button onClick={()=>setIsNavOpen(false)}>x</button>
      <ul className='wrapper'>
        <li>
          <NavLink 
            to="/garage" 
            onClick={()=>setIsNavOpen(false)}
          >garage</NavLink>
        </li>
        <li>
          <NavLink 
            to="/writings" 
            onClick={()=>setIsNavOpen(false)}
          >writings</NavLink>
        </li>
        <li>
          <NavLink 
            to="/learn" 
            onClick={()=>setIsNavOpen(false)}
          >learn</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBurger