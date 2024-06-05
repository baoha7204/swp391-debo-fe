import { ListColumn } from "@/components/Table/types/core";
import MyTable from "@/components/Table/MyTable";

export type PatientTableData = {
    id: number;
    avt: string;
    fName: string;
    lName: string;
    email: string;
    phone: string;
    birthday: string;
    gender: string;
};

const columns: readonly ListColumn<PatientTableData>[] = [
    { id: "avt", label: "Avatar", isDetail: true, minWidth: 100 },
    { id: "fName", label: "First Name", minWidth: 100 },
    { id: "lName", label: "Last Name", minWidth: 100 },
    { id: "email", label: "Email", minWidth: 170 },
    { id: "phone", label: "Phone", minWidth: 170 },
    { id: "birthday", label: "Birthday", minWidth: 170 },
];

function PatientListTable({ url }: { url: string }) {
    return (
        <MyTable<PatientTableData> url={url} columns={columns} />
    );
}

export default PatientListTable;