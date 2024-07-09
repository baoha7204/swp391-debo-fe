import { useEffect, useState } from "react";
import appointmentApi from "@/utils/api/appointmentApi";
import { decodeToken } from "react-jwt";
import { errorToastHandler } from "@/utils/toast/actions";

export type RescheduleToken = {
  AppointmentId: string;
  DentId: string;
  TempDentId: string;
  CusId: string;
};

const useDentReschedule = (userLoading: boolean, token?: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setSuccess(true);

    if (userLoading) return;

    const decoded = token ? decodeToken<RescheduleToken>(token) : undefined;

    if (!decoded) {
      errorToastHandler({ message: "Invalid token." });
      setSuccess(false);
      setIsLoading(false);
      return;
    }
    const abortController = new AbortController();

    const fetchRemote = async () => {
      try {
        const response = await appointmentApi.rescheduleByDentist(
          {
            id: decoded.AppointmentId,
            dent_Id: decoded.DentId,
            temp_Dent_Id: decoded.TempDentId,
            cus_Id: decoded.CusId,
            rescheduleToken: token!,
          },
          abortController.signal
        );

        const result = response.data;
        if (!result.success) {
          setSuccess(false);
          errorToastHandler(result);
          return;
        }
        setSuccess(true);
      } catch (error) {
        if (error.name !== "CanceledError") {
          errorToastHandler(error.response);
          setSuccess(false);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchRemote();

    return () => {
      abortController.abort();
    };
  }, [token, userLoading]);

  return { isLoading, success };
};

export default useDentReschedule;
