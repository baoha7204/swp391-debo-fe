import MiniHeader from "@/pages/Admin/components/MiniHeader/MiniHeader";
import { Box } from "@mui/material";
import ChecklistIcon from "@mui/icons-material/Checklist";
import AppointmentNotes from "@/components/Appointment/AppointmentDetail/AppointmentNotes";

function PatientAppointmentDetail() {
  return (
    <Box sx={{ p: "24px" }}>
      <MiniHeader content="Appointment Notes" IconComponent={ChecklistIcon} />
      <AppointmentNotes />
    </Box>
  );
}

export default PatientAppointmentDetail;
