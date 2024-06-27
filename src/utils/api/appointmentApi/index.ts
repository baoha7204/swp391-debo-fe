import { AxiosInstance, GenericAbortSignal } from "axios";
import { API_ENDPOINTS } from "..";
import { errorToastHandler } from "@/utils/toast/actions";
import { BookingType } from "@/components/Booking/progress.context";

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
};

export default appointmentApi;
