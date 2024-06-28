import { useContext, useEffect, useState } from "react";
import paymentApi, { PaymentResponseType } from "@/utils/api/paymentApi";
import { errorToastHandler } from "@/utils/toast/actions";
import { ProgressContext } from "../../progress.context";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";

const useCreatePayment = () => {
  const { data } = useContext(ProgressContext);
  const [isLoading, setIsLoading] = useState(true);
  const [payment, setPayment] = useState<PaymentResponseType | null>(null);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    if (!data || !data.appointments || data.appointments.length === 0) {
      errorToastHandler({
        message: "No appointments to pay right now. Please try again",
      });
      setIsLoading(false);
      setPayment(null);
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
        setPayment(result.data);
        // open in new tab
        const paymentWindow = window.open(result.data?.paymentUrl, "_blank");
        if (!paymentWindow) {
          errorToastHandler({
            message: "Popup blocked, please allow popup for this site",
          });
          setPayment(null);
          return;
        }
        // Listen for the payment response message from the VNPay sandbox
        console.log(paymentWindow);
      } catch (error) {
        if (error.name !== "CanceledError") {
          errorToastHandler(error.response);
        }
        setPayment(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRemote();

    return () => {
      abortController.abort();
    };
  }, [data, axiosPrivate]);

  return { payment, isLoading };
};

export default useCreatePayment;
