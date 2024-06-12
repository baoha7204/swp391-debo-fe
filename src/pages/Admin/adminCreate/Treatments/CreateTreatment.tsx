import CreateTreatmentForm from "./CreateTreatmentForm";
import MiniHeader from "../../components/MiniHeader/MiniHeader";
import { Box } from "@mui/material";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

function CreateTreatment() {

    return (
        <Box sx={{ p: '24px' }}>
            <MiniHeader content="Create Treatment" IconComponent={HealthAndSafetyIcon} />
            <CreateTreatmentForm />
        </Box>
    );
}

export default CreateTreatment;