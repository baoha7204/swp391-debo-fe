import { useContext } from "react";
import { SidebarContext } from "@/context/sidebar.context";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export type SidebarItemProps = {
  key: string;
  icon: JSX.Element;
};

const SidebarItem = ({ key, icon }: SidebarItemProps) => {
  const { open } = useContext(SidebarContext);
  return (
    <ListItem
      key={key}
      disablePadding
      sx={{
        display: "block",
        color: (theme) => theme.palette.primary.main,
      }}
    >
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
            color: (theme) => theme.palette.primary.main,
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={key}
          sx={{
            opacity: open ? 1 : 0,
            color: (theme) => theme.palette.text.primary,
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarItem;
