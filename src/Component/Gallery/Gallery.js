import React from 'react'
import './Gallery.css'
import image1 from '../image/art.jpg'
import image2 from '../image/data.jpg'
import image3 from '../image/developer.jpg'
import image4 from '../image/express.jpg'
import image5 from '../image/hiking.jpg'
import image6 from '../image/lit.jpg'
import image7 from '../image/media.jpg'
import image8 from '../image/music.jpg'
import image9 from '../image/social.jpg'
import image10 from '../image/software.jpg'
import image11 from '../image/sport.jpg'


const Gallery = (props) => {
    const isDarkMode = props.mode === 'dark';

    return (
        <div>
            <h1 className={`heading text-center mt-5 text-${isDarkMode ? "light" : "dark"}`}>Gallery</h1>
            <hr className='hr__styled'/>
            <div className="item-container">
                <div class="item" data-aos="fade-left">
                    <img className='gallery__image' src={image1} alt="" />
                </div>
                <div class="item" data-aos="fade-right">
                    <img className='gallery__image' src={image2} alt="" />
                </div>
                <div class="item" data-aos="fade-left">
                    <img className='gallery__image' src={image3} alt="" />
                </div>
                <div class="item" data-aos="fade-right">
                    <img className='gallery__image' src={image4} alt="" />
                </div>

                <div class="item" data-aos="fade-left">
                    <img className='gallery__image' src={image5} alt="" />
                </div>
                <div class="item" data-aos="fade-right">
                    <img className='gallery__image' src={image6} alt="" />
                </div>

                <div class="item" data-aos="fade-left">
                    <img className='gallery__image' src={image7} alt="" />
                </div>

                <div class="item" data-aos="fade-right">
                    <img className='gallery__image' src={image8} alt="" />
                </div>
                <div class="item" data-aos="fade-left">
                    <img className='gallery__image' src={image9} alt="" />
                </div>
                <div class="item" data-aos="fade-right">
                    <img className='gallery__image' src={image10} alt="" />
                </div>
                <div class="item" data-aos="fade-left">
                    <img className='gallery__image' src={image11} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Gallery
