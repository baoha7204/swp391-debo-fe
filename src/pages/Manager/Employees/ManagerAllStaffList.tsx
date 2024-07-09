import { Box } from "@mui/material";
import MiniHeader from "@/pages/Admin/components/MiniHeader/MiniHeader";
import GroupIcon from "@mui/icons-material/Group";
import EmployeeByBranch from "../components/EmployeesByBranch";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/pages/User/user.context";
import { API_ENDPOINTS } from "@/utils/api";
import axios from "@/config/axios";

type Branch = {
    id: number;
    mngId: string;
}

function ManagerAllStaffList() {

    const { user, isLoading: isUserLoading } = useContext(UserContext);
    const [branch, setBranch] = useState<Branch>('' as any);

    console.log('Manager ID', user?.id);

    const getBranchManager = async () => {
        try {
            const res = await axios.get(`${API_ENDPOINTS.BRANCH.GET_BRANCH_MANAGER}/${user?.id}`);
            console.log('Branch Manager', res.data.data);
            setBranch(res.data.data);
        } catch (error) {
            console.error("Failed to fetch branch manager:", error);
        }
    }

    useEffect(() => {
        getBranchManager();
        if (!user?.id || isUserLoading) {
            return;
        }
    }, [user?.id]);

    return (
        <Box sx={{ p: '24px' }}>
            <MiniHeader content="Employees" IconComponent={GroupIcon} />
            <EmployeeByBranch url={`${API_ENDPOINTS.USERS.EMPLOYEE_WITH_BRANCH_ID}/${branch.id}`} />
        </Box>
    );
}

export default ManagerAllStaffList;