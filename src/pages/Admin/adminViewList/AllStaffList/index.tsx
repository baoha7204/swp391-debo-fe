import HeaderList from "../../components/HeaderList";
import ListStaff from "./ListDentist/ListDentist";
import ListDentist from "./ListStaff/ListStaff";
import ListManager from "./ListManager/ListManager";

function AdminAllStaffList() {

    const child = {
        name: ['Dentists', 'Staffs', 'Branch Manager'],
        body: [<ListDentist />, <ListStaff />, <ListManager />],
        buttonName: ['Add New Dentist', 'Add New Staff', 'Add New Manager'],
        route: ['/adminTest/adminAllStaffList/createDentist', '/adminTest/adminAllStaffList/createStaff', '/adminTest/adminAllStaffList/createManager']
    }

    return (
        <>
            <HeaderList
                allowMore3={true}
                children={child}
            >
            </HeaderList>
        </>
    );
}

export default AdminAllStaffList;