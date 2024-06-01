import { Key } from "react";

export type ListColumn<T> = {
  id: Extract<keyof T, Key>;
  label: string;
  minWidth?: number;
  align?: "right";
  isDetail?: boolean;
  format?: ((value: Date) => string) | ((value: string) => string);
};

export type TableProps<T> = {
  url: string;
  columns: readonly ListColumn<T>[];
};
