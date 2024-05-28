import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

type SidebarContextType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
};

const SidebarContext = createContext<SidebarContextType>({
  open: true,
  setOpen: () => true,
  handleDrawerOpen: () => {},
  handleDrawerClose: () => {},
});

const SidebarProvider = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const value = { open, setOpen, handleDrawerOpen, handleDrawerClose };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

export type { SidebarContextType };
export { SidebarContext, SidebarProvider };
