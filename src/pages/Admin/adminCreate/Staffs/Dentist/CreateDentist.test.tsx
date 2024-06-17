import DentistCreateBody from "./DentistCreateBody";
import { fireEvent, render, screen } from "@testing-library/react";
import useDentist from "./useDentist";
import { BrowserRouter } from "react-router-dom";

jest.mock('./useDentist', () => ({
    __esModule: true,
    default: jest.fn(() => [
        jest.fn(), // mock handleSubmit
        false, // mock isSubmitting
        {}, // mock control
    ])
}));

test('form validation works correctly', async () => {
    render(
        <BrowserRouter>
            <DentistCreateBody />
        </BrowserRouter>
    )

    // Fields in full state
    fireEvent.change(screen.getByTestId('username'), { target: { value: 'username' } });
    fireEvent.change(screen.getByTestId('password'), { target: { value: 'password' } });
    fireEvent.change(screen.getByTestId('email'), { target: { value: 'email@example.com' } });
    fireEvent.change(screen.getByTestId('firstName'), { target: { value: 'firstName' } });
    fireEvent.change(screen.getByTestId('lastName'), { target: { value: 'lastName' } });
    fireEvent.change(screen.getByTestId('phone'), { target: { value: '0827693878' } });
    fireEvent.change(screen.getByTestId('address'), { target: { value: 'address' } });
    fireEvent.change(screen.getByTestId('gender'), { target: { value: true } });

    // Submit the form
    fireEvent.click(screen.getByTestId('submit'));

    // Check if the form is submitted
    const mockHandleSubmit = useDentist()[0];
    expect(mockHandleSubmit).toHaveBeenCalled();
});