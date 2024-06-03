import { ListColumn } from "@/components/Table/types/core";
import MyTable from "@/components/Table/MyTable";

export type BranchTableData = {
    id: number;
    address: string;
    phone: string;
    altPeoples: string;
    email: string;
};

const columns: readonly ListColumn<BranchTableData>[] = [
    { id: "address", label: "Address", isDetail: true, minWidth: 100 },
    { id: "phone", label: "Phone", minWidth: 100 },
    { id: "altPeoples", label: "Alt Peoples", minWidth: 170 },
    { id: "email", label: "Email", minWidth: 170 },
];

function BranchTable({ url }: { url: string }) {
    return (
        <MyTable<BranchTableData> url={url} columns={columns} />
    );
}

export default BranchTable;