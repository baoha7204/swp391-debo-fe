import DashboardList from "@/components/Dashboard/List";
import AppointmentState from "./components/AppointmentState";
import TotalPatient from "./components/TotalPatient";
import { Box } from "@mui/material";
import MiniHeader from "@/pages/Admin/components/MiniHeader/MiniHeader";
import DashboardIcon from "@mui/icons-material/Dashboard";

const data = [
  {
    label: "Appointment State",
    component: <AppointmentState />,
    flex: 1,
  },
  {
    label: "Your Appointment Stat",
    component: <TotalPatient />,
    flex: 2,
  },
];

const DentistDashboardPage = () => {
  return (
    <Box sx={{ p: "24px" }}>
      <MiniHeader content="Dentist Dashboard" IconComponent={DashboardIcon} />
      <DashboardList data={data} />
    </Box>
  );
};

export default DentistDashboardPage;
