import React from 'react'

const CommunityAndSociety = (props) => {
    return (
        <div>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Community and Society
                </a>
                <ul className={`dropdown-menu `} aria-labelledby="navbarDropdown">
                    <li><a className={`dropdown-item`} href="/">Deerwalk Data Society</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/">Deerwalk Developers Community</a></li>
                </ul>
            </li>
        </div>
    )
}

export default CommunityAndSociety
