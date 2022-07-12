import Headroom from 'react-headroom';
import { NavigationLinks } from './data';

const Header = () => (
    <Headroom>
        <header>
            <nav className="hidden md:flex justify-evenly content-center p-5 mx-auto w-3/4 uppercase">
                {
                    NavigationLinks.map((link) => (<a id={link.id} className="cursor-pointer" href={link.href}>{link.name}</a>))
                }
            </nav>
        </header>
    </Headroom>
);

export default Header;

