import { UserType } from "@/pages/User/user.context";
import userApi from "@/utils/api/userApi";
import { errorToastHandler } from "@/utils/toast/actions";
import { useLayoutEffect, useState } from "react";

const useFetchUser = (id?: string) => {
  const [user, setUser] = useState<UserType>(null);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    setIsLoading(true);

    if (!id) {
      setIsLoading(false);
      setUser(null);
      return;
    }

    const abortController = new AbortController();

    const fetchUser = async () => {
      try {
        const res = await userApi.getOne(id, abortController.signal);
        const data = res.data;
        if (!res.success || !data) {
          errorToastHandler(res);
          return;
        }
        setUser(res.data);
      } catch (error) {
        if (error.name !== "CanceledError") {
          errorToastHandler(error.response);
        }
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();

    return () => abortController.abort();
  }, [id]);

  return { user, isLoading };
};

export default useFetchUser;
