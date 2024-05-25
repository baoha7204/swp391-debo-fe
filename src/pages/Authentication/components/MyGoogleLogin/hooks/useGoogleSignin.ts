import { useGoogleLogin } from "@react-oauth/google";
import { useLocation, useNavigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";
import { AuthResponseType } from "@/pages/Authentication/types/core";
import { API_ENDPOINTS } from "@/utils/api";
import { post } from "@/utils/apiCaller";
import { toastError } from "@/utils/toast";

const useGoogleSignin = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "admin/dashboard";
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      const res = await post<AuthResponseType>(
        API_ENDPOINTS.AUTH.LOGIN_GOOGLE,
        true,
        {
          code,
        }
      );
      setAuth({ accessToken: res.data.data.accessToken });
      navigate(from, { replace: true });
    },
    onError: (error) => {
      error?.error_description && toastError(error.error_description);
    },
    flow: "auth-code",
  });

  return handleGoogleLogin;
};

export default useGoogleSignin;
