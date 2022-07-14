import { DiamondSVGSrc, GroomImgSrc, BrideImgSrc } from "../../../shared/ImgSrc";
import Container from "../../Container";
import LogoHeading from "../../LogoHeading";

const BrideGroom = () => (
    <Container>
        <div id="bride-groom">
            <LogoHeading imgSrc={DiamondSVGSrc} />
            <h2 className="text-3xl md:text-5xl text-center py-12 font-bold">Bride & Groom</h2>
            <div className="flex flex-col w-full md:w-3/4 mx-auto">
                <div className="flex flex-row flex-wrap-reverse justify-around">
                    <div className="flex flex-col text-center w-full md:w-auto max-w-md place-content-center">
                        <span className="text-xl md:text-2xl font-bold py-2">Andrew Pratama Kusuma</span>
                        <span className="text-md md:text-lg">1st son of Mr. Hendra Pratama Kusuma & Mrs. Suryawati Koentjoro</span>
                    </div>
                    <div className="w-full md:w-auto p-5">
                        <img src={GroomImgSrc}  alt="Image of Andrew the Bride" className="bg-white p-2"/>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap justify-between">
                    <div className="w-full md:w-auto p-5">
                        <img src={BrideImgSrc} alt="Image of Andrew the Groom" className="bg-white p-2"/>
                    </div>
                    <div className="flex flex-col text-center w-full md:w-auto max-w-md place-content-center">
                        <span className="text-xl md:text-2xl font-bold py-2">Agnes Kentjana Putra</span>
                        <span className="text-md md:text-lg">1st daughter of Mr. Deddy Kentjana Putra (Liaw Yong Siang) & Mrs. Holizoh Kencana Putra</span>
                    </div>
                </div>
            </div>
        </div>
    </Container>
);

export default BrideGroom;