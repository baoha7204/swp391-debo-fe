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

import BookingPage from "@/components/Booking";
import DashboardPage from "@/pages/Patient/Dashboard";
import PatientLayout from "@/pages/Patient";
import Calendar from "@/pages/Patient/Calendar";
import PatientAppointmentList from "@/pages/Patient/Appointment/AppointmentList";
import AppointmentDetail from "@/components/Appointment/AppointmentDetail";
import DentistLayout from "@/pages/Dentist";
import DentistAppointmentList from "@/pages/Dentist/Appointment";
import DentistDashboardPage from "@/pages/Dentist/Dashboard";
import DentistCalendar from "@/pages/Dentist/Calendar";

////Manager////

////Admin////
import AdminLayout from "@/pages/Admin";
//AdminList
import BranchList from "@/pages/Admin/adminViewList/BranchList/BranchList";
import TreatmentList from "@/pages/Admin/adminViewList/TreatmentList/TreatmentList";
import AdminAllStaffList from "@/pages/Admin/adminViewList/AllStaffList";
import PatientList from "@/pages/Admin/adminViewList/PatientList/PatientList";
//AdminDetail
import AllStaffsDetail from "@/pages/Admin/adminViewDetail/AllStaffsDetail/AllStaffsDetail";
import BranchDetail from "@/pages/Admin/adminViewDetail/BranchDetail/BranchDetail";
import TreatmentDetail from "@/pages/Admin/adminViewDetail/TreatmentDetail/TreatmentDetail";
//AdminCreate
import CreateBranch from "@/pages/Admin/adminCreate/Branchs/CreateBranch";
import CreateTreatment from "@/pages/Admin/adminCreate/Treatments/CreateTreatment";
import CreateStaff from "@/pages/Admin/adminCreate/Staffs/Staff/CreateStaff";
import CreateManager from "@/pages/Admin/adminCreate/Staffs/Manager/CreateManager";
import CreateDentist from "@/pages/Admin/adminCreate/Staffs/Dentist/CreateDentist";

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
    {
      path: "dentistTest",
      element: <DentistLayout />,
      children: [
        { index: true, element: <Navigate to="calendar" /> },
        { path: "calendar", element: <DentistCalendar /> },
        { path: "dashboard", element: <DentistDashboardPage /> },
        {
          path: "appointments",
          element: <DentistAppointmentList />,
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
          children: [
            {
              element: <DentistLayout />,
              children: [
                { index: true, element: <Navigate to="calendar" /> },
                { path: "calendar", element: <DentistCalendar /> },
                { path: "dashboard", element: <DentistDashboardPage /> },
                {
                  path: "appointments",
                  element: <DentistAppointmentList />,
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
          path: "adminAllStaffList",
          element: <AdminAllStaffList />,
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
          path: "adminAllStaffList/createStaff",
          element: <CreateStaff />,
        },
        {
          path: "adminAllStaffList/createDentist",
          element: <CreateDentist />,
        },
        {
          path: "adminAllStaffList/createManager",
          element: <CreateManager />,
        },
        //Detail
        {
          path: "branchList/:id",
          element: <BranchDetail />,
        },
        {
          path: "treatmentList/:id",
          element: <TreatmentDetail />,
        },
        {
          path: "adminAllStaffList/:id",
          element: <AllStaffsDetail />,
        },
        // {
        //   path: "patientList/:id",
        //   element: <PatientDetail />,
        // },
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
