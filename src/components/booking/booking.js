import React from 'react';
import Fade from 'react-reveal/Fade';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

import './booking.css';
import BookingImg from '../assets/booking.png'

export default function Booking() {
    return(

        <div className='booking-wrapper' id='booking'>
            <Fade bottom>
                <h1>booking</h1>
                <h2>WITH US</h2>
            </Fade>
            <Fade bottom>
                <div className='booking-infolist'>
                    <div className='booking-info'>
                        <p>PHONE NUMBER</p>
                        <p>6045300899</p>
                    </div>
                    <div className='booking-info'>
                        <p>EMAIL</p>
                        <p>arianailslangley@gmail.com</p>
                    </div>
                    <div className='booking-info'>
                        <p>ADDRESS</p>
                        <p>20125 64 Ave #103<br></br>Langley Twp, BC V2Y 1M9</p>
                    </div>
                </div>
            </Fade>
            <Fade bottom>
                <p>We are open 7 days a week and walk ins are always welcome!</p>
            </Fade>
            <img src={BookingImg} alt='booking-image'/>
        </div>

        //     <Map
        //   google={this.props.google}
        //   zoom={8}
        //   style={mapStyles}
        //   initialCenter={{ lat: 47.444, lng: -122.176}}
        // />
        // </div>
    )
};