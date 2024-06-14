import { fireEvent, render } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { BrowserRouter } from "react-router-dom";

describe("Login Form", () => {
  it("should display required error when value is invalid", async () => {
    // Arrange
    const { getByTestId, findByText } = render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    // Act
    fireEvent.click(getByTestId("login"), { name: /Sign in/i });
    const userErrorMsg = await findByText("Email/phone number is required");
    const passErrorMsg = await findByText("Password is required");
    // Assert
    expect(userErrorMsg).toBeInTheDocument();
    expect(passErrorMsg).toBeInTheDocument();
  });
  it.skip("should submit with valid credentials", async () => {
    // Arrange
    const { getByTestId, getByRole } = render(<LoginForm />);

    // Act
    fireEvent.change(getByTestId(/user/i), {
      target: { value: "abc@gmail.com" },
    });
    fireEvent.change(getByTestId(/password/i), {
      target: { value: "baoha123!" },
    });
    fireEvent.click(getByRole("button"), { name: /Sign in/i });

    // Assert
  });
});
