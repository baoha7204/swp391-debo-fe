import { Box } from "@mui/material";
import MiniHeader from "../../components/MiniHeader/MiniHeader";
import TreatmentDetailBody from "./TreatmentDetailBody";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

function TreatmentDetail() {
    return (
        <Box sx={{ p: '24px' }}>
            <MiniHeader content="Treatment Detail" IconComponent={HealthAndSafetyIcon} />
            <TreatmentDetailBody />
        </Box>
    );
}

export default TreatmentDetail;