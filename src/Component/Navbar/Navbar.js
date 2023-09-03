import React from 'react';
import '../Navbar/Navbar.css';
import CSIT from './CSIT.js';
import BCA from './BCA.js';

const Navbar = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light' ? 'light' : 'dark'} bg-${props.mode}`}>
            <div className="container">
                <a href="/" className="navbar-brand"><img className='navbar__logo' src="https://doko.dwit.edu.np/assets/images/doko_logo.png" alt="" /></a>
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
                        <li className="nav-item active">
                            <a className="nav-link" href="/Clubs">Clubs</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/Society&Community"> Community & Society</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/gallery"> Gallery</a>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} ms-auto px-2 py-1`}>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                            <label className="theme-switch">
                                <input type="checkbox" className="theme-switch__checkbox" onClick={props.toggleMode} />
                                <div className="theme-switch__container">
                                    <div className="theme-switch__clouds"></div>
                                    <div className="theme-switch__stars-container">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 55" fill="none">
                                            {/* ... SVG Path */}
                                        </svg>
                                    </div>
                                    <div className="theme-switch__circle-container">
                                        <div className="theme-switch__sun-moon-container">
                                            <div className="theme-switch__moon">
                                                <div className="theme-switch__spot"></div>
                                                <div className="theme-switch__spot"></div>
                                                <div className="theme-switch__spot"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
