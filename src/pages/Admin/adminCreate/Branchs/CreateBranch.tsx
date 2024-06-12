import { Box } from "@mui/material";
import CreateBranchBody from "./CreateBranchBody";
import CreateBranchHeader from "./CreateBranchHeader";

function CreateBranch() {
    return (
        <Box sx={{ p: '24px' }}>
            <CreateBranchHeader />
            <CreateBranchBody />
        </Box>
    );
}

export default CreateBranch;