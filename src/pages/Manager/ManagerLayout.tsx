import DefaultLayout from "@/components/Layout/DefaultLayout";
import ChecklistIcon from "@mui/icons-material/Checklist";
import GroupIcon from "@mui/icons-material/Group";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../User/user.context";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';

const SidebarManagerBody = [
  { title: "Dashboard", path: "dashboard", icon: <DashboardIcon /> },
  { title: "Appointments", path: "appointments", icon: <ChecklistIcon /> },
  {
    title: "Reschedule Request",
    path: "reschedule-request",
    icon: <NotificationImportantIcon />,
  },
  { title: "Employees", path: "managerAllStaffList", icon: <GroupIcon /> },
];

const ManagerRoutes = [
  { path: "dashboard", breadcrumb: "Dashboard" },
  { path: "appointments", breadcrumb: "Appointments" },
  { path: "appointments/:id", breadcrumb: "Appointment Detail" },
  { path: "appointments/:id/info", breadcrumb: "Info" },
  { path: "appointments/:id/notes", breadcrumb: "Notes" },
  { path: "managerAllStaffList", breadcrumb: "Employees" },
  { path: "managerAllStaffList/:id", breadcrumb: "Employee Detail" },
  { path: "reschedule-request", breadcrumb: "Reschedule Request" },
];

function ManagerLayout() {
  const { user } = useContext(UserContext);

  return (
    <DefaultLayout
      sidebarBody={SidebarManagerBody}
      header={{
        info: {
          username: user?.username || "user",
          role: user?.roleName as string,
          avt: user?.avt || "/broken-image.jpg",
        },
        routes: ManagerRoutes,
        isAllowedBooking: false,
      }}
    >
      <Outlet />
    </DefaultLayout>
  );
}

export default ManagerLayout;
