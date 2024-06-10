import useAuth from "./useAuth";
import { API_ENDPOINTS } from "@/utils/api";
import { post } from "@/utils/apiCaller";
import { errorToastHandler } from "@/utils/toast/actions";

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth(null);
    try {
      await post(API_ENDPOINTS.AUTH.LOGOUT, true);
    } catch (err) {
      errorToastHandler(err.response);
    }
  };

  return logout;
};

export default useLogout;
