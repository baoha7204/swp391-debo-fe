import { API_ENDPOINTS } from "@/utils/api";
import ListStaffTable from "./ListStaffTable";

function ListStaff() {
  return (
    <ListStaffTable url={API_ENDPOINTS.USERS.LIST_DENTIST} />
  );
}

export default ListStaff;
