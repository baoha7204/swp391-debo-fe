import { AxiosInstance, GenericAbortSignal } from "axios";
import { API_ENDPOINTS } from "..";
import { ApiResponse, PaymentStatus } from "@/types/core";

export type PaymentRequestType = {
  listAppointmentId: string[];
  paymentContent: string;
  paymentCurrency: string;
  requiredAmount: number;
  paymentLanguage: string;
};

export type PaymentResponseType = {
  paymentId: string;
  paymentStatus?: PaymentStatus;
  paymentUrl?: string;
};

const paymentApi = {
  postSingle: async (
    data: PaymentRequestType,
    axiosPrivate: AxiosInstance,
    signal?: GenericAbortSignal
  ) => {
    return await axiosPrivate.post<ApiResponse<PaymentResponseType>>(
      API_ENDPOINTS.PAYMENT.ONE,
      data,
      { signal }
    );
  },
};

export default paymentApi;
