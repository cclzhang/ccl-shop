import React, {useEffect, useState} from 'react'
import { index, uploadDetails } from '../helpers'

const GarageUpload = ({ uploadItem, setUploadItem, deleteItem, i }) => {

  const handleChange = e => {
    uploadDetails(uploadItem, setUploadItem, e.target.name, e.target.value)
  }

  
  return (
    <div>
      <div>
        <input type="text" name="gName" id="gName" onChange={handleChange}/>
        <label htmlFor="gName">product name</label>
      </div>
      <div>
        <input type="text" name="gImage" id="gImage" onChange={handleChange}/>
        <label htmlFor="gImage">image link</label>
      </div>
      <div>
        <input type="number" name="gStock" id="gStock" defaultValue={1} onChange={handleChange}/>
        <label htmlFor="gStock">stock</label>
      </div>
      <div>
        <textarea name="gDescription" id="gDescription" cols="30" rows="10" placeholder="It was a dark and stormy night..." onChange={handleChange}/>
        <label htmlFor="gDescription">description</label>
      </div>
      <div>
        <input type="number" name="gPrice" id="gPrice" step="0.01" onChange={handleChange}/>
        <label htmlFor="gPrice">price</label>
      </div>
      <button onClick={deleteItem} data-index={i}>delete</button>
    </div>
  )
}

export default GarageUpload