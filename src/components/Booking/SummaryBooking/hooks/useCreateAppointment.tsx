import { useContext, useEffect, useState } from "react";
import { ProgressContext } from "../../progress.context";
import { errorToastHandler } from "@/utils/toast/actions";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import appointmentApi from "@/utils/api/appointmentApi";

export type AppointmentResponse = {
  id: string;
  dent_Id: string;
  status: string;
  startDate: Date;
  timeSlot: number;
  treatId: number;
};

const useCreateAppointment = () => {
  const { data, setData } = useContext(ProgressContext);
  const [isLoading, setIsLoading] = useState(true);
  const [appointments, setAppointments] = useState<
    AppointmentResponse[] | null
  >(null);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    if (!data || !data.dentist || !data.treatment || !data.date || !data.slot) {
      errorToastHandler({ message: "Please choose previous sections first." });
      setIsLoading(false);
      setAppointments(null);
      return;
    }

    const fetchRemote = async () => {
      try {
        const response = await appointmentApi.createBulk(
          data,
          axiosPrivate,
          abortController.signal
        );
        const result = response.data;
        if (!result.success) {
          errorToastHandler(result);
          return;
        }
        setAppointments(result.data);
      } catch (error) {
        if (error.name !== "CanceledError") {
          errorToastHandler(error.response);
        }
        setAppointments(null);
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

  return { data, setData, appointments, isLoading };
};

export default useCreateAppointment;
