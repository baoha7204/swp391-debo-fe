import { API_ENDPOINTS } from "@/utils/api";
import AllStaffListTable from "../AllStaffListTable";

function ListManager() {
    return (
        <AllStaffListTable url={API_ENDPOINTS.USERS.LIST_MANAGER} />
    );
}

export default ListManager;
