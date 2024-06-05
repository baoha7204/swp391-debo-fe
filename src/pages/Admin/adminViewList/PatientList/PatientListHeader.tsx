import { Box } from "@mui/material";
import AdminAppBar from "../../components/AdminAppBar/AdminAppBar";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function PatientListHeader() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '46px' }}>
            <Box sx={{ display: 'inline-block' }}>
                <AdminAppBar>
                    <AccountCircleIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
                    Patient List
                </AdminAppBar>
            </Box>
        </Box>
    );
}

export default PatientListHeader;