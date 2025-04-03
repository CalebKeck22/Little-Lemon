import smallLogo from './smallLogo.png'
import { Links } from './Links'
import { Contact } from './Contact'
import { Socials } from './Socials'

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={smallLogo} alt="Small logo of lemon" />
            </div>
            <div className="footer-content">
                <Links />
                <Contact />
                <Socials />
            </div>
        </footer>
    );
}

