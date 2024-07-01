import { useContext, useLayoutEffect, useState } from "react";
import { Dayjs } from "dayjs";
import appointmentApi from "@/utils/api/appointmentApi";
import { errorToastHandler } from "@/utils/toast/actions";
import { RescheduleContext } from "../reschedule.context";

const useFetchReSlot = (date: Dayjs) => {
  const { data } = useContext(RescheduleContext);
  const [isLoading, setIsLoading] = useState(true);
  const [slots, setSlots] = useState<number[]>([]);

  useLayoutEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    if (!data?.id) {
      errorToastHandler({
        message: "Please choose an appointment to reschedule.",
      });
      setSlots([]);
      setIsLoading(false);
      return;
    }

    const fetchRemote = async () => {
      try {
        const responseDetail = await appointmentApi.getDetail(
          data.id,
          abortController.signal
        );
        const result = responseDetail.data;

        if (!result.success) {
          errorToastHandler(result);
          return;
        }

        const responseSlots = await appointmentApi.getReSlots(
          {
            startDate: date.toDate().toDateString(),
            dentId: result.data.dent_Id,
          },
          abortController.signal
        );

        const resultSlots = responseSlots.data;
        if (!resultSlots.success) {
          errorToastHandler(resultSlots);
          return;
        }

        // Filter slots
        const availableSlots = resultSlots.data.list
          .map((slot) => slot.timeSlot)
          .filter((slot) => slot !== 12);

        if (availableSlots.length === 0) {
          errorToastHandler({ message: "No slots available." });
        }
        setSlots(availableSlots);
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
  }, [data?.id, date]);

  return { isLoading, slots };
};

export default useFetchReSlot;
