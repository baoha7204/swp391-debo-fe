import { Outlet, Navigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";

const AdminRoute = () => {
  const { userRole } = useAuth();

  if (userRole === undefined) {
    return <Navigate to="/login" replace />;
  } else if (userRole === null) {
    return <Outlet />;
  }

  return userRole == "admin" ? <Outlet /> : <Navigate to="/home" replace />;
};

export default AdminRoute;
