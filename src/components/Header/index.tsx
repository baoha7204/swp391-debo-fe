import { useContext } from "react";
import { SidebarContext } from "@/context/sidebar.context";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import AppBar from "./style";
import MyBreadcrumbs from "../MyBreadcrumbs";
import { RouteBreadcrumb, withBreadcrumbs } from "@/hoc/withBreadcrumbs";
import AccountMenu from "../AccountMenu";

export type HeaderProps = {
  info: {
    username: string;
    role: string;
    avt: string;
  };
  isAllowedBooking?: boolean;
  onCreateBooking?: () => void;
  routes: RouteBreadcrumb[];
};

const Header = ({
  routes,
  info,
  isAllowedBooking = true,
  onCreateBooking,
}: HeaderProps) => {
  const { open, handleDrawerOpen } = useContext(SidebarContext);
  const Breadcrumbs = withBreadcrumbs(routes)(MyBreadcrumbs);

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar
        sx={{
          backgroundColor: (theme) => theme.palette.common.white,
        }}
      >
        <IconButton
          color="primary"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          noWrap
          component="div"
          sx={{
            width: "100%",
            color: (theme) => theme.palette.text.primary,
            paddingLeft: 0.5,
            paddingRight: 0.5,
          }}
        >
          <div className="branchHeader-container">
            <div className="left-header">
              <Breadcrumbs />
            </div>
            <div className="center-header">DEBO Clinic</div>
            <div className="right-header">
              <div className="small-info">
                <AccountMenu {...info} />
                <ul>
                  <li>Hi {info.username}</li>
                  <li>{info.role}</li>
                </ul>
                {isAllowedBooking && (
                  <Fab
                    size="small"
                    color="primary"
                    aria-label="add"
                    onClick={onCreateBooking}
                  >
                    <AddIcon />
                  </Fab>
                )}
              </div>
            </div>
          </div>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
