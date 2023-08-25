import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import '../styles/app.css';

export default function NavBar() {
    return (
        <div>
        <Link to="/" >
        <nav className="nav">
                <a href="/" className="navLogo">
                    <img src={logo} alt="logo" />
                </a>
            </nav>
        </Link>
        </div>
    )
}
