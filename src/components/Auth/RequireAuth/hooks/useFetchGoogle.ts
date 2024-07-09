import authApi from "@/utils/api/authApi";
import { useLayoutEffect, useState } from "react";

const useFetchGoogle = (accessToken: string) => {
  const [success, setSuccess] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    setIsLoading(true);

    const fetchRemote = async () => {
      try {
        const google = await authApi.googleGetInfo(accessToken);
        if (!google.data) {
          setSuccess(false);
          return;
        }
        setSuccess(true);
      } catch (error) {
        setSuccess(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRemote();
  }, []);

  return { success, isLoading };
};

export default useFetchGoogle;
