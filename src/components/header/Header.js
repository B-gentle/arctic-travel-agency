import React from 'react';
import Navbar from '../navbar/Navbar';
import BookingBar from './bookingBar/BookingBar';
import './header.css';
import HeaderText from './HeaderText';

const Header = () => {
  return (
    <div className='header'>
<Navbar />
<HeaderText />
<BookingBar />
    </div>
  )
}

export default Header