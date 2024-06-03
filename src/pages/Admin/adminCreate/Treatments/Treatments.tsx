import { Box } from "@mui/material";
import TreatmentTable from "./TreatmentTable";
import AdminCreateHeader from "../../components/AdminCreateHeader";
import { API_ENDPOINTS } from "@/utils/api";

function Treatments() {

  return (
    <Box>
      <AdminCreateHeader />
      <TreatmentTable url={API_ENDPOINTS.TREATMENT.GET_ALL_TREATMENT} />
    </Box>
  );
}

export default Treatments;
