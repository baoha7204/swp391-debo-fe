import MiniHeader from "@/pages/Admin/components/MiniHeader/MiniHeader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoriesPieChart from "./components/components/CategoriesPieChart";
import DashboardList from "@/components/Dashboard/List";
import { Box } from "@mui/material";
import TreatmentPieChart from "./components/components/TreatmentPieChart";
import { useContext, useEffect, useState } from "react";
import axios from "@/config/axios";
import { API_ENDPOINTS } from "@/utils/api";
import EmployeePieChart from "./components/components/EmployeePieChart";
import { UserContext } from "@/pages/User/user.context";

type Branch = {
  id: number;
  mngId: string;
};

const ManagerDashboard = () => {
  const [treatmentCategories, setTreatmentCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(true);

  const { user, isLoading: isUserLoading } = useContext(UserContext);
  const [branch, setBranch] = useState<Branch>({ id: 0, mngId: "" });

  console.log("Manager ID", user?.id);

  const getBranchManager = async () => {
    try {
      const res = await axios.get(
        `${API_ENDPOINTS.BRANCH.GET_BRANCH_MANAGER}/${user?.id}`
      );
      console.log("Branch Manager", res.data.data);
      setBranch(res.data.data);
    } catch (error) {
      console.error("Failed to fetch branch manager:", error);
    } finally {
      setLoading1(false);
    }
  };

  useEffect(() => {
    const fetchData = async (branchId: number) => {
      try {
        const treatmentRes = await axios.get(
          `${API_ENDPOINTS.DASHBOARD.BRANCH_TREATMENT}/${branchId}`
        );
        const categoryRes = await axios.get(
          `${API_ENDPOINTS.DASHBOARD.BRANCH_CATEGORY}/${branchId}`
        );
        const employeeRes = await axios.get(
          `${API_ENDPOINTS.USERS.EMPLOYEE_WITH_BRANCH_ID}/${branchId}`
        );
        setTreatmentCategories(treatmentRes.data.data.list);
        setCategories(categoryRes.data.data.list);
        setEmployees(employeeRes.data.data.list);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.id && !isUserLoading) {
      getBranchManager().then(() => {
        fetchData(branch.id);
      });
    }
  }, [user?.id, isUserLoading, branch.id]);

  if (loading1 || loading) {
    return <div>Loading...</div>;
  }

  const data = [
    {
      label: "Treatment Category State",
      component: <CategoriesPieChart Categories={categories} />,
      flex: 2,
    },
    {
      label: "Treatment State",
      component: (
        <TreatmentPieChart treatmentCategories={treatmentCategories} />
      ),
      flex: 3,
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
      <DashboardList data={data2} />
    </Box>
  );
};

export default ManagerDashboard;
