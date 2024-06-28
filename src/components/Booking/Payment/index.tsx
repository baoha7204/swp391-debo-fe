import { useContext, useEffect } from "react";
import CircularIndeterminate from "@/components/CircularIndeterminate";
import useCreatePayment from "./hooks/useCreatePayment";
import { ProgressContext } from "../progress.context";

const PaymentPage = () => {
  const { handleNext, handleDoneIncrement } = useContext(ProgressContext);
  const { payment, isLoading } = useCreatePayment();

  useEffect(() => {
    if (payment?.paymentStatus === "00") {
      handleNext();
      handleDoneIncrement();
    }
  }, [payment, handleNext, handleDoneIncrement]);

  useEffect(() => {
    window.addEventListener("message", (event) => {
      if (event.origin !== "http://localhost:5193/api/payment/vnpay-return")
        return;
      console.log(event);
    });
  }, []);

  return isLoading ? (
    <>
      <CircularIndeterminate />
      <h2>Creating payment pending, please wait...</h2>
    </>
  ) : !payment || payment.paymentStatus != "00" ? (
    <h2>Creating payment failed, please try again</h2>
  ) : (
    <h2>You are being redirected, please finish the procedure</h2>
  );
};

export default PaymentPage;
