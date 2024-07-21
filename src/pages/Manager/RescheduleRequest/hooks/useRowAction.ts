import { Dispatch, SetStateAction } from "react";
import appointmentApi from "@/utils/api/appointmentApi";
import { toastSuccess } from "@/utils/toast";
import { errorToastHandler } from "@/utils/toast/actions";
import { AppRescheduleRequest } from "..";
import { decodeToken } from "react-jwt";
import { RescheduleToken } from "@/pages/Patient/Reschedule/hooks/useDentReschedule";

const useRowAction = () => {
  const handleAction = async (
    id: string,
    setData: Dispatch<SetStateAction<AppRescheduleRequest[]>>,
    mode: "approve" | "reject"
  ) => {
    // Get detail of appointment
    try {
      const responseDetail = await appointmentApi.getDetail(id);
      const resultDetail = responseDetail.data;
      if (!resultDetail.success) {
        errorToastHandler(resultDetail);
        return;
      }

      // get temp dentist id based on reschedule token
      const detailData = resultDetail.data;
      const token = detailData.rescheduleToken;
      if (!token) {
        errorToastHandler({ message: "Invalid reschedule token." });
        return;
      }

      const decoded = token ? decodeToken<RescheduleToken>(token) : undefined;

      if (!decoded) {
        errorToastHandler({ message: "Invalid token." });
        return;
      }

      // do approve or reject based on mode
      const isRequestedDentReschedule =
        mode === "approve" ? detailData.isRequestedDentReschedule : false;
      const res = await appointmentApi.confirmRescheduleRequest({
        id,
        cus_Id: detailData.cus_Id,
        dent_Id: detailData.dent_Id,
        temp_Dent_Id: decoded.TempDentId,
        rescheduleToken: token,
        isRequestedDentReschedule,
      });
      const result = res.data;
      if (!result.success) {
        errorToastHandler(result);
        return;
      }
      toastSuccess(
        "Request has been " + (mode === "approve" ? "approved" : "rejected")
      );
      // optimistic update
      setData((prev) => prev.filter((item) => item.appointmentId !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return handleAction;
};

export default useRowAction;
