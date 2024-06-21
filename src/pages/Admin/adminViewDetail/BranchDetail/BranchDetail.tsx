import { Box } from "@mui/material";
import BranchDetailBody from "./BranchDetailBody";
import BranchDetailHeader from "./BranchDetailHeader";
import BranchEmployeeList from "../../adminViewList/BranchEmployeeList/BranchEmployeeList";

function BranchDetail() {
    return (
        <Box sx={{ p: '24px' }}>
            <BranchDetailHeader />
            <BranchDetailBody />
            <BranchEmployeeList />
        </Box>
    );
}

export default BranchDetail;