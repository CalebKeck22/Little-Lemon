import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "../Components/Booking/BookingForm";

describe("BookingForm Component", () => {
    const mockNavigate = jest.fn();
    const mockAvailableTimes = ["12:00 PM", "1:00 PM", "2:00 PM"];
    const mockUpdateTimes = jest.fn();

    jest.mock("react-router-dom", () => ({
        ...jest.requireActual("react-router-dom"),
        useNavigate: () => mockNavigate,
    }));

    // Test HTML5 validation attributes
    it("should render input fields with correct attributes", () => {
        render(
            <MemoryRouter>
                <BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />
            </MemoryRouter>
        );

        const firstNameInput = screen.getByLabelText(/first name/i);
        expect(firstNameInput).toBeInTheDocument();
        expect(firstNameInput).toHaveAttribute("type", "text");

        const phoneNumberInput = screen.getByLabelText(/phone number/i);
        expect(phoneNumberInput).toHaveAttribute("type", "tel");

        const dateInput = screen.getByLabelText(/select date of reservation/i);
        expect(dateInput).toHaveAttribute("type", "date");

        const timeSelect = screen.getByLabelText(/time of reservation/i);
        expect(timeSelect).toBeInTheDocument();
    });

    // Test JavaScript validation logic
    it("should show errors for invalid inputs", () => {
        render(
            <MemoryRouter>
                <BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />
            </MemoryRouter>
        );

        const submitButton = screen.getByRole("button", { name: /submit your reservation/i });

        fireEvent.click(submitButton);

        // Check specific error messages for each field
        const firstNameInput = screen.getByLabelText(/first name/i);
        const firstNameError = firstNameInput.parentElement.querySelector('.error');
        expect(firstNameError).toHaveTextContent(/must be between 2 and 20 characters/i);

        const lastNameInput = screen.getByLabelText(/last name/i);
        const lastNameError = lastNameInput.parentElement.querySelector('.error');
        expect(lastNameError).toHaveTextContent(/must be between 2 and 20 characters/i);

        const phoneNumberError = screen.getByText(/must be a valid 10-digit phone number/i);
        expect(phoneNumberError).toBeInTheDocument();

        const numberOfGuestsError = screen.getByText(/must be between 1 and 10 guests/i);
        expect(numberOfGuestsError).toBeInTheDocument();

        const dateError = screen.getByText(/date is required/i);
        expect(dateError).toBeInTheDocument();

        const timeError = screen.getByText(/time is required/i);
        expect(timeError).toBeInTheDocument();
    });
    it("should not show errors for valid inputs", () => {
        render(
            <MemoryRouter>
                <BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />
            </MemoryRouter>
        );

        const firstNameInput = screen.getByLabelText(/first name/i);
        const lastNameInput = screen.getByLabelText(/last name/i);
        const phoneNumberInput = screen.getByLabelText(/phone number/i);
        const numberOfGuestsInput = screen.getByLabelText(/number of guests/i);
        const dateInput = screen.getByLabelText(/select date of reservation/i);
        const timeSelect = screen.getByLabelText(/time of reservation/i);
        const submitButton = screen.getByRole("button", { name: /submit your reservation/i });

        fireEvent.change(firstNameInput, { target: { value: "John" } });
        fireEvent.change(lastNameInput, { target: { value: "Doe" } });
        fireEvent.change(phoneNumberInput, { target: { value: "1234567890" } });
        fireEvent.change(numberOfGuestsInput, { target: { value: "4" } });
        fireEvent.change(dateInput, { target: { value: "2023-12-25" } });
        fireEvent.change(timeSelect, { target: { value: "12:00 PM" } });

        fireEvent.click(submitButton);

        expect(screen.queryByText(/must be between 2 and 20 characters/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/must be a valid 10-digit phone number/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/must be between 1 and 10 guests/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/date is required/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/time is required/i)).not.toBeInTheDocument();
    });

    it("should navigate to the confirmation page on valid form submission", () => {
        render(
            <MemoryRouter>
                <BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />
            </MemoryRouter>
        );

        const firstNameInput = screen.getByLabelText(/first name/i);
        const lastNameInput = screen.getByLabelText(/last name/i);
        const phoneNumberInput = screen.getByLabelText(/phone number/i);
        const numberOfGuestsInput = screen.getByLabelText(/number of guests/i);
        const dateInput = screen.getByLabelText(/select date of reservation/i);
        const timeSelect = screen.getByLabelText(/time of reservation/i);
        const submitButton = screen.getByRole("button", { name: /submit your reservation/i });

        // Simulate valid form inputs
        fireEvent.change(firstNameInput, { target: { value: "John" } });
        fireEvent.change(lastNameInput, { target: { value: "Doe" } });
        fireEvent.change(phoneNumberInput, { target: { value: "1234567890" } });
        fireEvent.change(numberOfGuestsInput, { target: { value: "4" } });
        fireEvent.change(dateInput, { target: { value: "2023-12-25" } });
        fireEvent.change(timeSelect, { target: { value: "12:00 PM" } });

        // Submit the form
        fireEvent.click(submitButton);

        // Assert that navigate was called with the correct arguments
        expect(mockNavigate).toHaveBeenCalledWith("/confirmed-booking", {
            state: {
                firstName: "John",
                date: "2023-12-25",
                time: "12:00 PM",
            },
        });
    });
});