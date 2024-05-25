import { http, HttpResponse, delay } from "msw";
import users from "./users.json";

export const handlers = [
  http.post("/login", async ({ request }) => {
    await delay(2000);
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
];
