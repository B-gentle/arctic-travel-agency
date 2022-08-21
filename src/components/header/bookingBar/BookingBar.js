import React from 'react';
import './bookingBar.css';
import { IoLocationOutline, IoAirplaneSharp } from "react-icons/io5";
import { BsPerson, BsCalendar4Event } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";

const BookingBar = () => {
    return (
        <div className='booking-bar'>
            <span className='blue-icons'>
                <span>
                    <span><IoLocationOutline /></span>
                    <span>LOCATIONS</span>
                </span>
                <small>Nigeria<FaAngleDown /></small>
            </span>
            <span className='blue-icons'>
                <span>
                    <span><BsPerson /></span>
                    <span>PERSONS</span>
                </span>
                <small>4 Persons <FaAngleDown /></small>
            </span>
            <span className='red-icons'>
                <span>
                    <span><BsCalendar4Event /></span>
                    <span> CHECK IN</span>
                </span>
                <small>7 August 2022 <FaAngleDown /></small>
            </span>
            <span className='red-icons'>
                <span>
                    <span><BsCalendar4Event /></span>
                    <span> CHECK OUT</span>
                </span>
                <small>3 September 2022 <FaAngleDown /></small>
            </span>
            <button className='book-trip-button'>Book Trip <IoAirplaneSharp /></button>
        </div>
    )
}

export default BookingBar