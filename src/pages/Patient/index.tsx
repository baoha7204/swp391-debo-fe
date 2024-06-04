import EventIcon from "@mui/icons-material/Event";
import HomeIcon from "@mui/icons-material/Home";
import PaymentsIcon from "@mui/icons-material/Payments";
import { Outlet, useNavigate } from "react-router-dom";

import DefaultLayout from "@/components/Layout/DefaultLayout";

const SidebarPatientBody = [
  { title: "Home", path: "", icon: <HomeIcon /> },
  { title: "Calendar", path: "calendar", icon: <EventIcon /> },
  // TODO: implement these features
  { title: "My Payment", path: "payment", icon: <PaymentsIcon /> },
];

const PatientRoutes = [
  { path: "dashboard", breadcrumb: "Dashboard" },
  { path: "calendar", breadcrumb: "Calendar" },
  { path: "booking", breadcrumb: "Booking" },
  { path: "payment", breadcrumb: "Payment" },
  { path: "appointments", breadcrumb: "Appointments" },
  { path: "appointments/:id", breadcrumb: "Appointment Detail" },
  { path: "appointments/:id/info", breadcrumb: "Info" },
  { path: "appointments/:id/notes", breadcrumb: "Notes" },
  { path: "settings", breadcrumb: "Settings" },
];

const PatientInfo = {
  username: "Bao",
  role: "Patient",
  avt: "/static/images/avatar/1.jpg",
};

const PatientLayout = () => {
  const navigate = useNavigate();
  return (
    <DefaultLayout
      sidebarBody={SidebarPatientBody}
      header={{
        info: PatientInfo,
        routes: PatientRoutes,
        onCreateBooking: () => {
          navigate("booking");
        },
      }}
    >
      <Outlet />
    </DefaultLayout>
  );
};

export default PatientLayout;
