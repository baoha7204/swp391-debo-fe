import SettingsIcon from "@mui/icons-material/Settings";
import EventIcon from "@mui/icons-material/Event";
import HomeIcon from "@mui/icons-material/Home";
import PaymentsIcon from "@mui/icons-material/Payments";
import { Outlet } from "react-router-dom";

import DefaultLayout from "@/components/Layout/DefaultLayout";

const SidebarPatientBody = [
  { title: "Home", path: "", icon: <HomeIcon /> },
  { title: "Calendar", path: "calendar", icon: <EventIcon /> },
  { title: "My Payment", path: "payment", icon: <PaymentsIcon /> },
  // TODO: implement these features
  { title: "Setting", path: "", icon: <SettingsIcon /> },
];

const PatientInfo = {
  username: "Bao",
  role: "Patient",
  avt: "/static/images/avatar/1.jpg",
};

const PatientLayout = () => {
  return (
    <DefaultLayout
      sidebarBody={SidebarPatientBody}
      header={{ info: PatientInfo, name: "Patient layout" }}
    >
      <Outlet />
    </DefaultLayout>
  );
};

export default PatientLayout;
