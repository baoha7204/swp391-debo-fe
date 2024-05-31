import HeaderList from "../components/HeaderList";

function AdminList() {
    return (
        <>
            <HeaderList
                allowMore3={true}
                showButton={true}
                buttonContent="Add New Staff"
                children={[
                    'Dentist Staff',
                    'General Staff',
                    'Branch Manager'
                ]}>
            </HeaderList>
        </>
    );
}

export default AdminList;