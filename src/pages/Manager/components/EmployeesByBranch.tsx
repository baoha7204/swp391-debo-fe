import { ListColumn } from "@/components/Table/types/core";
import MyTable from "@/components/Table/MyTable";
import { formatVnMoney } from "@/utils/helper";

export type TableData = {
    id: number;
    name: string;
    salary: number;
    type: number;
};

const columns: readonly ListColumn<TableData>[] = [
    { id: "name", label: "Name", minWidth: 100, isDetail: true },
    {
        id: "type", label: "Role", minWidth: 100,
        format: (value: number) => {
            if (value === 4) return "Dentist";
            if (value === 3) return "Staff";
            return "Manager";
        }
    },
    {
        id: "salary", label: "Salary", minWidth: 100,
        format: (value: number) => {
            if (value) return formatVnMoney(value);
            return "N/A";
        }
    },
];

function EmployeeByBranch({ url }: { url: string }) {
    return (
        <MyTable<TableData> url={url} columns={columns} />
    );
}

export default EmployeeByBranch;