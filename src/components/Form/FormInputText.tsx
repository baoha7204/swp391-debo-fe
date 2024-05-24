import { Controller, FieldPath, FieldValues } from "react-hook-form";

import MyTextField, { MyTextFieldProps } from "../MyTextField";
import { InputProps } from "./types/core";
import PasswordField from "../PasswordField";

const FormInputText = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  name,
  control,
  isPassword = false,
  ...rest
}: InputProps<TFieldValues, TName> & MyTextFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) =>
        isPassword ? (
          <PasswordField
            helperText={error ? error.message : " "}
            error={!!error}
            onChange={onChange}
            value={value}
            {...rest}
          />
        ) : (
          <MyTextField
            helperText={error ? error.message : " "}
            error={!!error}
            onChange={onChange}
            value={value}
            {...rest}
          />
        )
      }
    />
  );
};

export default FormInputText;
