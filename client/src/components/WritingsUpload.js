import React from 'react'
import { uploadDetails } from '../helpers'

const WritingsUpload = ({ toUpload, setToUpload }) => {

  const handleChange = e => {
    uploadDetails(toUpload, setToUpload, e.target.name, e.target.value)
  }

  return (
    <>
      <div>
        <input type="text" name="wTitle" id="" onChange={handleChange}/>
        <label htmlFor="wTitle">title</label>
      </div>
      <div>
        <input type="number" name="wStock" id="" defaultValue={1} onChange={handleChange}/>
        <label htmlFor="wStock">stock</label>
      </div>
      <div>
        <textarea name="wSummary" id="" cols="30" rows="10" placeholder="It was a dark and stormy night..." onChange={handleChange}/>
        <label htmlFor="wSummary">summary</label>
      </div>
      <div>
        <input type="number" name="wprice" id="" step="0.01" onChange={handleChange}/>
        <label htmlFor="wPrice">price</label>
      </div>
      {/* <button type="button" onClick={addItem}>Add Upload</button> */}
    </>
  )
}

export default WritingsUpload