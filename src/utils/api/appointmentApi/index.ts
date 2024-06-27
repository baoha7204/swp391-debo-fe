import { AxiosInstance, GenericAbortSignal } from "axios";
import { API_ENDPOINTS } from "..";
import { errorToastHandler } from "@/utils/toast/actions";
import { BookingType } from "@/components/Booking/progress.context";
import { get } from "@/utils/apiCaller";

const appointmentApi = {
  postSingle: async (
    data: NonNullable<BookingType>,
    axiosPrivate: AxiosInstance,
    signal?: GenericAbortSignal
  ) => {
    return await axiosPrivate
      .post(
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
      )
      .then((res) => res.data)
      .catch((err) => {
        errorToastHandler(err.response);
        return err;
      });
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
