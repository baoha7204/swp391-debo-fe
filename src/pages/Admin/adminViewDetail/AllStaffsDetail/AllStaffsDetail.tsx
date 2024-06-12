import { Box } from "@mui/material";
import MiniHeader from "../../components/MiniHeader/MiniHeader";
import AllStaffsDetailBody from "./AllStaffsDetailBody";
import GroupIcon from "@mui/icons-material/Group";

function AllStaffsDetail() {
    return (
        <Box sx={{ p: '24px' }}>
            <MiniHeader content="Employee Detail" IconComponent={GroupIcon} />
            <AllStaffsDetailBody />
        </Box>
    );
}

export default AllStaffsDetail;