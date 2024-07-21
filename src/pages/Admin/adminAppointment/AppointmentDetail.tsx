import { Box } from "@mui/material";
import MiniHeader from "../components/MiniHeader/MiniHeader";
import ChecklistIcon from "@mui/icons-material/Checklist";
import AppointmentNotes from "@/components/Appointment/AppointmentDetail/AppointmentNotes";

function AdminAppointmentDetail() {
  return (
    <Box sx={{ p: "24px" }}>
      <MiniHeader content="Appointment Details" IconComponent={ChecklistIcon} />
      <AppointmentNotes />
    </Box>
  );
}

export default AdminAppointmentDetail;
