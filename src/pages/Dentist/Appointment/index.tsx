import AppointmentList from "@/components/Appointment/AppointmentList";
import MiniHeader from "@/pages/Admin/components/MiniHeader/MiniHeader";
import { Box } from "@mui/material";
import ChecklistIcon from "@mui/icons-material/Checklist";

const DentistAppointmentList = () => {
  return (
    <Box sx={{ p: '24px' }}>
      <MiniHeader content="Appointments" IconComponent={ChecklistIcon} />
      <AppointmentList url="http://localhost:5173/dentist/appointments" />
    </Box>
  );
};

export default DentistAppointmentList;
