import { Box } from "@mui/material";
import MiniHeader from "../components/MiniHeader/MiniHeader";
import ChecklistIcon from "@mui/icons-material/Checklist";
import { API_ENDPOINTS } from "@/utils/api";
import { ListColumn } from "@/components/Table/types/core";
import { formatDentistName } from "@/utils/helper";
import MyTable from "@/components/Table/MyTable";

export type AppointmentListData = {
    id: string;
    treatName: string;
    status: string;
    description: string;
    dentist: string;
    start: Date;
};

const columns: readonly ListColumn<AppointmentListData>[] = [
    { id: "treatName", label: "Name", isDetail: true, minWidth: 170 },
    { id: "status", label: "Status", minWidth: 100 },
    { id: "description", label: "Description", minWidth: 170 },
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

function AdminAppointmentList() {

    return (
        <Box sx={{ p: '24px' }}>
            <MiniHeader content="Appointment List" IconComponent={ChecklistIcon} />
            <MyTable<AppointmentListData & { timeSlot: number }>
                url={API_ENDPOINTS.APPOINTMENT.ALL}
                columns={columns}        >
            </MyTable>
        </Box>
    );
}

export default AdminAppointmentList;