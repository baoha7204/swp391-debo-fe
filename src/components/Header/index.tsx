import { useContext } from "react";
import { ManageAccounts } from "@mui/icons-material";
import { SidebarContext } from "@/context/sidebar.context";
import Fab from "@mui/material/Fab";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import AppBar from "./style";

export type HeaderProps = {
  info: {
    username: string;
    role: string;
    avt: string;
  };
  headerName: any;
  isAllowedBooking?: boolean;
  onCreateBooking?: () => void;
};

const Header = ({
  headerName,
  info,
  isAllowedBooking = true,
  onCreateBooking,
}: HeaderProps) => {
  const { open, handleDrawerOpen } = useContext(SidebarContext);

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
            color: (theme) => theme.palette.text.primary,
            paddingLeft: 0.5,
            paddingRight: 0.5,
          }}
        >
          <div className="branchHeader-container">
            <div className="left-header">
              {headerName}
            </div>
            <div className="center-header">DEBO Clinic</div>
            <div className="right-header">
              <div className="small-info">
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
                <Avatar alt={info.username} src={info.avt} />
                <ul>
                  <li>Hi {info.username}</li>
                  <li>{info.role}</li>
                </ul>
                <Fab size="small" color="primary" aria-label="manage-accounts">
                  <ManageAccounts />
                </Fab>
              </div>
            </div>
          </div>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
