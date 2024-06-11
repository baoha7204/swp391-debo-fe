import { API_ENDPOINTS } from "@/utils/api";
import BranchDetail from "./BranchDetail";
import { useParams } from "react-router-dom";

function BranchTableDetail() {
    const { id } = useParams();

    console.log(id);

    return (
        <BranchDetail url={API_ENDPOINTS.BRANCH.BRANCH} />
    );
}

export default BranchTableDetail;