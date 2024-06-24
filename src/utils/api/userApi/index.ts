import { GenericAbortSignal } from "axios";
import { UserType } from "@/pages/User/user.context";
import { get, put } from "@/utils/apiCaller";
import { API_ENDPOINTS } from "..";
import { errorToastHandler } from "@/utils/toast/actions";

const userApi = {
  getOne: async (id: string, signal: GenericAbortSignal) => {
    return await get<NonNullable<UserType>>(
      `${API_ENDPOINTS.USERS.ONE}/${id}`,
      undefined,
      { signal }
    )
      .then((res) => res.data)
      .catch((err) => {
        errorToastHandler(err.response);
        return err;
      });
  },
  updateOne: async (id: string, data: any, signal: GenericAbortSignal) => {
    return await put<NonNullable<UserType>>(
      `${API_ENDPOINTS.USERS.ONE}/${id}`,
      data,
      {
        signal,
        "Content-Type": "multipart/form-data",
      }
    );
  },
};

export default userApi;
