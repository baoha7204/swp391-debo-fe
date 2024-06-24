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

const useProfile = () => {
  const { user } = useContext(UserContext);
  const {
    handleSubmit,
    reset,
    control,
    formState: { isSubmitSuccessful, isSubmitting },
  } = useForm<ProfileInputs>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      username: user?.username || "",
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      gender: user?.gender || false,
      dateOfBirthday: dayjs(user?.dateOfBirthday),
      address: user?.address || "",
      avt: user?.avatar || "",
    },
  });

  const onSubmit: SubmitHandler<ProfileInputs> = async (data) => {
    const result = handleSubmitForm(data, ProfileSchema);

    if (!result || result.error) {
      return;
    }

    // const res = await register({ email, password, phoneNumber });

    // if (!res.success) {
    //   return errorToastHandler(res);
    // }
    // successfully update
    toastSuccess("Update successfully!");

    if (isSubmitSuccessful) {
      reset();
    }
  };

  return [handleSubmit(onSubmit), isSubmitting, control] as const;
};

export default useProfile;
