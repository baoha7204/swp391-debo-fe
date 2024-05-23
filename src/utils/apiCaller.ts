import axios from "@/config/axios";
import { ApiRequest, HttpMethod } from "@/types/core";

export type AxiosCustomRequest = {
  url: string;
  method: HttpMethod;
  headers: Record<string, string>;
  params: Record<string, string>;
  data: Record<string, string>;
};

const request: ApiRequest = (
  endpoint,
  method,
  headers = {},
  params = {},
  body = {}
) =>
  axios<AxiosCustomRequest>({
    url: endpoint,
    method,
    headers: Object.assign({}, headers),
    params: Object.assign(params),
    data: body,
  });

const get = (endpoint: string, params = {}, headers = {}) =>
  request(endpoint, "GET", headers, params);

const post = (endpoint: string, body = {}, params = {}, headers = {}) =>
  request(endpoint, "POST", headers, params, body);

const put = (endpoint: string, body = {}, params = {}, headers = {}) =>
  request(endpoint, "PUT", headers, params, body);

const remove = (endpoint: string, body = {}, params = {}, headers = {}) =>
  request(endpoint, "DELETE", headers, params, body);

export { request, get, post, put, remove };
