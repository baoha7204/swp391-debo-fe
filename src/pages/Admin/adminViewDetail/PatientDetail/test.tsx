import { API_ENDPOINTS } from "@/utils/api";
import MyDetail from "./index";

const fields = [
    { id: 'name', label: 'Name' },
    { id: 'age', label: 'Age' },
    { id: 'email', label: 'Email' },
    { id: 'address', label: 'Address' },
    { id: 'phone', label: 'Phone' },
    { id: 'occupation', label: 'Occupation' },
    { id: 'company', label: 'Company' },
    { id: 'bio', label: 'Bio' },
];

const PatientDetailTest = () => {
    return (
        <MyDetail
            url={API_ENDPOINTS.TREATMENT.TREATMENT_ID}
            header="Patient Detail"
            fields={fields}
        />
    )
}

export default PatientDetailTest;