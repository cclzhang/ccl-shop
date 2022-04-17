// General Import
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

// Pages Import
import { Home, Garage, Writings, Learn, Account, Cart, Product, PageNotFound} from './pages'

// Components Import
import { Header, Footer, CartOverlay } from './components';

// CSS
import './App.css';


function App() {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState({})
  const cookies = new Cookies()

  useEffect(()=> {
    setCart(cookies.get("cart"))

    return () => {
      console.log("app product: return from data change")
    }
  }, [])

  useEffect(() => {
    cookies.set("cart", cart, { path: '/' })

    return () => {
      console.log("garage product: return from data change")
    }
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/garage/:productName" element={<Product />} />
          <Route path="/garage" element={<Garage 
            setCart={setCart} 
            cart={cart} 
            products={products.items}
            setProducts={setProducts}
          />} />
          <Route path="/writings" element={<Writings 
            cart={cart}
            setCart={setCart}
            products={products.writings}
            setProducts={setProducts}
          />} />
          {/* <Route path="/learn" element={<Learn />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>

        <CartOverlay 
          setCart={setCart} 
          cart={cart} 
          cookies={cookies}
        />
        
        <Footer />
      </div>
    </Router>
  )
}

export default App;