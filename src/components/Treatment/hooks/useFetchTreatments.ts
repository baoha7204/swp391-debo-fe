import { useContext, useEffect, useState } from "react";
import { errorToastHandler } from "@/utils/toast/actions";
import { TreatmentCardProps } from "../TreatmentCard";
import { ProgressContext } from "@/components/Booking/progress.context";
import treatmentApi from "@/utils/api/treatmentApi";

const useFetchTreatments = () => {
  const { data } = useContext(ProgressContext);
  const [isLoading, setIsLoading] = useState(true);
  const [treatments, setTreatments] = useState<TreatmentCardProps[]>([]);

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    if (!data || !data.branch) {
      errorToastHandler({ message: "Please select a branch first." });
      setTreatments([]);
      setIsLoading(false);
      return;
    }

    const fetchRemote = async () => {
      try {
        const result = await treatmentApi.getListByBranchId(
          data.branch?.id,
          abortController.signal
        );
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
      abortController.abort();
    };
  }, [data]);

  return { treatments, isLoading };
};

export default useFetchTreatments;
