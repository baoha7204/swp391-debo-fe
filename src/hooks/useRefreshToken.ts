import { decodeToken } from "react-jwt";

import axios from "@/config/axios";
import useAuth from "./useAuth";
import { API_ENDPOINTS } from "@/utils/api";
import { Token } from "@/types/core";
import { ROLE } from "@/constant/core";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();

  const refresh = async () => {
    const decoded = auth?.accessToken
      ? decodeToken<Token>(auth.accessToken)
      : undefined;
    const roles = decoded?.roles || [];

    const endpoint = roles.includes(ROLE.ADMIN)
      ? API_ENDPOINTS.AUTH.REFRESH_TOKEN_GOOGLE
      : API_ENDPOINTS.AUTH.REFRESH_TOKEN_CREDENTIALS;
    const response = await axios(endpoint, {
      withCredentials: true,
    });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.accessToken);
      return {
        ...prev,
        accessToken: response.data.accessToken,
      };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
