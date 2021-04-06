import React from 'react';
import Gallery from 'react-photo-gallery';
import Fade from 'react-reveal/Fade';

import './gallery.css'

import Img1 from '../assets/gallery/img1.jpg';
import Img2 from '../assets/gallery/img2.jpg';
import Img3 from '../assets/gallery/img3.jpg';
import Img4 from '../assets/gallery/img4.jpg';
import Img5 from '../assets/gallery/img5.jpg';
import Img6 from '../assets/gallery/img6.jpg';
import Img7 from '../assets/gallery/img7.jpg';
import Img8 from '../assets/gallery/img8.jpg';
import Img9 from '../assets/gallery/img9.jpg';
import Img10 from '../assets/gallery/img10.jpg';
import Img11 from '../assets/gallery/img11.jpg';
import Img12 from '../assets/gallery/img12.jpg';
import Img13 from '../assets/gallery/img13.jpg';
import Img14 from '../assets/gallery/img14.jpg';
// import Img15 from '../assets/gallery/img15.jpg';
// import Img16 from '../assets/gallery/img16.jpg';
// import Img17 from '../assets/gallery/img17.jpg';

const photos = [
    {
        src: Img1,
        width: 1.2,
        height: 1
    },
    {
        src: Img2,
        width: 0.8,
        height: 1
    },
    {
        src: Img3,
        width: 1.2,
        height: 1
    },
    {
        src: Img4,
        width: 0.7,
        height: 1
    },
    {
        src: Img5,
        width: 0.6,
        height: 1
    },
    {
        src: Img6,
        width: 1.1,
        height: 1
    },
    {
        src: Img7,
        width: 1.2,
        height: 1
    },
    {
        src: Img8,
        width: 0.9,
        height: 1
    },
    {
        src: Img9,
        width: 0.9,
        height: 1
    },
    {
        src: Img10,
        width: 1.2,
        height: 1
    },
    {
        src: Img11,
        width: 0.8,
        height: 1
    },
    {
        src: Img12,
        width: 1,
        height: 1
    },
    {
        src: Img13,
        width: 1.1,
        height: 1
    },
    {
        src: Img14,
        width: 0.8,
        height: 1
    },
    // {
    //     src: Img15,
    //     width: 1,
    //     height: 1
    // },
    // {
    //     src: Img16,
    //     width: 1,
    //     height: 1
    // },
    // {
    //     src: Img17,
    //     width: 1,
    //     height: 1
    // }
  ];
   
export default function GalleryDiv() {
    return(

        <div className='gallery-wrapper' id='gallery'>
            <Fade bottom>
                <div className='gallery-text'>
                    <h1>visit</h1>
                    <h2>OUR GALLERY</h2>
                </div>
            </Fade>
            <Gallery photos={photos}/>
            <div className='footer'>
                <p>Aria NAILS© all rights reserved.</p>
                <div className='lighthouse'>
                    <p>Powered by</p>
                    <svg width="60" height="auto" viewBox="0 0 148 150">
                        <g id="Layer_2" data-name="Layer 2" transform="translate(-0.003 0.002)">
                            <g id="Layer_1" data-name="Layer 1" transform="translate(0.003 -0.002)">
                                <path id="Path_114" data-name="Path 114" d="M147.383,89.445l-54.4-19.617a.938.938,0,0,1,0-1.76L143.745,49.68a.938.938,0,0,0,.556-1.224A75.7,75.7,
                                0,0,0,1.976,51.388.943.943,0,0,0,2.548,52.6L54.435,71.4a.933.933,0,0,1,0,1.755L.625,92.533a.948.948,0,0,0-.6,1.1,75.913,75.913,0,0,0,57.064,
                                56.341.946.946,0,0,0,1.138-.854L63.49,75.3a.936.936,0,0,1,1.247-.812l18.987,6.879a.937.937,0,0,1,.613.812L89.108,149.1a.941.941,0,0,0,1.133.854,
                                75.9,75.9,0,0,0,57.745-59.45.943.943,0,0,0-.6-1.062ZM81.915,66.656,65.22,60.605a.937.937,0,0,1-.613-.948l.1-8.723a.954.954,0,0,1,.27-.594l8.035-7.525a.929.929,
                                0,0,1,1.315,0l8.55,7.525a.927.927,0,0,1,.27.594V65.709a.936.936,0,0,1-1.232.948Z" transform="translate(-0.003 0.002)"/>
                            </g>
                        </g>
                    </svg>
                    <a href='http://lhe.systems' target="_blank">LightHouse E-systems</a>
                </div>
            </div>
        </div>

    )
};