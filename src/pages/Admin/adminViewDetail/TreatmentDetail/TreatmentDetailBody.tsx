import MyDetail from "@/components/MyDetail/MyDetail";
import { ListColumn } from "@/components/Table/types/core";
import { API_ENDPOINTS } from "@/utils/api";
import { formatVnMoney } from "@/utils/helper";

type TreatmentDetailData = {
    id: number;
    name: string;
    description: string;
    price: number;
    category: number;
};

const columns: readonly ListColumn<TreatmentDetailData>[] = [
    { id: "name", label: "Name", minWidth: 100 },
    {
        id: "category", label: "Category", minWidth: 100,
        format: (value: number) => {
            if (value === 1) return "Medical";
            if (value === 2) return "Cosmetic";
            return "";
        }
    },
    {
        id: "price", label: "Price", minWidth: 100,
        format: (value: number) => {
            return formatVnMoney(value);
        }
    },
    { id: "description", label: "Description", minWidth: 100 },

];

function TreatmentDetailBody() {
    return (
        <MyDetail<TreatmentDetailData> url={API_ENDPOINTS.TREATMENT.TREATMENT} columns={columns} deleteBut={true} updateBut={true} />
    );
}

export default TreatmentDetailBody;