import useAuth from "./useAuth";
import authApi from "@/utils/api/authApi";
import { errorToastHandler } from "@/utils/toast/actions";

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth(null);
    try {
      await authApi.logout();
    } catch (err) {
      errorToastHandler(err.response);
    }
  };

  return logout;
};

export default useLogout;
