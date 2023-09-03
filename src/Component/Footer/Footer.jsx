import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

const Footer = (props) => {
    const isDarkMode = props.mode === 'dark';

    return (
        <div className={`Footer__container text-${isDarkMode ? 'light' : 'dark'} bg-${isDarkMode ? '#1b2735' : 'light'}`}>
            <div className={`footer text-${isDarkMode ? 'light' : 'dark'} bg-${isDarkMode ? '#1b2735' : 'light'}`}>
            <div className={`socialMedia text-${isDarkMode ? 'light' : 'dark'} bg-${isDarkMode ? '#1b2735' : 'light'}`}>
                <a href='https://www.facebook.com/dwit.college'><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://twitter.com/deerwalkcollege">    <FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://www.instagram.com/deerwalk.college/"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.linkedin.com/school/deerwalk-institute-of-technology/"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
                © 2023, ZEROx0817, All rights reserved.
            </div>
        </div>
    )
}

export default Footer;
