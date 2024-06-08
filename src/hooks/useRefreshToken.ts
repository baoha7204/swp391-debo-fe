import { decodeToken } from "react-jwt";

import useAuth from "./useAuth";
import { API_ENDPOINTS } from "@/utils/api";
import { Token } from "@/types/core";
import { ROLE } from "@/constant/core";
import { sanitizeString } from "@/utils/helper";
import { post } from "@/utils/apiCaller";
import { AuthResponseType } from "@/pages/Authentication/types/core";
import { errorToastHandler } from "@/utils/toast/actions";
import { useCallback } from "react";

const useRefreshToken = () => {
  const { accessToken, refreshToken, setAccessToken, setRefreshToken } =
    useAuth();

  const decoded = accessToken ? decodeToken<Token>(accessToken) : undefined;
  const role = decoded?.role || "";

  const endpoint =
    sanitizeString(role) === ROLE.ADMIN
      ? API_ENDPOINTS.AUTH.REFRESH_TOKEN_GOOGLE
      : API_ENDPOINTS.AUTH.REFRESH_TOKEN_CREDENTIALS;

  const refresh = useCallback(async () => {
    try {
      const response = await post<AuthResponseType>(endpoint, {
        accessToken,
        refreshToken,
      });
      const { data } = response;

      if (!data.success || !data.data) {
        return errorToastHandler(data);
      }
      const result = data.data;

      setAccessToken(result.accessToken!);
      setRefreshToken(result.refreshToken!);

      return result.accessToken;
    } catch (error) {
      errorToastHandler(error.response);
      setRefreshToken("");
    }
  }, [endpoint, accessToken, refreshToken, setAccessToken, setRefreshToken]);

  return refresh;
};

export default useRefreshToken;
