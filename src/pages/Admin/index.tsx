
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import GroupIcon from "@mui/icons-material/Group";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import ReportIcon from "@mui/icons-material/Report";
import EventIcon from "@mui/icons-material/Event";
import StoreIcon from "@mui/icons-material/Store";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import DefaultLayout from "@/components/Layout/DefaultLayout";

const SidebarAdminBody = [
  { title: "Reservations", path: "", icon: <EventIcon />, },
  { title: "Branchs", path: "branch", icon: <StoreIcon />, },
  { title: "Treatments", path: "treatment", icon: <HealthAndSafetyIcon />, },
  { title: "Patients", path: "", icon: <AccountCircleIcon />, },
  { title: "Account", path: "", icon: <AccountBoxIcon />, },
  { title: "Staffs", path: "staff", icon: <GroupIcon />, },
  { title: "Reports", path: "", icon: <ReportIcon />, },
  { title: "Setting", path: "", icon: <SettingsIcon />, },
];

const AdminInfo = {
  username: "Duong",
  role: "Admin",
  avt: "/static/images/avatar/1.jpg",
};

const AdminLayout = () => {
  return (
    <DefaultLayout
      sidebarBody={SidebarAdminBody}
      header={{ info: AdminInfo, routes: [] }}
    >
      <Outlet />
    </DefaultLayout>
  );
};

export default AdminLayout;
