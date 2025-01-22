import smallLogo from './smallLogo.png'
import { Links } from './Links'
import { Contact } from './Contact'
import { Socials } from './Socials'

export function Footer() {

    return (
        <footer>
            <img src={smallLogo} alt="Small logo of lemon" />
            <Links />
            <Contact />
            <Socials />
        </footer>
    )
}

