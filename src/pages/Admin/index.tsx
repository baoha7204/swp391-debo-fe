import CreateBranch from "./adminCreate/CreateBranch/CreateBranch";
import AdminSidebar from "./components/AdminSidebar";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import AdminHeader from "./components/AdminHeader";

const components = [{ name: "CreateBranch", component: <CreateBranch /> }];

const Admin = () => {
  return (
    <DefaultLayout>
      <AdminHeader name={components[0].name} />
      <AdminSidebar />
      {components[0].component}
    </DefaultLayout>
  );
};

export default Admin;
