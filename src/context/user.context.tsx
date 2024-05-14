import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

type UserContextType = {
  currentUser: unknown;
  setCurrentUser: Dispatch<SetStateAction<null>>;
  credential: unknown;
  setCredential: Dispatch<SetStateAction<null>>;
};

const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => null,
  credential: null,
  setCredential: () => null,
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [credential, setCredential] = useState(null);

  const value = { currentUser, setCurrentUser, setCredential, credential };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export type { UserContextType };
export { UserContext, UserProvider };
