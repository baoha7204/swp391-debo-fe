import { useContext, useLayoutEffect, useState } from "react";
import { ProgressContext } from "../../progress.context";
import paymentApi from "@/utils/api/paymentApi";
import { errorToastHandler } from "@/utils/toast/actions";

const usePaymentStatus = () => {
  const { data } = useContext(ProgressContext);
  const [status, setStatus] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    if (!data) {
      setStatus(false);
      setIsLoading(false);
      return;
    }

    if (data.payment?.isGeneralCheckup) {
      setStatus(true);
      setIsLoading(false);
      return;
    }

    const fetchRemote = async () => {
      try {
        const response = await paymentApi.getPaymentStatus(
          data!.payment!.paymentId,
          abortController.signal
        );
        const result = response.data;
        if (!result.success) {
          errorToastHandler(result);
          return;
        }
        if (data.payment?.isGeneralCheckup) {
          setStatus(true);
          return;
        }
        console.log(result.data);
        // TODO: check payment status
        if (result.data?.paymentStatus !== "00") {
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
  }, [data]);

  return { status, isLoading };
};

export default usePaymentStatus;
