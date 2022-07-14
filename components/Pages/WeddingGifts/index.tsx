import { WeddingIconSrc, BCALogoSrc, QRCodeSrc } from "../../../shared/ImgSrc";
import Container from "../../Container";
import LogoHeading from "../../LogoHeading";

const WeddingGifts = () => (
    <Container>
        <div id="gifts" className="flex flex-col py-20 text-center space-y-10">
            <LogoHeading imgSrc={WeddingIconSrc} />
            <h2 className="text-3xl md:text-5xl font-bold">Wedding Gifts</h2>
            <span className="text-md md:text-lg">To friends and family who would like to send us gifts, please send it through the following way</span>
            <div className="flex flex-row flex-wrap p-8 w-10/12 md:w-1/2 mx-auto justify-around place-items-center bg-white rounded-xl">
                <div className="flex flex-col space-y-2 text-center">
                    <span className="text-xl md:text-2xl font-bold">Nomor Rekening</span>
                    <img src={BCALogoSrc} alt="Logo for Bank BCA" className="w-40 mx-auto"/>
                    <span className="text-lg md:text-xl">a/n Andrew Pratama Kusuma</span>
                    <span className="text-lg md:text-xl">0650826141</span>
                </div>
                <img src={QRCodeSrc} alt="QR Code BCA for Wedding Gift Payments" />
            </div>
        </div>
    </Container>
);

export default WeddingGifts;