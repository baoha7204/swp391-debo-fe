import { Navigate, useLoaderData } from "react-router-dom";
import { FormatUser } from "./types/core";

const Controller = () => {
  const infoUser = useLoaderData() as FormatUser;

  return infoUser?.role == "user" ? (
    <Navigate to="/user" />
  ) : infoUser?.role == "admin" ? (
    <Navigate to="/admin" />
  ) : (
    <Navigate to="/login" />
  );
};

export default Controller;
