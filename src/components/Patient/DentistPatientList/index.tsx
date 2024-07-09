import { ListColumn } from "@/components/Table/types/core";
import MyTable from "@/components/Table/MyTable";

export type DentistPatientData = {
  id: string;
  username: string;
  email: string;
  phone: string;
  nextAppointment: Date | null;
  lastAppointment: Date;
};

const columns: readonly ListColumn<DentistPatientData>[] = [
  { id: "username", label: "Username", minWidth: 100, isDetail: true },
  { id: "email", label: "Email", minWidth: 100 },
  { id: "phone", label: "Phone", minWidth: 100 },
  {
    id: "nextAppointment",
    label: "Next Appointment",
    minWidth: 100,
    isDate: true,
  },
  {
    id: "lastAppointment",
    label: "Last Appointment",
    minWidth: 100,
    isDateOnly: true,
  },
];

function MyDentistPatientList({ url }: { url: string }) {
  return <MyTable<DentistPatientData> url={url} columns={columns} />;
}

export default MyDentistPatientList;
