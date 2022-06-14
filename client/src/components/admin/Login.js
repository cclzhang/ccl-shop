import React, { useState } from 'react'
import { TextField, InputAdornment, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Login = ({ setIsAdmin }) => {

  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [valid, setValid] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post("http://127.0.0.1:5000/owner", {
        username: username,
        password: password
      })
      .then(res => {

        console.log(res.data)
        if (res.data === 0) {
          setIsAdmin(true)
        }
        setValid(res.data)
      })
      .catch(err => console.log("error: ", err))
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          required
          error={valid === 1}
          helperText={valid === 1 ? "username doesn't exist" : ""}
          id="outlined-required"
          label="Username"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          required
          error={valid === 2}
          helperText={valid === 2 ? "password doesn't match username" : ""}
          id="outlined-adornment-password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/reset-password">Forgot password?</Link>
    </div>
  )
}

export default Login