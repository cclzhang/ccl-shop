import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

import { GarageUpload, WritingsUpload, LearnUpload } from '../components';


const Inventory = ({type}) => {
  const [isManaging, setIsManaging] = useState(false);
  const [listOfInputs, setListOfInputs] = useState([]);
  const [itemToAdd, setItemToAdd] = useState({})
  const [toUpload, setToUpload] = useState({})
  const [products, setProducts] = useState([])

  const dict = {
    garage: GarageUpload,
    writings: WritingsUpload,
    learn: LearnUpload,
  }

  const InputComponent = dict[type];

  // const row2 = new GridRowsProp([
  //   {
  //     id: 1,
  //     product_name: "item1", 
  //     image: "url", stock: 13, 
  //     description: "describing item 1", 
  //     price: 13.75
  //   }, 
  //   {
  //     id: 2,
  //     product_name: "item2", 
  //     image: "url", stock: 9, 
  //     description: "describing item 2", 
  //     price: 20.75
  //   }, 
  //   {
  //     id: 3,
  //     product_name: "item3", 
  //     image: "url", stock: 9, 
  //     description: "item 3 description", 
  //     price: 9.99
  //   }, 
  // ])

  const handleClick = (param, event) => {
    event.stopPropagation();
    console.log(param)
  };

  const items = [
    {
      id: 1,
      product_name: "item1", 
      image: "url", stock: 13, 
      description: "describing item 1", 
      price: 13.75,
      renderCells: (cellValues) => {
        return (
          <button
            onClick={(event) => {
              handleClick(event, cellValues);
            }}
          >
            edit
          </button>
        );
      }
    },
    {
      id: 2,
      product_name: "item2", 
      image: "url", stock: 9, 
      description: "describing item 2", 
      price: 20.75
    }, 
    {
      id: 3,
      product_name: "item3", 
      image: "url", stock: 9, 
      description: "item 3 description", 
      price: 9.99
    }, 
  ]

  const columns = [
    {
      field: 'product_name', 
      headerName: 'Name', 
      width: 150
    }, 
    {
      field: 'image', 
      headerName: 'Image', 
      width: 150
    }, 
    {
      field: 'stock', 
      headerName: 'Stock', 
      width: 150
    }, 
    {
      field: 'description', 
      headerName: 'Description', 
      width: 150
    }, 
    {
      field: 'price', 
      headerName: 'Price', 
      width: 150
    }, 
    {
      field: 'actions', 
      headerName: 'Actions', 
      width: 150,
      renderCell: (params) => {
        // const onClick = (e) => {
        //   e.stopPropagation(); // don't select this row after clicking

        //   // const api: GridApi = params.api;
        //   // const thisRow: Record<string, GridCellValue> = {};

        //   // api
        //   //   .getAllColumns()
        //   //   .filter((c) => c.field !== "__check__" && !!c)
        //   //   .forEach(
        //   //     (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
        //   //   );

        //   // return alert(JSON.stringify(thisRow, null, 4));
        // };

        return (
          <div>
            <button>edit</button>
            <button>delete</button>
          </div>
        )
      }
    }, 
  ]

  
  
  const addNewItem = () => {
    setListOfInputs(listOfInputs.concat(<InputComponent
      type={type}
      uploadItem={itemToAdd}
      setUploadItem={setItemToAdd}
      deleteItem={deleteItem}
      i={listOfInputs.length}
      key={listOfInputs.length}
    />))
  }

  const deleteItem = (e) => {

    console.log(e.target.getAttribute('data-index'))
    listOfInputs.map((input, i)=>{
        if(listOfInputs[i].key == e.target.getAttribute('data-index'))
        {
          console.log("input: ", input.key)
          // console.log("input in list: ", listOfInputs[i])
        } else {
          console.log("no")
          console.log("input: ", input)
        }
      })
    
    setListOfInputs(listOfInputs.filter(item => item.key !== e.target.getAttribute('data-index')))

  }

  const save = (e) => {
    e.preventDefault()
    setIsManaging(false)
    axios
      .post(`http://127.0.0.1:5000/owner/${type}`, {
        upload: toUpload
      })
      .then(res => {
        console.log("res.data: ", res.data)
      })
      .catch(err => console.log("error: ", err))
  }

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/${type}`)
      .then(res => { 
        setProducts(res.data[type])
        console.log(res.data[type])
      })
      .catch(err => console.log("error: ", err))
      
    return () => {
      console.log("return from data change")
    }
  }, []);
  
  return (
    <section>
      <h3>{type} Inventory</h3>
      {/* {
        isManaging ? 
          <>
            <button type="button" onClick={addNewItem}>+ Add Item</button>
            <form action="">
              <button>close</button>
              <button type="submit" onClick={save}>save</button>
            </form>
            {listOfInputs}
          </> :  */}
      {/* } */}
      <div>
        <button type="button">+ Add Item</button> 
        <ul>
          {
            products && products.map((item)=>{
              <li>
                {item}
                <p>hello</p>
              </li>
            })
          }
          <li>hello</li>
        </ul>
      </div>

{/* 
      <DataGrid 
        rows={items} 
        columns={columns} 
        autoHeight
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      /> */}
    </section>
  )
}

export default Inventory