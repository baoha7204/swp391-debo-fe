import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import useRefreshToken from "@/hooks/useRefreshToken";
import useAuth from "@/hooks/useAuth";
import useLocalStorage from "@/hooks/useLocalStorage";
import CircularIndeterminate from "@/components/CircularIndeterminate";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useAuth();
  const [persist] = useLocalStorage("persist", false);

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err.message);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false);

    return () => {
      isMounted = false;
    };
  }, [auth?.accessToken, persist, refresh]);

  useEffect(() => {
    console.log(`isLoading: ${isLoading}`);
    console.log(`aT: ${JSON.stringify(auth?.accessToken)}`);
  }, [isLoading, auth?.accessToken]);

  return !persist ? (
    <Outlet />
  ) : isLoading ? (
    <CircularIndeterminate />
  ) : (
    <Outlet />
  );
};

export default PersistLogin;
