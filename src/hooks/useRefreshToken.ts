import { decodeToken } from "react-jwt";

import useAuth from "./useAuth";
import { API_ENDPOINTS } from "@/utils/api";
import { Token } from "@/types/core";
import { ROLE } from "@/constant/core";
import { sanitizeString } from "@/utils/helper";
import { post } from "@/utils/apiCaller";
import { AuthResponseType } from "@/pages/Authentication/types/core";
import { errorToastHandler } from "@/utils/toast/actions";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();

  const refresh = async () => {
    const decoded = auth?.accessToken
      ? decodeToken<Token>(auth.accessToken)
      : undefined;
    const role = decoded?.role || "";

    const endpoint =
      sanitizeString(role) === ROLE.ADMIN
        ? API_ENDPOINTS.AUTH.REFRESH_TOKEN_GOOGLE
        : API_ENDPOINTS.AUTH.REFRESH_TOKEN_CREDENTIALS;
    const response = await post<AuthResponseType>(endpoint);
    const { data } = response;

    if (!data.success || !data.data) {
      return errorToastHandler(data);
    }

    const result = data.data;

    setAuth((prev) => {
      return {
        ...prev,
        refreshToken: result.refreshToken,
        accessToken: result.accessToken,
      };
    });

    return result.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
