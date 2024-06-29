import { API_ENDPOINTS } from "@/utils/api";
import MyDetail from "@/components/MyDetail/MyDetail";
import { ListColumn } from "@/components/Table/types/core";

type BranchDetailData = {
    id: number;
    mngId: string;
    mngName: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    avt: string;
};

const columns: readonly ListColumn<BranchDetailData>[] = [
    {
        id: "avt", label: "Avatar", minWidth: 100,
        format: (value: string) => {
            return <img src={value} alt="avatar" style={{ maxWidth: "100px", height: "auto", borderRadius: '10px' }} />;
        }
    },
    { id: "name", label: "Name", isDetail: true, minWidth: 100 },
    { id: "mngName", label: "Manager Name", minWidth: 100 },
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