import { decodeToken } from "react-jwt";

import { Token } from "@/types/core";
import { errorToastHandler } from "../toast/actions";
import { sanitizeString } from "../helper";
import { ROLE } from "@/constant/core";

export const formatRole = (role: string) => {
  let result = sanitizeString(role);
  if (result === ROLE.PATIENT) {
    result = "patient";
  } else if (role === ROLE.MANAGER) {
    result = "manager";
  } else if (role === ROLE.STAFF) {
    result = "staff";
  }
  return result;
};

export const getRoles = (accessToken: string) => {
  let role = decodeToken<Token>(accessToken)?.role;
  if (!role || !role.length) {
    errorToastHandler({ message: "No roles found" });
    return { success: false, data: {} };
  }
  role = formatRole(role);
  return { success: true, data: role };
};
