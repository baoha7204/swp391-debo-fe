// Mock post function
import { BrowserRouter } from "react-router-dom";
import AdminAllStaffList from ".";
import { render, waitFor } from "@testing-library/react";
import { API_ENDPOINTS } from "@/utils/api";
import { get } from "@/utils/apiCaller";

const getDentistList = jest.fn();

jest.mock('@/utils/apiCaller', () => ({
    get: jest.fn(),
}));

describe('All Dentist List', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <AdminAllStaffList />
            </BrowserRouter>
        );
    });

    it('should display all staffs', async () => {
        // Mock get API response
        (get as jest.Mock).mockResolvedValue({
            success: true,
            data: { list: [] }, // Mock data as needed
        });

        // Asserte
        await waitFor(() => {
            expect(get).toHaveBeenCalledWith(API_ENDPOINTS.USERS.LIST_DENTIST);
        })

    })
})
