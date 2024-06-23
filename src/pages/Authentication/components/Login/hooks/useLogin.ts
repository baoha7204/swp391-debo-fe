import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation, useNavigate } from "react-router-dom";

import { LoginFormSchema } from "../lib/schema";
import { LoginInputs } from "../types/core";
import { handleSubmitForm } from "@/usecases/handleSubmitForm";
import useAuth from "@/hooks/useAuth";
import { getRoles } from "@/utils/jwt";
import { LoginFormProps } from "../LoginForm";

export default function useLogin(login: LoginFormProps) {
  const { setAccessToken, setRefreshToken } = useAuth();
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

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    const result = handleSubmitForm(data, LoginFormSchema);

    if (!result || !result.success || result.error) {
      return;
    }

    const isEmail = data.user.includes("@");
    const { user, password } = result.data;
    const body = isEmail
      ? { email: user, password }
      : { phoneNumber: user, password };

    const res = await login(body);
    const accessToken = res.data?.accessToken;
    const refreshToken = res.data?.refreshToken;
    if (!res.success || !accessToken || !refreshToken) {
      return;
    }

    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    const from = location.state?.from?.pathname;
    if (from) {
      return navigate(from, { replace: true });
    }

    const resultRoles = getRoles(accessToken);
    if (!resultRoles.success) {
      return;
    }

    navigate("/" + resultRoles.data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return [handleSubmit(onSubmit), isSubmitting, control] as const;
}
