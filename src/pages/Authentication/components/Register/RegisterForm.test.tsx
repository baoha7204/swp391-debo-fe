import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import authApi from "@/utils/api/authApi";
import userEvent from "@testing-library/user-event";

const mockAuthApi = Object.assign({}, authApi);
describe("Register Form", () => {
  beforeEach(() => {
    mockAuthApi.register = jest.fn(() => Promise.resolve({ success: true }));
    render(
      <BrowserRouter>
        <RegisterForm auth={mockAuthApi.register} />
      </BrowserRouter>
    );
  });
  it("should submit when enter valid credentials (Email)", async () => {
    // Arrange
    const { getByTestId } = screen;
    const emailInput = "abc@gmail.com";
    const phoneInput = "0762123411";
    const passInput = "password";

    // Act
    await userEvent.type(getByTestId("email"), emailInput);
    await userEvent.type(getByTestId("phoneNumber"), phoneInput);
    await userEvent.type(getByTestId("password"), passInput);
    await userEvent.type(getByTestId("confirmPassword"), passInput);
    fireEvent.click(getByTestId("register"));
    // Assert
    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
    expect(mockAuthApi.register).toHaveBeenCalledWith({
      email: emailInput,
      phoneNumber: phoneInput,
      password: passInput,
    });
  });
  it("should display required error when value is blank", async () => {
    // Arrange
    const { getByTestId, findByText } = screen;

    // Act
    fireEvent.click(getByTestId("register"));
    const emailErrorMsg = await findByText("Email is required");
    const phoneErrorMsg = await findByText("Phone number is required");
    const passErrorMsg = await findByText("Password is required");
    const confirmPassErrorMsg = await findByText(
      "Confirm password is required"
    );
    // Assert
    expect(emailErrorMsg).toBeInTheDocument();
    expect(phoneErrorMsg).toBeInTheDocument();
    expect(passErrorMsg).toBeInTheDocument();
    expect(confirmPassErrorMsg).toBeInTheDocument();
    expect(mockAuthApi.register).not.toHaveBeenCalled();
  });
  it.each([
    {
      input: {
        email: "test@test.c",
        phoneNumber: "0762abc",
        password: "pass",
        confirmPassword: "pass1",
      },
      expected: [
        "Invalid email address",
        "Invalid phone number",
        "Passwords do not match",
      ],
    },
  ])(
    "should display matching error when enter invalid input ",
    async ({ input, expected }) => {
      // Arrange
      const { getByTestId, findByText } = screen;

      // Act
      await userEvent.type(getByTestId("email"), input.email);
      await userEvent.type(getByTestId("phoneNumber"), input.phoneNumber);
      await userEvent.type(getByTestId("password"), input.password);
      await userEvent.type(
        getByTestId("confirmPassword"),
        input.confirmPassword
      );
      fireEvent.click(getByTestId("register"));
      const errorMessages = expected.map((msg) => findByText(msg));
      // Assert
      for (const errorMsg of errorMessages) {
        expect(await errorMsg).toBeInTheDocument();
      }
      expect(getByTestId("email")).toHaveValue(input.email);
      expect(getByTestId("phoneNumber")).toHaveValue(input.phoneNumber);
      expect(getByTestId("password")).toHaveValue(input.password);
      expect(getByTestId("confirmPassword")).toHaveValue(input.confirmPassword);
      expect(mockAuthApi.register).not.toHaveBeenCalled();
    }
  );
});
