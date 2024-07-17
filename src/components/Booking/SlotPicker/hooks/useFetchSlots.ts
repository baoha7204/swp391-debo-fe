import { useContext, useEffect, useState } from "react";
import { ProgressContext } from "../../progress.context";
import { errorToastHandler } from "@/utils/toast/actions";
import { get } from "@/utils/apiCaller";
import { Dayjs } from "dayjs";
import { API_ENDPOINTS } from "@/utils/api";

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
        const response = await get<number[]>(
          API_ENDPOINTS.SLOT.LIST,
          {
            dentist: data.dentist?.id,
            date: date.toDate().toDateString(),
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
        setSlots(result.data);
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
      console.log("aborting...");
      abortController.abort();
    };
  }, [data, date]);

  return { slots, isLoading };
};

export default useFetchSlots;
