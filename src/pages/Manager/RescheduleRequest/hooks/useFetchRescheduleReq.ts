import { useContext, useEffect, useState } from "react";
import { AppRescheduleRequest } from "..";
import { UserContext } from "@/pages/User/user.context";
import branchApi from "@/utils/api/branchApi";
import appointmentApi from "@/utils/api/appointmentApi";

const useFetchRescheduleReq = () => {
  const { user, isLoading: isUserLoading } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<AppRescheduleRequest[]>([]);

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    if (!user?.id || isUserLoading) {
      setIsLoading(false);
      return;
    }

    const fetchRemote = async () => {
      try {
        // Fetch Branch Manager
        const resBranch = await branchApi.getBranchManager(
          user.id,
          abortController.signal
        );
        const dataBranch = resBranch.data;
        if (!dataBranch.success) {
          console.log(dataBranch);
          return;
        }

        // Fetch Reschedule Request
        const resRescheduleReqs =
          await appointmentApi.getMangerRescheduleRequest(
            dataBranch.data.id,
            abortController.signal
          );
        const dataRescheduleReqs = resRescheduleReqs.data;

        if (!dataRescheduleReqs.success) {
          console.log(dataBranch);
          return;
        }

        setData(dataRescheduleReqs.data.list);
      } catch (error) {
        console.error("Failed to fetch reschedule request:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRemote();

    return () => {
      abortController.abort();
    };
  }, [isUserLoading, user?.id]);

  return { data, isLoading };
};

export default useFetchRescheduleReq;
