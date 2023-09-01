import React from 'react';
import { Link } from 'react-router-dom';
import './CSIT.css';

const CSIT = () => {
    return (
        <div>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Batch (Bsc.CSIT)
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/Batches/Batch2015">Batch of 2015</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/Batches/Batch2016">Batch of 2016</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/Batches/Batch2017">Batch of 2017</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/Batches/Batch2018">Batch of 2018</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/Batches/Batch2019">Batch of 2019</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/Batches/Batch2020">Batch of 2020</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/Batches/Batch2021">Batch of 2021</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/Batches/Batch2022">Batch of 2022</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/Batches/Batch2023">Batch of 2023</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/Batches/Batch2024">Batch of 2024</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/Batches/Batch2025">Batch of 2025</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/Batches/Batch2026">Batch of 2026</Link></li>
                </ul>
            </li>
        </div>
    );
};

export default CSIT;
