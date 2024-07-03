import AppointmentList from "@/components/Appointment/AppointmentList";
import MiniHeader from "@/pages/Admin/components/MiniHeader/MiniHeader";
import { Box } from "@mui/material";
import ChecklistIcon from "@mui/icons-material/Checklist";
import { API_ENDPOINTS } from "@/utils/api";
import { useParams } from "react-router-dom";

const DentistAppointmentList = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <Box sx={{ p: '24px' }}>
      <MiniHeader content="Appointments" IconComponent={ChecklistIcon} />
      <AppointmentList url={API_ENDPOINTS.DENTIST.APPOINTMENT.LIST} />
    </Box>
  );
};

// const DentistAppointmentList = () => {
//   return <AppointmentList url={API_ENDPOINTS.DENTIST.APPOINTMENT.LIST} />;
// };

export default DentistAppointmentList;
