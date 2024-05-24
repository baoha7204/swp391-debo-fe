import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation, useNavigate } from "react-router-dom";

import { LoginFormSchema } from "../lib/schema";
import { Inputs } from "../types/core";
import { handleSubmitForm } from "../usecases/handleLoginInput";
import useAuth from "@/hooks/useAuth";
import { post } from "@/utils/apiCaller";
import { errorToastHandler } from "@/utils/toast/actions";

export type LoginResponseType = {
  accessToken?: string;
};

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
  } = useForm<Inputs>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      user: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const result = handleSubmitForm(data);

    if (!result || result.error) {
      return;
    }

    const { user, password } = data;
    post<LoginResponseType>("/login", {
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
