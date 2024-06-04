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
import { getRoles } from "@/utils/jwt";

export default function useLogin() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

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
    const result = handleSubmitForm(data, LoginFormSchema);

    if (!result || !result.success || result.error) {
      return;
    }

    const isEmail = data.user.includes("@");
    const { user, password } = result.data;
    const body = isEmail
      ? { email: user, password }
      : { phoneNumber: user, password };

    post<AuthResponseType>(API_ENDPOINTS.AUTH.LOGIN_CREDENTIALS, false, body)
      .then((res) => {
        const { data } = res;
        const accessToken = data.data?.accessToken;
        const refreshToken = data.data?.refreshToken;
        if (!data.success || !accessToken || !refreshToken) {
          return errorToastHandler(data);
        }

        setAuth({ accessToken, refreshToken });
        const from = location.state?.from?.pathname;
        if (from) {
          return navigate(from, { replace: true });
        }

        const result = getRoles(accessToken);
        if (!result.success) {
          return;
        }

        navigate("/" + result.data);
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
}
