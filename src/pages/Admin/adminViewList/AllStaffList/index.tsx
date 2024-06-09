import HeaderList from "../../components/HeaderList";
import ListStaff from "./ListStaff/ListStaff";
import ListDentist from "./ListDentist/ListDentist";
import ListManager from "./ListManager/ListManager";

function AdminList() {

    const child = {
        name: ['Dentists', 'Staffs', 'Branch Manager'],
        body: [<ListStaff />, <ListDentist />, <ListManager />],
        buttonName: ['Add New Dentist', 'Add New Staff', 'Add New Manager'],
        route: ['/adminTest/adminStaffList/createStaff', 'adminTest/createStaff', 'adminTest/createBranchManager']
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

export default AdminList;