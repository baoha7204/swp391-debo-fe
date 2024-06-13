import { Box } from "@mui/material";
import EmployeeUpdateBody from "./EmployeeUpdateBody";
import MiniHeader from "../../components/MiniHeader/MiniHeader";
import GroupIcon from '@mui/icons-material/Group';

function EmployeeUpdate() {
    return (
        <Box sx={{ p: '24px' }}>
            <MiniHeader content="Employee Update" IconComponent={GroupIcon} />
            <EmployeeUpdateBody />
        </Box>
    );
}

export default EmployeeUpdate;