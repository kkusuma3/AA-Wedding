import { Link } from 'react-scroll';
import { LocationCardProps } from "./types";

const LocationCard = ({
    locationProp
}: LocationCardProps) => {
    const {
        image,
        title,
        date,
        time,
        location,
        address,
        city,
        buttonProp
    } = locationProp;
    return (
        <div className="flex flex-col justify-between text-center py-10 md:py-0">
            <img src={image.src} alt={image.alt} className="py-4"/>
            <span className="text-lg md:text-2xl font-bold pt-2">{title}</span>
            <div className="flex flex-col justify-between py-2">
                <span className="text-md md:text-lg">{date}</span>
                <span className="text-md md:text-lg">{time}</span>
            </div>
            <div className="flex flex-col justify-between py-4">
                <span className="text-md md:text-lg font-bold">{location}</span>
                <span className="text-md md:text-lg">{address}</span>
                <span className="text-md md:text-lg">{city}</span>
            </div>
            {
                buttonProp.target === '' && 
                (
                    <Link
                        activeClass="active"
                        to={buttonProp.href}
                        spy={true}
                        smooth={true}
                    >
                        <button className="rounded-3xl w-1/2 mx-auto p-2 md:p-3 text-white bg-purple-main">
                            {buttonProp.label}
                        </button>
                    </Link>
                )
            }
            {
                buttonProp.target === '_blank' && (
                        <a href={buttonProp.href} target={buttonProp.target}>
                            <button className="rounded-3xl w-1/2 mx-auto p-2 md:p-3 text-white bg-purple-main">
                                {buttonProp.label}
                            </button>
                        </a>
                )
            }
        </div>
    );
};

export default LocationCard;