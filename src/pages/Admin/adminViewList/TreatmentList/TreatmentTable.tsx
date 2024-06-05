import { ListColumn } from "@/components/Table/types/core";
import MyTable from "@/components/Table/MyTable";

export type TreatmentTableData = {
    id: number;
    category: number;
    name: string;
    description: string;
    price: number;
};

const columns: readonly ListColumn<TreatmentTableData>[] = [
    { id: "category", label: "Category", minWidth: 100 },
    { id: "name", label: "Name", isDetail: true, minWidth: 100 },
    { id: "description", label: "Description", minWidth: 170 },
    { id: "price", label: "Price", minWidth: 100 },
];

function TreatmentTable({ url }: { url: string }) {
    return (
        <MyTable<TreatmentTableData> url={url} columns={columns} />
    );
}

export default TreatmentTable;