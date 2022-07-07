import Gallery from "react-photo-gallery";
import { DiamondSVGSrc } from "../../../shared/ImgSrc";
import Container from "../../Container";
import LogoHeading from "../../LogoHeading";
import { photos } from "./photos";

const GalleryComponent = () => (
    <Container>
        <div className="flex flex-col py-20">
            <LogoHeading imgSrc={DiamondSVGSrc} />
            <h2 className="text-3xl md:text-5xl text-center py-12 font-bold">Gallery</h2>
            <Gallery photos={photos} />
        </div>
    </Container>
);

export default GalleryComponent;