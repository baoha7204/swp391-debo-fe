import EventIcon from "@mui/icons-material/Event";
import HomeIcon from "@mui/icons-material/Home";
import PaymentsIcon from "@mui/icons-material/Payments";
import ChecklistIcon from "@mui/icons-material/Checklist";
import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";

import DefaultLayout from "@/components/Layout/DefaultLayout";
import { UserContext } from "../User/user.context";

const SidebarPatientBody = [
  { title: "Home", path: "", icon: <HomeIcon /> },
  { title: "Calendar", path: "calendar", icon: <EventIcon /> },
  { title: "Appointment List", path: "appointments", icon: <ChecklistIcon /> },
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
  { path: "settings/profile", breadcrumb: "Profile" },
  { path: "booking/reschedule", breadcrumb: "Reschedule" },
  { path: "reschedule", breadcrumb: "Reschedule Approve" },
];

const PatientLayout = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <DefaultLayout
      sidebarBody={SidebarPatientBody}
      header={{
        info: {
          username: user?.username || "user",
          role: "Patient",
          avt: user?.avt || "/broken-image.jpg",
        },
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
