import MiniHeader from "@/pages/Admin/components/MiniHeader/MiniHeader";
import ManagerCreateBody from "./ManagerCreateBody";
import { Box } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";

function createManager() {
    return (
        <Box sx={{ p: '24px' }}>
            <MiniHeader content="Create Manager" IconComponent={GroupIcon} />
            <ManagerCreateBody />
        </Box>
    );
}

export default createManager;