import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Drawer } from '@mui/material'
import { Nav, NavBurger } from '../components'
import { menu, userIcon, cartIcon } from '../assets'
import css from '../styles/components/Header.module.scss'

const Header = ({ isCartOpen, setIsCartOpen, isNavOpen, setIsNavOpen, width, breakpoint }) => {  

  return (
    <header className={`wrapper ${css.Header}`}>
      {width > breakpoint
        ? null 
        : <button onClick={() => setIsNavOpen(!isNavOpen)} >
            <img src={menu} alt="" />
          </button>
      }
      <div>
        <h1><Link to="/">xiciel's shop</Link></h1>
        {width > breakpoint ? <Nav /> : null}
      </div>
      <div className={css.div}>
        <Link to="/account" className={css.a}>
          <img src={userIcon} alt="account" />
        </Link>
        <button onClick={() => setIsCartOpen(!isCartOpen)}>
          <img src={cartIcon} alt="cart" />
        </button>
      </div>

      {
        width > breakpoint 
        ? setIsNavOpen(false)
        : <Drawer
            anchor='left'
            variant="temporary"
            open={isNavOpen}
            onClose={()=>setIsNavOpen(false)}
          >
          <NavBurger setIsNavOpen={setIsNavOpen}/>
        </Drawer>
      }
    </header>
  )
}

export default Header