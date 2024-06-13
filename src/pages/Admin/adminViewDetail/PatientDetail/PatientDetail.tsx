import { Box } from "@mui/material";
import MiniHeader from "../../components/MiniHeader/MiniHeader";
import PatientDetailBody from "./PetientDetailBody";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function PatientDetail() {

    return (
        <Box sx={{ p: '24px' }}>
            <MiniHeader content="Patient Detail" IconComponent={AccountCircleIcon} />
            <PatientDetailBody />
        </Box>
    );
}

export default PatientDetail;