import { Controller, FieldPath, FieldValues, UseControllerProps } from "react-hook-form";
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";

type SelectProps<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName> & {
    label: string;
    options: { value: string | number; label: string }[];
};

interface FormSelectProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> extends SelectProps<TFieldValues, TName> {
    label: string;
    options: { value: string | number, label: string }[];
}

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
                        onChange={onChange}
                        {...rest}
                    >
                        {options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
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
