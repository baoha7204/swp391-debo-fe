import { ListColumn } from "@/components/Table/types/core";
import MyTable from "@/components/Table/MyTable";

export type PatientTableData = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirthday: Date;
  gender: string;
};

const columns: readonly ListColumn<PatientTableData>[] = [
  // { id: "firstName", label: "First Name", minWidth: 100 },
  // { id: "lastName", label: "Last Name", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 100, isDetail: true },
  { id: "phone", label: "Phone", minWidth: 100 },
  { id: "dateOfBirthday", label: "Birthday", minWidth: 100, isDate: true },
];

function PatientListTable({ url }: { url: string }) {
  return <MyTable<PatientTableData> url={url} columns={columns} />;
}

export default PatientListTable;
