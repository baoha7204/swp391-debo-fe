import AdminSbarVsHder from "../../components/AdminSbarVsHder/AdminSbarVsHder";
import BranchCreateBody from "./BranchCreateBody";

const CreateBranch = () => {
    return (
        <>
            <AdminSbarVsHder>
                Create Branch
                <BranchCreateBody>
                    {/* Maybe children */}
                </BranchCreateBody>
            </AdminSbarVsHder>
        </>
    )
};

export default CreateBranch;