import HeaderList from "@/pages/Admin/components/HeaderList";
import ListDentist from "@/pages/Admin/adminViewList/AllStaffList/ListDentist/ListDentist";
import ListStaff from "@/pages/Admin/adminViewList/AllStaffList/ListStaff/ListStaff";

function ManagerAllStaffList() {

    const child = {
        name: ['Dentists', 'Staffs'],
        body: [<ListDentist />, <ListStaff />],
        buttonName: ['', ''],
        route: ['', '']
    }

    return (
        <>
            <HeaderList
                allowMore3={false}
                children={child}
                showButton={false}
            >
            </HeaderList>
        </>
    );
}

export default ManagerAllStaffList;