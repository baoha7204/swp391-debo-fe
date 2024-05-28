import { useContext } from "react";
import { useTheme } from "@mui/material";
import { SidebarContext } from "@/context/sidebar.context";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Logo from "@/components/Logo";
import DrawerHeaderStyle from "./style";

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
