import React from 'react';
import Fade from 'react-reveal/Fade';

import './about.css';
import AboutImg from '../assets/about.jpg'

export default function About() {
    return(
        <div className='about-wrapper' id='about'>
            <div className='about-text'>
                <Fade bottom>
                    <h1>about</h1>
                    <h2>ARIA NAILS</h2>
                    <p>We specialise in all aspects of nail beauty. With years of experience,
                        a well trained- certified and friendly team of staff, there is no better
                        place to treat your nails to the makeover or anything else they surely
                        deserve! We maintain the high standards of hygiene by sterilizing all
                            implements, replacing pedicure liners, and offering complimentary
                            hygiene kits for every service!</p>
                    <p>At Aria Nails it is our job and pleasure to keep your nails at their very best.
                        Our certified technicians will take the best care using top products with the
                        greatest service.</p>
                    <p>We have over 1000 nail polish colours and designs! </p>
                    <p>We are approved by Fraser Health to up keep the most clean and sanitized
                        environment at our salon to ensure the health and safety of you and our staff.</p>
                    <p>We also offer Waxing Services and Lash Extensions.</p>
                    <p>We look forward to seeing you!</p>
                </Fade>
            </div>
            <div className='about-image'>
                <img src={AboutImg} alt='about-image'/>
            </div>
        </div>
    )
};