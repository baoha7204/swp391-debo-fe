import PatientListTable from "@/components/Patient/PatientList/PatientListTable";
import PatientListHeader from "@/components/Patient/PatientList/PatientListHeader";
import { Box } from "@mui/material";
import { API_ENDPOINTS } from "@/utils/api";

function PatientList() {
    return (
        <Box sx={{ p: '24px' }}>
            <PatientListHeader />
            <PatientListTable url={API_ENDPOINTS.USERS.LIST_CUSTOMER} />
        </Box>
    );
}

export default PatientList;