import EventIcon from "@mui/icons-material/Event";
import HomeIcon from "@mui/icons-material/Home";
import PaymentsIcon from "@mui/icons-material/Payments";
import ChecklistIcon from "@mui/icons-material/Checklist";
import PersonIcon from "@mui/icons-material/Person";
import { Outlet } from "react-router-dom";

import DefaultLayout from "@/components/Layout/DefaultLayout";

const SidebarDentistBody = [
  { title: "Home", path: "", icon: <HomeIcon /> },
  { title: "Calendar", path: "calendar", icon: <EventIcon /> },
  { title: "Appointment List", path: "appointments", icon: <ChecklistIcon /> },
  { title: "Patient List", path: "patients", icon: <PersonIcon /> },
  // TODO: implement these features
  { title: "My Payment", path: "payment", icon: <PaymentsIcon /> },
];

const DentistRoutes = [
  { path: "dashboard", breadcrumb: "Dashboard" },
  { path: "calendar", breadcrumb: "Calendar" },
  { path: "payment", breadcrumb: "Payment" },
  { path: "appointments", breadcrumb: "Appointments" },
  { path: "appointments/:id", breadcrumb: "Appointment Detail" },
  { path: "appointments/:id/info", breadcrumb: "Info" },
  { path: "appointments/:id/notes", breadcrumb: "Notes" },
  { path: "patients", breadcrumb: "Patients" },
  { path: "patients/:id", breadcrumb: "Patient Detail" },
  { path: "settings", breadcrumb: "Settings" },
];

const DentistInfo = {
  username: "Bao",
  role: "Dentist",
  avt: "/static/images/avatar/1.jpg",
};

const DentistLayout = () => {
  return (
    <DefaultLayout
      sidebarBody={SidebarDentistBody}
      header={{
        info: DentistInfo,
        routes: DentistRoutes,
      }}
    >
      <Outlet />
    </DefaultLayout>
  );
};

export default DentistLayout;
