export type AppointmentListColumn = {
  id: "name" | "status" | "treatment" | "dentist" | "date";
  label: string;
  minWidth?: number;
  align?: "right";
  isDetail?: boolean;
  format?: ((value: Date) => string) | ((value: string) => string);
};

export type AppointmentListData = {
  id: number;
  name: string;
  status: string;
  treatment: string;
  dentist: string;
  date: Date;
};

export type AppointmentListProps = {
  url: string;
};
