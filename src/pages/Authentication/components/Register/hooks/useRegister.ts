import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { RegisterFormSchema } from "../lib/schema";
import { post } from "@/utils/apiCaller";
import { RegisterInputs } from "../types/core";
import { handleSubmitForm } from "@/usecases/handleSubmitForm";
import { errorToastHandler } from "@/utils/toast/actions";
import { toastSuccess } from "@/utils/toast";
import { API_ENDPOINTS } from "@/utils/api";

const useRegister = () => {
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
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    const result = handleSubmitForm(data, RegisterFormSchema);

    if (!result || result.error) {
      return;
    }

    const { email, password } = data;
    post(API_ENDPOINTS.AUTH.REGISTER, false, {
      email,
      password,
    })
      .then((res) => {
        const { data } = res;
        if (!data.success) {
          return errorToastHandler(data);
        }
        // successfully registered
        toastSuccess("Register successfully!");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        errorToastHandler(err.response);
      });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return [handleSubmit(onSubmit), isSubmitting, control] as const;
};

export default useRegister;
