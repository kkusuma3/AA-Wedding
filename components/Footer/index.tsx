import { LogoSVGSrc, MadeByLogoSrc } from "../../shared/ImgSrc";
import Container from "../Container";

const Footer = () => (
    <Container>
        <div className="flex flex-row justify-center space-x-10 md:space-x-20">
            <img src={LogoSVGSrc} alt="Logo of Andrew & Agnes Wedding" className="w-1/4 md:w-auto"/>
            <img src={MadeByLogoSrc} alt="Made with love by Kevin & Stefamikha" className="w-1/3 md:w-auto"/>
        </div>
    </Container>
);

export default Footer;