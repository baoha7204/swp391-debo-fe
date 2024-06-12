import PatientListTable from "@/components/Patient/PatientList/PatientListTable";
import PatientListHeader from "@/components/Patient/PatientList/PatientListHeader";
import { Box } from "@mui/material";

function PatientList() {
    return (
        <Box sx={{ p: '24px' }}>
            <PatientListHeader />
            <PatientListTable url="" />
        </Box>
    );
}

export default PatientList;