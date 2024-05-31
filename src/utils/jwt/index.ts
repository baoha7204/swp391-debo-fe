import { decodeToken } from "react-jwt";

import { Token } from "@/types/core";
import { errorToastHandler } from "../toast/actions";
import { sanitizeString } from "../helper";
import { ROLE } from "@/constant/core";

export const getRoles = (accessToken: string) => {
  let role = decodeToken<Token>(accessToken)?.role;
  if (!role || !role.length) {
    errorToastHandler({ message: "No roles found" });
    return { success: false, data: {} };
  }
  role = sanitizeString(role);
  if (role === ROLE.PATIENT) {
    role = "patient";
  } else if (role === ROLE.MANAGER) {
    role = "manager";
  } else if (role === ROLE.STAFF) {
    role = "staff";
  }
  return { success: true, data: role };
};
