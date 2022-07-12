import { useState, useCallback } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { DiamondSVGSrc } from "../../../shared/ImgSrc";
import Container from "../../Container";
import LogoHeading from "../../LogoHeading";
import { photos } from "./photos";

const GalleryComponent = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <Container>
            <div className="flex flex-col py-20">
                <LogoHeading imgSrc={DiamondSVGSrc} />
                <h2 className="text-3xl md:text-5xl text-center py-12 font-bold">Gallery</h2>
                <div>
                    <Gallery photos={photos} onClick={openLightbox} />
                    <ModalGateway>
                        {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photos.map(x => ({
                                    ...x,
                                    source: x.src,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                        ) : null}
                    </ModalGateway>
                </div>
            </div>
        </Container>
    )
};

export default GalleryComponent;
