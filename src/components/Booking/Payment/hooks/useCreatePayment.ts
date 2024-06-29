import { useContext, useEffect, useState } from "react";
import paymentApi from "@/utils/api/paymentApi";
import { errorToastHandler } from "@/utils/toast/actions";
import { ProgressContext } from "../../progress.context";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";

const useCreatePayment = () => {
  const { data, setData } = useContext(ProgressContext);
  const [isLoading, setIsLoading] = useState(true);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    if (!data || !data.appointments || data.appointments.length === 0) {
      errorToastHandler({
        message: "No appointments to pay right now. Please try again",
      });
      setIsLoading(false);
      setData((prev) => ({ ...prev, payment: null }));
      return;
    }

    const fetchRemote = async () => {
      const listAppointmentId = data.appointments!.map((item) => item.id);
      const paymentContent = `Thanh toan don hang ${listAppointmentId.join(
        ", "
      )} thoi gian ${new Date().toUTCString()}`;

      try {
        const response = await paymentApi.postSingle(
          {
            listAppointmentId,
            paymentContent,
            paymentCurrency: "VND",
            requiredAmount: data.treatment!.price!,
            paymentLanguage: "vn",
          },
          axiosPrivate,
          abortController.signal
        );
        const result = response.data;
        if (!result.success) {
          errorToastHandler(result);
          return;
        }
        setData((prev) => ({ ...prev, payment: result.data }));
        // open in new tab
        window.open(result.data?.paymentUrl, "_blank");
      } catch (error) {
        if (error.name !== "CanceledError") {
          errorToastHandler(error.response);
        }
        setData((prev) => ({ ...prev, payment: null }));
      } finally {
        setIsLoading(false);
      }
    };

    fetchRemote();

    return () => {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoading };
};

export default useCreatePayment;
