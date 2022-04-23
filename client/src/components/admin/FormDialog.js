import React, { useState } from 'react'
import { 
  Dialog, DialogTitle, DialogContent, DialogActions, 
  TextField, 
  useMediaQuery 
} from '@mui/material'
import { useTheme } from '@mui/material/styles';

import { PriceTextField } from '../../components';
import axios from 'axios';

const FormDialog = ({open, setOpen, title, fields, prefix, products, setProducts}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [formValues, setFormValues] = useState({});

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    let type = ''
    if (prefix === 'g') {
      type = 'garage'
    } else if (prefix === 'w') {
      type = 'writings'
    } else if (prefix === 'e') {
      type = 'learn'
    } else {
      console.log("prefix type doesn't match")
    }
    
    console.log(type)
    axios
      .post(`http://127.0.0.1:5000/${type}`, formValues)
      .then(res => { 
        if (products) {
          setProducts({[type]: [...products, res.data[0]]})
        } else {
          setProducts({[type]: [res.data[0]]})
        }
      })
      .catch(err => console.log("error: ", err))

    handleClose()
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
                  onChange={e => setFormValues({ ...formValues, [field.key]: parseFloat(e.target.value) })}
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