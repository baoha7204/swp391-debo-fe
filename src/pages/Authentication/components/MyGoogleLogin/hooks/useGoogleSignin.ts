import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";
import { API_ENDPOINTS } from "@/utils/api";
import { post } from "@/utils/apiCaller";
import { toastError } from "@/utils/toast";
import { errorToastHandler } from "@/utils/toast/actions";

const useGoogleSignin = () => {
  const { setAccessToken, setRefreshToken } = useAuth();
  const navigate = useNavigate();
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      const res = await post<{
        access_token?: string;
        refresh_token?: string;
      }>(API_ENDPOINTS.AUTH.LOGIN_GOOGLE, true, {
        code,
      });

      const result = res.data;
      const accessToken = result.data?.access_token;
      const refreshToken = result.data?.refresh_token;

      if (!result.success || !accessToken || !refreshToken) {
        errorToastHandler(result);
        return;
      }

      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      navigate("/admin");
    },
    onError: (error) => {
      error?.error_description && toastError(error.error_description);
    },
    flow: "auth-code",
  });

  return handleGoogleLogin;
};

export default useGoogleSignin;
