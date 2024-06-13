import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import GroupIcon from "@mui/icons-material/Group";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import ReportIcon from "@mui/icons-material/Report";
import ChecklistIcon from "@mui/icons-material/Checklist";
import StoreIcon from "@mui/icons-material/Store";
import { Outlet } from "react-router-dom";

import DefaultLayout from "@/components/Layout/DefaultLayout";

const SidebarAdminBody = [
  { title: "Appointments", path: "", icon: <ChecklistIcon />, },
  { title: "Branchs", path: "branch", icon: <StoreIcon />, },
  { title: "Treatments", path: "treatments", icon: <HealthAndSafetyIcon />, },
  { title: "Patients", path: "patientList", icon: <AccountCircleIcon />, },
  { title: "Account", path: "", icon: <AccountBoxIcon />, },
  { title: "Employees", path: "adminAllStaffList", icon: <GroupIcon />, },
  { title: "Reports", path: "", icon: <ReportIcon />, },
  { title: "Setting", path: "", icon: <SettingsIcon />, },
];

const AdminRoutes = [
  //List
  { path: "branch", breadcrumb: "Branch List" },
  { path: "treatments", breadcrumb: "Treatment List" },
  { path: "adminAllStaffList", breadcrumb: "List All Staff" },
  { path: "patientList", breadcrumb: "Patient List" },
  //Create
  { path: "branch/createBranch", breadcrumb: "Create Branch" },
  { path: "treatments/createTreatment", breadcrumb: "Create Treatment" },
  { path: "adminAllStaffList/createDentist", breadcrumb: "Create Dentist" },
  { path: "adminAllStaffList/createStaff", breadcrumb: "Create Staff" },
  { path: "adminAllStaffList/createManager", breadcrumb: "Create Manager" },
  //Detail
  { path: "branch/:id", breadcrumb: "Branch Detail" },
  { path: "treatments/:id", breadcrumb: "Treatment Detail" },
  { path: "adminStaffList/:id", breadcrumb: "Staff Detail" },
  { path: "patientList/:id", breadcrumb: "Patient Detail" },
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
      header={{ info: AdminInfo, routes: AdminRoutes }}
    >
      <Outlet />
    </DefaultLayout>
  );
};

export default AdminLayout;
