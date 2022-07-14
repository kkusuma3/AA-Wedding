import { WhiteWaveImgSrc } from "../../../shared/ImgSrc";
import { User } from "../../../shared/types/User";
import Container from "../../Container";
import LocationCard from "../../LocationCard";
import { LocationData } from "./data";

const Location = ({ isOnline }: User) => (    
    <Container isFullWidth={false}>
        <img src={WhiteWaveImgSrc} alt="White Wave" className="w-full"/>
        <div id="matrimony" className="bg-white pb-10 md:pb-16">
            <div className="mx-auto w-10/12">
                <div className="flex flex-row flex-wrap justify-around">
                    {
                        !isOnline && LocationData.map(location => (
                            <LocationCard locationProp={location} />
                        ))
                    }
                    {
                        isOnline && <LocationCard locationProp={LocationData[0]} />
                    }
                </div>
            </div>
        </div>
    </Container>
);

export default Location;