import { Box } from "@mui/material";
import MiniHeader from "../../components/MiniHeader/MiniHeader";
import BranchUpdateBody from "./BranchUpdateBody";
import StoreIcon from '@mui/icons-material/Store';

function BranchUpdate() {
    return (
        <Box sx={{ p: '24px' }}>
            <MiniHeader content="Branch Update" IconComponent={StoreIcon} />
            <BranchUpdateBody />
        </Box>
    );
}

export default BranchUpdate;