import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";
import authApi from "@/utils/api/authApi";

const mockAuthApi = Object.assign({}, authApi);
describe("Login Form", () => {
  beforeEach(() => {
    mockAuthApi.login = jest.fn(() =>
      Promise.resolve({
        success: true,
        data: {
          accessToken: "accessToken",
          refreshToken: "refreshToken",
        },
      })
    );
    render(
      <BrowserRouter>
        <LoginForm auth={mockAuthApi.login} />
      </BrowserRouter>
    );
  });
  it("should submit when enter valid credentials (Email)", async () => {
    // Arrange
    const { getByTestId } = screen;
    const emailInput = "abc@gmail.com";
    const passInput = "password";

    // Act
    await userEvent.type(getByTestId("user"), emailInput);
    await userEvent.type(getByTestId("password"), passInput);
    fireEvent.click(getByTestId("login"));
    // Assert
    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
    expect(mockAuthApi.login).toHaveBeenCalledWith({
      email: emailInput,
      password: passInput,
    });
  });
  it("should submit when enter valid credentials (Phone number)", async () => {
    // Arrange
    const { getByTestId } = screen;
    const phoneInput = "0762123411";
    const passInput = "password";

    // Act
    await userEvent.type(getByTestId("user"), phoneInput);
    await userEvent.type(getByTestId("password"), passInput);
    fireEvent.click(getByTestId("login"));
    // Assert
    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
    expect(mockAuthApi.login).toHaveBeenCalledWith({
      phoneNumber: phoneInput,
      password: passInput,
    });
  });
  it("should display required error when value is blank", async () => {
    // Arrange
    const { getByTestId, findByText } = screen;

    // Act
    fireEvent.click(getByTestId("login"));
    const userErrorMsg = await findByText("Email/phone number is required");
    const passErrorMsg = await findByText("Password is required");
    // Assert
    expect(userErrorMsg).toBeInTheDocument();
    expect(passErrorMsg).toBeInTheDocument();
    expect(mockAuthApi.login).not.toHaveBeenCalled();
  });
  it.each([
    { input: "test@test.c", expected: "Invalid email/phone number" },
    { input: "0762abc", expected: "Invalid email/phone number" },
    { input: "07621234111", expected: "Invalid email/phone number" },
  ])(
    "should display matching error when enter $input to email/phone number field",
    async ({ input, expected }) => {
      // Arrange
      const { getByTestId, findByText } = screen;
      const passInput = "password";

      // Act
      await userEvent.type(getByTestId("user"), input);
      await userEvent.type(getByTestId("password"), passInput);
      fireEvent.click(getByTestId("login"));
      const userErrorMsg = await findByText(expected);
      // Assert
      expect(userErrorMsg).toBeInTheDocument();
      expect(getByTestId("user")).toHaveValue(input);
      expect(getByTestId("password")).toHaveValue(passInput);
      expect(mockAuthApi.login).not.toHaveBeenCalled();
    }
  );
});
