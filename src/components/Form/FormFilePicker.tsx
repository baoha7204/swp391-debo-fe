import { Controller, FieldPath, FieldValues } from "react-hook-form";
import { InputProps } from "./types/core";
import { UploadFunction } from "../ImagePicker/types/core";
import FilePicker from "../FilePicker";

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
      name={name || ("filePicker" as TName)}
      control={control}
      render={({
        field: { ref, value, onChange },
        formState: { isSubmitting },
      }) => {
        return (
          <FilePicker
            ref={ref}
            value={value}
            onChange={onChange}
            onUpload={onUpload}
            disabled={isSubmitting}
          />
        );
      }}
    />
  );
};

export default FormImagePicker;
