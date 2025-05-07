import React, { useReducer, useEffect } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI } from '../../API';
import '../../assets/styles/BookingPage.css'

function updateTimes(state, action) {
    if (action.type === 'UPDATE') {
        return fetchAPI(action.date);
    }
    return state;
}

export function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, []);

    useEffect(() => {
        fetchAPI(new Date());
        dispatch({ type: 'UPDATE', date: new Date() });
    }, []);

    return (
        <div className="booking-page">
            <h1 className="booking-title">Reserve Your Table</h1>
            <p className="booking-description">
                Plan your perfect dining experience at Little Lemon. Fill out the form below to reserve your table.
            </p>
            <BookingForm
                availableTimes={availableTimes}
                updateTimes={(date) => dispatch({ type: 'UPDATE', date })}
            />
        </div>
    );
}

export default BookingPage;