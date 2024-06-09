import { useContext, useEffect, useState } from "react";
import { get } from "@/utils/apiCaller";
import { errorToastHandler } from "@/utils/toast/actions";
import { TreatmentCardProps } from "../TreatmentCard";
import { ProgressContext } from "@/components/Booking/progress.context";

const useFetchTreatments = () => {
  const { data } = useContext(ProgressContext);
  const [isLoading, setIsLoading] = useState(true);
  const [treatments, setTreatments] = useState<TreatmentCardProps[]>([]);

  useEffect(() => {
    const abortController = new AbortController();

    if (!data || !data.branchId) {
      errorToastHandler({ message: "Please select a branch first." });
      setTreatments([]);
      setIsLoading(false);
      return;
    }

    const fetchRemote = async () => {
      try {
        const response = await get<TreatmentCardProps[]>(
          // TODO: set the correct url
          "http://localhost:5173/treatments",
          {
            branch: data.branchId,
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
        setTreatments(result.data);
      } catch (error) {
        if (error.name !== "CanceledError") {
          errorToastHandler(error.response);
        }
        setTreatments([]);
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

  return { treatments, isLoading };
};

export default useFetchTreatments;
