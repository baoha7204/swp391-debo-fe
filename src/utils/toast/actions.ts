import { HTTP_STATUS } from "@/constant/core";
import { toastError } from ".";

export const DEFAULT_ERROR = "An error occurred, please try again later";

export const errorToastHandler = (res: any) => {
  if (res?.data?.message) {
    return toastError(res.data.message);
  }
  if (res?.message) {
    return toastError(res.message);
  }

  let message = DEFAULT_ERROR;
  switch (res.status) {
    case HTTP_STATUS.BAD_REQUEST:
      message = "No input received";
      break;
    case HTTP_STATUS.UNAUTHORIZED:
      message = "You are not authorized to access this";
      break;
    case HTTP_STATUS.FORBIDDEN:
      message = "Access has been denied";
      break;
    case HTTP_STATUS.NOT_FOUND:
      message = "Resource is not found";
      break;
    case HTTP_STATUS.INTERNAL_SERVER_ERROR:
      message = "Unexpected server error";
  }
  toastError(message);
};
