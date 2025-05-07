import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/BookingForm.css';

export function BookingForm({ availableTimes, updateTimes }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState('');
    const [date, setDate] = useState('');
    const [occasion, setOccasion] = useState('');

    const [time, setTime] = useState(availableTimes.map((times) => <option>{times}</option>));

    function handleDateChange(e) {
        const dateString = e.target.value;
        const date = new Date(dateString);
        setDate(dateString);
        updateTimes(date);
    }

    return (
        <form className="booking-form">
            <div>
                <label htmlFor="firstName">First Name</label> <br></br>
                <input
                    type='text'
                    id='firstName'
                    placeholder="First Name"
                    required
                    minLength={2}
                    maxLength={20}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                ></input>
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label> <br></br>
                <input
                    type='text'
                    id='lastName'
                    placeholder="Last Name"
                    required
                    minLength={2}
                    maxLength={20}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                ></input>
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number</label> <br></br>
                <input
                    type='tel'
                    id='phoneNumber'
                    placeholder="(555) 555-5555"
                    required
                    minLength={10}
                    maxLength={10}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                ></input>
            </div>
            <div>
                <label htmlFor="numberOfGuests">Number of Guests</label> <br></br>
                <input
                    type='number'
                    id='numberOfGuests'
                    placeholder="0"
                    required
                    min={1}
                    max={10}
                    value={numberOfGuests}
                    onChange={(e) => setNumberOfGuests(e.target.value)}
                ></input>
            </div>
            <div>
                <label htmlFor="date">Select Date of Reservation</label> <br></br>
                <input
                    type='date'
                    id='date'
                    placeholder="First Name"
                    required
                    value={date}
                    onChange={handleDateChange}
                ></input>
            </div>
            <div>
                <label htmlFor="time">Time of Reservation</label> <br></br>
                <select
                    id='time'
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
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
            </div>
            <div>
                <label htmlFor="occasion">Type of Occasion</label> <br></br>
                <select
                    id='occasion'
                    required
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
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
            <br></br>
            <div>
                <Link
                    to={{
                        pathname: '/confirmed-booking',
                    }}
                    state={{
                        firstName,
                        date,
                        time,
                    }}
                >
                    <button className="submit-button">
                        Submit Your Reservation
                    </button>
                </Link>
            </div>
        </form>
    );
}

export default BookingForm;