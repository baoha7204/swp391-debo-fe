import { useContext, useEffect, useState } from "react";
import { errorToastHandler } from "@/utils/toast/actions";
import { ProgressContext } from "@/components/Booking/progress.context";
import { DentistCardProps } from "../DentistCard";
import dentistApi from "@/utils/api/dentistApi";

const useFetchDentists = () => {
  const { data } = useContext(ProgressContext);
  const [isLoading, setIsLoading] = useState(true);
  const [dentists, setDentists] = useState<DentistCardProps[]>([]);

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    if (!data || !data.treatment) {
      errorToastHandler({ message: "Please select a treatment first." });
      setDentists([]);
      setIsLoading(false);
      return;
    }

    const fetchRemote = async () => {
      try {
        const result = await dentistApi.getListByTreatmentId(
          data.treatment?.id,
          abortController.signal
        );
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
      abortController.abort();
    };
  }, [data]);

  return { dentists, isLoading };
};

export default useFetchDentists;
