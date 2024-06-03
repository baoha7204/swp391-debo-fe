import AdminAppBar from "@/pages/Admin/components/AdminAppBar/AdminAppBar";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

function TreatmentHeaders() {
    return (
        <Box sx={{ display: 'flex', m: 1, justifyContent: 'space-between', alignItems: 'center', mb: 5 }}>
            <Box sx={{ display: 'inline-block' }}>
                <AdminAppBar>
                    <HealthAndSafetyIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
                    Treatment List
                </AdminAppBar>
            </Box>
            <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled button group"
                sx={{
                    '& > :not(style)': { m: 0, width: '25ch', height: '43px' },
                }}
            >
                <Button component={Link} to={"/adminTest/createBranch"} >Add new Branch</Button>
            </ButtonGroup>
        </Box>
    );
}

export default TreatmentHeaders;