import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { InvFormDetails, GarageUpload, WritingsUpload, LearnUpload } from '../components'

const Upload = () => {
  const [productType, setProductType] = useState("")
  const [uploadItem, setUploadItem] = useState({})
  const [toUpload, setToUpload] = useState({})
  const [isManagingInv, setIsManagingInv] = useState(false)
  const [invInputList, setInvInputList] = useState([]);
  const [testList, setTestList] = useState([])

  const handleChange = (e) => {
    setProductType(e.target.value)
    setUploadItem({ type : e.target.value })
  }

  // const upload = () => {
  //   console.log("toUpload", toUpload)
  //   axios
  //     .post(`http://127.0.0.1:5000/owner/`, {
  //       upload: toUpload
  //     })
  //     .then(res => {
  //       console.log("res.data: ", res.data)
  //     })
  //     .catch(err => console.log("error: ", err))
  // }

  const addToUpload = () => {
    if (!toUpload[productType]) {
      setToUpload({
        ...toUpload,
        [productType]: [uploadItem]
      })
    } else {
      setToUpload({
        ...toUpload,
        [productType]: [
          ...toUpload[productType],
          uploadItem
        ]
      })
    }
  }

  const addItem = () => {
    addToUpload()
    setProductType("")
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post(`http://127.0.0.1:5000/owner/`, {
        upload: toUpload
      })
      .then(res => {
        console.log("res.data: ", res.data)
      })
      .catch(err => console.log("error: ", err))
  }
  const dict = {
    gProduct: GarageUpload,
    lProduct: LearnUpload,
    wProduct: WritingsUpload,
  }

  
  const addItem2 = (type) => {
    const Component = dict[type];
    console.log(type)
    setTestList(invInputList.concat(<Component
      type={type} 
      toUpload={uploadItem}
      setToUpload={setUploadItem}
      key={invInputList.length}
    />))
  }

  const addGarage = () => {
    setInvInputList(invInputList.concat(<GarageUpload
      toUpload={uploadItem}
      setToUpload={setUploadItem}
      key={invInputList.length}
    />))
  }
    const addWriting = () => {
    setInvInputList(invInputList.concat(<WritingsUpload
      toUpload={uploadItem}
      setToUpload={setUploadItem}
      key={invInputList.length}
    />))
  }
    const addLearn = () => {
    setInvInputList(invInputList.concat(<LearnUpload
      toUpload={uploadItem}
      setToUpload={setUploadItem}
      key={invInputList.length}
    />))
  }

  return (
    // g = garage, w = writing, l = learn
    <>
    <h3>Inventory</h3>
    <ul>
      <li>
        <h4>Garage</h4>
        <ul>
          {/* {invList.items} */}
        </ul>
      </li>
      <li>
        <h4>Writings</h4>
        <ul>
          {/* {invList.writings} */}
        </ul>
      </li>
      <li>
        <h4>Learn</h4>
        <ul>
          {/* {invList.lessons} */}
        </ul>
      </li>
    </ul>

      {isManagingInv 
        ? <div>
            <button onClick={()=>addItem2('gProduct')}>Add Item</button>
            <button type='button' onClick={addGarage}>Add Item In Garage</button>
            <button type='button' onClick={addWriting}>Add Writing</button>
            <button type='button' onClick={addLearn}>Add Lesson</button>
          </div>
        : <button type='button' onClick={()=> setIsManagingInv(true)}>Manage Inventory</button>
      }
      <form action={`owner/${productType}`} onSubmit={handleSubmit}>


        {/* <label htmlFor="productType">Type to upload</label>
        <select name="productType" id="productType" value={productType} onChange={handleChange} required>
          <option value="" disabled>-- Please choose an option --</option>
          <option value="gProduct">Garage</option>
          <option value="wProduct">Writing</option>
          <option value="lProduct">Learn</option>
        </select> */}
        {/* {
          productType ? 
          <Component 
            type={productType} 
            toUpload={uploadItem}
            setToUpload={setUploadItem}
            addItem={addItem}
          /> : 
          null
          // <button type="submit">submit</button>
        } */}
        {/* {isManagingInv 
          ? null
          : invInputList
        } */}
        {invInputList}
        {testList}

      </form>
    </>
  )
}

export default Upload