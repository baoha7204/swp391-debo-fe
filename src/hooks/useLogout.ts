import useAuth from "./useAuth";
import { toastError } from "@/utils/toast";
import { API_ENDPOINTS } from "@/utils/api";
import { post } from "@/utils/apiCaller";

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth(null);
    try {
      await post(API_ENDPOINTS.AUTH.LOGOUT, true);
    } catch (err) {
      toastError(err.message);
    }
  };

  return logout;
};

export default useLogout;
