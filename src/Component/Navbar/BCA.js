import {React, useEffect} from 'react'
import '../Navbar/BCA.css'
import {Link, useLocation } from 'react-router-dom'

const BCA = (props) => {
    let location = useLocation();
    useEffect(()=>{
        if(location.pathname === '/Batches/BCA2022'){
            document.title = 'Doko | BCA 2022'
        }
        else if(location.pathname === '/Batches/BCA2023'){
            document.title = 'Doko | BCA 2023'
        }
        else if(location.pathname === '/Batches/BCA2024'){
            document.title = 'Doko | BCA 2024'
            }
        else if(location.pathname === '/Batches/BCA2025'){
            document.title = 'Doko | BCA 2025'
        }
        else if(location.pathname === '/Batches/BCA2026'){
            document.title = 'Doko | BCA 2026'
        }
        
        
    })
    return (
        <div>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Batch(BCA)
                </Link>
                <ul className={`dropdown-menu`} aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/Batches/BCA2022">Batch of 2022</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/Batches/BCA2023">Batch of 2023</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/Batches/BCA2024">Batch of 2024</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/Batches/BCA2025">Batch of 2025</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/Batches/BCA2026">Batch of 2026</Link></li>
                </ul>
            </li>
        </div>
    )
}

export default BCA
