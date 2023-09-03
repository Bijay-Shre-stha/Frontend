import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Navbar/CSIT.css'
const CSIT = () => {
    let location = useLocation();
    useEffect(()=>{
        if(location.pathname === '/Batches/Batch2015'){
            document.title = 'Doko | Batch 2015'
        }
        else if(location.pathname === '/Batches/Batch2016'){
            document.title = 'Doko | Batch 2016'
        }
        else if(location.pathname === '/Batches/Batch2017'){
            document.title = 'Doko | Batch 2017'
        }
        else if(location.pathname === '/Batches/Batch2018'){
            document.title = 'Doko | Batch 2018'
        }
        else if(location.pathname === '/Batches/Batch2019'){
            document.title = 'Doko | Batch 2019'
        }
        else if(location.pathname === '/Batches/Batch2020'){
            document.title = 'Doko | Batch 2020'
        }
        else if(location.pathname === '/Batches/Batch2021'){
            document.title = 'Doko | Batch 2021'
        }
        else if(location.pathname === '/Batches/Batch2022'){
            document.title = 'Doko | Batch 2022'
        }
        else if(location.pathname === '/Batches/Batch2023'){
            document.title = 'Doko | Batch 2023'
        }
        else if(location.pathname === '/Batches/Batch2024'){
            document.title = 'Doko | Batch 2024'
        }
        else if(location.pathname === '/Batches/Batch2025'){
            document.title = 'Doko | Batch 2025'
        }
        else if(location.pathname === '/Batches/Batch2026'){
            document.title = 'Doko | Batch 2026'
        }
    })
    return (
        <div>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Batch (Bsc.CSIT)
                </Link>
                <ul className={`dropdown-menu`} aria-labelledby="navbarDropdown">
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
