// General Import
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Redirect, Navigate } from 'react-router-dom';
import axios from 'axios';
import { Drawer } from '@mui/material';
import Cookies from 'universal-cookie';

// Pages Import
import { Home, Admin, Garage, Writings, Learn, Account, Cart, Product, PageNotFound} from './pages'

// Components Import
import { Header, Footer, CartOverlay, Inventory } from './components';

// CSS
import './App.css';


function App() {
  const [isAdmin, setIsAdmin] = useState(true)
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState({})
  const [isCartOpen, setIsCartOpen] = useState(false)
  const cookies = new Cookies()
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)
  
  
  // On page load set cart to whatever's in the cookie
  useEffect(()=> {
    setCart(cookies.get("cart"))

    axios
      .get('http://127.0.0.1:5000/')
      .then(res => { 
        setProducts(res.data)
      })
      .catch(err => console.log("error: ", err))

    return () => {
      console.log("app product: return from data change")
    }
  }, [])

  // Every time cart changes update cookies
  useEffect(() => {
    cookies.set("cart", cart, { path: '/' })

    return () => {
      console.log("garage product: return from data change")
    }
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Header 
          isCartOpen={isCartOpen} 
          setIsCartOpen={setIsCartOpen}
          isAdmin={isAdmin}
          setIsAdmin={setIsAdmin}
        />

        {/* CART DRAWER */}
        <Drawer
          variant='temporary'
          anchor='right'
          open={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}>
          <CartOverlay
            setCart={setCart}
            cart={cart}
            cookies={cookies}
          />
        </Drawer>

        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          { isAdmin ? <Route path="/owner/*" element={<Admin products={products} />}/> : null }
          <Route path="/garage/:productName" element={<Product />} />
          <Route path="/garage" element={<Garage 
            setCart={setCart} 
            cart={cart} 
            products={products.garage}
            setProducts={setProducts}
            setIsCartOpen={setIsCartOpen}
          />} />
          <Route path="/writings" element={<Writings 
            cart={cart}
            setCart={setCart}
            products={products.writings}
            setProducts={setProducts}
            setIsCartOpen={setIsCartOpen}
          />} />
          <Route path="/learn" element={<Learn 
            cart={cart}
            setCart={setCart}
            products={products.learn}
            setProducts={setProducts}
            setIsCartOpen={setIsCartOpen}
          />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
        



        <Footer />
      </div>
    </Router>
  )
}

export default App;