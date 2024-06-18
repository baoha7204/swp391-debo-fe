import MyDetail from "@/components/MyDetail/MyDetail";
import { ListColumn } from "@/components/Table/types/core";
import { API_ENDPOINTS } from "@/utils/api";

type AllStaffsDetailData = {
    id: number;
    avt: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    gender: boolean;
};

const columns: readonly ListColumn<AllStaffsDetailData>[] = [
    {
        id: "avt", label: "Avatar", minWidth: 100,
        format: (value: string) => {
            return <img src={value} alt="avatar" style={{ maxWidth: "100px", height: "auto", borderRadius: '10px' }} />;
        }
    },
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
];

function AllStaffsDetailBody() {
    return (
        <MyDetail<AllStaffsDetailData> url={API_ENDPOINTS.USERS.USER} columns={columns} updateBut={true} />
    );
}

export default AllStaffsDetailBody;