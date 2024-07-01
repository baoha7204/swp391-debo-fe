import {
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useEffect,
    useState,
} from "react";
import { API_ENDPOINTS } from "@/utils/api";
import axios from "@/config/axios";
import { useParams } from "react-router-dom";

type BranchUpdate = {
    id: number;
    mngId: string | null;
    name: string;
    address: string | null;
    phone: string | null;
    email: string;
    avt: string | null;
} | null;

type BranchContextType<T> = {
    branch: T;
    setBranch: Dispatch<SetStateAction<T>>;
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const BranchContext = createContext<BranchContextType<BranchUpdate>>({
    branch: null,
    setBranch: () => null,
    isLoading: true,
    setIsLoading: () => true,
});

console.log('BranchContext');

const BranchProvider = ({ children }: PropsWithChildren) => {
    const [branch, setBranch] = useState<BranchUpdate>(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams<{ id: string }>();

    console.log(`${API_ENDPOINTS.BRANCH.LIST}/${id}`);


    useEffect(() => {
        setIsLoading(true);

        const fetchBranch = async () => {
            try {
                const res = await axios.get(`${API_ENDPOINTS.BRANCH.LIST}/${id}`);
                if (res.status === 200) {
                    const branchData = res.data.data;
                    setBranch(branchData);
                    console.log('branchData', branchData);
                }
            } catch (error) {
                console.error("Error fetching branch data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBranch();

    }, []);

    if (isLoading) {
        return <div>Loading.....</div>
    }

    return (
        <BranchContext.Provider
            value={{
                branch,
                setBranch,
                isLoading,
                setIsLoading,
            }}
        >
            {children}
        </BranchContext.Provider>
    );
};

export type { BranchContextType, BranchUpdate };
export { BranchContext, BranchProvider };
