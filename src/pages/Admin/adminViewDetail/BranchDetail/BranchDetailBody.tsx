import { API_ENDPOINTS } from "@/utils/api";
import MyDetail from "@/components/MyDetail/MyDetail";
import { ListColumn } from "@/components/Table/types/core";

type BranchDetailData = {
    id: number;
    mngId: string;
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
    { id: "mngId", label: "Manager ID", minWidth: 100 },
    { id: "admin_id", label: "Admin ID", minWidth: 100 },
    { id: "address", label: "Address", minWidth: 100 },
    { id: "phone", label: "Phone", minWidth: 100 },
    { id: "email", label: "Email", minWidth: 100 },
];

function BranchDetailBody() {
    return (
        <MyDetail<BranchDetailData> url={API_ENDPOINTS.BRANCH.LIST} columns={columns} deleteBut={true} updateBut={true} />
    );
}

export default BranchDetailBody;