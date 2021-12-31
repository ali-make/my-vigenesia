import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const InputProfile = ({
  name,
  handleChange,
  label,
  type,
  handleShowPassword,
}) => {
  return (
    <Grid item sm={12} xs={12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required={name === "password" ? true : false}
        fullWidth
        autoComplete="off"
        label={label}
        type={type}
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default InputProfile;
