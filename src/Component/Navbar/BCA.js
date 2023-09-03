import React from 'react'
import '../Navbar/BCA.css'

const BCA = (props) => {
    return (
        <div>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Batch(BCA)
                </a>
                <ul className={`dropdown-menu`} aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/Batches/BCA2022">Batch of 2022</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/Batches/BCA2023">Batch of 2023</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/Batches/BCA2024">Batch of 2024</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/Batches/BCA2025">Batch of 2025</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/Batches/BCA2026">Batch of 2026</a></li>
                </ul>
            </li>
        </div>
    )
}

export default BCA