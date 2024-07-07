export type ListColumn<T> = {
  id: keyof Omit<T, "id">;
  label: string;
  minWidth?: number;
  align?: "right";
  isDetail?: boolean;
  isPatientDetail?: boolean;
  isDate?: boolean;
  isDateOnly?: boolean;
  isStatus?: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  format?: Function;
};

export type TableProps<T> = {
  url: string;
  columns: readonly ListColumn<T>[];
};
