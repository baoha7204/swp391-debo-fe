import { HTTP_STATUS } from "@/constant/core";
import { toastError } from ".";
import { ApiResponse, EmptyObj } from "@/types/core";

export const DEFAULT_ERROR = "An error occurred, please try again later";
export const NO_SERVER_RESPONSE_ERROR = "No server response";

export const errorToastHandler = <T = EmptyObj>(res: ApiResponse<T>) => {
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
