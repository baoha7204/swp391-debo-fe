import { GenericAbortSignal } from "axios";
import { UserType } from "@/pages/User/user.context";
import { get, post, put } from "@/utils/apiCaller";
import { API_ENDPOINTS } from "..";
import { errorToastHandler } from "@/utils/toast/actions";

const userApi = {
  getOne: async (id: string, signal?: GenericAbortSignal) => {
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
  updateOne: async (
    id: string,
    data: Omit<UserType, "avt" | "medRec">,
    signal?: GenericAbortSignal
  ) => {
    return await put<NonNullable<UserType>>(
      `${API_ENDPOINTS.USERS.ONE}/${id}`,
      data,
      {
        signal,
      }
    );
  },
  uploadAvatar: async (
    id: string,
    data: File | null,
    signal?: GenericAbortSignal
  ) => {
    const formData = new FormData();
    formData.append("file", data as unknown as Blob);
    formData.append("id", id);
    return await post<NonNullable<UserType>>(
      `${API_ENDPOINTS.USERS.ONE}/${id}/upload-avt`,
      formData,
      undefined,
      {
        signal,
        "Content-Type": "multipart/form-data",
      }
    );
  },
  uploadMedRec: async (
    id: string,
    data: File | null,
    signal?: GenericAbortSignal
  ) => {
    const formData = new FormData();
    formData.append("file", data as unknown as Blob);
    formData.append("id", id);
    return await post<NonNullable<UserType>>(
      `${API_ENDPOINTS.USERS.ONE}/${id}/upload-medrec`,
      formData,
      undefined,
      {
        signal,
        "Content-Type": "multipart/form-data",
      }
    );
  },
};

export default userApi;
