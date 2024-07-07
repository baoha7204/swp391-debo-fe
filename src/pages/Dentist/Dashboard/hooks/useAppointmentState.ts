import { useContext, useEffect, useState } from "react";
import { PieValueType } from "@mui/x-charts";
import { UserContext } from "@/pages/User/user.context";
import { errorToastHandler } from "@/utils/toast/actions";
import dentistDashboardApi from "@/utils/api/dashboardApi/dentist";

const useAppointmentState = () => {
  const { user, isLoading: isUserLoading } = useContext(UserContext);
  const [data, setData] = useState<PieValueType[] | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    if (!user?.id || isUserLoading) {
      return;
    }

    const fetchRemote = async () => {
      try {
        const response = await dentistDashboardApi.getAppointmentState(
          user.id,
          abortController.signal
        );

        const result = response.data;
        if (!result.success) {
          errorToastHandler(result);
          return;
        }

        const data = result.data.list.map((item) => ({
          id: item.status,
          value: item.totalAppointments,
          label: item.status,
        }));

        setData(data);
      } catch (error) {
        if (error.name !== "CanceledError") {
          errorToastHandler(error.response);
        }
        setData(null);
      }
    };

    fetchRemote();

    return () => abortController.abort();
  }, [user?.id, isUserLoading]);

  return { data };
};

export default useAppointmentState;
