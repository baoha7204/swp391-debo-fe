import { Box } from "@mui/material";
import MiniHeader from "@/pages/Admin/components/MiniHeader/MiniHeader";
import ChecklistIcon from "@mui/icons-material/Checklist";
import { API_ENDPOINTS } from "@/utils/api";
import { ListColumn } from "@/components/Table/types/core";
import { formatDentistName } from "@/utils/helper";
import MyTable from "@/components/Table/MyTable";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/pages/User/user.context";
import axios from "@/config/axios";

export type AppointmentListData = {
        id: string;
        name: string;
        status: string;
        description: string;
        dentistFullName: string;
        startDate: Date;
};

type Branch = {
    id: number;
    mngId: string;
}


const columns: readonly ListColumn<AppointmentListData>[] = [
    { id: "name", label: "Name", isDetail: true, minWidth: 170 },
    { id: "description", label: "Description", minWidth: 170 },
    {
        id: "dentistFullName",
        label: "Dentist",
        minWidth: 170,
        format: formatDentistName,
    },
    {
        id: "startDate",
        label: "Date",
        minWidth: 200,
        isDate: true,
    },
];

function ManagerAppointmentList() {

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

    console.log(`${API_ENDPOINTS.BRANCH.BRANCH_APPOINTMENT}/${branch.id}`);

    return (
        <Box sx={{ p: '24px' }}>
            <MiniHeader content="Appointment List" IconComponent={ChecklistIcon} />
            <MyTable<AppointmentListData & { timeSlot: number }>
                url={`${API_ENDPOINTS.BRANCH.BRANCH_APPOINTMENT}/${branch.id}`}
                columns={columns}        >
            </MyTable>
        </Box>
    );
}

export default ManagerAppointmentList;