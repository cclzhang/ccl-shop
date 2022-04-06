import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1><Link to="/">xiciel's shop</Link></h1>
      <Nav />
      <ul>
        <li><button>profile</button></li>
        <li><button>cart</button></li>
      </ul>
    </header>
  )
}

export default Header