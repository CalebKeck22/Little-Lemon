import logo from './logo.jpg'
import { Nav } from './Nav'
import { Login } from './Login'


export function Header() {
    return (
        <header className='header'>
            <img src={logo} alt="logo" />
            <Nav />
            <Login />
        </header>
    )
}