import { Box } from "@mui/material";
import MiniHeader from "../components/MiniHeader/MiniHeader";
import AppointmentDetail from "@/components/Appointment/AppointmentDetail/AppointmentDetail";
import ChecklistIcon from "@mui/icons-material/Checklist";

function AdminAppointmentDetail() {
    return (
        <Box sx={{ p: '24px' }}>
            <MiniHeader content="Appointment Notes" IconComponent={ChecklistIcon} />
            <AppointmentDetail />
        </Box>
    );
}

export default AdminAppointmentDetail;