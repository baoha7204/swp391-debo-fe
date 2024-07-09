import MyDentistPatientList from "@/components/Patient/DentistPatientList";
import { API_ENDPOINTS } from "@/utils/api";

const DentistPatientList = () => {
  return <MyDentistPatientList url={API_ENDPOINTS.DENTIST.PATIENT_LIST} />;
};

export default DentistPatientList;
