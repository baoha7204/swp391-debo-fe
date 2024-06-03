import { ListColumn } from "@/components/Table/types/core";
import MyTable from "@/components/Table/MyTable";

export type GeneralStaffTableData = {
    id: number;
    fName: string;
    lName: string;
    email: string;
    role: string;
    phone: string;
};

const columns: readonly ListColumn<GeneralStaffTableData>[] = [
    { id: "fName", label: "First Name", isDetail: true, minWidth: 100 },
    { id: "lName", label: "Last Name", minWidth: 100 },
    { id: "email", label: "Email", minWidth: 170 },
    { id: "role", label: "Role", minWidth: 170 },
    { id: "phone", label: "Phone", minWidth: 170 },
];

function ListStaffTable({ url }: { url: string }) {
    return (
        <MyTable<GeneralStaffTableData> url={url} columns={columns} />
    );
}

export default ListStaffTable;