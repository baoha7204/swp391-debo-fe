import { Box } from "@mui/material";
import AdminAppBar from "../../components/AdminAppBar/AdminAppBar";
import StoreIcon from "@mui/icons-material/Store";

function CreateBranchHeader() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '46px' }}>
            <Box sx={{ display: 'inline-block' }}>
                <AdminAppBar>
                    <StoreIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
                    Branch Detail
                </AdminAppBar>
            </Box>
        </Box>
    );
}

export default CreateBranchHeader;