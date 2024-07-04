import DashboardList from "@/components/Dashboard/List";
import AppointmentState from "./components/AppointmentState";
import TotalPaid from "./components/TotalPaid";

const data = [
  {
    label: "Appointment State",
    component: <AppointmentState />,
  },
  {
    label: "Cost and usage",
    component: <TotalPaid />,
  },
];

const DashboardPage = () => {
  return <DashboardList data={data} />;
};

export default DashboardPage;
