import MyDetail, { ListColumn } from "@/components/MyDetail/MyDetail";
import { API_ENDPOINTS } from "@/utils/api";

type TreatmentDetailData = {
    id: number;
    name: string;
    description: string;
    price: number;
    category: number;
};

const columns: readonly ListColumn<TreatmentDetailData>[] = [
    { id: "name", label: "Name", minWidth: 100 },
    { id: "description", label: "Description", minWidth: 100 },
    { id: "price", label: "Price", minWidth: 100 },
    {
        id: "category", label: "Category", minWidth: 100,
        format: (value: any) => {
            if (value === 1) return "Medical";
            if (value === 2) return "Cosmetic";
            return "";
        }
    },
];

function TreatmentDetailBody() {
    return (
        <MyDetail<TreatmentDetailData> url={API_ENDPOINTS.TREATMENT.TREATMENT} columns={columns} deleteBut={true} updateBut={true} />
    );
}

export default TreatmentDetailBody;