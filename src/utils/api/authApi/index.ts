/* eslint-disable @typescript-eslint/no-explicit-any */
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
};

export default authApi;
