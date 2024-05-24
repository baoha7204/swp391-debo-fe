import axios from "@/config/axios";
import useAuth from "./useAuth";
import { toastError } from "@/utils/toast";

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth(null);
    try {
      await axios("/logout", {
        withCredentials: true,
      });
    } catch (err) {
      toastError(err.message);
    }
  };

  return logout;
};

export default useLogout;
