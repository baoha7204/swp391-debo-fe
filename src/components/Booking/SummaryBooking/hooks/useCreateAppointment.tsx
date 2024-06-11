import { useContext, useEffect, useState } from "react";
import { ProgressContext } from "../../progress.context";
import { errorToastHandler } from "@/utils/toast/actions";
import { API_ENDPOINTS } from "@/utils/api";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";

const useCreateAppointment = () => {
  const { data } = useContext(ProgressContext);
  const [isLoading, setIsLoading] = useState(true);
  const [appointment, setAppointment] = useState<object | null>(null);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const abortController = new AbortController();

    if (!data || !data.dentist || !data.treatment || !data.date || !data.slot) {
      errorToastHandler({ message: "Please choose previous sections first." });
      setIsLoading(false);
      setAppointment(null);
      return;
    }

    const fetchRemote = async () => {
      try {
        const response = await axiosPrivate.post(
          API_ENDPOINTS.APPOINTMENT.ONE,
          {
            treateId: data.treatment?.id,
            dentId: data.dentist?.id,
            date: data.date?.toDate().toDateString(),
            timeSlot: data.slot,
          },
          {
            signal: abortController.signal,
          }
        );
        const result = response.data;
        if (!result.success) {
          errorToastHandler(result);
          return;
        }
        setAppointment(result.data);
      } catch (error) {
        if (error.name !== "CanceledError") {
          errorToastHandler(error.response);
        }
        setAppointment(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRemote();

    return () => {
      console.log("aborting...");
      abortController.abort();
    };
  }, [data, axiosPrivate]);

  return { data, appointment, isLoading };
};

export default useCreateAppointment;
