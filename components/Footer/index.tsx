import { LogoSVGSrc, MadeByLogoSrc } from "../../shared/ImgSrc";
import Container from "../Container";

const Footer = () => (
    <Container>
        <div className="flex flex-row justify-center space-x-10 md:space-x-20">
            <img src={LogoSVGSrc} alt="Logo of Andrew & Agnes Wedding" />
            <img src={MadeByLogoSrc} alt="Made with love by Kevin & Stefamikha" />
        </div>
    </Container>
);

export default Footer;