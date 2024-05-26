import AdminSbarVsHder from "../../components/AdminSbarVsHder/AdminSbarVsHder";
import StaffListHeader from "./StaffListHeader";
import StaffListBody from "./StaffListBody";

function ListStaff() {
    return (
        <AdminSbarVsHder>
            <StaffListHeader>
                Staffs
            </StaffListHeader>
            <StaffListBody />
        </AdminSbarVsHder>
    );
}

export default ListStaff;