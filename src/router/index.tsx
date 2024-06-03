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
import CreateBranch from "@/pages/Admin/adminCreate/CreateBranch/index.tsx";
import CreateStaff from "@/pages/Admin/adminCreate/CreateStaff/CreateStaff";
import Treatments from "@/pages/Admin/adminCreate/Treatments/Treatments";
import AdminList from "@/pages/Admin/adminList";
import PatientLayout from "@/pages/Patient";
import Calendar from "@/pages/Patient/Calendar";
import PatientAppointmentList from "@/pages/Patient/Appointment/AppointmentList";
import AppointmentDetail from "@/components/Appointment/AppointmentDetail";
import CreateTreatmentForm from "@/pages/Admin/adminCreate/Treatments/CreateTreatmentForm";

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
          element: <Navigate to="branch" />,
        },
        {
          path: "branch",
          element: <CreateBranch />,
        },
        {
          path: "treatment",
          element: <Treatments />
        },
        {
          path: "createTreatment",
          element: <CreateTreatmentForm />
        },
        {
          path: "adminList",
          element: <AdminList />,
          children: [
            {
              path: "staff",
              element: <CreateStaff />,
            },
          ],
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
