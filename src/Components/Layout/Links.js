import { Link } from 'react-router-dom';
import '../../assets/styles/Header.css';

export function Links() {
    return (
        <nav className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/order-online">Order Online</Link></li>
            </ul>
        </nav>
    );
}