import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { decodeToken } from "react-jwt";
import { Token } from "@/types/core";

export type RequireAuthProps = {
  allowedRoles: string[];
};

const RequireAuth = ({ allowedRoles }: RequireAuthProps) => {
  const { auth } = useAuth();
  const location = useLocation();

  const decoded = auth?.accessToken
    ? decodeToken<Token>(auth.accessToken)
    : undefined;

  const roles = decoded?.roles || [];

  return roles.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.accessToken ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
