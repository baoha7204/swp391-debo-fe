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

const RouterComponent = () => {
  const router = createBrowserRouter([
    // Public routes
    { index: true, element: <Navigate to="login" /> },
    { path: "unauthorized", element: <UnauthorizedPage /> },
    { path: "login", element: <AuthenticationPage /> },
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
  ]);
  return (
    <RouterProvider
      fallbackElement={<CircularIndeterminate />}
      router={router}
    />
  );
};

export default RouterComponent;
