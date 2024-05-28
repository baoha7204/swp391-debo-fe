import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import Logo from "@/components/Logo";
import DrawerHeaderStyle from "./style";
import { SidebarContext } from "@/context/sidebar.context";

const DrawerHeader = () => {
  const theme = useTheme();
  const { handleDrawerClose } = useContext(SidebarContext);
  return (
    <DrawerHeaderStyle
      sx={{
        justifyContent: "space-around",
      }}
    >
      <Logo />
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </DrawerHeaderStyle>
  );
};

export default DrawerHeader;
