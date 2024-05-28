import { PropsWithChildren, useContext } from "react";
import Divider from "@mui/material/Divider";

import DrawerHeader from "./DrawerHeader";
import { SidebarContext } from "@/context/sidebar.context";
import { Drawer } from "./style";

const Sidebar = ({ children }: PropsWithChildren) => {
  const { open } = useContext(SidebarContext);

  return (
    <Drawer
      sx={{
        justifyContent: "space-between",
      }}
      variant="permanent"
      open={open}
    >
      <DrawerHeader />
      <Divider />
      {children}
    </Drawer>
  );
};

export default Sidebar;
