import DashboardList from "@/components/Dashboard/List";
import AppointmentState from "./components/AppointmentState";
import TotalPaid from "./components/TotalPaid";
import MiniHeader from "@/pages/Admin/components/MiniHeader/MiniHeader";
import { Box } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";

const data = [
  {
    label: "Appointment State",
    component: <AppointmentState />,
    flex: 1,
  },
  {
    label: "Cost and usage",
    component: <TotalPaid />,
    flex: 2,
  },
];

const DashboardPage = () => {
  return (
    <Box sx={{ p: "24px" }}>
      <MiniHeader content="Dashboard" IconComponent={DashboardIcon} />
      <DashboardList data={data} />
    </Box>
  );
};

export default DashboardPage;
