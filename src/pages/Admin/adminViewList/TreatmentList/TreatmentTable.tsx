import { ListColumn } from "@/components/Table/types/core";
import MyTable from "@/components/Table/MyTable";
import { formatVnMoney } from "@/utils/helper";

export type TreatmentTableData = {
    id: number;
    category: number;
    name: string;
    description: string;
    price: number;
};

const columns: readonly ListColumn<TreatmentTableData>[] = [
    { id: "name", label: "Name", isDetail: true, minWidth: 100 },
    {
        id: "category", label: "Category", minWidth: 100,
        format: (value: number) => {
            if (value === 1) return "Medical";
            if (value === 2) return "Cosmetic";
            return "";
        }
    },
    { id: "description", label: "Description", minWidth: 100 },
    {
        id: "price", label: "Price", minWidth: 100,
        format: (value: number) => {
            return formatVnMoney(value);
        },
    }
];

function TreatmentTable({ url }: { url: string }) {
    return (
        <MyTable<TreatmentTableData> url={url} columns={columns} />
    );
}

export default TreatmentTable;