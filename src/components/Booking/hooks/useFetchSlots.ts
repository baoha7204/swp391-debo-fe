import { useContext, useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { ProgressContext } from "../progress.context";
import { errorToastHandler } from "@/utils/toast/actions";
import appointmentApi from "@/utils/api/appointmentApi";
import { AllowedSlots } from "../config";

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

        let availableSlots = AllowedSlots;

        // Validate today logic
        if (date.isSame(dayjs(), "day")) {
          const now = new Date();
          const currentHour = now.getHours();
          availableSlots = availableSlots.filter(
            (slot) => slot - 2 >= currentHour
          );
        }

        // Filter union logic
        const fileteredSlots = availableSlots.filter((slot) =>
          result.data.every((day) => day.includes(slot))
        );

        if (fileteredSlots.length === 0) {
          errorToastHandler({ message: "No slots available." });
        }

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
