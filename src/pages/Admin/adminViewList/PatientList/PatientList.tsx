import PatientListTable from "./PatientListTable";
import PatientListHeader from "./PatientListHeader";
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