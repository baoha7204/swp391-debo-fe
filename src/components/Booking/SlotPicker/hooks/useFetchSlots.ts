import { useContext, useEffect, useState } from "react";
import { ProgressContext } from "../../progress.context";
import { errorToastHandler } from "@/utils/toast/actions";
import { Dayjs } from "dayjs";
import appointmentApi from "@/utils/api/appointmentApi";
import { AllowedSlots } from "../../config";

const useFetchSlots = (date: Dayjs) => {
  const { data } = useContext(ProgressContext);
  const [isLoading, setIsLoading] = useState(true);
  const [slots, setSlots] = useState<number[]>([]);

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();
    if (!data || !data.dentist) {
      errorToastHandler({ message: "Please select previous sections first." });
      setSlots([]);
      setIsLoading(false);
      return;
    }

    const fetchRemote = async () => {
      try {
        const response = await appointmentApi.getSlots(
          {
            dentist: data.dentist?.id,
            date: date.toDate().toDateString(),
            treatment: data.treatment?.id,
          },
          abortController.signal
        );
        const result = response.data;
        if (!result.success) {
          errorToastHandler(result);
          return;
        }

        // Filter union logic
        const fileteredSlots = AllowedSlots.filter((slot) =>
          result.data.every((day) => day.includes(slot))
        );

        setSlots(fileteredSlots);
      } catch (error) {
        if (error.name !== "CanceledError") {
          errorToastHandler(error.response);
        }
        setSlots([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRemote();

    return () => {
      abortController.abort();
    };
  }, [data, date]);

  return { slots, isLoading };
};

export default useFetchSlots;
