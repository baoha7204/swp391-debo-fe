import { useEffect, useState } from "react";
import { BranchCardProps } from "../BranchCard";
import { get } from "@/utils/apiCaller";
import { errorToastHandler } from "@/utils/toast/actions";
import { API_ENDPOINTS } from "@/utils/api";
import { ListDataResponse } from "@/hooks/useFetchTableList";

const useFetchAllBranch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [branches, setBranches] = useState<BranchCardProps[]>([]);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchRemote = async () => {
      try {
        const response = await get<ListDataResponse<BranchCardProps>>(
          API_ENDPOINTS.BRANCH.LIST,
          {
            page: 0,
            limit: -1,
          },
          {
            signal: abortController.signal,
          }
        );
        const data = response.data;
        if (!data.success) {
          errorToastHandler(data);
          return;
        }
        setBranches(data.data.list);
      } catch (error) {
        if (error.name !== "CanceledError") {
          errorToastHandler(error.response);
        }
        setBranches([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRemote();

    return () => {
      console.log("aborting...");
      abortController.abort();
    };
  }, []);

  return { branches, isLoading };
};

export default useFetchAllBranch;
