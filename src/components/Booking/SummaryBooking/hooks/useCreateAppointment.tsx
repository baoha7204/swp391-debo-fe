import { useContext, useEffect, useState } from "react";
import { ProgressContext } from "../../progress.context";
import { errorToastHandler } from "@/utils/toast/actions";
import { post } from "@/utils/apiCaller";

const useCreateAppointment = () => {
  const { data } = useContext(ProgressContext);
  const [isLoading, setIsLoading] = useState(true);
  const [appointment, setAppointment] = useState<object | null>(null);

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
        // TODO: axiosPrivate
        const response = await post(
          // TODO: set the correct url
          "http://localhost:5173/appointment",
          {
            treatId: data.treatment?.id,
            dentistId: data.dentist?.id,
            date: data.date?.toDate().toDateString(),
            slot: data.slot,
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
  }, [data]);

  return { appointment, isLoading };
};

export default useCreateAppointment;
