import AdminSbarVsHder from "../../components/AdminSbarVsHder/AdminSbarVsHder";
import BranchHeader from "./BranchHeader";
import BranchBodyTabs from "./BranchBodyTabs";
import BranchCreateBody from "./BranchCreateBody";

const CreateBranch = () => {
    return (
        <>
            <AdminSbarVsHder>
                <BranchHeader>
                    Create Branch
                </BranchHeader>
                <BranchCreateBody>
                    {/* Maybe children */}
                </BranchCreateBody>
            </AdminSbarVsHder>
        </>
    )
};

export default CreateBranch;