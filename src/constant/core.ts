const STRING_EMPTY = "";

const HTTP_STATUS = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  INTERNAL_SERVER_ERROR: 500,
};

const ROLE = {
  ADMIN: "admin",
  PATIENT: "customer",
  DENTIST: "dentist",
  MANAGER: "clinic manager",
  STAFF: "clinic staff",
};

export { STRING_EMPTY, HTTP_STATUS, ROLE };
