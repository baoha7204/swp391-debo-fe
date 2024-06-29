import CircularIndeterminate from "@/components/CircularIndeterminate";
import useCreatePayment from "./hooks/useCreatePayment";

const PaymentPage = () => {
  const { isLoading } = useCreatePayment();

  return isLoading ? (
    <>
      <CircularIndeterminate />
      <h2>We are creating payment, please wait...</h2>
    </>
  ) : (
    <h2>You are being redirected, please finish the procedure</h2>
  );
};

export default PaymentPage;
