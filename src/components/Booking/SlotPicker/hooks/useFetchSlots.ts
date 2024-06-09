import { useContext, useEffect, useState } from "react";
import { ProgressContext } from "../../progress.context";
import { errorToastHandler } from "@/utils/toast/actions";
import { get } from "@/utils/apiCaller";

const useFetchSlots = () => {
  const { data } = useContext(ProgressContext);
  const [isLoading, setIsLoading] = useState(true);
  const [slots, setSlots] = useState<number[]>([]);

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();
    if (!data || !data.dentist || !data.date) {
      errorToastHandler({ message: "Please select previous sections first." });
      setSlots([]);
      setIsLoading(false);
      return;
    }

    const fetchRemote = async () => {
      try {
        const response = await get<number[]>(
          // TODO: set the correct url
          "http://localhost:5173/slot",
          {
            dentist: data.dentist?.id,
            date: data.date?.toDate().toDateString(),
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
  }, [data]);

  return { slots, isLoading };
};

export default useFetchSlots;
