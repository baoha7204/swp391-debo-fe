import { API_ENDPOINTS } from "@/utils/api";
import MyDetail, { ListColumn } from "../../../../components/MyDetail/MyDetail";

type BranchDetailData = {
    id: number;
    manager_id: string;
    admin_id: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    avatar: string;
};

const columns: readonly ListColumn<BranchDetailData>[] = [
    { id: "avatar", label: "Avatar", minWidth: 100 },
    { id: "name", label: "Name", isDetail: true, minWidth: 100 },
    { id: "manager_id", label: "Manager ID", minWidth: 100 },
    { id: "admin_id", label: "Admin ID", minWidth: 100 },
    { id: "address", label: "Address", minWidth: 100 },
    { id: "phone", label: "Phone", minWidth: 100 },
    { id: "email", label: "Email", minWidth: 100 },
];

function BranchDetailBody() {
    return (
        <MyDetail<BranchDetailData> url={API_ENDPOINTS.BRANCH.BRANCH} columns={columns} />
    );
}

export default BranchDetailBody;