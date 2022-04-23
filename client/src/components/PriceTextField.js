import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const PriceTextField = (props) => {
  const [focused, setFocused] = useState(false);

  return (
    <TextField
      {...props}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      InputProps={{
        startAdornment: (props.value || focused) && (
          <InputAdornment position="start">$</InputAdornment>
        )
      }}
    />
  );
};

export default PriceTextField