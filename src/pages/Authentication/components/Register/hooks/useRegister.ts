import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { RegisterFormSchema } from "../lib/schema";
import { RegisterInputs } from "../types/core";
import { handleSubmitForm } from "@/usecases/handleSubmitForm";
import { errorToastHandler } from "@/utils/toast/actions";
import { toastSuccess } from "@/utils/toast";
import { RegisterFormProps } from "../RegisterForm";

const useRegister = (register: RegisterFormProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    handleSubmit,
    reset,
    control,
    formState: { isSubmitSuccessful, isSubmitting },
  } = useForm<RegisterInputs>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    const result = handleSubmitForm(data, RegisterFormSchema);

    if (!result || result.error) {
      return;
    }

    const { email, password, phoneNumber } = data;
    const res = await register({ email, password, phoneNumber });
    if (!res.success) {
      return errorToastHandler(res);
    }
    // successfully registered
    toastSuccess("Register successfully!");
    navigate(from, { replace: true });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return [handleSubmit(onSubmit), isSubmitting, control] as const;
};

export default useRegister;
