import React from 'react';
import Fade from 'react-reveal/Fade';

import './services.css';
import AboutImg from '../assets/about.jpg'

export default function Services() {
    return(
        <div className='services-wrapper' id='services'>
            <Fade bottom>
                <div className='services-title'>
                    <h1>our</h1>
                    <h2>BEAUTY SERVICES</h2>
                </div>
            </Fade>
            
            <div className='services-list'>
                <Fade bottom>
                    <div className='service-sublist service-1'>
                        <h1>NAIL CARE</h1>
                        <div className='service-details'>
                            <p>Regular Manicure</p>
                            <p>$20</p>
                        </div>
                        <div className='service-details'>
                            <p>Regular Pedicure</p>
                            <p>$30</p>
                        </div>
                        <div className='service-details'>
                            <p>Regular Manicure & Pedicure<br></br>
                                <span> (Include nails trim, shaping, cuticle care, callous removal, hot towel,
                                nail polish & 15 min massage)</span>
                            </p>
                            <p>$45</p>
                        </div>
                        <div className='service-details'>
                            <p>Polish Change Hands<span> (No manicure)</span></p>
                            <p>$12</p>
                        </div>
                        <div className='service-details'>
                            <p>Polish Change Toes<span> (No pedicure)</span></p>
                            <p>$17</p>
                        </div>
                    </div>
                </Fade>
                
                <Fade bottom>
                    <div className='service-sublist service-2'>
                        <h1>ARIA LUXURY SPECIAL</h1>
                        <div className='service-details'>
                            <p>Luxury Manicure</p>
                            <p>$40</p>
                        </div>
                        <div className='service-details'>
                            <p>Luxury Pedicure</p>
                            <p>$55</p>
                        </div>
                        <div className='service-details'>
                            <p>Luxury Mani & Pedi<br></br>
                                <span> (Include nails trim, shaping, cuticle care, callous removal, full exfoliation,
                                moisture mask, with moisturizing lotion, hot towel, nail polish & 15 min. massage)</span>
                            </p>
                            <p>$85</p>
                        </div>
                    </div>
                </Fade>

                <Fade bottom>
                    <div className='service-sublist service-3'>
                        <h1>LITTLE PRINCE / PRINCESS<br></br>(12 & under)</h1>
                        <div className='service-details'>
                            <p>Manicure</p>
                            <p>$15</p>
                        </div>
                        <div className='service-details'>
                            <p>Pedicure</p>
                            <p>$25</p>
                        </div>
                        <div className='service-details'>
                            <p>Manicure & Pedicure</p>
                            <p>$35</p>
                        </div>
                        <div className='service-details'>
                            <p>Hands Polish</p>
                            <p>$8</p>
                        </div>
                        <div className='service-details'>
                            <p>Toes Polish</p>
                            <p>$12</p>
                        </div>
                    </div>
                </Fade>

                <Fade bottom>
                    <div className='service-sublist service-4'>
                        <h1>GEL POLISH<br></br>"Shellac"</h1>
                        <div className='service-details'>
                            <p>Gel Polish <br></br><span>(without color on hands)</span></p>
                            <p>$25</p>
                        </div>
                        <div className='service-details'>
                            <p>Gel Polish <br></br><span>(with color on hands)</span></p>
                            <p>$35</p>
                        </div>
                        <div className='service-details'>
                            <p>Gel Polish Manicure</p>
                            <p>$35</p>
                        </div>
                        <div className='service-details'>
                            <p>Gel Polish Pedicure</p>
                            <p>$45</p>
                        </div>
                        <div className='service-details'>
                            <p>Gel Polish Mani & Pedi</p>
                            <p>$75</p>
                        </div>
                    </div>
                </Fade>
                
                <Fade bottom>
                    <div className='service-sublist service-5'>
                        <h1>HOT OILS</h1>
                        <div className='service-details'>
                            <p>Hot Oils Manicure</p>
                            <p>$30</p>
                        </div>
                        <div className='service-details'>
                            <p>Hot Oils Pedicure</p>
                            <p>$45</p>
                        </div>
                        <div className='service-details'>
                            <p>Hot Oils Manicure & Pedicure<br></br>
                                <span> (Includes nails trim, shaping, cuticle care, callous removal,
                                    Lemon Sea Salt exfoliation, hot oil, hot towel, nail polish & 15 min. massage)
                                </span>
                            </p>
                            <p>$65</p>
                        </div>
                    </div>
                </Fade>
                
                <Fade bottom>
                    <div className='service-sublist service-6'>
                        <h1>ARTIFICIAL NAILS</h1>
                        <div className='service-details'>
                            <p>Solar Full Set</p>
                            <p>$55</p>
                        </div>
                        <div className='service-details'>
                            <p>Solar Fill Set</p>
                            <p>$45</p>
                        </div>
                        <div className='service-details'>
                            <p>Liquid Gel Full Set</p>
                            <p>$60</p>
                        </div>
                        <div className='service-details'>
                            <p>Liquid Gel Fill Set</p>
                            <p>$50</p>
                        </div>
                        <div className='service-details'>
                            <p>Dipping Powder Nails</p>
                            <p>$50</p>
                        </div>
                        <div className='service-details'>
                            <p>Ombre Full Set</p>
                            <p>$70</p>
                        </div>
                        <div className='service-details'>
                            <p>Ombre Fill</p>
                            <p>$58</p>
                        </div>
                    </div>
                </Fade>
                
                <Fade bottom>
                    <div className='service-sublist service-7'>
                        <h1>NAILS REMOVAL</h1>
                        <div className='service-details'>
                            <p>Gel Polish</p>
                            <p>$10</p>
                        </div>
                        <div className='service-details'>
                            <p>Artificial</p>
                            <p>$15</p>
                        </div>
                        <div className='service-details'>
                            <p>Liquid Gel</p>
                            <p>$17</p>
                        </div>
                    </div>
                </Fade>
                
                <Fade bottom>
                    <div className='service-sublist service-8'>
                        <h1>EYELASH EXTENSIONS</h1>
                        <div className='service-details'>
                            <p>Full Set<br></br>
                                <span> (Individually applied eyelashe extensions from the inner corner to the outer corner)</span>
                            </p>
                            <p>$140</p>
                        </div>
                        <div className='service-details'>
                            <p>Fill<br></br>
                                <span> (Lashes are added to your original full set form)</span>
                            </p>
                            <p>$80</p>
                        </div>
                    </div>
                </Fade>
                
                <Fade bottom>
                    <div className='service-sublist service-9'>
                        <h1>BROWS</h1>
                        <div className='service-details'>
                            <p>Brow Tint</p>
                            <p>$10</p>
                        </div>
                        <div className='service-details'>
                            <p>Lash Tint</p>
                            <p>$25</p>
                        </div>
                    </div>
                </Fade>
                
                <Fade>
                    <div className='service-sublist service-10'>
                        <h1>ADD-ON SERVICES</h1>
                        <div className='service-details'>
                            <p>Gel Top Coat on Acrylic / Solar</p>
                            <p>$5</p>
                        </div>
                        <div className='service-details'>
                            <p>Nail Repair</p>
                            <p>$5</p>
                        </div>
                        <div className='service-details'>
                            <p>French</p>
                            <p>$7</p>
                        </div>
                        <div className='service-details'>
                            <p>Faiding</p>
                            <p>$7+</p>
                        </div>
                        <div className='service-details'>
                            <p>Cut Down Artificial</p>
                            <p>$5</p>
                        </div>
                        <div className='service-details'>
                            <p>Lemon Sea Salt</p>
                            <p>$7</p>
                        </div>
                        <div className='service-details'>
                            <p>Paraffin Hands</p>
                            <p>$10</p>
                        </div>
                        <div className='service-details'>
                            <p>Paraffin Feets</p>
                            <p>$15</p>
                        </div>
                        <div className='service-details'>
                            <p>Gel Polish Shellac</p>
                            <p>$15</p>
                        </div>
                    </div>
                </Fade>
                
                <Fade>
                    <div className='service-sublist service-11'>
                        <h1>WAXING</h1>
                        <div className='service-details'>
                            <p>Eyebrows</p>
                            <p>$12</p>
                        </div>
                        <div className='service-details'>
                            <p>Lips</p>
                            <p>$10</p>
                        </div>
                        <div className='service-details'>
                            <p>Half Leg</p>
                            <p>$35</p>
                        </div>
                        <div className='service-details'>
                            <p>Full Leg</p>
                            <p>$55</p>
                        </div>
                        <div className='service-details'>
                            <p>Bikini</p>
                            <p>$25</p>
                        </div>
                        <div className='service-details'>
                            <p>Under Arm</p>
                            <p>$15</p>
                        </div>
                        <div className='service-details'>
                            <p>Face</p>
                            <p>$30</p>
                        </div>
                        <div className='service-details'>
                            <p>Lower Arm</p>
                            <p>$20</p>
                        </div>
                        <div className='service-details'>
                            <p>Full Arm</p>
                            <p>$35</p>
                        </div>
                        <div className='service-details'>
                            <p>Back</p>
                            <p>$30+</p>
                        </div>
                        <div className='service-details'>
                            <p>Brazillian</p>
                            <p>$55</p>
                        </div>
                        <div className='service-details'>
                            <p>Half Leg & Bikini</p>
                            <p>$50</p>
                        </div>
                        <div className='service-details'>
                            <p>Full Leg & Bikini</p>
                            <p>$70</p>
                        </div>
                        <div className='service-details'>
                            <p>Chin</p>
                            <p>$10</p>
                        </div>
                        <div className='service-details'>
                            <p>Neck</p>
                            <p>$10</p>
                        </div>
                        <div className='service-details'>
                            <p>Sideburns</p>
                            <p>$10</p>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
};