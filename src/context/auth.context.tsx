import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

type AuthType = {
  accessToken?: string;
  refreshToken?: string;
} | null;

type AuthContextType<T> = {
  auth: T;
  setAuth: Dispatch<SetStateAction<T>>;
};

const AuthContext = createContext<AuthContextType<AuthType>>({
  auth: null,
  setAuth: () => null,
});

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [auth, setAuth] = useState<AuthType>(null);
  const [persist, setPersist] = useState(
    JSON.parse(localStorage.getItem("persist") || false)
  );

  return (
    <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
      {children}
    </AuthContext.Provider>
  );
};

export type { AuthContextType, AuthType };
export { AuthContext, AuthProvider };
