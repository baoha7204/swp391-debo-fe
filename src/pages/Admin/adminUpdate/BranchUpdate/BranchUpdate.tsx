import { Box } from "@mui/material";
import MiniHeader from "../../components/MiniHeader/MiniHeader";
import BranchUpdateBody from "./BranchUpdateBody";
import StoreIcon from '@mui/icons-material/Store';
import { BranchProvider } from "./branch.context";

function BranchUpdate() {
    return (
        <Box sx={{ p: '24px' }}>
            <MiniHeader content="Branch Update" IconComponent={StoreIcon} />
            <BranchProvider>
                <BranchUpdateBody />
            </BranchProvider>
        </Box>
    );
}

export default BranchUpdate;