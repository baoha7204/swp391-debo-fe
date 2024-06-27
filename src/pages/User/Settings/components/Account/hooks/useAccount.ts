import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { AccountInputs } from "../types/core";
import { AccountSchema } from "../lib/schema";
import { handleSubmitForm } from "@/usecases/handleSubmitForm";
import { UserContext } from "@/pages/User/user.context";
import { toastSuccess } from "@/utils/toast";
import { errorToastHandler } from "@/utils/toast/actions";
import userApi from "@/utils/api/userApi";

const useAccount = () => {
  const { user } = useContext(UserContext);
  const {
    handleSubmit,
    reset,
    control,
    formState: { isSubmitSuccessful, isSubmitting },
  } = useForm<AccountInputs>({
    resolver: zodResolver(AccountSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const onSubmit: SubmitHandler<AccountInputs> = async (data) => {
    // Parse data
    const result = handleSubmitForm(data, AccountSchema);

    if (!result || result.error) {
      return;
    }

    // Update user
    if (!user || !user?.id) {
      errorToastHandler({ message: "User not found" });
      return;
    }

    try {
      const response = await userApi.changePassword(user.id, {
        password: data.oldPassword,
        newPassword: data.newPassword,
      });
      const result = response.data;

      if (!result.success) {
        errorToastHandler(result);
        return;
      }
      toastSuccess("Change password successfully!");
    } catch (error) {
      if (error.name !== "CanceledError") {
        errorToastHandler(error.response);
      }
    } finally {
      if (isSubmitSuccessful) {
        reset();
      }
    }
  };

  return [handleSubmit(onSubmit), isSubmitting, control] as const;
};

export default useAccount;
