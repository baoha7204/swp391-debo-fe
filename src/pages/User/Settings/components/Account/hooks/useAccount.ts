import { useContext, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { AccountInputs } from "../types/core";
import { AccountSchema } from "../lib/schema";
import { handleSubmitForm } from "@/usecases/handleSubmitForm";
import { UserContext } from "@/pages/User/user.context";

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

    // const { email, password, phoneNumber } = data;
    // const res = await register({ email, password, phoneNumber });
    // if (!res.success) {
    //   return errorToastHandler(res);
    // }
    // // successfully registered
    // toastSuccess("Register successfully!");
    // navigate(from, { replace: true });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return [handleSubmit(onSubmit), isSubmitting, control] as const;
};

export default useAccount;
