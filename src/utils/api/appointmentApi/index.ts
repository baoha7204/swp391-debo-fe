import { AxiosInstance, GenericAbortSignal } from "axios";
import { API_ENDPOINTS } from "..";
import { BookingType } from "@/components/Booking/progress.context";
import { get, post, put, remove } from "@/utils/apiCaller";
import { ApiResponse } from "@/types/core";
import { AppointmentResponse } from "@/components/Booking/SummaryBooking/hooks/useCreateAppointment";
import { ListDataResponse } from "@/hooks/useFetchTableList";
import { AppRescheduleRequest } from "@/pages/Manager/RescheduleRequest";

const appointmentApi = {
  createBulk: async (
    data: NonNullable<BookingType>,
    axiosPrivate: AxiosInstance,
    signal?: GenericAbortSignal
  ) => {
    return await axiosPrivate.post<ApiResponse<AppointmentResponse[]>>(
      API_ENDPOINTS.APPOINTMENT.ONE,
      {
        treateId: data.treatment?.id,
        dentId: data.dentist?.id,
        date: data.date?.toDate().toDateString(),
        timeSlot: data.slot,
      },
      {
        signal,
      }
    );
  },
  getSlots: async (
    data: {
      dentist?: string;
      date: string;
      treatment?: number;
    },
    signal?: GenericAbortSignal
  ) => {
    return await get<number[][]>(API_ENDPOINTS.SLOT.LIST, data, {
      signal,
    });
  },
  getReSlots: async (
    data: {
      startDate: string;
      dentId: string;
    },
    signal?: GenericAbortSignal
  ) => {
    return await get<
      ListDataResponse<{
        dentId: string;
        date: string;
        timeSlot: number;
      }>
    >(API_ENDPOINTS.APPOINTMENT.SLOTS, data, {
      signal,
    });
  },
  getDetail: async (id?: string, signal?: GenericAbortSignal) => {
    return await get<AppointmentResponse>(
      `${API_ENDPOINTS.APPOINTMENT.DETAIL}/${id}`,
      undefined,
      {
        signal,
      }
    );
  },
  reschedulePatient: async (
    id: string,
    data: {
      id: string;
      startDate: string;
      timeSlot: number;
    },
    signal?: GenericAbortSignal
  ) => {
    return await put(
      `${API_ENDPOINTS.APPOINTMENT.RESCHEDULE}/${id}`,
      data,
      undefined,
      {
        signal,
      }
    );
  },
  rescheduleByDentist: async (
    data: {
      id: string;
      cus_Id: string;
      dent_Id: string;
      temp_Dent_Id: string;
      rescheduleToken: string;
    },
    signal?: GenericAbortSignal
  ) => {
    return await put(
      `${API_ENDPOINTS.APPOINTMENT.RESCHEDULE_BY_DENTIST}/${data.id}`,
      data,
      undefined,
      { signal }
    );
  },
  getRescheduleDentists: async (
    data: {
      startDate: string;
      timeSlot: number;
      treatId: number;
    },
    signal?: GenericAbortSignal
  ) => {
    return await get<
      ListDataResponse<{
        dent_Id: string;
        dentistName: string;
        dent_Avt: string | null;
      }>
    >(API_ENDPOINTS.APPOINTMENT.RESCHEDULE_TEMP_DENT, data, {
      signal,
    });
  },
  getRescheduleDentists02: async (
    data: {
      appointmentId: string;
      currentDentistId: string;
      startDate: string;
      timeSlot: number;
      treatId: number;
    },
    signal?: GenericAbortSignal
  ) => {
    return await get<
      ListDataResponse<{
        dent_Id: string;
        dentistName: string;
        dent_Avt: string | null;
      }>
    >(API_ENDPOINTS.APPOINTMENT.RESCHEDULE_TEMP_DENT, data, {
      signal,
    });
  },
  generateRescheduleToken: async (
    data: {
      id: string;
      cus_Id: string;
      dent_Id: string;
      temp_Dent_Id: string;
    },
    signal?: GenericAbortSignal
  ) => {
    return await post(
      API_ENDPOINTS.APPOINTMENT.RESCHEDULE_TOKEN,
      data,
      undefined,
      {
        signal,
      }
    );
  },
  confirmRescheduleRequest: async (
    data: {
      id: string;
      cus_Id: string;
      dent_Id: string;
      temp_Dent_Id: string | null;
      rescheduleToken: string;
      isRequestedDentReschedule: boolean;
    },
    signal?: GenericAbortSignal
  ) => {
    return await post(
      API_ENDPOINTS.APPOINTMENT.RESCHEDULE_CONFIRM,
      data,
      undefined,
      {
        signal,
      }
    );
  },
  cancelOne: async (id: string, signal?: GenericAbortSignal) => {
    return await remove(`${API_ENDPOINTS.APPOINTMENT.ONE}/${id}`, undefined, {
      signal,
    });
  },
  getMangerRescheduleRequest: async (
    id: number,
    signal?: GenericAbortSignal
  ) => {
    return await get<ListDataResponse<AppRescheduleRequest>>(
      `${API_ENDPOINTS.APPOINTMENT.MANAGER_RESCHEDULE_REQUEST}/${id}`,
      undefined,
      {
        signal,
      }
    );
  },
};

export default appointmentApi;
