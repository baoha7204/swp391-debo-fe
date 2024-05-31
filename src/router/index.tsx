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

import CalendarPage from "@/pages/Patient/Calendar";
import BookingPage from "@/pages/Patient/Booking";
import DashboardPage from "@/pages/Patient/Dashboard";
import AdminLayout from "@/pages/Admin";
import CreateBranch from "@/pages/Admin/adminCreate/CreateBranch/index.tsx";
import CreateStaff from "@/pages/Admin/adminCreate/CreateStaff/CreateStaff";
import CreateTreatment from "@/pages/Admin/adminCreate/CreateTreatment/CreateTreatment";
import ListStaff from "@/pages/Admin/adminList/ListStaff";
import AdminList from "@/pages/Admin/adminList";

const RouterComponent = () => {
  const router = createBrowserRouter([
    // Public routes
    { index: true, element: <Navigate to="login" /> },
    { path: "unauthorized", element: <UnauthorizedPage /> },
    { path: "calendar", element: <CalendarPage /> },
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
              index: true,
              element: <Navigate to="dashboard" />,
            },
            {
              path: "calendar",
              element: <CalendarPage />,
            },
            {
              path: "booking",
              element: <BookingPage />,
            },
            {
              path: "dashboard",
              element: <DashboardPage />,
            },
          ],
        },
        {
          // Admin routes
          path: "admin",
          element: <RequireAuth allowedRoles={[ROLE.ADMIN]} />,
          children: [],
        },
        {
          // Dentist routes
          path: "dentist",
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
          path: "staff",
          element: <CreateStaff />,
        },
        {
          path: "treatment",
          element: <CreateTreatment />,
        },
        {
          path: "listStaff",
          element: <ListStaff />,
        },
        {
          path: "adminList",
          element: <AdminList />,
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
