import { Key } from "react";

export type ListColumn<T> = {
  id: Extract<keyof T, Key>;
  label: string;
  minWidth?: number;
  align?: "right";
  isDetail?: boolean;
  isDate?: boolean;
  format?: ((value: string | number) => string) | ((value: any) => string | JSX.Element);
};

export type TableProps<T> = {
  url: string;
  columns: readonly ListColumn<T>[];
};
