import { ListColumn } from "@/components/Table/types/core";
import MyTable from "@/components/Table/MyTable";

export type BranchTableData = {
    id: number;
    name: string;
    address: string;
    phone: string;
    email: string;
};

const columns: readonly ListColumn<BranchTableData>[] = [
    { id: "name", label: "Name", isDetail: true, minWidth: 100 },
    { id: "address", label: "Address", minWidth: 100 },
    { id: "phone", label: "Phone", minWidth: 100 },
    { id: "email", label: "Email", minWidth: 100 },
];

function BranchTable({ url }: { url: string }) {
    return (
        <MyTable<BranchTableData> url={url} columns={columns} />
    );
}

export default BranchTable;