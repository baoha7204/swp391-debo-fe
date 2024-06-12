import { Box } from "@mui/material";
import BranchDetailBody from "./BranchDetailBody";
import BranchDetailHeader from "./BranchDetailHeader";

function BranchDetail() {
    return (
        <Box sx={{ p: '24px' }}>
            <BranchDetailHeader />
            <BranchDetailBody />
        </Box>
    );
}

export default BranchDetail;