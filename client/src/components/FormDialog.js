import React, { useEffect, useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import { FormControl, TextField, InputAdornment, OutlinedInput, InputLabel } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { uploadDetails } from '../helpers';
import PriceTextField from './PriceTextField';
import axios from 'axios';

const FormDialog = ({open, setOpen, title, fields, prefix}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [formValues, setFormValues] = useState({});

  // const handleChange = key => e => {
  //   setFormValues({ ...formValues, [key]: e.target.value });
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    let type = ''
    // console.log(formValues)
    switch (prefix) {
      case 'g':
        type = 'garage'
        break
      case 'w':
        type = 'writings'
        break
      case 'e':
        type = 'learn'
        break
      default:
        return
    }
    console.log(type)
    axios
      .post(`http://127.0.0.1:5000/${type}`, formValues)
      .then(res => { 
        console.log(type, res.data)
        // setProducts(res.data)
      })
      .catch(err => console.log("error: ", err))

    handleClose()
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
          {fields.map((field, i)=>(()=>{
            switch (field.key) {
              case 'price':
                return <PriceTextField
                  key={i}
                  fullWidth
                  required
                  id="outlined-required"
                  label="PRICE"
                  style={{marginTop: 10}}
                  placeholder={String(field.value.toFixed(2))}
                  onChange={e => setFormValues({ ...formValues, [field.key]: e.target.value })}
                />
              case 'description':
              case 'summary':
                return <TextField
                  // sx={{ m: 1 }}
                  key={i}
                  fullWidth
                  required
                  multiline
                  rows={5}
                  id="outlined-required"
                  label={field.key.toUpperCase()}
                  style={{marginTop: 10}}
                  placeholder={String(field.value)}
                  onChange={e => setFormValues({ ...formValues, [field.key]: e.target.value })}
                  // helperText="error"
                /> 
              default:
                return <TextField
                  // sx={{ m: 1 }}
                  key={i}
                  fullWidth
                  required
                  id="outlined-required"
                  label={field.key.replace(/_/g, " ").toUpperCase()}
                  style={{marginTop: 10}}
                  placeholder={String(field.value)}
                  onChange={e => setFormValues({ ...formValues, [field.key]: e.target.value })}
                  // helperText="error"
                /> 
            }
          })())}
        </form>
      </DialogContent>
      <DialogActions>
        <button onClick={handleClose}>
          cancel
        </button>
        <button onClick={handleSave} autoFocus>
          save
        </button>
      </DialogActions>
    </Dialog>
  )
}

export default FormDialog