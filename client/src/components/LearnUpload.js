import React from 'react'
import { uploadDetails } from '../helpers'

const LearnUpload = ({ toUpload, setToUpload }) => {

  const handleChange = e => {
    uploadDetails(toUpload, setToUpload, e.target.name, e.target.value)
  }

  return (
    <>
      <div>
        <input type="text" name="lName" id="" onChange={handleChange}/>
        <label htmlFor="lName">product name</label>
      </div>
      <div>
        <input type="number" name="lDuration" id="" onChange={handleChange}/>
        <label htmlFor="lDuration">Length of Lesson</label>
      </div>
      <div>
        <input type="number" name="lStock" id="" defaultValue={1} onChange={handleChange}/>
        <label htmlFor="lStock">stock</label>
      </div>
      <div>
        <input type="number" name="lprice" id="" step="0.01" onChange={handleChange}/>
        <label htmlFor="lPrice">price</label>
      </div>
      {/* <button type="button" onClick={addItem}>Add Upload</button> */}
    </>
  )
}

export default LearnUpload