import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import DentistCreateBody from './DentistCreateBody';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { post } from "@/utils/apiCaller";
import { API_ENDPOINTS } from '@/utils/api';

// Mock post function
jest.mock('@/utils/apiCaller', () => ({
    post: jest.fn(),
}));

describe('Create Dentist', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <DentistCreateBody />
            </BrowserRouter>
        );
    });

    it('should display errors when form inputs are invalid', async () => {
        // Arrange
        const { getByTestId } = screen;

        // Submit the form with invalid inputs
        fireEvent.click(getByTestId("submit"));

        // Act
        const usernameError = await screen.findByText(/Username is required/i);
        const passwordError = await screen.findByText(/Password is required/i);
        const phoneError = await screen.findByText(/Phone number is required/i);
        const emailError = await screen.findByText(/Invalid email/i);
        const firstNameError = await screen.findByText(/First name is required/i);
        const lastNameError = await screen.findByText(/Last name is required/i);
        const addressError = await screen.findByText(/Address is required/i);

        // Assert that error messages are displayed
        expect(usernameError).toBeInTheDocument();
        expect(passwordError).toBeInTheDocument();
        expect(phoneError).toBeInTheDocument();
        expect(emailError).toBeInTheDocument();
        expect(firstNameError).toBeInTheDocument();
        expect(lastNameError).toBeInTheDocument();
        expect(addressError).toBeInTheDocument();
    });

    it('should submit form when input are valid', async () => {
        // Arrange
        const { getByTestId } = screen;
        const username = "test";
        const password = "password";
        const phone = "0822123411";
        const email = "example@gmail.com";
        const firstName = "John";
        const lastName = "Doe";
        const address = "123 Street";

        // Mock post API response
        (post as jest.Mock).mockResolvedValue({
            data: { success: true },
        });

        // Act
        await userEvent.type(getByTestId("username"), username);
        await userEvent.type(getByTestId("password"), password);
        await userEvent.type(getByTestId("phone"), phone);
        await userEvent.type(getByTestId("email"), email);
        await userEvent.type(getByTestId("firstName"), firstName);
        await userEvent.type(getByTestId("lastName"), lastName);
        await userEvent.type(getByTestId("address"), address);

        fireEvent.click(getByTestId("submit"));

        // Assert post API call
        await waitFor(() => {
            expect(post).toHaveBeenCalledWith(API_ENDPOINTS.USERS.CREATE_DENTIST, {
                username,
                password,
                phone,
                email,
                firstName,
                lastName,
                address,
                gender: true,
            });
        });

    });
});

