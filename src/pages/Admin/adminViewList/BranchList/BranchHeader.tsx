import { Box, Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import AdminAppBar from "@/pages/Admin/components/AdminAppBar/AdminAppBar";
import StoreIcon from "@mui/icons-material/Store";

function BranchHeader() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '46px' }}>
            <Box sx={{ display: 'inline-block' }}>
                <AdminAppBar>
                    <StoreIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
                    Branch List
                </AdminAppBar>
            </Box>
            <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled button group"
                sx={{
                    '& > :not(style)': { m: 0, p: 0, width: '20ch', height: '43px' },
                }}
            >
                <Button component={Link} to={"/adminTest/branch/createBranch"} >Add new Branch</Button>
            </ButtonGroup>
        </Box>
    );
}

export default BranchHeader;