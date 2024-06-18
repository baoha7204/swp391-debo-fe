import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import authApi from "@/utils/api/authApi";

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
});
