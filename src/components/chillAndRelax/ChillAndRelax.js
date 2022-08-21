import React from 'react';
import './chillAndRelax.css';
import summerBeach from './../../assets/summerBeach.png'; 
import lakeHouse from './../../assets/lake-house.png';
import iceSkating from './../../assets/Ice-skating.png';

const ChillAndRelax = () => {
  return (
    <div className='chill-and-relax'>
      <h2>The best resorts to chill and relax</h2>
      <div className='chills'>
      <span>
      <img className='summer-beach' src={summerBeach} alt=''/>
        <img className='lake-house' src={lakeHouse} alt=''/>
      </span>
        <span>
        <div className='winter-chalet'>
          <span>Winter landscape Chalet</span>
          <small>Cambodia</small>
          <button>Book Now</button>
        </div>
        <img className='snow-boarder' src={iceSkating} alt=''/>
        </span>
      </div>
      
        <div></div>
    </div>
  )
}

export default ChillAndRelax