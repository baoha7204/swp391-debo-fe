import MiniHeader from "@/pages/Admin/components/MiniHeader/MiniHeader";
import StaffCreateBody from "./StaffCreateBody";
import { Box } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";

function CreateStaff() {
    return (
        <Box sx={{ p: '24px' }}>
            <MiniHeader content="Create Staff" IconComponent={GroupIcon} />
            <StaffCreateBody />
        </Box>
    );
}

export default CreateStaff;