import AdminAppBar from "@/pages/Admin/components/AdminAppBar/AdminAppBar";
import { Box, Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

function TreatmentHeaders() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '46px' }}>
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
                    '& > :not(style)': { m: 0, p: 0, width: '20ch', height: '43px' },
                }}
            >
                <Button component={Link} to={"/adminTest/treatment/createTreatment"} >Add new Treatment</Button>
            </ButtonGroup>
        </Box>
    );
}

export default TreatmentHeaders;