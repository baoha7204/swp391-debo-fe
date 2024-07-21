import { UserContext } from "@/pages/User/user.context";
import patientDashboardApi from "@/utils/api/dashboardApi/patient";
import { PieValueType } from "@mui/x-charts";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useAppointmentState = () => {
  const { user, isLoading } = useContext(UserContext);
  const [data, setData] = useState<PieValueType[] | null>(null);  

  const {id} = useParams<{id: string}>();
  console.log(id);
  
  useEffect(() => {
    const abortController = new AbortController();

    if (!user?.id || isLoading || id === undefined) {
      return;
    }

    const fetchRemote = async () => {
      try {
        const response = await patientDashboardApi.getAppointmentState(
          id,
          abortController.signal
        );

        const result = response.data;
        if (!result.success) {
          console.log(result);
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
          // errorToastHandler(error.response);
          console.log(error.response);
        }
        setData(null);
      }
    };

    fetchRemote();

    return () => abortController.abort();
  }, [user?.id, isLoading]);

  return { data };
};

export default useAppointmentState;
