import { STRING_EMPTY } from "@/constant/core";
import useLocalStorage from "@/hooks/useLocalStorage";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

type AuthType = {
  accessToken?: string;
  refreshToken?: string;
} | null;

type AuthContextType<T> = {
  auth: T;
  setAuth: Dispatch<SetStateAction<T>>;
  refreshToken: string;
  setRefreshToken: Dispatch<SetStateAction<string>>;
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
};

const AuthContext = createContext<AuthContextType<AuthType>>({
  auth: null,
  setAuth: () => null,
  refreshToken: STRING_EMPTY,
  setRefreshToken: () => STRING_EMPTY,
  accessToken: STRING_EMPTY,
  setAccessToken: () => STRING_EMPTY,
});

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [auth, setAuth] = useState<AuthType>(null);
  const [accessToken, setAccessToken] = useLocalStorage("accessToken", "");
  const [refreshToken, setRefreshToken] = useLocalStorage("refreshToken", "");

  useEffect(() => {
    setAuth((prev) => ({ ...prev, refreshToken }));
    setAuth((prev) => ({ ...prev, accessToken }));
  }, [refreshToken, accessToken]);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        refreshToken,
        setRefreshToken,
        accessToken,
        setAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export type { AuthContextType, AuthType };
export { AuthContext, AuthProvider };
