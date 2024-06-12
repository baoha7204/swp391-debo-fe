import MiniHeader from "@/pages/Admin/components/MiniHeader/MiniHeader";
import DentistCreateBody from "./DentistCreateBody";
import { Box } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";

function CreateDentist() {
    return (
        <Box sx={{ p: '24px' }}>
            <MiniHeader content="Create Dentist" IconComponent={GroupIcon} />
            <DentistCreateBody />
        </Box>
    );
}

export default CreateDentist;