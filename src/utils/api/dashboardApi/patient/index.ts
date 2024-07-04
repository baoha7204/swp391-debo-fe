import { GenericAbortSignal } from "axios";
import { get } from "@/utils/apiCaller";
import { API_ENDPOINTS } from "../..";
import { ListDataResponse } from "@/hooks/useFetchTableList";

export type DashboardPatientResponse = {
  cusId: string;
  status: string;
  totalPaidAmount: number | null;
  appointmentCount: number;
};
const patientDashboardApi = {
  getAppointmentState: async (
    patientId: string,
    signal?: GenericAbortSignal
  ) => {
    return await get<ListDataResponse<DashboardPatientResponse>>(
      `${API_ENDPOINTS.DASHBOARD.APPOINTMENT_STATE}/${patientId}`,
      undefined,
      {
        signal,
      }
    );
  },
  getTotalPaid: async (patientId: string, signal?: GenericAbortSignal) => {
    return await get<DashboardPatientResponse>(
      `${API_ENDPOINTS.DASHBOARD.TOTAL_PAID}/${patientId}`,
      undefined,
      { signal }
    );
  },
};

export default patientDashboardApi;
