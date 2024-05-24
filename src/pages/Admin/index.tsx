import AdminSbarVsHder from "./components/CreateScreen/AdminSbarVsHder";
import BranchHeader from "./adminBranch/CreateBranch/BranchHeader";
import BranchBodyTabs from "./adminBranch/CreateBranch/BranchBodyTabs";
import BranchCreateBody from "./adminBranch/CreateBranch/BranchCreateBody";

const Admin = () => {
  return (
    <>
      <AdminSbarVsHder>
        <BranchHeader />
        <BranchCreateBody />
      </AdminSbarVsHder>
    </>
  )
};

export default Admin;
