import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../assets/styles/BookingForm.css';

export function BookingForm({ availableTimes, updateTimes }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        numberOfGuests: '',
        date: '',
        time: '',
        occasion: '',
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    function handleInputChange(e) {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    }

    function validateForm() {
        const newErrors = {};

        if (!formData.firstName || formData.firstName.length < 2 || formData.firstName.length > 20) {
            newErrors.firstName = 'Must be between 2 and 20 characters.';
        }
        if (!formData.lastName || formData.lastName.length < 2 || formData.lastName.length > 20) {
            newErrors.lastName = 'Must be between 2 and 20 characters.';
        }
        if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Must be a valid 10-digit phone number.';
        }
        const guests = Number(formData.numberOfGuests);
        if (!formData.numberOfGuests || isNaN(guests) || guests < 1 || guests > 10) {
            newErrors.numberOfGuests = 'Must be between 1 and 10 guests.';
        }
        if (!formData.date) {
            newErrors.date = 'Date is required.';
        }
        if (!formData.time) {
            newErrors.time = 'Time is required.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form submitted successfully:', formData);
            navigate('/confirmed-booking', {
                state: {
                    firstName: formData.firstName,
                    date: formData.date,
                    time: formData.time,
                },
            });
        }
    }

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={errors.firstName ? 'input-error' : ''}
                />
                {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={errors.lastName ? 'input-error' : ''}
                />
                {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    placeholder="(555) 555-5555"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className={errors.phoneNumber ? 'input-error' : ''}
                />
                {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
            </div>
            <div>
                <label htmlFor="numberOfGuests">Number of Guests</label>
                <input
                    type="number"
                    id="numberOfGuests"
                    placeholder="0"
                    value={formData.numberOfGuests}
                    onChange={handleInputChange}
                    className={errors.numberOfGuests ? 'input-error' : ''}
                />
                {errors.numberOfGuests && <span className="error">{errors.numberOfGuests}</span>}
            </div>
            <div>
                <label htmlFor="date">Select Date of Reservation</label>
                <input
                    type="date"
                    id="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className={errors.date ? 'input-error' : ''}
                />
                {errors.date && <span className="error">{errors.date}</span>}
            </div>
            <div>
                <label htmlFor="time">Time of Reservation</label>
                <select
                    id="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className={errors.time ? 'input-error' : ''}
                >
                    <option value="" disabled>
                        Select a time
                    </option>
                    {availableTimes.map((times, index) => (
                        <option key={index} value={times}>
                            {times}
                        </option>
                    ))}
                </select>
                {errors.time && <span className="error">{errors.time}</span>}
            </div>
            <div>
                <label htmlFor="occasion">Type of Occasion</label>
                <select
                    id="occasion"
                    value={formData.occasion}
                    onChange={handleInputChange}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Graduation</option>
                    <option>Baby Shower</option>
                    <option>Retirement</option>
                    <option>Other</option>
                </select>
            </div>
            <div>
                <button
                    type="submit"
                    className="submit-button"
                    aria-label="Submit your reservation"
                >
                    Submit Your Reservation
                </button>
            </div>
        </form>
    );
}

export default BookingForm;