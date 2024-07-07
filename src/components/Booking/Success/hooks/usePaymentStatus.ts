import { useContext, useLayoutEffect, useState } from "react";
import { ProgressContext } from "../../progress.context";
import paymentApi from "@/utils/api/paymentApi";
import { errorToastHandler } from "@/utils/toast/actions";

const usePaymentStatus = (userLoading: boolean, id?: string) => {
  const { data } = useContext(ProgressContext);
  const [status, setStatus] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    if ((data && data.payment?.isGeneralCheckup) || !id || userLoading) {
      setStatus(true);
      setIsLoading(false);
      return;
    }

    const fetchRemote = async () => {
      try {
        const response = await paymentApi.getPaymentStatus(
          id,
          abortController.signal
        );
        const result = response.data;
        if (!result.success) {
          errorToastHandler(result);
          return;
        }
        if (result.data?.paymentStatus !== "Success") {
          setStatus(false);
          return;
        }
        setStatus(true);
      } catch (error) {
        if (error.name !== "CanceledError") {
          errorToastHandler(error.response);
        }
        setStatus(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRemote();

    return () => {
      abortController.abort();
    };
  }, [data, id, userLoading]);

  return { status, isLoading };
};

export default usePaymentStatus;
