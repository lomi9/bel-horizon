import logoNavbar from "../../assets/logo-navbar.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/fontawesome-free'

export default function Navbar () {
    return (
        <nav className="navbar">
            <div className="navbar__left">
                <div className="navbar__left-items">
                    <p className="navbar__left-items-item">Tarifs</p>
                    <p className="navbar__left-items-item">Description</p>
                </div>
            </div>
            <div className="navbar__logo">
                <img src={logoNavbar} alt="logo Bel Horizon" className="navbar__logo-img"/>
            </div>
            <div className="navbar__right">

            <FontAwesomeIcon icon={faCalendarDays} />

            </div>

        </nav>
    )
}