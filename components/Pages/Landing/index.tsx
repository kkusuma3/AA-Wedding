import Image from 'next/image';
import { BGLandingSrc, LogoSVGSrc } from "../../../shared/ImgSrc";
import Container from "../../Container";

interface Props {
    color: string;
}

const Landing = ({ color }: Props) => {
    return (
        <Container additionalClasses="md:pt-4 pt-0">
            <div className="flex flex-col text-center">
                <div className="mx-auto">
                    <Image src={LogoSVGSrc} alt="Wedding Logo" width="100" height="100" layout="fixed" priority />
                </div>    
                <h1 className="text-xl md:text-2xl uppercase py-1">The wedding Of</h1>
                <div className="relative h-[20vh] md:h-screen">
                    <h1 className="text-4xl md:text-6xl font-bold py-1 relative z-10">Andrew & Agnes</h1>
                    <div className="absolute top-6 md:top-10 inset-x-0 z-0 w-full">
                        <Image src={BGLandingSrc} alt="Cover Photo of Andrew & Agnes" width="1266" height="790" priority />
                    </div>
                </div>
            </div>
        </Container>
    )
};

export default Landing;