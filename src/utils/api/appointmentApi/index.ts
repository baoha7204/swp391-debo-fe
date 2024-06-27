import { AxiosInstance, GenericAbortSignal } from "axios";
import { API_ENDPOINTS } from "..";
import { BookingType } from "@/components/Booking/progress.context";
import { get } from "@/utils/apiCaller";
import { ApiResponse } from "@/types/core";
import { AppointmentResponse } from "@/components/Booking/SummaryBooking/hooks/useCreateAppointment";

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
      dentist?: number;
      date: string;
      treatment?: number;
    },
    signal?: GenericAbortSignal
  ) => {
    return await get<number[][]>(API_ENDPOINTS.SLOT.LIST, data, {
      signal,
    });
  },
};

export default appointmentApi;
