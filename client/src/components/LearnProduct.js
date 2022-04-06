import React from 'react'

const LearnProduct = ({ name, duration, price }) => {
  return (
    <div className='Learn-product'>
      <button>
        <h3>{name}</h3>
      </button>
      <p>time: {duration}mins</p>
      <p>price: {price}</p>
      <button>add to cart</button>
    </div>
  )
}

export default LearnProduct