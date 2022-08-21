import React from 'react';
import './sponsorshipAndPayment.css';
import { FaApplePay, FaCcMastercard } from 'react-icons/fa';
import { SiNike } from 'react-icons/si';
import star from './../../assets/star.png';
import intrax from './../../assets/intra.png';

const SponsorshipAndPayment = () => {
    return (
        <div className='sponsorship'>
            <div className='sponsor-logos'>
                <span><SiNike /></span>
                <span><FaApplePay /></span>
                <img src={star} alt='' />
                <img src={intrax} alt='' />
                <span><FaCcMastercard /></span>
            </div>

            <div className='payment'>
                <h3>Creating the best<span> ice-cold!</span>  experience you would never forget.</h3>
                <h5>Would you explore nature paradise in the world, find the best destination in the world with us.</h5>
                <h3>View Regions available</h3>
            </div>


        </div>
    )
}

export default SponsorshipAndPayment