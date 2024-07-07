import { ListColumn } from "@/components/Table/types/core";
import { formatDentistName } from "@/utils/helper";
import MyTable from "@/components/Table/MyTable";

export type AppointmentListData = {
  id: string;
  name: string;
  status: string;
  treatment: string;
  dentist: string;
  start: Date;
};

const columns: readonly ListColumn<AppointmentListData>[] = [
  { id: "name", label: "Name", isDetail: true, minWidth: 170 },
  { id: "status", label: "Status", minWidth: 100, isStatus: true },
  { id: "treatment", label: "Treatment", minWidth: 170 },
  {
    id: "dentist",
    label: "Dentist",
    minWidth: 170,
    format: formatDentistName,
  },
  {
    id: "start",
    label: "Date",
    minWidth: 200,
    isDate: true,
  },
];

const AppointmentList = ({ url }: { url: string }) => {
  return (
    <MyTable<AppointmentListData & { timeSlot: number }>
      url={url}
      columns={columns}
    />
  );
};

export default AppointmentList;
