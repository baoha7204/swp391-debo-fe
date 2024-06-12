import { API_ENDPOINTS } from "@/utils/api";
import AllStaffListTable from "../AllStaffListTable";

function ListDentist() {
  return (
    <AllStaffListTable url={API_ENDPOINTS.USERS.LIST_DENTIST} />
  );
}

export default ListDentist;
