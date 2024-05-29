import { decodeToken } from "react-jwt";

import { Token } from "@/types/core";
import { errorToastHandler } from "../toast/actions";
import { sanitizeString } from "../helper";

export const getRoles = (accessToken: string) => {
  let role = decodeToken<Token>(accessToken)?.role;
  if (!role || !role.length) {
    errorToastHandler({ message: "No roles found" });
    return { success: false, data: [] };
  }
  role = sanitizeString(role);
  return { success: true, data: role };
};
