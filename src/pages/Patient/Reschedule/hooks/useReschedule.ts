import appointmentApi from "@/utils/api/appointmentApi";
import { errorToastHandler } from "@/utils/toast/actions";
import { useContext, useLayoutEffect, useState } from "react";
import { RescheduleContext } from "../reschedule.context";

const useReschedule = () => {
  const { data } = useContext(RescheduleContext);
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(true);

  useLayoutEffect(() => {
    setIsLoading(true);
    setSuccess(true);
    const abortController = new AbortController();

    if (!data?.id) {
      errorToastHandler({ message: "No appointment ID found." });
      setIsLoading(false);
      setSuccess(false);
      return;
    }

    const fetchRemote = async () => {
      try {
        const response = await appointmentApi.reschedulePatient(
          data.id!,
          {
            id: data.id!,
            startDate: data.newDate!.toDate().toDateString(),
            timeSlot: data.newSlot!,
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
  }, [data?.id, data?.newDate, data?.newSlot]);

  return { isLoading, success };
};

export default useReschedule;
