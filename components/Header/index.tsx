import Headroom from 'react-headroom';

const Header = () => (
    <Headroom>
        <header>
            <nav className="hidden md:flex justify-evenly content-center p-5 mx-auto w-3/4 uppercase">
                <a>Gallery</a>
                <a>Bride & Groom</a>
                <a>Matrimony & Reception</a>
                <a>RSVP</a>
                <a>Health Protocol</a>
                <a>Gifts</a>
            </nav>
        </header>
    </Headroom>
);

export default Header;

