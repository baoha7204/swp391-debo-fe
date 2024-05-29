import axios, { axiosPrivate } from "@/config/axios";
import { ApiResponse, EmptyObj } from "@/types/core";

const request = <T = EmptyObj>(
  endpoint: string,
  method: string,
  isPrivate: boolean,
  headers = {},
  params = {},
  body = {}
) => {
  const config = {
    url: endpoint,
    method,
    headers: Object.assign({}, headers),
    params: Object.assign(params),
    data: body,
  };
  return isPrivate
    ? axiosPrivate<ApiResponse<T>>(config)
    : axios<ApiResponse<T>>(config);
};

const get = <T = EmptyObj>(
  endpoint: string,
  isPrivate = false,
  params = {},
  headers = {}
) => request<T>(endpoint, "GET", isPrivate, headers, params);

const post = <T = EmptyObj>(
  endpoint: string,
  isPrivate = false,
  body = {},
  params = {},
  headers = {}
) => request<T>(endpoint, "POST", isPrivate, headers, params, body);

const put = <T = EmptyObj>(
  endpoint: string,
  isPrivate = false,
  body = {},
  params = {},
  headers = {}
) => request<T>(endpoint, "PUT", isPrivate, headers, params, body);

const remove = <T = EmptyObj>(
  endpoint: string,
  isPrivate = false,
  body = {},
  params = {},
  headers = {}
) => request<T>(endpoint, "DELETE", isPrivate, headers, params, body);

export { request, get, post, put, remove };
