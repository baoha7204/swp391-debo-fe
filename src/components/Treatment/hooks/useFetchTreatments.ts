import { useContext, useEffect, useState } from "react";
import { get } from "@/utils/apiCaller";
import { errorToastHandler } from "@/utils/toast/actions";
import { TreatmentCardProps } from "../TreatmentCard";
import { ProgressContext } from "@/components/Booking/progress.context";
import { API_ENDPOINTS } from "@/utils/api";

const useFetchTreatments = () => {
  const { data } = useContext(ProgressContext);
  const [isLoading, setIsLoading] = useState(true);
  const [treatments, setTreatments] = useState<TreatmentCardProps[]>([]);

  useEffect(() => {
    const abortController = new AbortController();

    if (!data || !data.branch) {
      errorToastHandler({ message: "Please select a branch first." });
      setTreatments([]);
      setIsLoading(false);
      return;
    }

    const fetchRemote = async () => {
      try {
        const response = await get<TreatmentCardProps[]>(
          `${API_ENDPOINTS.TREATMENT.LIST.BY_BRANCH}/${data.branch?.id}`,
          undefined,
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
