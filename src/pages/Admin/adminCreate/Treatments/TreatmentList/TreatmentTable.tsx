import { ListColumn } from "@/components/Table/types/core";
import MyTable from "@/components/Table/MyTable";

export type TreatmentTableData = {
    id: number;
    category: number;
    name: string;
    price: number;
    description: string;
};

const columns: readonly ListColumn<TreatmentTableData>[] = [
    { id: "name", label: "Name", isDetail: true, minWidth: 100 },
    { id: "category", label: "Category", minWidth: 100 },
    { id: "price", label: "Price", minWidth: 100 },
    { id: "description", label: "description", minWidth: 170 },
];

function TreatmentTable({ url }: { url: string }) {
    return (
        <MyTable<TreatmentTableData> url={url} columns={columns} />
    );
}

export default TreatmentTable;