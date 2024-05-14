import { useState, useEffect, useCallback, useContext } from "react";

import localStorage from "@/utils/localStorage";
import { UserContext } from "@/context/user.context";
import { toastError } from "@/utils/toast";

const useAuth = () => {
  const { setCurrentUser, setCredential } = useContext(UserContext);
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const token = localStorage.getToken();
  const checkTokenExpiration = useCallback(() => {
    if (token) {
      const decoded = localStorage.getJWTUser();
      if (!decoded) {
        setUserRole(null);
      }
      if (decoded!.exp < Date.now() / 1000) {
        setUserRole(null);
        localStorage.removeItem("token");

        toastError("Phiên đăng nhập đã hết hạn! Vui lòng đăng nhập lại");
        return;
      }
    }
  }, [token]);

  useEffect(() => {
    // Get the JWT token from the cookie
    const token = localStorage.getToken();
    const crea = localStorage.getCredentialUser();
    // If there is no token, return
    if (!token) {
      setUserRole(null);
      return;
    }

    try {
      setIsLoading(true);
      // setCredential(crea);
      // authApi.getInfoFromGG(credential).then((response) => {
      //     if (response.data.status === 200) {
      //         // console.log(response.data.data);
      //     }
      // });
      // authApi.getUser().then((user) => {
      //   const formatUser = {
      //     firstName: user?.data.fname,
      //     lastName: user?.data.lname,
      //     studentId: user?.data.studentId,
      //     role: user?.data.role,
      //     id: user?.data.id,
      //   };
      //   if (!user.data.role) {
      //     setUserRole(undefined);
      //   } else {
      //     setUserRole(user?.data.role);
      //     setData(user?.data);
      //     setCurrentUser(formatUser);
      //     setTimeout(() => {
      //       setIsLoading(false);
      //     }, 1000);
      //   }
      // });
    } catch (err) {
      // If the token is invalid, return
      return;
    }

    const intervalId = setInterval(checkTokenExpiration, 2000);
    return () => clearInterval(intervalId);
  }, [checkTokenExpiration]);

  return { isLoading, userRole, data };
};
export default useAuth;
