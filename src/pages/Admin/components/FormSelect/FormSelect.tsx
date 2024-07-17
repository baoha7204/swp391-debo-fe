import { Controller, FieldPath, FieldValues, UseControllerProps } from "react-hook-form";
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";

type SelectProps<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName> & {
    label: string;
    options: { value: string | number | boolean; label: string }[];
};

interface FormSelectProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> extends SelectProps<TFieldValues, TName> {
    label: string;
    options: { value: string | number | boolean, label: string }[];
}

// Helper function to parse value
const parseValue = (value: string | number | boolean) => {
    if (value === "true") return true;
    if (value === "false") return false;
    if (typeof value === 'string' && !isNaN(Number(value))) {
        return Number(value);
    }
    return value;
};

const FormSelect = <
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>
>({
    name,
    control,
    label,
    options,
    ...rest
}: FormSelectProps<TFieldValues, TName>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <FormControl fullWidth error={!!error}>
                    <InputLabel id={`${name}-label`}>{label}</InputLabel>
                    <Select
                        labelId={`${name}-label`}
                        value={value}
                        label={label}
                        onChange={(event) => onChange(parseValue(event.target.value))}
                        {...rest}
                    >
                        {options.map((option, index) => (
                            <MenuItem key={index} value={option.value.toString()}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>{error ? error.message : " "}</FormHelperText>
                </FormControl>
            )}
        />
    );
};

export default FormSelect;
