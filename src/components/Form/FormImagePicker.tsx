import { Controller, FieldPath, FieldValues } from "react-hook-form";
import { InputProps } from "./types/core";
import ImagePicker from "../ImagePicker";
import { UploadFunction } from "../ImagePicker/types/core";

const FormImagePicker = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  name,
  control,
  onUpload,
}: InputProps<TFieldValues, TName> & {
  onUpload: UploadFunction;
}) => {

  return (
    <Controller
      name={name || ("imagePicker" as TName)}
      control={control}
      render={({ field: { ref, value, onChange } }) => {
        return (
          <ImagePicker
            ref={ref}
            value={value}
            onChange={onChange}
            onUpload={onUpload}
          />
        );
      }}
    />
  );
};

export default FormImagePicker;
