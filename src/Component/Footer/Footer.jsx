import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

const Footer = (props) => {
    const isDarkMode = props.mode === 'dark';

    return (
        <div className={`Footer__container text-${isDarkMode ? 'light' : 'dark'} bg-${isDarkMode ? '#1b2735' : 'light'}`}>
            <div className={`footer text-${isDarkMode ? 'light' : 'dark'} bg-${isDarkMode ? '#1b2735' : 'light'}`}>
            <div className={`socialMedia text-${isDarkMode ? 'light' : 'dark'} bg-${isDarkMode ? '#1b2735' : 'light'}`}>
                <a href='https://www.facebook.com/dwit.college'><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://twitter.com/deerwalkcollege"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://www.instagram.com/deerwalk.college/"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.linkedin.com/school/deerwalk-institute-of-technology/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href='https://www.google.com/maps/place/Deerwalk+Institute+of+Technology/@27.7126168,85.342503,15z/data=!4m14!1m7!3m6!1s0x39eb1970d2e43e4b:0x946fac63019d2903!2sDeerwalk+Institute+of+Technology!8m2!3d27.7126168!4d85.342503!16s%2Fm%2F0py2qq9!3m5!1s0x39eb1970d2e43e4b:0x946fac63019d2903!8m2!3d27.7126168!4d85.342503!16s%2Fm%2F0py2qq9?entry=ttu'>
                    <FontAwesomeIcon icon={faLocation} /> 
                </a>
            </div>
                © 2023, ZEROx0817, All rights reserved.
            </div>
        </div>
    )
}

export default Footer;
