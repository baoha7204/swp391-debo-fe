import { useState } from "react";
import { IconButton, InputAdornment, TextFieldProps } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import MyTextField, { MyTextFieldProps } from "../MyTextField";

const PasswordField = ({
  outsideLabel = "Password",
  name = "password",
  id = "password",
  label = "Password",
}: TextFieldProps & MyTextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <MyTextField
      outsideLabel={outsideLabel}
      required
      fullWidth
      name={name}
      label={label}
      type={showPassword ? "text" : "password"}
      id={id}
      autoComplete="current-password"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
export default PasswordField;
