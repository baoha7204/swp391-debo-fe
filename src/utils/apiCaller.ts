import axios from "@/config/axios";
import { ApiResponse, EmptyObj } from "@/types/core";

const request = <T = EmptyObj>(
  endpoint: string,
  method: string,
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
  return axios<ApiResponse<T>>(config);
};

const get = <T extends object>(endpoint: string, params = {}, headers = {}) =>
  request<T>(endpoint, "GET", headers, params);

const post = <T extends object>(
  endpoint: string,
  body = {},
  params = {},
  headers = {}
) => request<T>(endpoint, "POST", headers, params, body);

const put = <T extends object>(
  endpoint: string,
  body = {},
  params = {},
  headers = {}
) => request<T>(endpoint, "PUT", headers, params, body);

const remove = <T extends object>(
  endpoint: string,
  body = {},
  params = {},
  headers = {}
) => request<T>(endpoint, "DELETE", headers, params, body);

export { request, get, post, put, remove };
