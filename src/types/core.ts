import { AxiosResponse } from "axios";

type EmptyObj = Record<string, never>;

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type ApiRequest<T> = Promise<AxiosResponse<ApiResponse<T>>>;

type ApiResponse<T = EmptyObj> = {
  statusCode: number;
  success: boolean;
  data: T;
  message: string;
};

// TODO: Token types need to be updated
type Token = {
  nameid: string;
  email: string;
  role: string;
};

type PaymentStatus =
  | "00"
  | "07"
  | "09"
  | "10"
  | "11"
  | "12"
  | "13"
  | "24"
  | "51"
  | "65"
  | "75"
  | "79"
  | "99";

export type {
  EmptyObj,
  HttpMethod,
  ApiRequest,
  ApiResponse,
  Token,
  PaymentStatus,
};
