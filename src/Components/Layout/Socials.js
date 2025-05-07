import '../../assets/styles/Footer.css'
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
export function Socials() {
    return (
        <ul className="socials">
            <li>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">X
                    <FaTwitter />
                </a>
            </li>
            <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram
                    <FaInstagram />
                </a>
            </li>
            <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook
                    <FaFacebook />
                </a>
            </li>
        </ul>
    );
}