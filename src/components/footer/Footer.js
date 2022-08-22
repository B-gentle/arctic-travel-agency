import React from 'react';
import './footer.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from './../../assets/logo.png';

const Footer = () => {
    return (
        <div className='footer'>
            <nav>
                <div>
                    <img src={logo} alt='' />
                    <div>
                        <span>Artic Travels</span>
                        <span>Book your trip in minutes, get full
                            control for much longer.
                        </span>
                    </div>
                    <span className='footer-icons'>
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                    </span>
                    <p className='footer-note note-1'>© 2022 Arctic Travels - All right reserved.</p>
                </div>

                <div>
                    <div>
                        <main>COMPANY</main>
                        <span>About</span>
                        <span>Careers</span>
                        <span>Mobile</span>
                        <p className='footer-note note-2'>Privacy Policy</p>
                    </div>
                    <div>
                        <main>CONTACT</main>
                        <span>FAQ</span>
                        <span>Press</span>
                        <span>Affiliates</span>
                        <p className='footer-note note-2'>Terms of Use</p>
                    </div>
                    <div>
                        <main>MORE</main>
                        <span>Airline</span>
                        <span>Airfees</span>
                        <span>Lowfare Tips</span>
                    </div>

                </div>

                <span className='mobile-footer-icons'>
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                    </span>


                    <p className='footer-note mobile-note-1'>© 2022 Arctic Travels - All right reserved.</p>
            </nav>

        </div>
    )
}

export default Footer