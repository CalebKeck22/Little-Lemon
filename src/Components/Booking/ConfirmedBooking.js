import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../assets/styles/ConfirmedBooking.css'

export function ConfirmedBooking() {
    const location = useLocation();
    const { firstName, date, time } = location.state || {};

    const formattedDate = date ? new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }) : null;

    const formattedTime = time ? new Date(`1970-01-01T${time}`).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    }) : null;

    return (
        <div className="confirmed-booking">
            <div className="confirmed-container">
                <h1>Booking Confirmed!</h1>
                <p>
                    {firstName
                        ? `Thank you, ${firstName}, for booking your reservation at Little Lemon.`
                        : "Thank you for booking your reservation at Little Lemon."}
                </p>
                {date && time && (
                    <p>
                        Your reservation is scheduled for <span className="highlight">{formattedDate}</span> at <span className="highlight">{formattedTime}</span>.
                    </p>
                )}
                <p>We look forward to serving you!</p>
                <Link to="/" className="home-button">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}