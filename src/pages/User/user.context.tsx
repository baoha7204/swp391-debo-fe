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
import { MetadataFile } from "@/components/FilePicker/types/core";

type UserType = {
  id: string;
  roleName: string;
  email: string;
  phone: string | null;
  username: string | null;
  firstName: string | null;
  lastName: string | null;
  gender: boolean | null;
  dateOfBirthday: Date | null;
  medRec: string | null;
  avt: string | null;
  address: string | null;
  medRecMetaData: MetadataFile | null;
  role: number | null;
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

  useEffect(() => {
    setIsLoading(true);
    const decoded = auth?.accessToken
      ? decodeToken<Token>(auth.accessToken)
      : undefined;

    if (!decoded || !decoded?.nameid) {
      setIsLoading(false);
      setUser(null);
      return;
    }

    const abortController = new AbortController();

    const fetchUser = async () => {
      try {
        const res = await userApi.getOne(
          decoded.nameid,
          abortController.signal
        );
        const data = res.data;
        if (!res.success || !data) {
          console.log(res);
          return;
        }
        setUser(res.data);
      } catch (error) {
        if (error.name !== "CanceledError") {
          console.log(error.response);
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
