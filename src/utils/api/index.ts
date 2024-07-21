export const API_ENDPOINTS = {
  AUTH: {
    LOGIN_CREDENTIALS: "auth/credentials/login",
    LOGIN_GOOGLE: "auth/google/login",
    GET_USER_GOOGLE: "https://www.googleapis.com/oauth2/v3/userinfo",
    REGISTER: "auth/register",
    LOGOUT: "auth/logout",
    REFRESH_TOKEN_CREDENTIALS: "auth/credentials/refreshToken",
    REFRESH_TOKEN_GOOGLE: "auth/google/refreshToken",
  },
  PATIENT: {
    CALENDAR: "patient/calendar",
    APPOINTMENT: {
      LIST: "patient/appointments",
    },
  },
  BRANCH: {
    LIST: "branch",
    GET_BRANCH_MANAGER: "branch/branchmanager",
    BRANCH_APPOINTMENT: "branch/branchappointment",
  },
  TREATMENT: {
    TREATMENT: "treatments",
    LIST: {
      BY_BRANCH: "treatments/branch",
    },
  },
  DENTIST: {
    LIST: "dentists",
    CALENDAR: "dentist/calendar",
    APPOINTMENT: {
      LIST: "dentist/appointments",
    },
    PATIENT_LIST: "dentist/patients",
  },
  SLOT: {
    LIST: "slot",
  },
  APPOINTMENT: {
    ALL: "viewallappointment",
    ONE: "appointment",
    HISTORY: "viewhistoryappoinment",
    DETAIL: "viewappointmentdetails",
    SLOTS: "availableslot",
    RESCHEDULE: "reschedule",
    UPDATEAPPOINTMENTNOTES: "updateappointmentnote",
    RESCHEDULE_BY_DENTIST: "reschedulebydentist",
    RESCHEDULE_TEMP_DENT: "rescheduletempdent",
    RESCHEDULE_TOKEN: "dentist/generateconfirmtoken",
    RESCHEDULE_CONFIRM: "manager/confirmreschedulerequest",
    MANAGER_RESCHEDULE_REQUEST: "manager/reschedule-request",
  },
  USERS: {
    //User
    USER: "User",
    ONE: "User",
    USERS: "Users",
    //Create
    CREATE_STAFF: "User/createstaff",
    CREATE_DENTIST: "User/createdentist",
    CREATE_MANAGER: "User/createmanager",
    //List
    LIST_DENTIST: "User/dentistlist",
    LIST_MANAGER: "User/managerlist",
    LIST_STAFF: "User/stafflist",
    LIST_CUSTOMER: "User/customerlist",
    //Available Manager
    AVAILABLE_MANAGER: "User/availablemanager",
    //Available Employee
    EMPLOYEE_WITH_BRANCH: "getallempwithbranch",
    //Update branch for employee
    UPDATE_BRANCH_FOR_EMPLOYEE: "updateBranchForEmployee",
    //GetEmployeeWithID
    EMPLOYEE_WITH_ID: "getempbyid",
    //Get Employee with Branch ID
    EMPLOYEE_WITH_BRANCH_ID: "getempwithbranchid",
  },
  PAYMENT: {
    ONE: "payment",
  },
  DASHBOARD: {
    APPOINTMENT_STATE: "dashboard/appointmentstate",
    DENTIST_APPOINTMENT_STATE: "dashboard/dentist/appointmentstate",
    TOTAL_PAID: "dashboard/totalpaid",
    CATEGORIES: "dashboard/distribution/categories",
    TREATMENT: "dashboard/distribution/treatment",
    TOTAL_REVENEUE: "dashboard/totalrevenue",
    EMPLOYEE: "dashboard/employeesalarydistribution",
    //Manager Dashboard
    BRANCH_TOTAL: "dashboard/branchtotalrevenue",
    BRANCH_TREATMENT: "dashboard/branch/distribution/treatment",
    BRANCH_CATEGORY: "dashboard/branch/distribution/category",
    DENTIST_TOTAL_APPOINTMENT: "dashboard/dentist/totalAppointment",
  },
};
