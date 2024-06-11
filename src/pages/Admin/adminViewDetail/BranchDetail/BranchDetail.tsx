import MyDetail from "../PatientDetail";
import { ListColumn } from "./Detail";

type BranchDetailData = {
    id: number;
    managerID: string;
    adminId: string;
    name: string;
    address: string;
    avatar: string;
    phone: string;
    email: string;
};

const columns: readonly ListColumn<BranchDetailData>[] = [
    { id: "managerID", label: "Manager ID", minWidth: 100 },
    { id: "adminId", label: "Admin ID", minWidth: 100 },
    { id: "name", label: "Name", minWidth: 100 },
    { id: "address", label: "Address", minWidth: 100 },
    { id: "avatar", label: "Avatar", minWidth: 100 },
    { id: "phone", label: "Phone", minWidth: 100 },
    { id: "email", label: "Email", minWidth: 100 },
];

function BranchDetail({ url }: { url: string }) {

    return (
        <MyDetail<BranchDetailData> url={url} columns={columns} />
    );
}

export default BranchDetail;