import { GenericAbortSignal } from "axios";
import { get } from "@/utils/apiCaller";
import { API_ENDPOINTS } from "..";
import { errorToastHandler } from "@/utils/toast/actions";
import { ListDataResponse } from "@/hooks/useFetchTableList";
import { BranchCardProps } from "@/components/Branch/BranchCard";

type BranchResponse = {
  id: number;
  mngId: string;
  mngName: string | null;
  name: string;
  address: string;
  phone: string;
  email: string;
  avt: string;
};

const branchApi = {
  getAllList: async (signal?: GenericAbortSignal) => {
    return await get<ListDataResponse<BranchCardProps>>(
      API_ENDPOINTS.BRANCH.LIST,
      {
        page: 0,
        limit: -1,
      },
      {
        signal,
      }
    )
      .then((res) => res.data)
      .catch((err) => {
        errorToastHandler(err.response);
        return err;
      });
  },
  getBranchManager: async (id: string, signal?: GenericAbortSignal) => {
    return await get<BranchResponse>(
      `${API_ENDPOINTS.BRANCH.GET_BRANCH_MANAGER}/${id}`,
      undefined,
      {
        signal,
      }
    );
  },
};

export default branchApi;
