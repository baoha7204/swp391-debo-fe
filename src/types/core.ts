import { AxiosResponse } from "axios";

type EmptyObj = Record<string, never>;

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type ApiRequest = (
  endpoint: string,
  method: HttpMethod,
  headers?: Record<string, string>,
  params?: Record<string, string>,
  body?: Record<string, string>
) => Promise<AxiosResponse>;

type ApiResponse<T = EmptyObj> = {
  success: boolean;
  data: T;
  message: string;
};

type Token = {
  sub: string;
  exp: number;
};

export type { EmptyObj, HttpMethod, ApiRequest, ApiResponse, Token };
