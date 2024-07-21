import MiniHeader from "../components/MiniHeader/MiniHeader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoriesPieChart from "./components/CategoriesPieChart";
import DashboardList from "@/components/Dashboard/List";
import { Box } from "@mui/material";
import AppointmentBarChart from "./components/AppointmentBarChart";
import TreatmentPieChart from "./components/TreatmentPieChart";
import { useEffect, useState } from "react";
import axios from "@/config/axios";
import { API_ENDPOINTS } from "@/utils/api";
import EmployeePieChart from "./components/EmployeePieChart";

const AdminDashboard = () => {
  const [treatmentCategories, setTreatmentCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const treatmentRes = await axios.get(API_ENDPOINTS.DASHBOARD.TREATMENT);
        const categoryRes = await axios.get(API_ENDPOINTS.DASHBOARD.CATEGORIES);
        const employeeRes = await axios.get(API_ENDPOINTS.DASHBOARD.EMPLOYEE);
        setTreatmentCategories(treatmentRes.data.data.list);
        setCategories(categoryRes.data.data.list);
        setEmployees(employeeRes.data.data.list);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const data = [
    {
      label: "Treatment Category State",
      component: <CategoriesPieChart treatmentCategories={categories} />,
      flex: 2,
    },
    {
      label: "Treatment State",
      component: (
        <TreatmentPieChart treatmentCategories={treatmentCategories} />
      ),
      flex: 4,
    },
  ];

  const data1 = [
    {
      label: "Appointment State",
      component: <AppointmentBarChart />,
      flex: 4,
    },
  ];

  const data2 = [
    {
      label: "Employee Role State",
      component: <EmployeePieChart Employees={employees} />,
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <MiniHeader content="Dashboard" IconComponent={DashboardIcon} />
      <DashboardList data={data} />
      <DashboardList data={data1} />
      <DashboardList data={data2} />
    </Box>
  );
};

export default AdminDashboard;
