import { useContext, useLayoutEffect, useState } from "react";
import appointmentApi from "@/utils/api/appointmentApi";
import { errorToastHandler } from "@/utils/toast/actions";
import { RescheduleContext } from "../reschedule.context";

const useRescheduleToken = () => {
  const { data } = useContext(RescheduleContext);
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(true);

  useLayoutEffect(() => {
    setIsLoading(true);
    setSuccess(true);
    const abortController = new AbortController();

    if (
      !data?.id ||
      !data.appointment ||
      !data.appointment?.dent_Id ||
      !data.appointment?.cus_Id ||
      !data.newDentist?.id
    ) {
      errorToastHandler({
        message: "Something wrong when prepare data. Please try again",
      });
      setIsLoading(false);
      setSuccess(false);
      return;
    }

    const fetchRemote = async () => {
      try {
        const response = await appointmentApi.generateRescheduleToken(
          {
            id: data.id!,
            dent_Id: data.appointment!.dent_Id,
            cus_Id: data.appointment!.cus_Id,
            temp_Dent_Id: data.newDentist!.id,
          },
          abortController.signal
        );

        const result = response.data;
        if (!result.success) {
          setSuccess(false);
          errorToastHandler(result);
          return;
        }
        setSuccess(true);
      } catch (error) {
        if (error.name !== "CanceledError") {
          errorToastHandler(error.response);
          setSuccess(false);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchRemote();

    return () => {
      abortController.abort();
    };
  }, [data?.appointment, data?.id, data?.newDentist]);

  return { isLoading, success };
};

export default useRescheduleToken;
