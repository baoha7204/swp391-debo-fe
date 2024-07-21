import MyDentistPatientList from "@/components/Patient/DentistPatientList";
import MiniHeader from "@/pages/Admin/components/MiniHeader/MiniHeader";
import { API_ENDPOINTS } from "@/utils/api";
import { Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const DentistPatientList = () => {
  return (
    <Box sx={{ p: "24px" }}>
      <MiniHeader content="Patient" IconComponent={PersonIcon} />
      <MyDentistPatientList url={API_ENDPOINTS.DENTIST.PATIENT_LIST} />;
    </Box>
  );
};

export default DentistPatientList;
