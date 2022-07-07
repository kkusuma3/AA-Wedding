import { LogoSVGSrc } from "../../../shared/ImgSrc";
import Container from "../../Container";
import HomeCarousel from "../../HomeCarousel";

interface Props {
    color: string;
}

const Landing = ({ color }: Props) => {
    return (
        <div className="flex flex-col w-full md:w-3/4 pt-5 md:pt-10 mx-auto text-center">
            <img src={LogoSVGSrc} alt="Wedding Logo" className="w-1/4 md:w-1/12 mx-auto"/>    
            <h1 className="text-xl md:text-2xl uppercase py-1">The wedding Of</h1>
            <div className="relative h-[50vh] md:h-[80vh]">
                <h1 className="text-3xl md:text-6xl font-bold py-1 relative z-10">Andrew & Agnes</h1>
                <HomeCarousel additionalClasses="top-6 md:top-10 inset-x-0 z-0"/>
            </div>
        </div>
    )
};

export default Landing;