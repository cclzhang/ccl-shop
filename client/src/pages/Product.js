import React, { useState, useEffect } from 'react'
import { GarageProduct } from '../components'
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

const Product = () => {
  const { productName } = useParams();
  // const [garageProducts, setGarageProducts] = useState({})

  return (
    <div>
      <p>url = {productName}</p>
      {/* <GarageProduct 
        id={productId} 
        name={productName} 
        image={productImg} 
        stock={productStock} 
        description={productDescription} 
        price={productPrice}
      /> */}
    </div>
  )
}

export default Product