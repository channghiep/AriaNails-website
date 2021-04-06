import React, { Component } from "react";
import Slider from "react-slick";

import './slicker.css'

// import Banner1 from '../assets/banner1.jpg';
// import Banner2 from '../assets/banner2.jpg';
// import Banner3 from '../assets/banner3.jpg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      cssEase: "linear"
    };
    return (
      <div className='slicker'>
        <Slider {...settings}>
            <div className='slicker-text'>
              <p id="grand">GRAND OPENING</p>
              {/* <p>discount <span>25%</span>from 15th Oct to 31st Oct</p> */}
            </div>
            <div className='slicker-text'>
              {/* <p>GRAND OPENING</p> */}
              <p>discount <span>10%</span>from October 15th to December 31st</p>
            </div>
        </Slider>
      </div>
        
    );
  }
}