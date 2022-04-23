import React, { useEffect, useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import { FormControl, TextField, InputAdornment, OutlinedInput, InputLabel } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { uploadDetails } from '../helpers';
import PriceTextField from './PriceTextField';

const FormDialog = ({open, setOpen, title, fields}) => {
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

  useEffect(()=>{
    // setFormValues
  }, [])

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
          {
            fields.map((field, i)=>(
              field.key !== 'price'
              ? <TextField
                  // sx={{ m: 1 }}
                  key={i}
                  fullWidth
                  required
                  id="outlined-required"
                  label={field.key.replace(/_/g, " ").toUpperCase()}
                  style={{marginTop: 10}}
                  placeholder={String(field.value)}
                  // helperText="error"
                /> 
              : <PriceTextField
                  key={i}
                  fullWidth
                  required
                  id="outlined-required"
                  label="PRICE"
                  style={{marginTop: 10}}
                  placeholder={String(field.value.toFixed(2))}
                  // value={formValues.price}
                  // onChange={(e) => setItem({ ...formValues, price: e.target.value })}
                />
            ))
          }
        </form>
      </DialogContent>
      <DialogActions>
        <button onClick={handleClose}>
          cancel
        </button>
        <button onClick={handleClose}>
          save
        </button>
      </DialogActions>
    </Dialog>
  )
}

export default FormDialog