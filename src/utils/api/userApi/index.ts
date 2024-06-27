import { GenericAbortSignal } from "axios";
import { UserType } from "@/pages/User/user.context";
import { get, post, put } from "@/utils/apiCaller";
import { API_ENDPOINTS } from "..";
import { errorToastHandler } from "@/utils/toast/actions";
import { TreatmentCardProps } from "@/components/Treatment/TreatmentCard";

export type FirstTimeType = {
  isFirstTime: boolean;
  treatment:
    | (Omit<TreatmentCardProps, "rule_name" | "num_of_appointment"> & {
        ruleId: number;
        numOfApp: number;
      })
    | [];
};

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
      undefined,
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
  changePassword: async (
    id: string,
    data: { password: string; newPassword: string },
    signal?: GenericAbortSignal
  ) => {
    return await put<NonNullable<UserType>>(
      `${API_ENDPOINTS.USERS.ONE}/updatePassword/${id}`,
      { id, ...data },
      undefined,
      {
        signal,
      }
    );
  },
  isFirstTime: async (signal?: GenericAbortSignal) => {
    return await get<FirstTimeType>(
      `${API_ENDPOINTS.USERS.ONE}/patient/isFirstTime`,
      undefined,
      {
        signal,
      }
    );
  },
};

export default userApi;
