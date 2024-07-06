import { UserContext } from "@/pages/User/user.context";
import patientDashboardApi from "@/utils/api/dashboardApi/patient";
import { errorToastHandler } from "@/utils/toast/actions";
import { PieValueType } from "@mui/x-charts";
import { useContext, useEffect, useState } from "react";

const useAppointmentState = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState<PieValueType[] | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    if (!user?.id) {
      return;
    }

    const fetchRemote = async () => {
      try {
        const response = await patientDashboardApi.getAppointmentState(
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
          value: item.appointmentCount,
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
  }, [user?.id]);

  return { data };
};

export default useAppointmentState;
