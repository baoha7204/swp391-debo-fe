import { useContext, useEffect, useState } from "react";
import { ProgressContext } from "../../progress.context";
import { errorToastHandler } from "@/utils/toast/actions";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import appointmentApi from "@/utils/api/appointmentApi";

const useCreateAppointment = () => {
  const { data } = useContext(ProgressContext);
  const [isLoading, setIsLoading] = useState(true);
  const [appointment, setAppointment] = useState<object | null>(null);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    if (!data || !data.dentist || !data.treatment || !data.date || !data.slot) {
      errorToastHandler({ message: "Please choose previous sections first." });
      setIsLoading(false);
      setAppointment(null);
      return;
    }

    const fetchRemote = async () => {
      try {
        const result = await appointmentApi.postSingle(
          data,
          axiosPrivate,
          abortController.signal
        );
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
      abortController.abort();
    };
  }, [data, axiosPrivate]);

  return { data, appointment, isLoading };
};

export default useCreateAppointment;
