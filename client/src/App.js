// General Import
import React, { useEffect, useState, createContext, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { Drawer } from '@mui/material';
import Cookies from 'universal-cookie';

// Pages Import
import { Home, Admin, Account, Garage, Writings, Learn, Cart, Product, PageNotFound } from './pages'

// Components Import
import { Header, Footer, CartOverlay } from './components';

// CSS
import './App.scss';

export const ProductsContext = createContext();
export const CartContext = createContext();
export const OpenCartContext = createContext();

function App() {
  // 
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;

  const [isAdmin, setIsAdmin] = useState(false)
  const [cart, setCart] = useState(undefined)
  const [products, setProducts] = useState({})
  const [isCartOpen, setIsCartOpen] = useState(false)

  const [isNavOpen, setIsNavOpen] = useState(false)

  
  const cookies = useMemo(()=>new Cookies(), [])

  // On page load set cart to whatever's in the cookie
  useEffect(()=> {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    if(cookies.get("cart")) {  
      setCart(cookies.get("cart"))
    } else {
      setCart([]);
    }

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
    if (!cart) {
      return
    }
    cookies.set("cart", cart, { path: '/' })

    return () => {
      console.log("cart: return from data change")
    }
  }, [cart])

  return (
    <Router>
      <div className={`App${isNavOpen ? " noScroll" : ""}`}>
        <ProductsContext.Provider value={[products, setProducts]}>
        <CartContext.Provider value={[cart, setCart]}>
        <OpenCartContext.Provider value={[isCartOpen, setIsCartOpen]}>
          <Header 
            isCartOpen={isCartOpen} 
            setIsCartOpen={setIsCartOpen}
            isNavOpen={isNavOpen}
            setIsNavOpen={setIsNavOpen}
            width={width}
            breakpoint={breakpoint}
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
            <Route path="/account" element={<Account />} />
            <Route path="/owner/*" element={<Admin 
              products={products} 
              setProducts={setProducts} 
              isAdmin={isAdmin}
              setIsAdmin={setIsAdmin}
            />}/>
            <Route path="/garage/:productName" element={<Product />} />
            <Route path="/garage" element={<Garage 
              products={products.garage}
            />} />
            <Route path="/writings/:productName" element={<Product />} />
            <Route path="/writings" element={<Writings 
              products={products.writings}
            />} />
            <Route path="/learn/:productName" element={<Product />} />
            <Route path="/learn" element={<Learn 
              products={products.learn}
            />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
        
        </OpenCartContext.Provider>
        </CartContext.Provider>
        </ProductsContext.Provider>
        <Footer />
      </div>
    </Router>
  )
}

export default App;