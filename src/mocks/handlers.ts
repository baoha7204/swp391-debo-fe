import { http, HttpResponse, delay } from "msw";
import users from "./users.json";
import {
  AppointmentPatientLists,
  Branches,
  CalendarPatientEvents,
  Dentists,
  Slots,
  Treatments,
} from "./mock-data";

export const handlers = [
  http.post("/login", async ({ request }) => {
    await delay(2000);
  }),
  http.get("/patient/calendar", async ({ request }) => {
    await delay(2000);
    return HttpResponse.json(
      {
        success: true,
        data: CalendarPatientEvents,
      },
      { status: 200 }
    );
  }),
  http.get("/patient/appointments", async ({ request }) => {
    await delay(2000);
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const total = AppointmentPatientLists.length;
    const page = Number(searchParams.get("page")) || 0;
    const limit = Number(searchParams.get("limit")) || 10;
    const start = page * limit;
    const end = start + limit > total ? total : start + limit;
    const paginatedData = AppointmentPatientLists.slice(start, end);
    return HttpResponse.json(
      {
        success: true,
        data: {
          list: paginatedData,
          total,
        },
        message: "Appointments fetched successfully.",
      },
      { status: 200 }
    );
  }),
  http.post("/register", async ({ request }) => {
    await delay(2000);
    const body = await request.json();
    const { email, password } = body;
    if (!email || !password)
      return HttpResponse.json(
        {
          success: false,
          message: "Validation failed.",
          data: {},
        },
        { status: 422 }
      );
    const dulplicateUser = users.find((user) => user.email === email);
    if (dulplicateUser) {
      return HttpResponse.json(
        {
          success: false,
          data: {},
          message: "Email already exists.",
        },
        { status: 409 }
      );
    }
    try {
      //encrypt the password
      const hashedPwd =
        "$2a$12$vQ68nWKy.2wkyriuOFBKxelPm.Z7JCdpxoWLdhqd3lfOaq1BgL2sW";

      //create and store the new user
      const result = {
        email,
        password: hashedPwd,
      };

      users.push(result);
      JSON.stringify(users);

      return HttpResponse.json(
        {
          success: true,
          data: result,
          message: "User created!.",
        },
        { status: 201 }
      );
    } catch (err) {
      return HttpResponse.json(
        {
          success: false,
          data: {},
          message: err.message,
        },
        { status: 500 }
      );
    }
  }),
  http.get("/branches", async () => {
    await delay(2000);
    return HttpResponse.json(
      {
        success: true,
        data: Branches,
        message: "Fetched branches successfully.",
      },
      { status: 200 }
    );
  }),
  http.get("/treatments", async () => {
    await delay(2000);
    return HttpResponse.json(
      {
        success: true,
        data: Treatments,
        message: "Fetched treatments successfully.",
      },
      { status: 200 }
    );
  }),
  http.get("/dentist", async () => {
    await delay(2000);
    return HttpResponse.json(
      {
        success: true,
        data: Dentists,
        message: "Fetched dentists successfully.",
      },
      { status: 200 }
    );
  }),
  http.get("/slot", async () => {
    await delay(2000);
    return HttpResponse.json(
      {
        success: true,
        data: Slots,
        message: "Fetched slots successfully.",
      },
      { status: 200 }
    );
  }),
];
