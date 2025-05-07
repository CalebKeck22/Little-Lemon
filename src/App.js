import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Components/Layout/Header';
import { Main } from './Components/Main/Main';
import { Footer } from './Components/Layout/Footer';
import { BookingPage } from './Components/Booking/BookingPage';
import { ConfirmedBooking } from './Components/Booking/ConfirmedBooking';
import { About } from './Components/About/About';
import { Menu } from './Components/Menu/Menu'
import { OrderOnline } from './Components/OrderOnline/OrderOnline';
import './assets/styles/App.css';

function App() {
  return (
    <>
      <div className='body'>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<BookingPage />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;