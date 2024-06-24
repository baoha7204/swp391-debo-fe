import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { decodeToken } from "react-jwt";
import useAuth from "@/hooks/useAuth";
import { Token } from "@/types/core";
import userApi from "@/utils/api/userApi";
import { errorToastHandler } from "@/utils/toast/actions";
import axios from "axios";

type UserType = {
  id: string;
  email: string;
  phone: string | null;
  username: string | null;
  firstName: string | null;
  lastName: string | null;
  gender: boolean | null;
  dateOfBirthday: Date | null;
  medRec: string | null;
  avatar: string | null;
  address: string | null;
} | null;

type UserContextType<T> = {
  user: T;
  setUser: Dispatch<SetStateAction<T>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const UserContext = createContext<UserContextType<UserType>>({
  user: null,
  setUser: () => null,
  isLoading: true,
  setIsLoading: () => true,
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserType>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { auth } = useAuth();

  console.log(user);

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();
    const decoded = auth?.accessToken
      ? decodeToken<Token>(auth.accessToken)
      : undefined;

    if (!decoded || !decoded?.nameid) {
      setIsLoading(false);
      setUser(null);
      return;
    }

    const fetchUser = async () => {
      try {
        // const res = await userApi.getOne(
        //   decoded.nameid,
        //   abortController.signal
        // );
        // Replace this line
        const result = await axios("/user/1");
        const res = result.data;
        // Replace this line
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
  }, [auth?.accessToken]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export type { UserContextType, UserType };
export { UserContext, UserProvider };
