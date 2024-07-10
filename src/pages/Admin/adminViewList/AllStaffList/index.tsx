import HeaderList from "../../components/HeaderList";
import ListDentist from "./ListDentist/ListDentist";
import ListStaff from "./ListStaff/ListStaff";
import ListManager from "./ListManager/ListManager";

function AdminAllStaffList() {

    const child = {
        name: ['Dentists', 'Staffs', 'Branch Manager'],
        body: [<ListDentist />, <ListStaff />, <ListManager />],
        buttonName: ['Add New Dentist', 'Add New Staff', 'Add New Manager'],
        route: ['/admin/adminAllStaffList/createDentist', '/admin/adminAllStaffList/createStaff', '/admin/adminAllStaffList/createManager']
    }

    return (
        <>
            <HeaderList
                allowMore3={true}
                children={child}
                showButton={true}
            >
            </HeaderList>
        </>
    );
}

export default AdminAllStaffList;