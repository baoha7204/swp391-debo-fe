import { ListColumn } from "@/components/Table/types/core";
import { formatDate, formatDentistName } from "@/utils/helper";
import MyTable from "@/components/Table/MyTable";

export type AppointmentListData = {
  id: number;
  name: string;
  status: string;
  treatment: string;
  dentist: string;
  date: Date;
};

const columns: readonly ListColumn<AppointmentListData>[] = [
  { id: "name", label: "Name", isDetail: true, minWidth: 170 },
  { id: "status", label: "Status", minWidth: 100 },
  { id: "treatment", label: "Treatment", minWidth: 170 },
  {
    id: "dentist",
    label: "Dentist",
    minWidth: 170,
    format: formatDentistName,
  },
  {
    id: "date",
    label: "Date",
    minWidth: 200,
    format: formatDate,
  },
];

const AppointmentList = ({ url }: { url: string }) => {
  return <MyTable<AppointmentListData> url={url} columns={columns} />;
};

export default AppointmentList;
