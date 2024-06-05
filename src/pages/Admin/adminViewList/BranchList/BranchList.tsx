import { Box } from "@mui/material";
import BranchHeader from "./BranchHeader";
import BranchTable from "./BranchTable";

function BranchList() {
    return (
        <Box sx={{ p: '24px' }}>
            <BranchHeader />
            <BranchTable url={''} />
        </Box>
    );
}

export default BranchList;