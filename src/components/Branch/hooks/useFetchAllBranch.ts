import { useEffect, useState } from "react";
import { BranchCardProps } from "../BranchCard";
import { errorToastHandler } from "@/utils/toast/actions";
import branchApi from "@/utils/api/branchApi";

const useFetchAllBranch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [branches, setBranches] = useState<BranchCardProps[]>([]);

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    const fetchRemote = async () => {
      try {
        const data = await branchApi.getAllList(abortController.signal);
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
      abortController.abort();
    };
  }, []);

  return { branches, isLoading };
};

export default useFetchAllBranch;
