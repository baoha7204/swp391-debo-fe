import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProfileSchema } from "../lib/schema";
import { ProfileInputs } from "../types/core";
import { UserContext } from "@/pages/User/user.context";
import { handleSubmitForm } from "@/usecases/handleSubmitForm";
import { errorToastHandler } from "@/utils/toast/actions";
import { toastSuccess } from "@/utils/toast";
import userApi from "@/utils/api/userApi";

const useProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<ProfileInputs>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      email: user?.email || "",
      phone: user?.phone || "",
      username: user?.username || "",
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      gender: user?.gender || true,
      dateOfBirthday: dayjs(user?.dateOfBirthday) || null,
      address: user?.address || "",
      avt: user?.avt || null,
    },
  });

  const onSubmit: SubmitHandler<ProfileInputs> = async (data) => {
    // Parse data
    const result = handleSubmitForm(data, ProfileSchema);

    if (!result || result.error) {
      return;
    }

    // Update user
    if (!user || !user?.id) {
      errorToastHandler({ message: "User not found" });
      return;
    }

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { avt, ...rest } = data;
      const response = await userApi.updateOne(user.id, {
        id: user.id,
        ...rest,
      });
      const result = response.data;

      if (!result.success) {
        errorToastHandler(result);
        return;
      }

      setUser((prev) => ({ ...prev, ...result.data }));
      toastSuccess("Update successfully!");
    } catch (error) {
      if (error.name !== "CanceledError") {
        errorToastHandler(error.response);
      }
    }
  };

  const onUpload = (isAvatar: boolean) => async (data: File | null) => {
    if (!user?.id) {
      errorToastHandler({ message: "User not found" });
      return;
    }

    try {
      const response = isAvatar
        ? await userApi.uploadAvatar(user.id, data)
        : await userApi.uploadMedRec(user.id, data);
      const result = response.data;
      if (!result.success) {
        errorToastHandler(result);
        return;
      }

      const returnData = isAvatar ? result.data.avt : result.data.medRec;

      setUser(result.data);

      return returnData;
    } catch (error) {
      if (error.name !== "CanceledError") {
        errorToastHandler(error.response);
      }
    }
  };

  return [handleSubmit(onSubmit), isSubmitting, control, onUpload] as const;
};

export default useProfile;
