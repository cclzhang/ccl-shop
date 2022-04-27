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
          <button onClick={()=> setIsAdmin(!isAdmin)}>
            toggle admin
          </button>
          {/* <button onClick={()=> navigate('/owner')}> */}
          <Link to="/account">
            <img src={userIcon} alt="account" />
          </Link>
          {/* </button> */}
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