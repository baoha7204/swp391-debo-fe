import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation, useNavigate } from "react-router-dom";

import { LoginFormSchema } from "../lib/schema";
import { LoginInputs } from "../types/core";
import { handleSubmitForm } from "@/usecases/handleSubmitForm";
import useAuth from "@/hooks/useAuth";
import { post } from "@/utils/apiCaller";
import { errorToastHandler } from "@/utils/toast/actions";
import { AuthResponseType } from "@/pages/Authentication/types/core";
import { API_ENDPOINTS } from "@/utils/api";

export default function useLogin() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    handleSubmit,
    reset,
    control,
    formState: { isSubmitSuccessful, isSubmitting },
  } = useForm<LoginInputs>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      user: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    const result = handleSubmitForm<LoginInputs>(data, LoginFormSchema);

    if (!result || result.error) {
      return;
    }

    const { user, password } = data;
    post<AuthResponseType>(API_ENDPOINTS.AUTH.LOGIN_CREDENTIALS, true, {
      user,
      password,
    }).then((res) => {
      const { data } = res;
      if (!data.success) {
        return errorToastHandler(data);
      }
      const accessToken = data.data.accessToken;
      setAuth({ user, accessToken });
      navigate(from, { replace: true });
    });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return [handleSubmit(onSubmit), isSubmitting, control] as const;
}
