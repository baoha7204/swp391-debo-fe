export const API_ENDPOINTS = {
  AUTH: {
    LOGIN_CREDENTIALS: "auth/credentials/login",
    LOGIN_GOOGLE: "auth/google/login",
    REGISTER: "auth/register",
    LOGOUT: "auth/logout",
    REFRESH_TOKEN_CREDENTIALS: "auth/credentials/refreshToken",
    REFRESH_TOKEN_GOOGLE: "auth/google/refreshToken",
  },
  PATIENT: {
    CALENDAR: "patient/calendar",
  },
  TREATMENT: {
    TREATMENT: "treatments",
    TREATMENT_ID: "treatments/:id",
  },
  BRANCH: {
    BRANCH: "branch",
  },
  STAFF: {
    STAFF: "staffs",
  },
};
