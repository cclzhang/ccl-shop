import React from 'react'

const WritingsProduct = ({ name, stock, summary, price }) => {
  return (
    <div className='writings-product'>
      <button>
        <h3>{name}</h3>
      </button>
      <p>stock: {stock}</p>
      <p>{summary}</p>
      <p>{price}</p>
      <button>add to cart</button>
    </div>
  )
}

export default WritingsProduct