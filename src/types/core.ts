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
  role: string;
};

export type { EmptyObj, HttpMethod, ApiRequest, ApiResponse, Token };
