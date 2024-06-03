import { Box } from "@mui/material";
import TreatmentTable from "./TreatmentTable";
import TreatmentHeaders from "./TreatmensHeader";
import { API_ENDPOINTS } from "@/utils/api";

function TreatmentList() {

  return (
    <Box>
      <TreatmentHeaders />
      <TreatmentTable url={API_ENDPOINTS.TREATMENT.GET_ALL_TREATMENT} />
    </Box>
  );
}

export default TreatmentList;
