import { Controller, FieldPath, FieldValues } from "react-hook-form";
import { InputProps } from "./types/core";
import ImagePicker from "../ImagePicker";

const FormImagePicker = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  name,
  control,
}: InputProps<TFieldValues, TName>) => {
  return (
    <Controller
      name={name || ("imagePicker" as TName)}
      control={control}
      render={({ field: { ref, value, ...rest } }) => {
        return <ImagePicker ref={ref} image={value} {...rest} />;
      }}
    />
  );
};

export default FormImagePicker;
