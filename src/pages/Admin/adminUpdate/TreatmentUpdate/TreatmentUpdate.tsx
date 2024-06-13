import { Box } from "@mui/material";
import MiniHeader from "../../components/MiniHeader/MiniHeader";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import TreatmentUpdateBody from "./TreatmentUpdateBody";

function TreatmentUpdate() {
    return (
        <Box sx={{ p: '24px' }}>
            <MiniHeader content="Treatment Update" IconComponent={HealthAndSafetyIcon} />
            <TreatmentUpdateBody />
        </Box>
    );
}

export default TreatmentUpdate;