import AppointmentList from "@/components/Appointment/AppointmentList";
import MiniHeader from "@/pages/Admin/components/MiniHeader/MiniHeader";
import ChecklistIcon from "@mui/icons-material/Checklist";
import { API_ENDPOINTS } from "@/utils/api";
import { Box } from "@mui/material";

const PatientAppointmentList = () => {
  return (
    <Box sx={{ p: '24px' }}>
      <MiniHeader content="Appointments List" IconComponent={ChecklistIcon} />
      <AppointmentList url={API_ENDPOINTS.PATIENT.APPOINTMENT.LIST} />
    </Box>
  );
};

export default PatientAppointmentList;
