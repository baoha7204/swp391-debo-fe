import { Box } from "@mui/material";
import MiniHeader from "../../components/MiniHeader/MiniHeader";
import GroupIcon from "@mui/icons-material/Group";

function BranchEmployeeListHeader() {
    return (
        <Box sx={{ pt: 4 }}>
            <MiniHeader content="Branch Employee" IconComponent={GroupIcon} />
        </Box>
    );
}

export default BranchEmployeeListHeader;