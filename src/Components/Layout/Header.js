import logo from '../../assets/images/logo.jpg'
import { Nav } from './Nav'
import { Login } from '../Login/Login'
import '../../assets/styles/Header.css'


export function Header() {
    return (
        <header className='header'>
            <img src={logo} alt="Little Lemon Logo" />
            <Nav />
            <Login />
        </header>
    )
}