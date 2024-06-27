import userApi, { FirstTimeType } from "@/utils/api/userApi";
import { toastInfo, toastWarning } from "@/utils/toast";
import { errorToastHandler } from "@/utils/toast/actions";
import { useEffect, useState } from "react";

const useFirstTime = () => {
  const [result, setResult] = useState<FirstTimeType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    // check first time booking
    const fetchRemote = async () => {
      try {
        const { data } = await userApi.isFirstTime(abortController.signal);
        if (!data.success) {
          errorToastHandler(data);
          return;
        }
        setResult(data.data);
        toastWarning("This is your first time booking!");
        toastInfo(
          "You are determined to choose the General Checkup treatment."
        );
      } catch (error) {
        if (error.name !== "CanceledError") {
          errorToastHandler(error.response);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchRemote();

    return () => {
      abortController.abort();
    };
  }, []);

  return { result, isLoading };
};

export default useFirstTime;
