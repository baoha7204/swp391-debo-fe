import MyDetail from "@/components/MyDetail/MyDetail";
import { ListColumn } from "@/components/Table/types/core";
import { API_ENDPOINTS } from "@/utils/api";
import { Box } from "@mui/material";
import PatientTreatmentHistory from "./PatientTreatmentHistory";

type PatientDetailData = {
    id: string;
    avt: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    gender: boolean;
    address: string;
};

const columns: readonly ListColumn<PatientDetailData>[] = [
    { id: "avt", label: "Avatar", minWidth: 100 },
    { id: "username", label: "Username", minWidth: 100 },
    { id: "password", label: "Password", minWidth: 100 },
    { id: "firstName", label: "First Name", minWidth: 100 },
    { id: "lastName", label: "Last Name", minWidth: 100 },
    { id: "email", label: "Email", minWidth: 100 },
    { id: "phone", label: "Phone", minWidth: 100 },
    {
        id: "gender", label: "Gender", minWidth: 100,
        format: (value: any) => {
            if (value === true) return "Male";
            if (value === false) return "Female";
            return "";
        }
    },
    { id: "address", label: "Address", minWidth: 100 },
];

function PatientDetailBody() {

    return (
        <Box>
            <MyDetail<PatientDetailData> url={API_ENDPOINTS.USERS.DETAIL} columns={columns} />
            <PatientTreatmentHistory />
        </Box>

    );
}

export default PatientDetailBody;