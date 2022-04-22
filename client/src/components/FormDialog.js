import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import { FormControl, TextField, InputAdornment, OutlinedInput, InputLabel } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { uploadDetails } from '../helpers';

const FormDialog = ({open, setOpen, title}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [formValues, setFormValues] = useState({
    product_name: 'garage item',
    image: 'https://via.placeholder.com/150',
    stock: 0,
    description: 'this describes the item',
    price: 0.00,
    showPassword: false,
  });

  const handleChange = key => e => {
    if (e.target.value <= 0) {
      // alert("no")
    }
    setFormValues({ ...formValues, [key]: e.target.value });
    console.log(formValues[key])
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        Add new {title} item
      </DialogTitle>
      <DialogContent>
        <form action="">
        <TextField
          sx={{ m: 1 }}
          fullWidth
          required
          id="outlined-required"
          label="Product Name"
          style={{marginTop: 5}}
          placeholder={formValues.product_name}
          helperText="error"
        />
        <TextField
          fullWidth
          required
          id="outlined-required"
          label="Image URL"
          placeholder={formValues.image}
        />
        <TextField
          fullWidth
          required
          id="outlined-required"
          label="Stock Available"
          placeholder={formValues.stock}
        />
          {/* style={{marginTop: 5}}
          sx={{ m: 1 }} */}
        <TextField
          fullWidth
          required
          id="outlined-required"
          label="Price"
          InputProps={{
            startAdornment:<InputAdornment position="start">$</InputAdornment>
          }}
          placeholder={formValues.price.toFixed(2)}
        />
        <TextField
          fullWidth
          multiline
          required
          id="outlined-required"
          label="Product Description"
          placeholder={formValues.description}
        />
        </form>
      </DialogContent>
      <DialogActions>
        <button autoFocus onClick={handleClose}>
          cancel
        </button>
        <button onClick={handleClose} autoFocus>
          save
        </button>
      </DialogActions>
    </Dialog>
  )
}

export default FormDialog