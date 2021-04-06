import React, { Component } from "react";
import Slider from "react-slick";

import './carousel.css'
import Slicker from './slicker';

import Banner1 from '../assets/banner1.jpg';
import Banner2 from '../assets/banner2.jpg';
import Banner3 from '../assets/banner3.jpg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      cssEase: "linear"
    };
    return (
      <div id='landing'>
        <Slider {...settings} className='carousel'>
            <div className='carousel-banner'>
              <img className="carousel-img" src={Banner1} alt="banner-1"></img>
              <h1>CLASSY <span>&</span> CHIC</h1>
            </div>
            <div className='carousel-banner banner-2'>
              <img className="carousel-img" src={Banner2} alt="banner-2"></img>
              <h1>MORE THAN <span className='carousel-number'>1000</span><br></br>NAIL COLOURS & DESIGNS</h1>
            </div>
            <div className='carousel-banner banner3'>
              <img className="carousel-img" src={Banner3} alt="banner-3"></img>
              <h1><span>LUXURY</span><br></br>SERVICES</h1>
            </div>
        </Slider>
        <Slicker/>
      </div>
        
    );
  }
}