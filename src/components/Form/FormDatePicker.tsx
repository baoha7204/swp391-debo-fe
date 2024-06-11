import { Controller, FieldPath, FieldValues } from "react-hook-form";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { InputProps } from "./types/core";

const FormDatePicker = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  name,
  control,
  ...rest
}: InputProps<TFieldValues, TName>) => {
  return (
    <Controller
      name={name || ("date" as TName)}
      control={control}
      rules={{ required: true }}
      render={({ field: { value, ref, onChange } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              value={value}
              inputRef={ref}
              onChange={onChange}
              slotProps={{
                textField: {
                  helperText: "MM/DD/YYYY",
                },
              }}
              {...rest}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default FormDatePicker;
