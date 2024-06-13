import { Box } from "@mui/material";
import BranchHeader from "./BranchHeader";
import BranchTable from "./BranchTable";
import { API_ENDPOINTS } from "@/utils/api";

function BranchList() {
    return (
        <Box sx={{ p: '24px' }}>
            <BranchHeader />
            <BranchTable url={API_ENDPOINTS.BRANCH.LIST} />
        </Box>
    );
}

export default BranchList;