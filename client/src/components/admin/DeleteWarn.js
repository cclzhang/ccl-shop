import React, { useContext } from 'react'
import axios from 'axios'
import { Dialog, DialogTitle, DialogActions } from '@mui/material'
import { ProductsContext } from '../../App'

const DeleteWarn = ({open, setOpen, type, id}) => {
  const [products, setProducts] = useContext(ProductsContext)

  const handleClose = () => {
    setOpen(false);
  }

  const handleDelete = () => {
    axios
      .post(`http://127.0.0.1:5000/${type}`,{
        type: type,  
        id: id 
      })
      .then(res => {
        setProducts({...products, [type]: res.data})
      })
      .catch(err => console.log('error:', err))
    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Are you sure you want to delete?
      </DialogTitle>
      <DialogActions>
        <button onClick={handleClose} autoFocus>No</button>
        <button onClick={handleDelete}>DELETE</button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteWarn