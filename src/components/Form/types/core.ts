import { FieldPath, FieldValues, UseControllerProps } from "react-hook-form";

export type InputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName> & {
  isPassword?: boolean;
};
