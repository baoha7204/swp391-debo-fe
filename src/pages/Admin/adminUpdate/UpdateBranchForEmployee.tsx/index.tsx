import { Box } from "@mui/material";
import MiniHeader from "../../components/MiniHeader/MiniHeader";
import GroupIcon from '@mui/icons-material/Group';
import UpdateBranchForEmployee from "./UpdateBranchForEmployee";

function UpdateEmployeeBranch() {
    return (
        <Box sx={{ p: '24px' }}>
            <MiniHeader content="Update Branch for Employee" IconComponent={GroupIcon} />
            <UpdateBranchForEmployee />
        </Box>
    );
}

export default UpdateEmployeeBranch;