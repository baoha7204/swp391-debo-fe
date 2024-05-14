import { Outlet, Navigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";

const PublicRoute = () => {
  const { userRole } = useAuth();
  if (userRole === undefined) {
    return <Navigate to="/login" replace />;
  } else if (userRole === null) {
    return <Outlet />;
  }

  return userRole !== "" && userRole !== "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/admin/room" replace />
  );
};

export default PublicRoute;
