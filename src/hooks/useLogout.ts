import useAuth from "./useAuth";
import authApi from "@/utils/api/authApi";
import { toastSuccess } from "@/utils/toast";
import { errorToastHandler } from "@/utils/toast/actions";

const useLogout = () => {
  const { accessToken, setAccessToken, setRefreshToken } = useAuth();

  const logout = async () => {
    setAccessToken("");
    setRefreshToken("");
    try {
      const res = await authApi.logout(accessToken);
      if (res.success) {
        toastSuccess("Logout successful!");
      }
    } catch (err) {
      errorToastHandler(err.response);
    }
  };

  return logout;
};

export default useLogout;
