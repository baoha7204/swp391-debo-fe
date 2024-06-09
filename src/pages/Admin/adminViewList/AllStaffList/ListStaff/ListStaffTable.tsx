import { ListColumn } from "@/components/Table/types/core";
import MyTable from "@/components/Table/MyTable";

export type GeneralStaffTableData = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: boolean;
    phone: string;
};

const columns: readonly ListColumn<GeneralStaffTableData>[] = [
    { id: "firstName", label: "First Name", minWidth: 100 },
    { id: "lastName", label: "Last Name", minWidth: 100 },
    { id: "email", label: "Email", minWidth: 100, isDetail: true, },
    {
        id: "gender", label: "Gender", minWidth: 100,
        format: (value: any) => {
            if (value === true) return "Male";
            if (value === false) return "Female";
            return "";
        }
    },
    { id: "phone", label: "Phone", minWidth: 100 },
];

function ListStaffTable({ url }: { url: string }) {
    return (
        <MyTable<GeneralStaffTableData> url={url} columns={columns} />
    );
}

export default ListStaffTable;