import DashboardList from "@/components/Dashboard/List";
import AppointmentState from "./components/AppointmentState";
import TotalPatient from "./components/TotalPatient";

const data = [
  {
    label: "Appointment State",
    component: <AppointmentState />,
    flex: 1,
  },
  {
    label: "Your Patients",
    component: <TotalPatient />,
    flex: 2,
  },
];

const DentistDashboardPage = () => {
  return <DashboardList data={data} />;
};

export default DentistDashboardPage;
