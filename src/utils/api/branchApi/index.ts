import { GenericAbortSignal } from "axios";
import { get } from "@/utils/apiCaller";
import { API_ENDPOINTS } from "..";
import { errorToastHandler } from "@/utils/toast/actions";
import { ListDataResponse } from "@/hooks/useFetchTableList";
import { BranchCardProps } from "@/components/Branch/BranchCard";

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
};

export default branchApi;
