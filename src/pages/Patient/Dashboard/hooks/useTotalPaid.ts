import { UserContext } from "@/pages/User/user.context";
import patientDashboardApi from "@/utils/api/dashboardApi/patient";
import { errorToastHandler } from "@/utils/toast/actions";
import { useContext, useEffect, useState } from "react";

const useTotalPaid = () => {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    if (!user?.id) {
      setIsLoading(false);
      return;
    }

    const fetchRemote = async () => {
      try {
        const response = await patientDashboardApi.getTotalPaid(
          user.id,
          abortController.signal
        );

        const result = response.data;
        if (!result.success) {
          errorToastHandler(result);
          return;
        }

        setData(result.data.totalPaidAmount || 0);
      } catch (error) {
        if (error.name !== "CanceledError") {
          errorToastHandler(error.response);
        }
        setData(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRemote();

    return () => abortController.abort();
  }, [user?.id]);

  return { data, isLoading };
};

export default useTotalPaid;
