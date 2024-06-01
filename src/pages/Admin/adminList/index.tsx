import HeaderList from "../components/HeaderList";
import ListStaff from "./ListStaff";

function AdminList() {
    // const child = [
    //     { name: 'Dentist Staff', body: <ListStaff /> },
    //     { name: 'General Staff', body: <></> },
    //     { name: 'Branch Manager', body: <></> },
    // ]

    const child = {
        name: ['Dentist Staff', 'General Staff', 'Branch Manager'],
        body: [<ListStaff />, <></>, <></>]
    }

    return (
        <>
            <HeaderList
                allowMore3={true}
                showButton={true}
                buttonContent="Add New Staff"
                children={child}
            >
            </HeaderList>
        </>
    );
}

export default AdminList;