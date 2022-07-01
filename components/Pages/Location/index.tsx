import Container from "../../Container";
import LocationCard from "../../LocationCard";
import { LocationData } from "./data";

const WhiteWaveImgSrc = '/img/Wave-white.svg';

const Location = () => (    
    <Container isFullWidth={false}>
        <img src={WhiteWaveImgSrc} alt="White Wave" className="w-full"/>
        <div className="bg-white pb-10 md:pb-16">
            <div className="mx-auto w-10/12">
                <div className="flex flex-row flex-wrap justify-around">
                    {
                        LocationData.map(location => (
                            <LocationCard locationProp={location} />
                        ))
                    }
                </div>
            </div>
        </div>
    </Container>
);

export default Location;