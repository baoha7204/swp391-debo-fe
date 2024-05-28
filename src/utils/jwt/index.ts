import { decodeToken } from "react-jwt";

import { Token } from "@/types/core";
import { errorToastHandler } from "../toast/actions";

export const getRoles = (accessToken: string) => {
  const roles = decodeToken<Token>(accessToken)?.roles;
  if (!roles || !roles.length) {
    errorToastHandler({ message: "No roles found" });
    return { success: false, data: [] };
  }
  return { success: true, data: roles };
};
