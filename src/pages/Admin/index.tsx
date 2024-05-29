import CreateBranch from "./adminCreate/CreateBranch";
import CreateTreatment from "./adminCreate/CreateTreatment/CreateTreatment";
import CreateStaff from "./adminCreate/CreateStaff/CreateStaff";
import ListStaff from "./adminList/ListStaff";

import AdminSidebar from "./components/AdminSidebar";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import AdminHeader from "./components/AdminHeader";

const components = [
  { name: "CreateBranch", component: <CreateBranch /> },
  { name: "CreateTreatment", component: <CreateTreatment /> },
  { name: "CreateStaff", component: <CreateStaff /> },
  { name: "Staff", component: <ListStaff /> },
];

const Admin = () => {
  return (
    <DefaultLayout>
      <AdminHeader name={components[3].name} />
      <AdminSidebar />
      {components[3].component}
    </DefaultLayout>
  );
};

export default Admin;
