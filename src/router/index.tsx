import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import CircularIndeterminate from "@/components/CircularIndeterminate";
import { ROLE } from "@/constant/core";

import ErrorPage from "@/pages/404";
import RequireAuth from "@/components/Auth/RequireAuth";
import PersistLogin from "@/components/Auth/PersistLogin";
import UnauthorizedPage from "@/pages/403";
import AuthenticationPage from "@/pages/Authentication";

import BookingPage from "@/pages/Patient/Booking";
import DashboardPage from "@/pages/Patient/Dashboard";
import AdminLayout from "@/pages/Admin";
import CreateBranch from "@/pages/Admin/adminCreate/Branchs/CreateBranch";
import CreateStaff from "@/pages/Admin/adminCreate/Staffs/CreateStaff";
import BranchList from "@/pages/Admin/adminViewList/BranchList/BranchList";
import TreatmentList from "@/pages/Admin/adminViewList/TreatmentList/TreatmentList";
import AdminList from "@/pages/Admin/adminViewList/AllStaffList";
import PatientLayout from "@/pages/Patient";
import PatientList from "@/pages/Admin/adminViewList/PatientList/PatientList";
import Calendar from "@/pages/Patient/Calendar";
import PatientAppointmentList from "@/pages/Patient/Appointment/AppointmentList";
import AppointmentDetail from "@/components/Appointment/AppointmentDetail";
import CreateTreatment from "@/pages/Admin/adminCreate/Treatments/CreateTreatment";
import PatientDetail from "@/pages/Admin/adminViewDetail/PatientDetail/PatientDetail";
import PatientDetailTest from "@/pages/Admin/adminViewDetail/PatientDetail/test";

const RouterComponent = () => {
  const router = createBrowserRouter([
    // Public routes
    { index: true, element: <Navigate to="login" /> },
    { path: "unauthorized", element: <UnauthorizedPage /> },
    {
      path: "patientTest",
      element: <PatientLayout />,
      children: [
        { index: true, element: <Navigate to="calendar" /> },
        { path: "calendar", element: <Calendar /> },
        { path: "booking", element: <BookingPage /> },
        { path: "dashboard", element: <DashboardPage /> },
        {
          path: "appointments",
          element: <PatientAppointmentList />,
        },
        {
          path: "appointments/:id",
          element: <AppointmentDetail />,
        },
      ],
    },
    ...["login", "register"].map((path) => ({
      path,
      element: <AuthenticationPage />,
    })),
    { path: "*", element: <ErrorPage /> },
    // Protected routes
    {
      element: <PersistLogin />,
      children: [
        {
          // Patient routes
          path: "patient",
          element: <RequireAuth allowedRoles={[ROLE.PATIENT]} />,
          children: [
            {
              element: <PatientLayout />,
              children: [
                { index: true, element: <Navigate to="calendar" /> },
                { path: "calendar", element: <Calendar /> },
                { path: "booking", element: <BookingPage /> },
                { path: "dashboard", element: <DashboardPage /> },
                {
                  path: "appointments",
                  element: <PatientAppointmentList />,
                },
                {
                  path: "appointments/:id",
                  element: <AppointmentDetail />,
                },
              ],
            },
          ],
        },
        {
          // Admin routes
          path: ROLE.ADMIN,
          element: <RequireAuth allowedRoles={[ROLE.ADMIN]} />,
          children: [],
        },
        {
          // Dentist routes
          path: ROLE.DENTIST,
          element: <RequireAuth allowedRoles={[ROLE.DENTIST]} />,
          children: [],
        },
        {
          // Manager routes
          path: "manager",
          element: <RequireAuth allowedRoles={[ROLE.MANAGER]} />,
          children: [],
        },
        {
          // Staff routes
          path: "staff",
          element: <RequireAuth allowedRoles={[ROLE.STAFF]} />,
          children: [],
        },
      ],
    },
    // Admin test routes
    {
      path: "adminTest",
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="branchList" />,
        },
        //List
        {
          path: "branchList",
          element: <BranchList />,
        },
        {
          path: "treatmentList",
          element: <TreatmentList />,
        },
        {
          path: "adminStaffList",
          element: <AdminList />,
        },
        {
          path: "patientList",
          element: <PatientList />,
        },
        //Create
        {
          path: "branchList/createBranch",
          element: <CreateBranch />,
        },
        {
          path: "treatmentList/createTreatment",
          element: <CreateTreatment />,
        },
        {
          path: "adminStaffList/createStaff",
          element: <CreateStaff />,
        },
        //Detail
        {
          path: "patientDetail",
          element: <PatientDetail />,
        },
        {
          path: "patientDetailTest",
          element: <PatientDetailTest />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider
      fallbackElement={<CircularIndeterminate />}
      router={router}
    />
  );
};

export default RouterComponent;
