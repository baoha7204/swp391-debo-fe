import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { decodeToken } from "react-jwt";
import { Token } from "@/types/core";
import { sanitizeString } from "@/utils/helper";
import useFetchGoogle from "./hooks/useFetchGoogle";
import CircularIndeterminate from "@/components/CircularIndeterminate";
import { useEffect, useState } from "react";

export type RequireAuthProps = {
  allowedRoles: string[];
};

const RequireAuth = ({ allowedRoles }: RequireAuthProps) => {
  const { auth } = useAuth();
  const location = useLocation();
  const { success, isLoading } = useFetchGoogle(auth?.accessToken || "");
  const [role, setRole] = useState(() => {
    const decoded = auth?.accessToken
      ? decodeToken<Token>(auth.accessToken)
      : undefined;
    return decoded?.role || "";
  });

  useEffect(() => {
    if (success) {
      setRole("admin");
    }
  }, [success]);

  return isLoading ? (
    <CircularIndeterminate />
  ) : allowedRoles.includes(sanitizeString(role)) ? (
    <Outlet />
  ) : auth?.accessToken ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
