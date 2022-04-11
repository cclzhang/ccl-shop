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
  const [products, setProducts] = useState([])

  const index = pname => cart.findIndex(item => item.product_name == pname)

  const increment = (pname, stock) => {
    const i = index(pname)

    if (i !== -1 && cart[i].quantity < stock) {
      const newCart = [...cart];
      newCart[i].quantity = cart[i].quantity + 1;
      setCart(newCart);
    } 
    // else {
    //   setCart([...cart, {
    //     product_name: product_name,
    //     image: image,
    //     price: price,
    //     quantity: 1,
    //   }])
    // }
  }

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
            increment={increment}
            products={products}
            setProducts={setProducts}
          />} />
          <Route path="/writings" element={<Writings />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>

        <CartOverlay 
          setCart={setCart} 
          cart={cart} 
          increment={increment}
          products={products}
          setProducts={setProducts} 
        />
        
        <Footer />
      </div>
    </Router>
  )
}

export default App;