import React from 'react';
import './Navbar.css';
import CSIT from './CSIT.js';
import BCA from './BCA.js';
import Club from './Club.js';
import CommunityAndSociety from './CommunityAndSociety.js';
const Navbar = () => {
    return (
        <div className="navBar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a href="/" className=" navbar-brand"><img className='navbar__logo' src="https://doko.dwit.edu.np/assets/images/doko_logo.png" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <CSIT />
                            <BCA />
                            <Club />
                            <CommunityAndSociety/>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
