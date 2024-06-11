import { useContext, useEffect, useState } from "react";
import { get } from "@/utils/apiCaller";
import { errorToastHandler } from "@/utils/toast/actions";
import { ProgressContext } from "@/components/Booking/progress.context";
import { DentistCardProps } from "../DentistCard";

const useFetchDentists = () => {
  const { data } = useContext(ProgressContext);
  const [isLoading, setIsLoading] = useState(true);
  const [dentists, setDentists] = useState<DentistCardProps[]>([]);

  useEffect(() => {
    const abortController = new AbortController();

    if (!data || !data.treatment) {
      errorToastHandler({ message: "Please select a treatment first." });
      setDentists([]);
      setIsLoading(false);
      return;
    }

    const fetchRemote = async () => {
      try {
        const response = await get<DentistCardProps[]>(
          // TODO: set the correct url
          "http://localhost:5173/dentist",
          {
            treatment: data.treatment?.id,
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
        setDentists(result.data);
      } catch (error) {
        if (error.name !== "CanceledError") {
          errorToastHandler(error.response);
        }
        setDentists([]);
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

  return { dentists, isLoading };
};

export default useFetchDentists;
