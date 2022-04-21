import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Nav } from '../components'
import { userIcon, cartIcon } from '../assets'

const Header = ({ isCartOpen, setIsCartOpen, isAdmin, setIsAdmin }) => {
  const navigate = useNavigate()
  return (
    <header>
      <h1><Link to="/">xiciel's shop</Link></h1>
      <Nav />
      <ul>
        <li>
          <button onClick={()=> isAdmin ? navigate('/owner') : null}>
            <img src={userIcon} alt="account" />
          </button>
        </li>
        <li>
          <button onClick={() => setIsCartOpen(!isCartOpen)}>
            <img src={cartIcon} alt="cart" />
          </button>
        </li>
      </ul>
    </header>
  )
}

export default Header