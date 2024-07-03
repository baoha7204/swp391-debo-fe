import { AuthResponseType } from "@/pages/Authentication/types/core";
import { post } from "@/utils/apiCaller";
import { API_ENDPOINTS } from "..";
import { errorToastHandler } from "@/utils/toast/actions";

const authApi = {
  login: async (
    data:
      | {
          email: string;
          password: string;
          phoneNumber?: string;
        }
      | {
          phoneNumber: string;
          password: string;
          email?: string;
        }
  ) => {
    return await post<AuthResponseType>(
      API_ENDPOINTS.AUTH.LOGIN_CREDENTIALS,
      data
    )
      .then((res) => res.data)
      .catch((err) => {
        errorToastHandler(err.response);
        return err;
      });
  },
  register: async (data: {
    email: string;
    phoneNumber: string;
    password: string;
  }) => {
    return await post<AuthResponseType>(API_ENDPOINTS.AUTH.REGISTER, data)
      .then((res) => res.data)
      .catch((err) => {
        errorToastHandler(err.response);
        return err;
      });
  },
  refreshToken: async (
    endpoint: string,
    data: { accessToken: string; refreshToken: string }
  ) => {
    return await post<AuthResponseType>(endpoint, data)
      .then((res) => res.data)
      .catch((err) => {
        errorToastHandler(err.response);
        return err;
      });
  },
  logout: async () => {
    return await post(API_ENDPOINTS.AUTH.LOGOUT)
      .then((res) => res.data)
      .catch((err) => {
        errorToastHandler(err.response);
        return err;
      });
  },
};

export default authApi;
