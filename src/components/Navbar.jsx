import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo">Luminary</h2>
            <div className="nav-links">
                <Link to="/">Sky</Link>
                <Link to="/add">Plant Memory</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    )
}

export default Navbar;

