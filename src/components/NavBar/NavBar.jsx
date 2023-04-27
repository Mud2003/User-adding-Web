import './navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <h1>NavBar</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/namelist">Show NameList</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;