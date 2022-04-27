import React, { useContext } from 'react'
import { ProductsContext } from '../../App';

import { 
  Dialog, DialogTitle, DialogContent, DialogActions, 
  TextField, 
  useMediaQuery 
} from '@mui/material'
import { useTheme } from '@mui/material/styles';

import { PriceTextField } from '../../components';
import axios from 'axios';

const FormDialog = ({open, setOpen, fields, formValues, setFormValues, type}) => {
  const [products, setProducts] = useContext(ProductsContext)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const validateInt = (toValidate) => {
    return /^[1-9]\d{0,4}$/.test(toValidate)
  }

  const validateFloat = (toValidate) => {
    return /^(?:[1-9]\d{0,4}|0)?(?:\.\d{0,5})?$/.test(toValidate)
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (e) => {
    e.preventDefault()

    if (!formValues) {
      console.log("!form values")
      return
    }

    for (const key in formValues) {
      if (!formValues[key]) {
        console.log("!form values [key]")
        return
      }
    }
    if (type !== 'learn' && !validateInt(formValues.stock)) {
      console.log("!form values.stock")
      return
    } 
    if (!validateFloat(formValues.price)) {
      console.log("!form values.price")
      return
    }


    axios
      .post(`http://127.0.0.1:5000/${type}`, formValues)
      .then(res => { 
        if (products[type] && !formValues.id) {
          setProducts({...products, [type]: [res.data[0], ...products[type]]})
        } else if (products[type] && formValues.id) {
          setProducts({...products, [type]: res.data})
        } else {
          setProducts({...products, [type]: [res.data[0]]})
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
      <form action="" onSubmit={handleSave}>
        <DialogTitle id="responsive-dialog-title">
          Add new {type} item
        </DialogTitle>
        <DialogContent>
          {fields.map((field, i)=>(()=>{
            switch (field.key) {
              case 'price':
                return <PriceTextField
                  error={formValues[field.key] && !validateFloat(formValues[field.key])}
                  helperText={formValues[field.key] && !validateFloat(formValues[field.key])
                    ? "Must be a positive number and < 5 digits (before and after period)" 
                    : ""}
                  key={i}
                  fullWidth
                  required
                  id="outlined-required"
                  label="PRICE"
                  style={{marginTop: 10}}
                  value={formValues[field.key] ? formValues[field.key] : ''}
                  placeholder={String(field.value.toFixed(2))}
                  onChange={e => setFormValues({ ...formValues, [field.key]: e.target.value })}
                  onKeyPress={(e) => { e.key === 'Enter' && handleSave(e); }}
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
                  value={formValues[field.key] ? formValues[field.key] : ''}
                  onChange={e => setFormValues({ ...formValues, [field.key]: e.target.value })}
                  onKeyPress={(e) => { e.key === 'Enter' && handleSave(e); }}
                /> 
              default:
                return <TextField
                  error={field.key === 'stock'
                    && formValues[field.key] 
                    && !validateInt(formValues[field.key])}
                  helperText={field.key === 'stock' 
                    && formValues[field.key] 
                    && !validateInt(formValues[field.key])
                      ? "Must be a positive whole number and < 5 digits" 
                      : ""}
                  key={i}
                  fullWidth
                  required
                  id="outlined-required"
                  label={field.key.replace(/_/g, " ").toUpperCase()}
                  style={{marginTop: 10}}
                  value={formValues[field.key] ? formValues[field.key] : ''}
                  placeholder={String(field.value)}
                  onChange={e => setFormValues({ ...formValues, [field.key]: e.target.value })}
                  onKeyPress={(e) => { e.key === 'Enter' && handleSave(e); }}
                /> 
            }
          })())}
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}>cancel</button>
          <button type="submit">save</button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default FormDialog