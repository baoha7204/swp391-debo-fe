import { GenericAbortSignal } from "axios";
import { ListDataResponse } from "@/hooks/useFetchTableList";
import { get } from "@/utils/apiCaller";
import { API_ENDPOINTS } from "../..";

const dentistDashboardApi = {
  getAppointmentState: async (
    dentistId: string,
    signal?: GenericAbortSignal
  ) => {
    return await get<
      ListDataResponse<{
        status: string;
        totalAppointments: number;
      }>
    >(
      `${API_ENDPOINTS.DASHBOARD.DENTIST_APPOINTMENT_STATE}/${dentistId}`,
      undefined,
      {
        signal,
      }
    );
  },
  getTotalPatient: async (dentistId: string, signal?: GenericAbortSignal) => {
    return await get<
      ListDataResponse<{
        year: number;
        month: number;
        totalPatients: number;
      }>
    >(
      `${API_ENDPOINTS.DASHBOARD.DENTIST_TOTAL_PATIENT}/${dentistId}`,
      undefined,
      {
        signal,
      }
    );
  },
};

export default dentistDashboardApi;
