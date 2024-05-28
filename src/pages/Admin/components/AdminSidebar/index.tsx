import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import GroupIcon from "@mui/icons-material/Group";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import ReportIcon from "@mui/icons-material/Report";
import EventIcon from "@mui/icons-material/Event";
import StoreIcon from "@mui/icons-material/Store";

import Sidebar from "@/components/Sidebar";
import SidebarBody from "@/components/Sidebar/SidebarBody";

const AdminBody = [
  { text: "Reservations", icon: <EventIcon /> },
  { text: "Branchs", icon: <StoreIcon /> },
  { text: "Treatments", icon: <HealthAndSafetyIcon /> },
  { text: "Patients", icon: <AccountCircleIcon /> },
  { text: "Account", icon: <AccountBoxIcon /> },
  { text: "Staffs", icon: <GroupIcon /> },
  { text: "Reports", icon: <ReportIcon /> },
  { text: "Setting", icon: <SettingsIcon /> },
];

const AdminSidebar = () => {
  return (
    <Sidebar>
      <SidebarBody body={AdminBody} />
    </Sidebar>
  );
};

export default AdminSidebar;
