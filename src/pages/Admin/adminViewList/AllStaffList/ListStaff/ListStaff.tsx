import { API_ENDPOINTS } from "@/utils/api";
import AllStaffListTable from "../AllStaffListTable";

function ListStaff() {
    return (
        <AllStaffListTable url={API_ENDPOINTS.USERS.LIST_STAFF} />
    );
}

export default ListStaff;