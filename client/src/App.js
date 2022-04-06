// General Import
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

// Pages Import
import { Home, Garage, Writings, Learn, Account, Cart, Product, PageNotFound} from './pages'

// Components Import
import { Header, Footer, CartOverlay } from './components';

// CSS
import './App.css';


function App() {
  const [cart, setCart] = useState([])

  const displayCart = (data) => {
    // console.log("data: ", data)
    setCart(data)
  }

  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/garage/:productName" element={<Product />} />
          <Route path="/garage" element={<Garage displayCart={displayCart}/>} />
          <Route path="/writings" element={<Writings />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>

        <CartOverlay cart={cart}/>
        {/* {cart ? <p>{cart}</p> : <p>"no"</p>} */}
        <Footer />
      </div>
    </Router>
  )
}

export default App;